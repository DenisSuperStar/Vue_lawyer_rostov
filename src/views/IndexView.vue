<template>
  <div :class="[$style.app]">
    <app-head />
    <app-about />
    <app-touch-carousel
      :isShow="showImage"
      :slidesShow="showSlides"
      :slidesScroll="scrollSlides"
    />
    <section :class="[$style.catalogSection]">
      <div :class="[$style.catalogWrapper]">
        <div :class="[$style.iconHolder, $style.iconHolder_2]">
          <icon-filled kind="fa-solid fa-briefcase" />
        </div>
        <section-title name="02__Прайс лист" />
        <app-info-carousel :slidesShow="3" :slidesScroll="3" />
      </div>
    </section>
    <section :class="[$style.feedback]">
      <div :class="[$style.layoutWrap]">
        <sharp-corner-image />
      </div>
      <div :class="[$style.layoutForm]">
        <icon-filled kind="fa-solid fa-file-pen" />
        <app-submit-form />
      </div>
    </section>
    <!-- <feedback /> -->
    <location-display />
    <app-footer />
  </div>
</template>

<script>
import AppHead from "./index/partials/AppHead.vue";
import AppAbout from "./index/partials/AppAbout.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import IconFilled from "@/components/IconFilled.vue";
import SharpCornerImage from "@/components/SharpCornerImage.vue";
import AppSubmitForm from "@/components/AppSubmitForm.vue";

import AppTouchCarousel from "@/components/AppTouchCarousel.vue";
import AppInfoCarousel from "@/components/AppInfoCarousel.vue";
import AppFooter from "@/components/AppFooter.vue";

import LocationDisplay from "@/partials/LocationDisplaySection.vue";

export default {
  name: "IndexContent",
  components: {
    "app-head": AppHead,
    "app-about": AppAbout,
    "app-touch-carousel": AppTouchCarousel,
    "app-info-carousel": AppInfoCarousel,
    "section-title": SectionTitle,
    "icon-filled": IconFilled,
    "sharp-corner-image": SharpCornerImage,
    "app-submit-form": AppSubmitForm,

    "location-display": LocationDisplay,
    "app-footer": AppFooter,
  },
  data: function () {
    return {
      showImage: true,
      showSlides: 6,
      scrollSlides: 6,
    };
  },
};
</script>
<style module>
.app {
  height: 100%;
}

.iconHolder {
  position: absolute;
  top: 0;
  right: 0;
}

.iconHolder_2 {
  padding: 0 26px;
}

.catalogSection {
  background-color: #6630ff;
}

.catalogWrapper {
  position: relative;
  padding: 0 13px;
}

.feedback {
  display: flex;
  background-color: #6630ff;
}

@media all and (max-width: 360px) {
  .catalogSection {
    margin-top: 58.5px;
    padding: 0;
  }

  .catalogWrapper {
    padding: 0 1.3px;
  }
}

@media all and (max-width: 768px) {
  .iconHolder_2 {
    padding: 0;
  }

  .feedback {
    display: block;
    padding: 0;
  }
}

@media all and (min-width: 768px) {
  .catalogSection {
    margin-top: 130px;
    padding-bottom: 65px;
  }
}

@media all and (min-width: 1366px) {
  .catalogSection {
    margin-top: 58.5px;
    padding: 0;
  }

  .feedback {
    padding-top: 58.5px;
    margin-bottom: 58.5px;
  }
}
</style>
