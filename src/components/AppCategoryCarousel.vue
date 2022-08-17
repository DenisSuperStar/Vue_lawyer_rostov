<template>
  <VueSlickCarousel v-bind="settings">
    <div
      :class="[$style.carouselSlide]"
      v-for="(item, index) in items"
      :key="index"
    >
      <div
        :class="[$style.filledCard, $style.itemCard, $style.showAction]"
        v-if="item.id === 1"
      >
        <img
          :src="item.avatar"
          :class="[$style.cardImage]"
          :alt="item.first_name"
          v-if="isShow"
        />
        <div :class="[$style.cardTitle, $style.cardTextColored]">
          {{ item.first_name }}
        </div>
        <div :class="[$style.cardSubtitle, $style.cardTextColored]">
          {{ item.last_name }}: {{ item.email }}
        </div>
      </div>
      <div :class="[$style.itemCard, $style.showAction]" v-else>
        <img
          :src="item.avatar"
          :class="[$style.cardImage]"
          :alt="item.first_name"
          v-if="isShow"
        />
        <div :class="[$style.cardTitle]">
          {{ item.first_name }}
        </div>
        <div :class="[$style.cardSubtitle]">
          {{ item.last_name }}: {{ item.email }}
        </div>
      </div>
    </div>
  </VueSlickCarousel>
</template>

<script>
import axios from "axios";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "AppCategoryCarousel",
  components: {
    VueSlickCarousel,
  },
  props: {
    isShow: {
      type: Boolean,
      required: true,
    },
    slidesShow: {
      type: Number,
      required: true,
    },
    slidesScroll: {
      type: Number,
      required: true,
    },
    startSlide: {
      type: Number,
      default: 0,
    },
  },
  data: function () {
    return {
      items: Array(12).fill({
        avatar: null,
        email: "",
        first_name: "",
        id: null,
        last_name: "",
      }),
      settings: {
        arrows: false,
        dots: false,
        touchMove: true,
        slidesToShow: this.slidesShow,
        slidesToscroll: this.slidesScroll,
        initialSlide: this.startSlide,
        infinite: true,
        responsive: [
          {
            breakpoint: 360,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
            },
          },
          {
            breakpoint: 375,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true
            }
          },
          {
            breakpoint: 390,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: true,
            },
          },
          {
            breakpoint: 820,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 1366,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
        ],
      },
    };
  },
  created() {
    axios.get("https://reqres.in/api/users?page=1&per_page=12").then((res) => {
      const { data } = res.data;
      this.items = data;
    });
  },
};
</script>

<style module>
.carouselSlide {
  padding: 0 13px;
}

.itemCard {
  padding: 13px 13px 32.5px 13px;
}

.filledCard {
  background-color: #f8eefd;
}

.showAction {
  cursor: pointer;
}

.cardTitle {
  font-size: 16px;
  line-height: 1.1;
  margin-bottom: 6.5px;
  text-transform: uppercase;
  color: #111;
  font-weight: 600;
}

.cardSubtitle {
  font-size: 16px;
  line-height: 1.1;
  color: #111;
  text-align: justify;
}

.cardTextColored {
  color: #6630ff;
}

.cardImage {
  display: block;
  width: 100%;
  margin-bottom: 39px;
}

@media all and (max-width: 767px) {
  .carouselSlide {
    padding: 0;
  }

  .itemCard {
    border: 2px solid #6630ff;
    padding: 19.5px 19.5px 32.5px;
  }

  .cardTitle {
    font-size: 18.85px;
    padding-left: 6.5px;
    padding-right: 6.5px;
    text-align: left;
  }

  .cardSubtitle {
    padding-left: 6.5px;
    padding-right: 6.5px;
    text-align: left;
  }
}

@media all and (min-width: 768px) {
  .itemCard {
    padding: 19.5px 26px 39px 26px;
  }

  .cardTitle {
    font-size: 18px;
    text-align: left;
  }

  .cardSubtitle {
    font-size: 14px;
  }
}
</style>

<style>
  @import "../common/styles/slick.css";

  @media all and (max-width: 1023px) {
    .slick-slider {
      height: auto;
    }
  }
</style>
