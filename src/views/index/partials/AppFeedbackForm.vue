<template>
  <div :class="[$style.feedbackForm]">
    <icon-filled :kind="typeIcon" />
    <app-submit-form />
  </div>
</template>

<script>
import IconFilled from '@/components/index/IconFilled.vue';
import AppSubmitForm from '@/components/index/AppSubmitForm.vue';

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

@media all and (max-width: 767px) {
  .feedbackForm {
    padding: 0;
  }
}

@media all and (max-width: 1023px) {
  .feedbackForm {
    width: 100%;
  }
}

@media all and (min-width: 768px) and (max-width: 1023px) {
  .feedbackForm {
    padding: 0 26px 58.5px;
  }
}
</style>
