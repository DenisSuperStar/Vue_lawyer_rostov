<template>
  <fragment>
    <div :class="[$style.sectionContent]">
      <div :class="[$style.sectionInner]">
        <div :class="[$style.sectionInfo]">
          <span :class="[$style.filledIcon]">
            <font-awesome-icon
              :class="[$style.containerFillIcon]"
              icon="fa-solid fa-question"
            />
          </span>
          <h3 :class="[$style.sectionHeadline]">01__О нас</h3>
          <div :class="[$style.sectionSubline]">
            Наша компания предоставляет консультации по полному спектру
            юридических услуг
          </div>
        </div>
      </div>
      <VueSlickCarousel
        v-bind="settings1"
      >
        <div
          :class="[$style.carouselSlide]"
          v-for="(post, index) in posts"
          :key="index"
        >
          <div
            :class="[$style.filledCard, $style.itemCard, $style.showAction]"
            v-if="post.id === 1"
          >
            <div :class="[$style.fillCardTitle]">{{ post.title }}</div>
            <div :class="[$style.fillCardSubtitle]">{{ post.body }}</div>
          </div>
          <div :class="[$style.itemCard, $style.showAction]" v-else>
            <div :class="[$style.cardTitle]">{{ post.title }}</div>
            <div :class="[$style.cardSubtitle]">{{ post.body }}</div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
    <VueSlickCarousel
      v-bind="settings2"
    >
      <div
        :class="[$style.carouselSlide]"
        v-for="(solution, index) in solutions"
        :key="index"
      >
        <div
          :class="[$style.borderedCard, $style.itemCard, $style.showAction]"
          v-if="solution.id === 1"
        >
          <img
            :src="solution.avatar"
            :class="[$style.cardImage]"
            :alt="solution.first_name"
          />
          <div :class="[$style.fillCardTitle]">{{ solution.first_name }}</div>
          <div :class="[$style.fillCardSubtitle]">
            {{ solution.last_name }}: {{ solution.email }}
          </div>
        </div>
        <div :class="[$style.itemCard, $style.showAction]" v-else>
          <img
            :src="solution.avatar"
            :class="[$style.cardImage]"
            :alt="solution.first_name"
          />
          <div :class="[$style.cardTitle]">{{ solution.first_name }}</div>
          <div :class="[$style.cardSubtitle]">
            {{ solution.last_name }}: {{ solution.email }}
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import axios from "axios";

export default {
  name: "AboutUs",
  components: {
    Fragment,
    VueSlickCarousel,
  },
  data: function () {
    return {
      posts: Array(25).fill({
        title: "",
        body: "",
      }),
      solutions: Array(12).fill({
        avatar: null,
        email: "",
        first_name: "",
        id: null,
        last_name: "",
      }),
      settings1: {
        "dots": false,
        "arrows": false,
        "touchMove": true,
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "initialSlide": 0,
        "infinite": true,
        "responsive": [
          {
            "breakpoint": 366,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1
            }
          },
          {
            "breakpoint": 768,
            "settings": {
              "slidesToShow": 2,
              "slidesToscroll": 2
            }
          },
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2
            }
          },
          {
            "breakpoint": 1366,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2
            }
          },
        ]
      },
      settings2: {
        "arrows": false,
        "dots": false,
        "touchMove": true,
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "initialSlide": 0,
        "infinite": true,
        "responsive": [
          {
            "breakpoint": 360,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1
            }
          },
          {
            "breakpoint": 768,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2
            }
          },
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2
            }
          },
          {
            "breakpoint": 1366,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2
            }
          }
        ]
      }
    };
  },
  created() {
    axios.get("https://reqres.in/api/users?page=1&per_page=12").then((res) => {
      const { data } = res.data;
      this.solutions = data;
    });

    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=25")
      .then((res) => {
        const { data } = res;
        this.posts = data;
      });
  },
};
</script>

<style module>
.sectionContent {
  background-color: #6630ff;
  text-align: right;
  padding: 1.3px 58.5px 39px 58.5px;
  margin-bottom: calc(58.5px - 13px);
}

.sectionInner {
  display: flex;
}

.sectionInfo {
  position: relative;
  max-width: calc(50% - 9.75px);
  margin-left: auto;
}

.filledIcon {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  background-color: #fff;
  color: #6630ff;
  font-size: 60px;
}

.sectionHeadline {
  font-size: 16px;
  line-height: 1.1;
  text-transform: uppercase;
  color: #fff;
  padding: 260px 0 6.5px;
}

.sectionSubline {
  font-size: 35px;
  line-height: 1.2;
  color: #fff;
  padding-bottom: 39px;
}

.contentTextBox {
  display: block;
  background-color: #f8eefd;
  padding: 13px;
  max-width: 50%;
  text-align: left;
  margin: 0 9.75px;
}

.contentTitle {
  color: #111;
  font-size: 35px;
  line-height: 1.2;
  margin-bottom: 6.5px;
}

.contentText {
  color: #111;
  font-size: 16px;
  line-height: 1.2;
  text-align: justify;
}

.carouselSlide {
  padding: 0 13px;
}

.filledCard {
  background-color: #fff;
}

.borderedCard {
  background: #fff;
  border: 2px solid #6630ff;
}

.showAction {
  cursor: pointer;
}

.itemCard {
  padding: 13px 13px 32.5px 13px;
}

.fillCardTitle {
  font-size: 16px;
  line-height: 1.1;
  margin-bottom: 6.5px;
  text-transform: uppercase;
  color: #6630ff;
}

.cardTitle {
  font-size: 16px;
  line-height: 1.1;
  margin-bottom: 6.5px;
  text-transform: uppercase;
  color: #111;
}

.fillCardSubtitle {
  font-size: 16px;
  line-height: 1.1;
  color: #6630ff;
  text-align: justify;
}

.cardSubtitle {
  font-size: 16px;
  line-height: 1.1;
  color: #111;
  text-align: justify;
}

.cardImage {
  display: block;
  width: 100%;
  margin-bottom: 39px;
}

@media all and (max-width: 360px) {
  .sectionContent {
    padding: 0;
  }

  .sectionInfo {
    max-width: 100%;
    margin: 0;
    padding: 0 26px;
  }
}
</style>
