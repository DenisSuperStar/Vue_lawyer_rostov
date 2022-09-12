<template>
  <div :class="[$style.photo]">
    <sharp-corner-image :sharpPhoto="sharpImage" />
  </div>
</template>

<script>
import photo from "../../../../public/assets/leader.svg";
import SharpCornerImage from "@/components/index/SharpCornerImage.vue";

export default {
  name: "AppPhoto",
  components: {
    "sharp-corner-image": SharpCornerImage,
  },
  data: function () {
    return {
      sharpImage: photo,
    };
  },
};
</script>

<style module>
.photo {
  width: 40%;
  padding: 19.5px;
}

@media all and (max-width: 1023px) {
  .photo {
    width: 100%;
  }
}
</style>
