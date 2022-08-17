<template>
  <div :class="[$style.app]">
    <app-head />
    <app-about />
    <app-touch-carousel :isShow="true" :slidesShow="4" :slidesScroll="4" />
    <app-catalog />
    <app-feedback />
    <app-info-mode />
    <app-footer />
  </div>
</template>

<script>
import AppHead from "./index/partials/AppHead.vue";
import AppAbout from "./index/partials/AppAbout.vue";
import AppCatalog from "./index/partials/AppCatalog.vue";
import AppFeedback from "./index/partials/AppFeedback.vue";
import AppInfoMode from "./index/partials/AppInfoMode.vue";
import AppTouchCarousel from "@/components/AppTouchCarousel.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "IndexContent",
  components: {
    "app-head": AppHead,
    "app-about": AppAbout,
    "app-catalog": AppCatalog,
    "app-feedback": AppFeedback,
    "app-info-mode": AppInfoMode,
    "app-touch-carousel": AppTouchCarousel,
    "app-footer": AppFooter,
  },
};
</script>
<style module>
.app {
  height: 100%;
}
</style>
