<template>
  <section :class="[$style.locationSection]">
    <div :class="[$style.textBoxContaner]">
      <div :class="[$style.sectionName]">04__контакты</div>
      <div :class="[$style.sectionTitle]">Мы здесь ради вас</div>
      <div :class="[$style.sectionSubtitle]">
        c 10.00 до 20.00, 5 дней в неделю
      </div>
    </div>
    <app-yandex-map />
  </section>
</template>

<script>
import AppYandexMap from "@/views/index/partials/AppYandexMap.vue";

export default {
  name: "ContactSection",
  components: {
    'app-yandex-map': AppYandexMap
  },
  data: function () {
    return {
      zoom: 16,
      hint: "ул.Максима Горького, 151",
      coords: [47.226894, 39.714276],
      markerIcon: {
        layout: "default#image", // используется для кастомизации иконки маркера
        imageHref:
          "data:image/png;base64,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",
        imageSize: [25, 25],
      },
    };
  },
};
</script>

<style module>
.locationSection {
  display: flex;
  grid-gap: 50px;
  margin-bottom: 58.5px;
}

.textBoxContaner {
  flex: 4;
  text-align: right;
}

.mapContainer {
  flex: 6;
}

.sectionName {
  font-size: 16px;
  line-height: 1.1;
  text-transform: uppercase;
  color: #6630ff;
  padding-bottom: 39px;
}

.sectionTitle {
  font-size: 35px;
  line-height: 1.2;
  color: #111;
  padding-bottom: 6.5px;
}

.sectionSubtitle {
  font-size: 35px;
  line-height: 1.2;
  color: #111;
}

@media all and (max-width: 768px) {
  .locationSection {
    display: block;
  }
}
</style>

<style scoped>
.ymap-container {
  height: 576px;
}
</style>
