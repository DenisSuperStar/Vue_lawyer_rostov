<template>
  <div :class="[$style.app]">
    <app-head />
    <app-about />
    <app-touch-carousel :isShow="true" :slidesShow="4" :slidesScroll="4" />
    <app-catalog />
    <app-feedback />
    <location-display />
    <app-footer />
  </div>
</template>

<script>
import AppHead from "./index/partials/AppHead.vue";
import AppAbout from "./index/partials/AppAbout.vue";
import AppCatalog from "./index/partials/AppCatalog.vue";
import AppFeedback from "./index/partials/AppFeedback.vue";
import AppTouchCarousel from "@/components/AppTouchCarousel.vue";
import AppFooter from "@/components/AppFooter.vue";

import LocationDisplay from "@/partials/LocationDisplaySection.vue";

export default {
  name: "IndexContent",
  components: {
    "app-head": AppHead,
    "app-about": AppAbout,
    "app-catalog": AppCatalog,
    "app-feedback": AppFeedback,
    "app-touch-carousel": AppTouchCarousel,

    "location-display": LocationDisplay,
    "app-footer": AppFooter,
  },
};
</script>
<style module>
.app {
  height: 100%;
}
</style>
