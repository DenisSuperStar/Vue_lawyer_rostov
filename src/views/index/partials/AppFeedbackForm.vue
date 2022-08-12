<template>
  <div :class="[$style.feedbackForm]">
    <icon-filled :kind="typeIcon" />
    <app-submit-form />
  </div>
</template>

<script>
import IconFilled from "@/components/IconFilled.vue";
import AppSubmitForm from "@/components/AppSubmitForm.vue";

export default {
  name: "AppFeedbackForm",
  components: {
    "icon-filled": IconFilled,
    "app-submit-form": AppSubmitForm,
  },
  data: function () {
    return {
      typeIcon: "fa-solid fa-file-pen",
    };
  },
};
</script>

<style module>
.feedbackForm {
  position: relative;
  width: 60%;
}

@media all and (max-width: 768px) {
  .feedbackForm {
    padding: 260px 0 130px;
  }
}
</style>
