<template>
  <section :class="[$style.about]">
    <div :class="[$style.aboutInner]">
      <div :class="[$style.blockContent]">
        <div :class="[$style.iconHolder]">
          <icon-filled :kind="typeIcon" />
        </div>
        <section-title :name="title" />
        <div :class="[$style.subtitle]">
          {{ subtitle }}
        </div>
      </div>
    </div>
    <app-category-carousel
      :isShow="false"
      :slidesShow="3"
      :slidesScroll="3"
    />
  </section>
</template>

<script>
import IconFilled from '@/components/index/IconFilled.vue';
import PrimaryTitle from '@/components/index/PrimaryTitle.vue';
import AppCategoryCarousel from '@/components/index/AppCategoryCarousel.vue';

export default {
  name: "AppAbout",
  components: {
    "icon-filled": IconFilled,
    "section-title": PrimaryTitle,
    "app-category-carousel": AppCategoryCarousel,
  },
  data: function () {
    return {
      typeIcon: "fa-solid fa-question",
      title: "01__О нас",
      subtitle:
        "Наша компания предоставляет консультации по полному спектру юридических услуг",
    };
  },
};
</script>

<style module>
.about {
  background-color: #6630ff;
  text-align: right;
  padding: 1.3px 58.5px 39px 58.5px;
  margin-bottom: 130px;
}

.aboutInner {
  display: flex;
}

.blockContent {
  position: relative;
  margin-left: auto;
  max-width: calc(50% - 9.75px);
}

.iconHolder {
  position: absolute;
  top: 0;
  right: 0;
}

.subtitle {
  font-size: 35px;
  line-height: 1.2;
  color: #fff;
  font-weight: 600;
  margin-bottom: 58.5px;
}

@media all and (max-width: 767px) {
  .about {
    padding: 0;
    margin-bottom: 58.5px;
  }

  .blockContent {
    padding: 0 19.5px;
  }

  .subtitle {
    padding-left: 6.5px;
    padding-right: 6.5px;
  }
}

@media all and (min-width: 768px) and (max-width: 1023px) {
  .about {
    margin-bottom: 39px;
    padding-top: 0;
    padding-bottom: 26px;
  }

  .subtitle {
    padding-left: 26px;
    padding-right: 26px;
    margin-bottom: 39px;
  }
}

@media all and (max-width: 1023px) {
  .blockContent {
    margin: 0;
    max-width: 100%;
  }
}
</style>
