<template>
  <div :class="[$style.inputPhoneControl]">
    <ValidationProvider
      :rules="{
        regex:
          /((8|\+7)-?)?\(?\d{3}\)?-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}/,
      }"
      v-slot="{ errors }"
    >
      <input
        type="text"
        :class="[$style.inputPhone]"
        @input="validPhone(errors)"
        @keyup:enter="changeStatusPhone"
        v-model="number"
        name="your_phone"
        :placeholder="mask"
        autocomplete="off"
      />
      <span id="error" :class="[$style.invalidField]">{{ errors[0] }}</span>
    </ValidationProvider>
  </div>
</template>

<script>
import { ValidationProvider, extend } from "vee-validate";
import { regex } from "vee-validate/dist/rules";

extend("regex", regex);

export default {
  name: "AppInputPhone",
  components: {
    ValidationProvider,
  },
  props: {
    phone: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Ваш номер телефона",
    },
  },
  data: function () {
    return {
      number: this.phone,
      mask: this.placeholder,
      isPhone: null,
    };
  },
  methods: {
    validPhone(err) {
      this.isPhone = err[0] ? 0 : 1;
    },
    changeStatusPhone() {
      this.$parent.$emit("number", { isNumber: this.isPhone });
    },
  },
};
</script>

<style module>
.inputPhoneControl {
  position: relative;
}

.inputPhone {
  width: 100%;
  background-color: rgba(248, 238, 253, 0.1);
  padding: 13px;
  border: none;
}

.inputPhone::placeholder {
  color: #fff;
}

.inputPhone:active,
.inputPhone:hover,
.inputPhone:focus {
  outline: 0;
  outline-offset: 0;
}

.invalidField {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 6.5px;
  color: #f00;
}

@media all and (max-width: 360px) {
  .invalidField {
    position: static;
  }
}
</style>
