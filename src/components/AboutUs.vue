<template>
    <fragment>
        <div :class="[$style.sectionContent]">
            <h3 :class="[$style.sectionHeadline]">01__О нас</h3>
            <div :class="[$style.sectionSubline]">
                <span :class="[$style.sublineInner]">Наша компания предоставляет консультации по полному спектру
                    юридических услуг</span>
            </div>
            <ul :class="[$style.contentInner]">
                <li :class="[$style.contentTextBox]" v-for="item in items" :key="item.id">
                    <div :class="[$style.contentTitle]">{{ item.title }}</div>
                    <div :class="[$style.contentText]">{{ item.text }}</div>
                </li>
            </ul>
        </div>
        <VueSlickCarousel :arrows="false" :dots="false" :touchMove="true" :slidesToShow="2" :slidesToScroll="2"
            :speed="500">
            <div :class="[$style.cardsectionSlide]">
                <div :class="[$style.cardsection, $style.cardsectionFirst]">
                    <div :class="[$style.cardHeadersection]">
                        <img src="../../public/assets/grid_1.svg" :class="[$style.cardAttacment]" alt="Развод" />
                    </div>

                    <div :class="[$style.cardBodyTitle]">Споры при разводе</div>
                    <div :class="[$style.cardBodySubtitle]">Помощь в решении конфликтов при разводе родителей</div>

                </div>
            </div>
            <div :class="[$style.cardsectionSlide]">
                <div :class="[$style.cardsection]">
                    <div :class="[$style.cardHeadersection]">
                        <img src="../../public/assets/grid_2.svg" :class="[$style.cardAttacment]" alt="Алименты" />
                    </div>

                    <div :class="[$style.cardBodyTitle]">Алиментные споры</div>
                    <div :class="[$style.cardBodySubtitle]">Урегулирование споров по взысканию алиментов</div>

                </div>
            </div>
            <div :class="[$style.cardsectionSlide]">
                <div :class="[$style.cardsection]">
                    <div :class="[$style.cardHeadersection]">
                        <img src="../../public/assets/grid_3.svg" :class="[$style.cardAttacment]" alt="Имущество" />
                    </div>

                    <div :class="[$style.cardBodyTitle]">Раздел имущества</div>
                    <div :class="[$style.cardBodySubtitle]">Защита имущественных интересов клиента при разводе</div>

                </div>
            </div>
            <div :class="[$style.cardsectionSlide]">
                <div :class="[$style.cardsection]">
                    <div :class="[$style.cardHeadersection]">
                        <img src="../../public/assets/grid_4.svg" :class="[$style.cardAttacment]" alt="Усыновление" />
                    </div>

                    <div :class="[$style.cardBodyTitle]">Вопросы усыновления</div>
                    <div :class="[$style.cardBodySubtitle]">Консультации при усыновлении детей</div>

                </div>
            </div>
        </VueSlickCarousel>
    </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
    name: "AboutUs",
    components: {
        Fragment,
        VueSlickCarousel,
    },
    data: function () {
        return {
            items: [
                {
                    id: 1,
                    title: 'Деятельность',
                    text: 'Оперативное и профессиональное решение проблем по гражданским, семейным и жилищным трудовым делам.'
                },
                {
                    id: 2,
                    title: 'Цели',
                    text: 'Своевременная помощь в решении ваших юридических проблем. Этапы помощи включают экспертизу, оценку и подготовку к консультации самого клиента. Выполняем поставленные задачи в срок в пределах вашего бюджета. Более 5 лет оказываем правовую помощь гражданам и организациям.'
                }
            ]
        }
    }
}
</script>

<style module>
.sectionContent {
    background-color: #6630ff;
    text-align: right;
    padding: 20px 60px 40px 60px;
}

.sectionHeadline {
    font-size: 16px;
    text-transform: uppercase;
    color: #fff;
    padding-bottom: 6.5px;
}

.sectionSubline {
    font-size: 27px;
    line-height: 1;
    color: #fff;
    padding-bottom: 39px;
}

.sublineInner {
    display: inline-block;
    max-width: 45%;
    margin: 0 auto;
}

.contentInner {
    display: flex;
    list-style-type: none;
    grid-gap: 19.5px;
}

.contentTextBox {
    width: 50%;
    display: block;
    background-color: #F8EEFD;
    padding: 13px;
    text-align: left;
}

.contentTitle {
    color: #111;
    font-size: 27px;
    line-height: 1.2;
    margin-bottom: 6.5px;
}

.contentText {
    color: #111;
    font-size: 16px;
    line-height: 1;
    text-align: justify;
}

.cardsectionSlide {
    padding: 0 13px;
}

.cardsection {
    padding: 13px 13px 32.5px 13px;
}

.cardsectionFirst {
    background-color: #F8EEFD;
}

.cardHeadersection {
    margin-bottom: 39px;
}

.cardBodyTitle {
    font-size: 13px;
    line-height: 1.8;
    margin-bottom: 6.5px;
    text-transform: uppercase;
    color: #111;
}

.cardBodySubtitle {
    font-size: 13px;
    line-height: 1.8;
    color: #111;
}

.cardAttacment {
    display: block;
    width: 100%;
}
</style>