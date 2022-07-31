<template>
  <header :class="[$style.header]">
    <nav :class="[$style.headerMenu]">
      <a href="/" :class="[$style.menuItem]">
        <div :class="[$style.widgetIcon]"></div>
        <div :class="[$style.widgetText]">Юрист-на-Дону</div>
      </a>
      <div :class="[$style.primaryMenu]">
        <a
          v-for="link in links"
          :href="link.ref"
          :class="[$style.menuItem, $style.primaryItem]"
          :key="link.id"
          >{{ link.text }}</a
        >
      </div>
      <a href="#" :class="[$style.menuItem]">
        <div :class="[$style.widgetIcon]">
          <span :class="[$style.iconContainer]">
            <font-awesome-icon
              :class="[$style.normalIcon]"
              icon="fa-solid fa-phone"
            />
          </span>
        </div>
        <div :class="[$style.widgetContent]">+7 (951) 839-59-39</div>
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderBar",
  data: function () {
    return {
      links: [
        { id: 1, ref: "#home", text: "Главная" },
        { id: 2, ref: "#about", text: "О проекте" },
        { id: 3, ref: "#contacts", text: "Контакты" },
      ],
    };
  },
};
</script>

<style module>
.header {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding-bottom: 32.5px;
  z-index: 100;
}

.headerMenu {
  display: flex;
  align-items: center;
}

.primaryMenu {
  display: flex;
  align-items: center;
  margin-left: auto;
  height: 60px;
}

.primaryItem {
  font-size: 14px;
  line-height: 1.2;
  text-transform: uppercase;
  margin: 0 45.5px 0 0;
  color: #111;
}

.menuItem {
  display: block;
  text-decoration: none;
}

div > a:first-child {
  position: relative;
}

div > a:first-child::after {
  position: absolute;
  display: block;
  content: "";
  width: 100%;
  height: 2px;
  background-color: #6630ff;
  margin-top: 6.5px;
}

.widgetIcon {
  display: inline-block;
  width: 60px;
  height: 60px;
  background-color: #6630ff;
}

.iconContainer {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.normalIcon {
  font-size: 26px;
  color: #fff;
}

.widgetText {
  display: flex;
  align-items: center;
  float: right;
  height: 60px;
  padding: 0 13px;
  font-size: 25px;
  line-height: 0.7;
  color: #111;
  text-transform: uppercase;
}

.widgetContent {
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  width: 168px;
  height: 60px;
  background-color: #111;
  color: #fff;
  font-size: 14px;
  line-height: 1.2;
}

@media all and (max-width: 360px) {
  .headerMenu {
    display: none;
  }
}
</style>
