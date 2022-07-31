<template>
  <section :class="[$style.mainContent]">
    <VueSlickCarousel v-bind="settings">
      <div v-for="(i, index) in list" :class="[$style.slide]" :key="index">
        <div :class="[$style.slideContent]">
          <h3 :class="[$style.slideTitle]">{{ i.title }}</h3>
          <div :class="[$style.slideText]">
            {{ i.body }}
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </section>
</template>

<script>
import axios from "axios";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "CarouselSection",
  components: {
    VueSlickCarousel,
  },
  data: function () {
    return {
      list: Array(25).fill({
        title: "",
        body: "",
      }),
      settings: {
        arrows: false,
        dots: true,
        infinite: true,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 360,
            settings: {
              arrows: false,
              dots: false,
              touchMove: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              dots: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              arrows: false,
              dots: true,
            },
          },
          {
            breakpoint: 1366,
            settings: {
              arrows: true,
              dots: false,
              touchMove: true,
            },
          },
        ],
      },
    };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=26")
      .then((res) => {
        this.list = res.data;
      });
  },
};
</script>

<style module>
.mainContent {
  height: 100%;
}

.slide {
  display: flex !important;
  position: relative;
  height: 900px;
  align-items: center;
  padding: 50px;
}

.slideContent {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 30px;
}

.slideTitle {
  color: #fff;
  font-size: 54px;
  line-height: 1.1;
  margin-bottom: 13px;
  z-index: 10;
}

.slideText {
  color: #fff;
  font-size: 24px;
  line-height: 1.1;
  max-width: 50%;
}

@media all and (max-width: 360px) {
  .slide {
    padding: 0;
  }

  .slideContent {
    max-width: 100%;
    margin: 0;
    padding: 0 19.5px;
    text-align: left;
  }

  .slideTitle {
    font-size: 34px;
    padding-left: 6.5px;
    padding-right: 6.5px;
  }

  .slideText {
    font-size: 16px;
    padding-left: 6.5px;
    padding-right: 6.5px;
    max-width: 100%;
  }
}
</style>

<style>
.slick-slider {
  height: 900px;
}

.slick-dots {
  position: relative;
  bottom: 300px;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 30px;
}
</style>
