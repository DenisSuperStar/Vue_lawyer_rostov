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
import PrimaryTitle from '@/components/index/PrimaryTitle.vue';
import IconFilled from '@/components/index/IconFilled.vue';
import AppInfoCarousel from '@/components/index/AppInfoCarousel.vue';

export default {
  name: "AppCatalog",
  components: {
    "section-title": PrimaryTitle,
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
  margin-top: 130px;
  background-color: #6630ff;
  padding-bottom: 65px;
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

@media all and (max-width: 767px) {
  .catalog {
    margin-top: 58.5px;
  }
}

@media all and (min-width: 768px) and (max-width: 1023px) {
  .catalog {
    margin-top: 58.5px;
  }

  .catalogInner {
    padding: 0;
  }
}

@media all and (max-width: 1023px) {
  .catalog {
    padding: 0;
  }

  .iconHolder {
    padding: 0;
  }
}
</style>
