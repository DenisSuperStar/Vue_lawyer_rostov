<template>
  <div :class="[$style.app]">
    <div :class="[$style.backgroundImgContainer]">
      <app-header />
      <section :class="[$style.carouselWrapper]">
        <app-carousel />
      </section>
    </div>
    <div :class="[$style.aboutSection]">
      <div :class="[$style.aboutWrapper]">
        <div :class="[$style.aboutContent]">
          <div :class="[$style.iconWrapper]">
            <icon-filled kind="fa-solid fa-question" />
          </div>
          <h3 :class="[$style.appAboutUsHeadline]">01__О нас</h3>
          <div :class="[$style.appAboutUsSubline]">
            Наша компания предоставляет консультации по полному спектру
            юридических услуг
          </div>
        </div>
      </div>
      <app-touch-carousel :isShow="false" :slidesShow="3" :slidesScroll="3" />
    </div>
    <app-touch-carousel :isShow="true" :slidesShow="6" :slidesScroll="6" />
    <!-- !!! -->
    <service-catalog />
    <feedback />
    <location-display />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppCarousel from "@/components/AppCarousel.vue";
import AppTouchCarousel from "@/components/AppTouchCarousel.vue";

import Feedback from "@/partials/FeedbackSection.vue";
import LocationDisplay from "@/partials/LocationDisplaySection.vue";
import ServiceCatalog from "@/partials/ServiceCatalogSection.vue";
import AppFooter from "@/components/AppFooter.vue";
import IconFilled from "@/components/IconFilled.vue";

export default {
  name: "IndexContent",
  components: {
    "app-header": AppHeader,
    "app-carousel": AppCarousel,
    "app-touch-carousel": AppTouchCarousel,
    "icon-filled": IconFilled,

    feedback: Feedback,
    "location-display": LocationDisplay,
    "service-catalog": ServiceCatalog,
    "app-footer": AppFooter,
  },
};
</script>
<style module>
.app {
  position: relative;
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
  max-width: calc(50% - 9.75px);
  margin-left: auto;
}

.iconWrapper {
  position: absolute;
  top: 0;
  left: 0;
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

@media all and (max-width: 360px) {
  .appHeaderConatiner {
    margin-bottom: 58.5px;
  }

  .aboutSection {
    padding: 0;
    margin-bottom: 58.5px;
  }

  .aboutContent {
    position: relative;
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
}

@media all and (max-width: 768px) {
  .aboutSection {
    position: relative;
  }

  .aboutContent {
    max-width: 100%;
    margin: 0;
  }

  .iconWrapper {
    position: absolute;
    top: 0;
    left: auto;
    right: 0;
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
}

@media all and (min-width: 1366px) {
  .appHeaderConatiner {
    margin-bottom: 58.5px;
  }

  .aboutSection {
    margin-bottom: 58.5px;
  }

  .aboutContent {
    position: relative;
  }
}
</style>
