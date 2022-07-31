<template>
  <div :class="[$style.indexContent]">
    <div :class="[$style.indexBackground]">
      <app-header />
      <self-presentation-carousel />
    </div>
    <about-us />
    <service-catalog />
    <feedback />
    <location-display />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import SelfPresentationCarousel from "@/partials/SelfPresentationCarouselSection.vue";
import Feedback from "@/partials/FeedbackSection.vue";
import LocationDisplay from "@/partials/LocationDisplaySection.vue";
import SectionAboutUs from "@/partials/SectionAboutUs.vue";
import ServiceCatalog from "@/partials/ServiceCatalogSection.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "IndexContent",
  components: {
    "app-header": AppHeader,
    "self-presentation-carousel": SelfPresentationCarousel,
    feedback: Feedback,
    "location-display": LocationDisplay,
    "about-us": SectionAboutUs,
    "service-catalog": ServiceCatalog,
    "app-footer": AppFooter,
  },
};
</script>
<style module>
.indexContent {
  position: relative;
  height: 100%;
}

.indexBackground {
  background-image: url("../../public/assets/Rostov.svg");
  background-size: cover;
  
}

@media all and (max-width: 360px) {
  .indexBackground {
    margin-bottom: 58.5px;
  }
}

@media all and (min-width: 768px) {
  .indexBackground {
    margin-bottom: 130px;
  }
}

@media all and (min-width: 1366px) {
  .indexBackground {
    margin-bottom: 58.5px;
  }
}
</style>
