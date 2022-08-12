<template>
  <div :class="[$style.photoFounder]">
    <sharp-corner-image />
  </div>
</template>

<script>
import SharpCornerImage from "@/components/SharpCornerImage.vue";
export default {
  name: "AppPhotoFounder",
  components: {
    "sharp-corner-image": SharpCornerImage,
  },
};
</script>

<style module>
.photoFounder {
  width: 40%;
  padding: 19.5px;
}

@media all and (max-width: 360px) {
  .photoFounder {
    margin-bottom: 19.5px;
  }
}

@media all and (min-width: 768px) {
  .photoFounder {
    margin-bottom: 130px;
  }
}
</style>
