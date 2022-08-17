<template>
  <div :class="[$style.inputTextControl]">
    <input
      type="text"
      name="your_name"
      :class="[$style.inputText]"
      @change="changeStatusName"
      @keyup:enter="changeStatusName"
      v-model="forename"
      :placeholder="mask"
      autocomplete="off"
    />
    <span id="error" :class="[$style.invalidField]" v-if="!forename.length">{{
      message
    }}</span>
  </div>
</template>

<script>
export default {
  name: "AppInputText",
  props: {
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "Ваше имя*",
    },
  },
  data: function () {
    return {
      forename: this.name,
      message: this.text,
      mask: this.placeholder,
      isName: null,
    };
  },
  methods: {
    validName() {
      this.isName = this.name ? 1 : 0;
    },
    changeStatusName() {
      this.$parent.$emit("name", { isOwn: this.isName });
    },
  },
};
</script>

<style module>
.inputTextControl {
  position: relative;
}

.inputText {
  width: 100%;
  background-color: rgba(248, 238, 253, 0.1);
  padding: 26px 13px;
  border: none;
}

.inputText::placeholder {
  color: #fff;
}

.inputText:active,
.inputText:hover,
.inputText:focus {
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

@media all and (max-width: 768px) {
  .inputTextControl {
    padding-bottom: 6.5px;
  }

  .invalidField {
    position: static;
  }
}
</style>
