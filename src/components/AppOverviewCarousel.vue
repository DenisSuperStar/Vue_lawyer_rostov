<template>
  <VueSlickCarousel v-bind="settings">
    <div
      :class="[$style.overviewItem]"
      v-for="(price, index) in prices"
      :key="index"
    >
      <div :class="[$style.overviewCard]">
        <div :class="[$style.cardBody]">
          <div :class="[$style.sideLeft]">
            <div :class="[$style.title]">{{ price.name }}</div>
          </div>
          <div :class="[$style.sideRight]">
            <div :class="[$style.content]">{{price.price }}</div>
          </div>
        </div>
        <a href="#" :class="[$style.pricingButton]">Выбрать</a>
      </div>
    </div>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import axios from "axios";

export default {
  name: "AppOverviewCarousel",
  components: {
    VueSlickCarousel,
  },
  data: function () {
    return {
      items: [],
      prices: Array(26).fill({
        id: null,
        name: "",
        body: ""
      }),
      settings: {
        arrows: false,
        dots: false,
        touchMove: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 360,
            settings: {
              arrows: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      },
    };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/comments?_limit=26")
      .then((res) => {
        const { data } = res;
        this.items = data;
      });
  },
  watch: {
    items: function(value) {
      this.prices = value.map(item => {
        return {
          id: item.id,
          name: item.name,
          price: item.id * 100
        }
      });
    }
  }
};
</script>

<style module>
.overviewItem {
  padding: 0 13px;
}

.overviewCard {
  padding: 13px;
  border: 2px solid #fff;
  cursor: pointer;
}

.cardBody {
  position: relative;
}

.sideLeft {
  padding-right: 6.5px;
}

.sideRight {
  padding-left: 6.5px;
}

.title {
  font-size: 16px;
  line-height: 1.1;
  color: #fff;
  padding-bottom: 19.5px;
  max-width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.content {
  background-color: #fff;
  color: #6630ff;
  font-size: 16px;
  line-height: 1.1;
  padding: 6.5px 13px;
}

.pricingButton {
  display: block;
  background-color: #fff;
  color: #6630ff;
  width: 100%;
  text-decoration: none;
  font-size: 16px;
  line-height: 1.1;
  text-align: center;
  padding: 13px 26px;
}

@media all and (min-width: 1024px) {
  .cardBody {
    display: flex;
  }

  .sideLeft {
    flex: 7;
  }

  .sideRight {
    flex: 3;
  }
}
</style>

<style>
  @import "../common/styles/slick.css";
</style>
