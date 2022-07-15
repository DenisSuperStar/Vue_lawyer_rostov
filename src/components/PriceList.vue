<template>
    <fragment>
        <div :class="[$style.pricesContainer]">
            <div :class="[$style.pricesTitle]">02__Прайс лист</div>
            <VueSlickCarousel :arrows="false" :dots="false" :touchMove="true" :slidesToShow="3" :slidesToScroll="3"
                :speed="500">
                <div :class="[$style.priceItem]" v-for="price in priceList" :key="price.id">
                    <div :class="[$style.cardItem]">
                        <div :class="[$style.cardHeader]">
                            <div :class="[$style.cardTitle]">{{ price.title }}</div>
                            <div :class="[$style.cardSubtitle]">{{ price.subtitle }}</div>
                            <div :class="[$style.cardPrice]">{{ price.price }}</div>
                        </div>
                        <div :class="[$style.cardBody]">
                            <ul :class="[$style.cardFeatures]">
                                <li :class="[$style.featuresItem]">{{ price.text }}</li>
                            </ul>
                        </div>
                        <a href="#" :class="[$style.pricingButton]">Выбрать</a>
                    </div>
                </div>
            </VueSlickCarousel>
        </div>
    </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
    name: 'PriceList',
    components: {
        Fragment,
        VueSlickCarousel
    },
    data: function () {
        return {
            priceList: [
                {
                    id: 1,
                    title: 'Устная консультация для граждан',
                    subtitle: 'Выбор пользователей',
                    price: 'Бесплатно',
                    text: 'По телефону'
                },
                {
                    id: 2,
                    title: 'Устная консультация для граждан с изучением документов',
                    subtitle: 'Оптимальный выбор',
                    price: '1000руб',
                    text: 'Стоимость расчитывается из проведенной консультации'
                },
                {
                    id: 3,
                    title: 'Письменная консультация для граждан',
                    subtitle: 'Оптимальный выбор',
                    price: '2000руб',
                    text: 'Стоимость за один документ'
                },
                {
                    id: 4,
                    title: 'Составление претензии',
                    subtitle: 'Выбор пользователей',
                    price: '1000руб',
                    text: 'Стоимость за один документ'
                },
                {
                    id: 5,
                    title: 'Составление гражданско-правовых, трудовых договоров',
                    subtitle: 'Выбор пользователей',
                    price: '2000руб',
                    text: 'Срок исполнения от 1 до 3 дней'
                },
                {
                    id: 6,
                    title: 'Составление сложных (смешанные формы), нестандартных договоров',
                    subtitle: 'Выбор пользователей',
                    price: '3000руб',
                    text: 'Срок исполнения от 3 до 5 дней'
                },
                {
                    id: 7,
                    title: 'Составление процессуальных документов (иск, отзыв на иск и т.п.)',
                    subtitle: 'Выбор пользователей',
                    price: '3000руб',
                    text: 'Стоимость за один документ'
                }
            ]
        }
    }
}
</script>

<style module>
.pricesContainer {
    max-width: 1240px;
    margin: 0 auto;
    padding-top: 60px;
}

.pricesTitle {
    font-size: 16px;
    line-height: 1;
    text-transform: uppercase;
    color: #6630FF;
    padding: 0 13px 6.5px;
}

.priceList {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
}

.priceItem {
    padding: 0 13px;
}

.cardItem {
    padding: 13px;
    background-color: #F8EEFD;
    cursor: pointer;
}

.cardHeader {
    position: relative;
}

.cardTitle {
    max-width: 60%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 18px;
    line-height: 1;
    color: #111;
}


.cardSubtitle {
    font-size: 12px;
    line-height: 1;
    color: #6630FF;
    padding-bottom: 19.5px;
}

.cardPrice {
    position: absolute;
    top: 0;
    right: 0;
    padding: 6.5px 13px;
    color: #fff;
    font-size: 18px;
    line-height: 1;
    background: #6630FF;
}

.cardBody {
    max-width: 80%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.cardFeatures {
    padding-bottom: 26px;
}

.featuresItem {
    font-size: 16px;
    line-height: 1;
}

.pricingButton {
    width: 100%;
    display: block;
    background-color: #6630FF;
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    line-height: 1;
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
    background-color: #F8EEFD;
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
   background-color: #6630FF;
}
</style>