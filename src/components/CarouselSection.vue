<template>
  <section :class="[$style.mainContent]">
    <VueSlickCarousel :arrows="false" :dots="true" :speed="500">
      <div v-for="i in list" :class="[$style.slide]" :key="i.id">
        <div :class="[$style.slideContent]">
          <h3 :class="[$style.slideTitle]">{{ i.title }}</h3>
          <div :class="[$style.slideText]">
            {{ i.text }}
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: "CarouselSection",
  components: {
    VueSlickCarousel
  },
  data: function () {
    return {
      list: [
        {
          id: 1,
          title: "Мы можем мыслить глобально",
          text: "Мы решаем ваши проблемы, используя особый тип мышления",
        },
        {
          id: 2,
          title: "Баланс качества и роста",
          text: "В нашей компании используется самые современные инновационные подходы для решения сложных бизнес задач",
        },
        {
          id: 3,
          title: "Лучшие эксперты в своей области",
          text: "Мы сотрудничаем с клиентами, коллегами и заинтересованными лицами",
        },
      ],
    };
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
  line-height: 46px;
  z-index: 10;
  margin-bottom: 10px;
  max-width: 50%;
}

.slideText {
  color: #fff;
  font-size: 24px;
  line-height: 28px;
  max-width: 40%;
}
</style>

<style>
.slick-slider {
    height: 900px;
}

.slick-dots {
  position: relative;
  bottom: 300px;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  text-align: left;
  padding: 0 30px;
}
</style>