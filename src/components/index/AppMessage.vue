<template>
  <div :class="[$style.messageControl]">
    <input
      type="text"
      :class="[$style.messageField]"
      v-model="info"
      @change="changeStatusMessage"
      @keyup:enter="changeStatusMessage"
      name="your_message"
      :placeholder="mask"
      autocomplete="off"
    />
    <span id="error" :class="[$style.invalidField]" v-if="!info.length">{{
      words
    }}</span>
  </div>
</template>

<script>
export default {
  name: "AppMessage",
  props: {
    message: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "Ваше сообщение*",
    },
  },
  data: function () {
    return {
      info: this.message,
      words: this.text,
      mask: this.placeholder,
      isMessage: null,
    };
  },
  methods: {
    validMessage() {
      this.isMessage = this.message ? 1 : 0;
    },
    changeStatusMessage() {
      this.$parent.$emit("message", { isNotice: this.isMessage });
    },
  },
};
</script>

<style module>
.messageControl {
  position: relative;
}

.messageField {
  width: 100%;
  background-color: rgba(248, 238, 253, 0.1);
  padding-left: 13px;
  padding-right: 13px;
  border: none;
  min-height: 91px;
}

.messageField::placeholder {
  color: #fff;
}

.messageField:active,
.messageField:hover,
.messageField:focus {
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
  .invalidField {
    position: static;
  }
}
</style>
