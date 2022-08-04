<template>
  <VueSlickCarousel v-bind="settings">
    <div
      :class="[$style.catalogSlide]"
      v-for="(item, index) in services"
      :key="index"
    >
      <div :class="[$style.infoCard]">
        <div :class="[$style.cardHeader]">
          <div :class="[$style.sideLeft]">
            <div :class="[$style.cardTitle]">
                {{item.title}}
            </div>
            <div :class="[$style.cardSubtitle]">
                {{item.subtitle}}
            </div>
          </div>
          <div :class="[$style.sideRight]">
            <div :class="[$style.cardTooltip]">{{item.price}}</div>
          </div>
        </div>
        <ul :class="[$style.cardFetures]">
          <li :class="[$style.featuresItem]">
            <div :class="[$style.featuresCheckbox]">
              <input
                type="checkbox"
                :class="[$style.defaultCheckbox]"
                checked
              />
              <span :class="[$style.fakerCheckbox]"></span>
            </div>
            <span :class="[$style.featuresText]">По телефону</span>
          </li>
          <li :class="[$style.featuresItem]">
            <div :class="[$style.featuresCheckbox]">
              <input
                type="checkbox"
                :class="[$style.defaultCheckbox]"
                checked
              />
              <span :class="[$style.fakerCheckbox]"></span>
            </div>
            <span :class="[$style.featuresText]"
              >Вы оставляете заявку на сайте</span
            >
          </li>
          <li :class="[$style.featuresItem]">
            <div :class="[$style.featuresCheckbox]">
              <input
                type="checkbox"
                :class="[$style.defaultCheckbox]"
                checked
              />
              <span :class="[$style.fakerCheckbox]"></span>
            </div>
            <span :class="[$style.featuresText]"
              >Менеджер связывается с вами для обсуждения деталей</span
            >
          </li>
        </ul>
        <a href="#" :class="[$style.chooseButton]">Выбрать</a>
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
  name: "AppInfoCarousel",
  components: {
    VueSlickCarousel,
  },
  data: function () {
    return {
      prices: [],
      services: Array(25).fill({
        title: "",
        subtitle: "",
        price: null,
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
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
            },
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
            breakpoint: 1024,
            settings: {
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
        this.prices = data;
      });
  },
  watch: {
    prices: function (items) {
      this.services = items.map((item) => {
        return {
          id: item.id,
          title: item.name,
          subtitle: item.body,
          price: item.postId * 1000,
        };
      });
    },
  },
};
</script>

<style module>
.catalogSlide {
  padding: 0 13px;
}

.infoCard {
  padding: 13px;
  border: 2px solid #fff;
  background-color: #6630ff;
  cursor: pointer;
}

.cardHeader {
  display: flex;
}

.sideLeft {
  flex: 7;
  padding-right: 6.5px;
}

.sideRight {
  flex: 3;
  padding-left: 6.5px;
}

.cardTitle {
  font-size: 16px;
  line-height: 1.1;
  color: #fff;
  padding-bottom: 6.5px;
}

.cardSubtitle {
  font-size: 12px;
  line-height: 1.1;
  color: #fff;
  padding-bottom: 19.5px;
}

.cardTooltip {
  background-color: #fff;
  color: #6630ff;
  font-size: 16px;
  line-height: 1.1;
  padding: 6.5px 13px;
  text-align: center;
}

.cardFeatures {
  display: block;
  list-style: none;
  padding-bottom: 26px;
}

.featuresItem {
  display: flex;
  grid-gap: 6.5px;
  font-size: 16px;
  line-height: 1.1;
  padding-bottom: 6.5px;
}

.featuresCheckbox {
  position: relative;
  height: 15px;
}

.defaultCheckbox {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  height: 100%;
  cursor: pointer;
}

.fakerCheckbox {
  position: relative;
  display: block;
  width: 15px;
  height: 100%;
  background-color: #fff;
  pointer-events: none;
}

.defaultCheckbox:checked + .fakerCheckbox::before {
  display: inline-block;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  border-top: 2px solid #6630ff;
  border-right: 2px solid #6630ff;
  width: 10px;
  height: 5px;
  transform: translateX(13px) translateY(4px) rotate(135deg);
  transform-origin: top left;
}

.featuresText {
  color: #fff;
  font-size: 16px;
  line-height: 1.1;
}

.chooseButton {
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

@media all and (max-width: 360px) {
  .catalogSlide {
    padding: 0;
  }

  .infoCard {
    padding: 19.5px;
  }

  .cardFeatures {
    padding-left: 6.5px;
    padding-right: 6.5px;
  }
}
</style>

<style>
.slick-slider {
  height: auto;
}
</style>
