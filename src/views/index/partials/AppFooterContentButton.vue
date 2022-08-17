<template>
  <div :class="[$style.contentButton]">
    <span :class="[$style.buttonText]">Бесплатная консультация</span>
    <div :class="[$style.btnBlock]">
      <span :class="[$style.iconHolder]">
        <font-awesome-icon
          :class="[$style.filledIcon]"
          icon="fa-solid fa-phone"
        />
      </span>
      <span :class="[$style.textField]"> +7 (951) 839-59-39 </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooterContentButton",
  data: function () {
    return {
      title: "Бесплатная консультация",
      number: "+7 (951) 839-59-39",
    };
  },
};
</script>

<style module>
.contentButton {
  padding-top: 19.5px;
}

.buttonText {
  display: block;
  font-size: 16px;
  line-height: 1.1;
  color: #fff;
  padding-bottom: 13px;
  text-transform: uppercase;
}

.btnBlock {
  display: flex;
}

.iconHolder {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 60px;
  height: 60px;
  background-color: #fff;
}

.filledIcon {
  font-size: 26px;
  color: #6630ff;
}

.textField {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 168px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  color: #fff;
}

@media all and (max-width: 768px) {
  .buttonText {
    padding-top: 13px;
  }

  .textField {
    width: 100%;
  }
}
</style>
