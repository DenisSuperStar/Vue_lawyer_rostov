<template>
  <div :class="[$style.inputEmailControl]">
    <ValidationProvider
      :rules="{
        regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      }"
      v-slot="{ errors }"
    >
      <input
        type="email"
        name="your_email"
        :class="[$style.inputEmail]"
        @input="validEmail(errors)"
        @keyup:enter="changeStatusEmail"
        v-model="email"
        :placeholder="placeholder"
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
  name: "AppInputEmail",
  components: {
    ValidationProvider,
  },
  props: {
    email: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "Ваш email*",
    },
  },
  data: function () {
    return {
      isEmail: null,
    };
  },
  methods: {
    validEmail(err) {
      this.isEmail = err[0] ? 0 : 1;
    },
    changeStatusEmail() {
      this.$parent.$emit("email", { isMail: this.isEmail });
    },
  },
};
</script>

<style module>
.inputEmailControl {
  position: relative;
}

.inputEmail {
  width: 100%;
  background-color: rgba(248, 238, 253, 0.1);
  padding: 13px;
  border: none;
}

.inputEmail::placeholder {
  color: #fff;
}

.inputEmail:active,
.inputEmail:hover,
.inputEmail:focus {
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
