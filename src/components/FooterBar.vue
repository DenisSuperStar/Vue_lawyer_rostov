<template>
  <footer :class="[$style.footer]">
    <div :class="[$style.footerLeft]">
      <div :class="[$style.topContent]">
        <span :class="[$style.footerTitle]">Юрист-на-Дону</span>
        <span :class="[$style.footerSubtitle]"
          >Всегда на страже ваших интересов</span
        >
      </div>
      <div :class="[$style.columnContent]">
        <div :class="[$style.columnContentInner]">
          <span :class="[$style.footerTitle]">Связаться</span>

          <div :class="[$style.iconHolder]">
            <font-awesome-icon icon="fa-solid fa-phone" />
            <span :class="[$style.labelIcon]">+7 (951) 839-59-39</span>
          </div>
          <div :class="[$style.iconHolder]">
            <font-awesome-icon icon="fa-solid fa-clock" />
            <span :class="[$style.labelIcon]"
              >Ростов-на-Дону, ул.Максима Горького, 151</span
            >
          </div>
          <div :class="[$style.iconHolder]">
            <font-awesome-icon icon="fa-solid fa-house-chimney" />
            <span :class="[$style.labelIcon]">Пн-Вс: 10.00 - 20.00</span>
          </div>
          <div :class="[$style.iconHolder]">
            <font-awesome-icon icon="fa-solid fa-envelope" />
            <span :class="[$style.labelIcon]">sergeynazarov161@yandex.ru</span>
          </div>
        </div>
        <div :class="[$style.columnContentInner]">
          <span :class="[$style.footerTitle]">Подписаться</span>
          <div :class="[$style.socials]">
            <div :class="[$style.social]">
              <a href="#" :class="[$style.socialLink]">
                <font-awesome-icon icon="fa-brands fa-twitter" />
              </a>
            </div>
            <div :class="[$style.social]">
              <a href="#" :class="[$style.socialLink]">
                <font-awesome-icon icon="fa-brands fa-vk" />
              </a>
            </div>
            <div :class="[$style.social]">
              <a href="#" :class="[$style.socialLink]">
                <font-awesome-icon icon="fa-brands fa-linkedin-in" />
              </a>
            </div>
            <div :class="[$style.social]">
              <a href="#" :class="[$style.socialLink]">
                <font-awesome-icon icon="fa-brands fa-instagram" />
              </a>
            </div>
          </div>
        </div>
        <div :class="[$style.columnContentInner]">
          <span :class="[$style.footerTitle, $style.textUppercase]"
            >Бесплатная консультация</span
          >
          <div :class="[$style.widget]">
            <span :class="[$style.iconField]">
              <font-awesome-icon
                :class="[$style.widgetFilledIcon]"
                icon="fa-solid fa-phone"
              />
            </span>
            <span :class="[$style.primaryField]"> +7 (951) 839-59-39 </span>
          </div>
        </div>
      </div>
    </div>
    <div :class="[$style.footerRight]">
      <div :class="[$style.columnInnerContent]">
        <div :class="[$style.footerTitle, $style.titleOffset]">Услуги</div>
        <VueSlickCarousel v-bind="services">
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
                </div>
                <div :class="[$style.sideRight]">
                  <div :class="[$style.contentInfo]">{{ service.price }}</div>
                </div>
              </div>

              <a href="#" :class="[$style.pricingButton]">Выбрать</a>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </footer>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import axios from "axios";

export default {
  name: "FooterBar",
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
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 1366,
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
.footer {
  width: 100%;
  display: flex;
  padding: 97.5px 45.5px 26px 39px;
  background-color: #6630ff;
}

.footerLeft {
  display: flex;
  flex-wrap: wrap;
}

.footerLeft::before {
  display: block;
  content: "";
  width: 60px;
  height: 60px;
  background-color: #fff;
}

.topContent {
  padding-left: 13px;
}

.footerRight {
  display: flex;
  flex-direction: column;
}

.columnInnerContent {
  max-width: 820px;
  margin: 0 auto;
}

.widget {
  display: flex;
}

.iconField {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: #fff;
}

.widgetFilledIcon {
  font-size: 26px;
  color: #6630ff;
}

.primaryField {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 168px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  color: #fff;
}

.columnContent {
  width: 100%;
}

.columnContentInner {
  padding-top: 19.5px;
}

.footerTitle {
  display: block;
  font-size: 16px;
  line-height: 1.1;
  color: #fff;
  padding-bottom: 13px;
}

.textUppercase {
  text-transform: uppercase;
}

.iconHolder {
  padding-bottom: 6.5px;
  color: #fff;
}

.iconHolder:last-child {
  padding-bottom: 0;
}

.labelIcon {
  padding-left: 6.5px;
}

.socials {
  display: flex;
  grid-gap: 13px;
}

.social {
  background-color: #fff;
  padding: 6.5px;
}

.socialLink {
  color: #6630ff;
}

.titleOffset {
  padding-left: 13px;
  padding-right: 13px;
}

.footerSubtitle {
  display: block;
  font-size: 14px;
  line-height: 1.1;
  color: #fff;
  padding-bottom: 13px;
}

.sideLeft {
  flex: 7;
  padding-right: 6.5px;
}

.sideRight {
  flex: 3;
  padding-left: 6.5px;
}

.priceListItem {
  padding: 0 13px;
}

.infoCard {
  padding: 13px;
  border: 2px solid #fff;
  cursor: pointer;
}

.infoHeader {
  position: relative;
  display: flex;
}

.infoTitle {
  font-size: 16px;
  line-height: 1.1;
  color: #fff;
  padding-bottom: 19.5px;
  max-width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.contentInfo {
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

.pricingButton::after {
  content: none !important;
}

.socialTitle {
  font-size: 18px;
  line-height: 1.2;
  color: #111;
  margin-bottom: 32.5px;
}

.socialIcons {
  display: flex;
  align-items: center;
  grid-gap: 26px;
}

.socialItem {
  color: #00b7ff;
  text-decoration: none;
}

.socialIcon {
  display: block;
  max-width: 100%;
}

.serviceList {
  padding: 0;
  list-style: none;
}

.serviceItem:not(:last-child) {
  margin-bottom: 13px;
}

.itemLink {
  display: block;
  font-size: 14px;
  line-height: 1.2;
  color: #6630ff;
  margin-bottom: 2px;
  text-decoration: none;
}

.itemUnderline {
  width: 100%;
  height: 1px;
  background-color: #6630ff;
}

@media all and (max-width: 360px) {
  .footer {
    display: block;
  }

   .topContent {
    padding-left: 6.5px;
  }

  .footerRight {
    display: block;
  }

  .columnInnerContent {
    max-width: 360px;
    margin: 0;
  }

  .footerTitle {
    padding-top: 13px;
    padding-left: 0;
    padding-right: 0;
  }

  .priceListItem {
    padding: 0;
  }
}
</style>
