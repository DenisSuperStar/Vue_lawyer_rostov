<template>
  <section :class="[$style.catalog]">
    <div :class="[$style.catalogInner]">
      <div :class="[$style.iconHolder]">
        <icon-filled :kind="typeIcon" />
      </div>
      <section-title :name="title" />
      <app-info-carousel :slidesShow="3" :slidesScroll="3" />
    </div>
  </section>
</template>

<script>
import SectionTitle from "@/components/SectionTitle.vue";
import IconFilled from "@/components/IconFilled.vue";
import AppInfoCarousel from "@/components/AppInfoCarousel.vue";

export default {
  name: "AppCatalog",
  components: {
    "section-title": SectionTitle,
    "icon-filled": IconFilled,
    "app-info-carousel": AppInfoCarousel,
  },
  data: function () {
    return {
      typeIcon: "fa-solid fa-briefcase",
      title: "02__Прайс лист",
    };
  },
};
</script>

<style module>
.catalog {
  background-color: #6630ff;
}

.catalogInner {
  position: relative;
  padding: 0 13px;
}

.iconHolder {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 26px;
}

@media all and (max-width: 360px) {
  .catalog {
    padding: 0;
    margin-top: 58.5px;
  }

  .catalogInner {
    padding: 0 1.3px;
  }
}

@media all and (max-width: 768px) {
  .iconHolder {
    padding: 0;
  }
}

@media all and (min-width: 768px) {
  .catalog {
    margin-top: 130px;
    padding-bottom: 65px;
  }
}
</style>
