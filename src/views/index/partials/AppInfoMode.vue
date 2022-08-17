<template>
  <section :class="[$style.mode]">
    <div :class="[$style.modeColumn]">
      <section-title :name="name" />
      <div :class="[$style.subtitle]">{{ subtitle }}</div>
      <div :class="[$style.modeInfo]">{{ modeInfo }}</div>
    </div>
    <div :class="[$style.mapColumn]">
      <app-yandex-map />
    </div>
  </section>
</template>

<script>
import SectionTitle from "@/components/SectionTitle.vue";
import AppYandexMap from "./AppYandexMap.vue";

export default {
  name: "AppInfo",
  components: {
    "section-title": SectionTitle,
    "app-yandex-map": AppYandexMap,
  },
  data: function () {
    return {
      name: "04__контакты",
      subtitle: "Мы здесь ради вас",
      modeInfo: "c 10.00 до 20.00, 5 дней в неделю",
    };
  },
};
</script>

<style module>
.mode {
  margin-bottom: 130px;
}

.modeColumn {
  text-align: right;
}

.subtitle {
  font-size: 32.5px;
  line-height: 1.2;
  color: #111;
  padding-bottom: 6.5px;
}

.modeInfo {
  font-size: 32.5px;
  line-height: 1.2;
  color: #111;
}

@media all and (min-width: 1366px) {
  .mode {
    display: flex;
    grid-gap: 45.5px;
  }

  .modeColumn {
    flex: 4;
  }

  .mapColumn {
    flex: 6;
  }
}
</style>
