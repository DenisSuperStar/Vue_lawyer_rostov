<template>
  <footer :class="[$style.footer]">
    <div>
      <div :class="[$style.footerTitle, $style.markedTitle]">Юрист-на-Дону</div>
      <div :class="[$style.footerSubtitle]">
        Всегда на страже ваших интересов
      </div>
      <div :class="[$style.socialTitle]">Мы в соц.сетях</div>
      <div :class="[$style.socialIcons]">
        <a v-for="social in socialIcons" :key="social.id" :class="[$style.socialItem]" :href="social.ref">
          <img :src="social.path" :class="[$style.socialIcon]" :alt="social.name" />
        </a>
      </div>
    </div>
    <div>
      <div :class="[$style.footerTitle]">Услуги</div>
      <ul :class="[$style.serviceList]">
        <li v-for="service in services" :key="service.id" :class="[$style.serviceItem]">
          <a :href="service.ref" :class="[$style.itemLink]">{{
              service.text
          }}</a>
          <div :class="[$style.itemUnderline]"></div>
        </li>
      </ul>
    </div>
    <div></div>
  </footer>
</template>

<script>
export default {
  name: "FooterBar",
  data: function () {
    return {
      socialIcons: [
        { id: 1, ref: "https://vk.com/", path: "./images/vk.svg", name: "VK" },
        {
          id: 2,
          ref: "https://twitter.com/",
          path: "/images/twitter.svg",
          name: "TW",
        },
        {
          id: 3,
          ref: "https://instagram.com/",
          path: "./images/instagram.svg",
          name: "Ig",
        },
        {
          id: 4,
          ref: "https://ru.linkedin.com/",
          path: "./images/linkedin.svg",
          name: "IN",
        },
      ],
      services: [
        {
          id: 1,
          ref: "#free",
          text: "Устная консультация для граждан",
        },
        {
          id: 2,
          ref: "#study",
          text: "Устная консультация для граждан с изучением документов",
        },
        {
          id: 3,
          ref: "#write",
          text: "Письменная консультация для граждан",
        },
        {
          id: 4,
          ref: "#claim",
          text: "Составление претензии",
        },
        {
          id: 5,
          ref: "#contract",
          text: "Состваление гражданско-правовых, трудовых договоров",
        },
        {
          id: 6,
          ref: "#difficult",
          text: "Составление сложных (смешанные формы), нестандартных договоров",
        },
        {
          id: 7,
          ref: "#expertise",
          text: "Составление процессуальных документов (иск, отзыв на иск и т.п.)",
        },
      ],
    };
  },
};
</script>

<style module>
.footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 97.5px 45.5px 26px 39px;
}

.footerTitle {
  display: flex;
  grid-gap: 16px;
  align-items: center;
  font-size: 14px;
  line-height: 1.2;
  color: #111;
  margin-bottom: 13px;
}

.markedTitle::before {
  display: block;
  content: "";
  width: 60px;
  height: 60px;
  background-color: #6630ff;
}

.footerSubtitle {
  font-size: 14px;
  line-height: 1.2px;
  color: #404045;
  margin-bottom: 39px;
}

.socialTitle {
  font-size: 18px;
  line-height: 1.2;
  color: #111;
  margin-bottom: 32.5px;
}

.socialIcons {
  display: flex;
  align-items: center;
  grid-gap: 26px;
}

.socialItem {
  color: #00b7ff;
  text-decoration: none;
}

.socialIcon {
  display: block;
  max-width: 100%;
}

.serviceList {
  padding: 0;
  list-style: none;
}

.serviceItem:not(:last-child) {
  margin-bottom: 13px;
}

.itemLink {
  display: block;
  font-size: 14px;
  line-height: 1.2;
  color: #6630ff;
  margin-bottom: 2px;
  text-decoration: none;
}

.itemUnderline {
  width: 100%;
  height: 1px;
  background-color: #6630ff;
}
</style>
