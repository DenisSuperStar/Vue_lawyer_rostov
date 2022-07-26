<template>
<div :class="[$style.priceListContainer]">
    <div :class="[$style.priceListCentered]">
      <div :class="[$style.filledIconReverse]">
        <font-awesome-icon icon="fa-solid fa-briefcase" />
      </div>
      <h3 :class="[$style.priceListTitle]">02__Прайс лист</h3>
      <VueSlickCarousel
        :arrows="false"
        :dots="false"
        :touchMove="true"
        :slidesToShow="3"
        :slidesToScroll="3"
        :speed="500"
      >
        <div
          :class="[$style.priceListItem]"
          v-for="price in priceList"
          :key="price.id"
        >
          <div :class="$style.infoCard">
            <div :class="[$style.infoHeader]">
              <div :class="[$style.columnLeft]">
                <div :class="[$style.infoTitle]">{{ price.title }}</div>
                <div :class="[$style.infoSubtitle]">{{ price.subtitle }}</div>
              </div>
              <div :class="[$style.columnRight]">
                <div :class="[$style.contentInfo]">{{ price.price }}</div>
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
                <div :class="[$style.featuresText]">По телефону</div>
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
      priceList: [
        {
          id: 1,
          title: "Устная консультация для граждан",
          subtitle: "Выбор пользователей",
          price: "Бесплатно",
          text: "По телефону",
        },
        {
          id: 2,
          title: "Устная консультация для граждан с изучением документов",
          subtitle: "Оптимальный выбор",
          price: "1000руб",
          text: "Стоимость расчитывается из проведенной консультации",
        },
        {
          id: 3,
          title: "Письменная консультация для граждан",
          subtitle: "Оптимальный выбор",
          price: "2000руб",
          text: "Стоимость за один документ",
        },
        {
          id: 4,
          title: "Составление претензии",
          subtitle: "Выбор пользователей",
          price: "1000руб",
          text: "Стоимость за один документ",
        },
        {
          id: 5,
          title: "Составление гражданско-правовых, трудовых договоров",
          subtitle: "Выбор пользователей",
          price: "2000руб",
          text: "Срок исполнения от 1 до 3 дней",
        },
        {
          id: 6,
          title:
            "Составление сложных (смешанные формы), нестандартных договоров",
          subtitle: "Выбор пользователей",
          price: "3000руб",
          text: "Срок исполнения от 3 до 5 дней",
        },
        {
          id: 7,
          title:
            "Составление процессуальных документов (иск, отзыв на иск и т.п.)",
          subtitle: "Выбор пользователей",
          price: "3000руб",
          text: "Стоимость за один документ",
        },
      ],
    };
  },
};
</script>

<style module>
.priceListContainer {
    background-color: #6630ff;
}

.priceListCentered {
    max-width: 1240px;
    margin: 0 auto;
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
  display: flex;
  position: relative;
}

.columnLeft {
  flex: 7;
}

.columnRight {
  flex: 3;
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
  color: #6630ff;;
  padding-bottom: 19.5px;
}

.contentInfo {
    background-color: #fff;
    color: #6630ff;
    font-size: 16px;
    line-height: 1.1;
    padding: 6.5px 13px;
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
  background-color:#fff;
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
