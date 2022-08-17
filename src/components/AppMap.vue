<template>
  <yandex-map :zoom="zoom" :coords="coords" :scroll-zoom="scrollZoom">
    <ymap-marker
      :zoom="16"
      :coords="coords"
      :hint-content="hint"
      :icon="markerIcon"
    />
  </yandex-map>
</template>

<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";

export default {
  name: "AppMap",
  components: {
    yandexMap,
    ymapMarker,
  },
  props: {
    mapZoom: {
      type: Number,
      required: true,
    },
    objCoords: {
      type: Array,
      required: true,
    },
    mapScroll: {
      type: Boolean,
      default: false,
    },
    objLabel: {
      type: String,
      required: true,
    },
    icon: {
      type: Object,
      required: true,
    },
  },
  data: function () {
    return {
      zoom: this.mapZoom,
      coords: this.objCoords,
      scrollZoom: this.mapScroll,
      hint: this.objLabel,
      markerIcon: this.icon,
    };
  },
};
</script>

<style scoped>
.ymap-container {
  height: 576px;
}
</style>
