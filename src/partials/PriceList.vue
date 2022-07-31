<template>
  <div :class="[$style.priceListContainer]">
    <div :class="[$style.priceListFlowAround]">
      <div :class="[$style.filledIconReverse]">
        <font-awesome-icon icon="fa-solid fa-briefcase" />
      </div>
      <h3 :class="[$style.priceListTitle]">02__Прайс лист</h3>
      <VueSlickCarousel v-bind="services" style="height: 100%;">
        <div
          :class="[$style.priceListItem]"
          v-for="(service, index) in serviceList"
          :key="index"
        >
          <div :class="[$style.infoCard]">
            <div :class="[$style.infoHeader]">
              <div :class="[$style.sideLeft]">
                <div :class="[$style.infoTitle]">
                  {{ service.title }}
                </div>
                <div :class="[$style.infoSubtitle]">
                  {{ service.subtitle }}
                </div>
              </div>
              <div :class="[$style.sideRight]">
                <div :class="[$style.contentInfo]">{{ service.price }}</div>
              </div>
            </div>

            <ul :class="[$style.cardFeatures]">
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
            <a href="#" :class="[$style.pricingButton]">Выбрать</a>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "PriceList",
  components: {
    VueSlickCarousel,
  },
  data: function () {
    return {
      priceList: [],
      serviceList: Array(26).fill({
        title: "",
        subtitle: "",
        price: null,
      }),
      services: {
        "arrows": false,
        "dots": false,
        "touchMove": true,
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "infinite": true,
        "initialSlide": 0,
        "responsive": [
          {
            "breakpoint": 360,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1,
            },
          },
          {
            "breakpoint": 768,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2,
            },
          },
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2,
            },
          },
          {
            "breakpoint": 1366,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2,
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
        this.priceList = data;
      });
  },
  watch: {
    priceList: function (serviceList) {
      this.serviceList = serviceList.map((item) => {
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
.priceListContainer {
  background-color: #6630ff;
}

.priceListFlowAround {
  padding: 0 13px;
}

.filledIconReverse {
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #6630ff;
  font-size: 60px;
  line-height: 1.1;
  padding: 6.5px 13px;
}

.priceListTitle {
  font-size: 16px;
  line-height: 1.1;
  text-transform: uppercase;
  color: #fff;
  padding: 130px 13px 26px;
}

.priceListItem {
  padding: 0 13px;
}

.infoCard {
  padding: 13px;
  border: 2px solid #fff;
  background-color: #6630ff;
  cursor: pointer;
}

.infoHeader {
  position: relative;
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

.infoTitle {
  font-size: 16px;
  line-height: 1.1;
  color: #fff;
  padding-bottom: 6.5px;
}

.infoSubtitle {
  font-size: 12px;
  line-height: 1.1;
  color: #fff;
  padding-bottom: 19.5px;
}

.contentInfo {
  background-color: #fff;
  color: #6630ff;
  font-size: 16px;
  line-height: 1.1;
  padding: 6.5px 13px;
  text-align: center;
}

.cardFeatures {
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

.featuresIcon::before {
  content: "";
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

.pricingButton::after {
  content: none !important;
}

@media all and (max-width: 360px) {
  .priceListContainer {
    margin-top: 58.5px;
    padding: 0;
  }

  .priceListFlowAround {
    padding: 0 1.3px;
  }

  .priceListItem {
    padding: 0;
  }

  .infoCard {
    padding: 19.5px;
  }

  .cardFetures {
    padding-left: 6.5px;
    padding-right: 6.5px;
  }
}

@media all and (max-width: 768px) {
  .priceListFlowAround {
    position: relative;
  }

  .filledIconReverse {
    position: absolute;
    top: 0;
    right: 0;
    border-top: 2px solid #6630ff;
    border-right: 2px solid #6630ff;
  }

  .priceListTitle {
    padding-top: 260px;
  }
}

@media all and (min-width: 768px) {
  .priceListContainer {
    margin-top: 130px;
    padding-bottom: 65px;
  }
}
</style>

<style>
.slick-slider {
  height: auto;
}

.slick-dots li {
  width: 10px;
  height: 10px;
  background-color: #f8eefd;
  cursor: pointer;
}

.slick-dots li button {
  width: 10px;
  height: 10px;
}

.slick-dots li button::before {
  content: "";
  width: 10px;
  height: 10px;
}

.slick-dots .slick-active {
  background-color: #6630ff;
}
</style>
