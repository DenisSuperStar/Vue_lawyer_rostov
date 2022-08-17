<template>
  <form :class="[$style.submitForm]">
    <section-title name="03__оставить заявку" />
    <div :class="[$style.formGrid]">
      <div :class="[$style.formColumn]">
        <app-input-text :name="name" text="Your field is empty" />
      </div>
      <div :class="[$style.formColumn]">
        <app-input-email :email="email" />
      </div>
    </div>
    <div :class="[$style.fieldWrapper]">
      <app-input-phone :phone="phone" />
    </div>
    <app-message :message="message" text="Your field is empty" />
    <div :class="[$style.submitWrapper]">
      <input
        type="submit"
        v-if="isName && isEmail && isPhone && isMessage"
        :class="[$style.submitButton]"
        value="Отправить"
      />
      <input
        type="submit"
        v-else
        :class="[$style.submitButton, $style.submitDisable]"
        value="Отправить"
        disabled
      />
    </div>
  </form>
</template>

<script>
import AppInputText from "./AppInputText.vue";
import AppInputEmail from "./AppInputEmail.vue";
import AppInputPhone from "./AppInputPhone.vue";
import AppMessage from "./AppMessage.vue";
import SectionTitle from "./SectionTitle.vue";

export default {
  name: "AppSubmitForm",
  components: {
    "section-title": SectionTitle,
    "app-input-text": AppInputText,
    "app-input-email": AppInputEmail,
    "app-input-phone": AppInputPhone,
    "app-message": AppMessage,
  },
  data: function () {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
      isName: null,
      isPhone: null,
      isEmail: null,
      isMessage: null,
    };
  },
  created() {
    this.$on("name", (payload) => {
      this.isName = payload.isOwn;
    });

    this.$on("email", (payload) => {
      this.isEmail = payload.isMail;
    });

    this.$on("number", (payload) => {
      this.isPhone = payload.isNumber;
    });

    this.$on("message", (payload) => {
      this.isMessage = payload.isNotice;
    });
  },
};
</script>

<style module>
.submitForm {
  width: 100%;
  padding-left: 60px;
  padding-right: 60px;
}

.formGrid {
  display: flex;
  grid-gap: 26px;
  margin-bottom: 6.5px;
}

.formColumn {
  flex: 5;
}

.fieldWrapper {
  margin-bottom: 6.5px;
}

.submitWrapper {
  margin-top: 26px;
}

.submitButton {
  appearance: none;
  border: none;
  background-color: #6630ff;
  border: 2px solid #fff;
  color: #fff;
  padding: 26px 32.5px;
  font-size: 16px;
  line-height: 1.1;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
}

.submitDisable {
  background-color: rgba(248, 238, 253, 0.1);
  border: none;
  cursor: auto;
}

@media all and (max-width: 768px) {
  .formGrid {
    display: block;
  }
}
</style>
