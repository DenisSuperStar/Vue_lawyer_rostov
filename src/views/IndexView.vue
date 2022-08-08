<template>
  <div :class="[$style.app]">
    <section :class="[$style.backgroundImgContainer]">
      <app-header />
      <section :class="[$style.carouselWrapper]">
        <app-carousel :isDots="true" />
      </section>
    </section>
    <section :class="[$style.aboutSection]">
      <div :class="[$style.aboutWrapper]">
        <div :class="[$style.aboutContent]">
          <div :class="[$style.iconHolder, $style.iconHolder_1]">
            <icon-filled kind="fa-solid fa-question" />
          </div>
          <section-title name="01__О нас" />
          <div :class="[$style.appAboutUsSubline]">
            Наша компания предоставляет консультации по полному спектру
            юридических услуг
          </div>
        </div>
      </div>
      <app-touch-carousel :isShow="false" :slidesShow="3" :slidesScroll="3" />
    </section>
    <app-touch-carousel :isShow="true" :slidesShow="6" :slidesScroll="6" />
    <section :class="[$style.catalogSection]">
      <div :class="[$style.catalogWrapper]">
        <div :class="[$style.iconHolder, $style.iconHolder_2]">
          <icon-filled kind="fa-solid fa-briefcase" />
        </div>
        <section-title name="02__Прайс лист" />
        <app-info-carousel :slidesShow="3" :slidesScroll="3" />
      </div>
    </section>
    <section :class="[$style.layout]">
      <div :class="[$style.layoutWrap]">
        <sharp-corner-image />
      </div>
      <div :class="[$style.layoutForm]">
        <icon-filled kind="fa-solid fa-file-pen" />
      </div>
    </section>
    <!-- <feedback /> -->
    <location-display />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import IconFilled from "@/components/IconFilled.vue";
import SharpCornerImage from "@/components/SharpCornerImage.vue";
import AppCarousel from "@/components/AppCarousel.vue";
import AppTouchCarousel from "@/components/AppTouchCarousel.vue";
import AppInfoCarousel from "@/components/AppInfoCarousel.vue";
import AppFooter from "@/components/AppFooter.vue";

import LocationDisplay from "@/partials/LocationDisplaySection.vue";

export default {
  name: "IndexContent",
  components: {
    "app-header": AppHeader,
    "app-carousel": AppCarousel,
    "app-touch-carousel": AppTouchCarousel,
    "app-info-carousel": AppInfoCarousel,
    "section-title": SectionTitle,
    "icon-filled": IconFilled,
    "sharp-corner-image": SharpCornerImage,

    "location-display": LocationDisplay,
    "app-footer": AppFooter,
  },
};
</script>
<style module>
.app {
  height: 100%;
}

.backgroundImgContainer {
  background-image: url("../../public/assets/Rostov.svg");
  background-size: cover;
}

.carouselWrapper {
  height: 100%;
}

.aboutSection {
  background-color: #6630ff;
  text-align: right;
  padding: 1.3px 58.5px 39px 58.5px;
}

.aboutWrapper {
  display: flex;
}

.aboutContent {
  position: relative;
  max-width: calc(50% - 9.75px);
  margin-left: auto;
}

.iconHolder {
  position: absolute;
  top: 0;
  right: 0;
}

.iconHolder_2 {
  padding: 0 26px;
}

.appAboutUsHeadline {
  font-size: 16px;
  line-height: 1.1;
  text-transform: uppercase;
  color: #fff;
  padding: 260px 0 6.5px;
}

.appAboutUsSubline {
  font-size: 35px;
  line-height: 1.2;
  color: #fff;
  padding-bottom: 39px;
}

.catalogSection {
  background-color: #6630ff;
}

.catalogWrapper {
  position: relative;
  padding: 0 13px;
}

@media all and (max-width: 360px) {
  .appHeaderConatiner {
    margin-bottom: 58.5px;
  }

  .aboutSection {
    padding: 0;
    margin-bottom: 58.5px;
  }

  .aboutContent {
    padding: 0 19.5px;
  }

  .appAboutUsHeadline {
    padding-left: 6.5px;
    padding-right: 6.5px;
    padding-bottom: 26px;
  }

  .appAboutUsSubline {
    padding-left: 6.5px;
    padding-right: 6.5px;
    padding-bottom: 58.5px;
  }

  .catalogSection {
    margin-top: 58.5px;
    padding: 0;
  }

  .catalogWrapper {
    padding: 0 1.3px;
  }
}

@media all and (max-width: 768px) {
  .aboutSection {
    position: relative;
  }

  .aboutContent {
    max-width: 100%;
    margin: 0;
  }

  .iconHolder_2 {
    padding: 0;
  }
}

@media all and (min-width: 768px) {
  .backgroundImgContainer {
    margin-bottom: 130px;
  }

  .aboutSection {
    margin-bottom: 130px;
  }

  .appAbouUsHeadline {
    padding-bottom: 26px;
  }

  .appAboutUsSubline {
    padding-bottom: 58.5px;
  }

  .catalogSection {
    margin-top: 130px;
    padding-bottom: 65px;
  }
}

@media all and (min-width: 1366px) {
  .appHeaderConatiner {
    margin-bottom: 58.5px;
  }

  .aboutSection {
    margin-bottom: 58.5px;
  }

  .catalogSection {
    margin-top: 58.5px;
    padding: 0;
  }
}
</style>
