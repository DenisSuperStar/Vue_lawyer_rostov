<template>
  <section :class="[$style.feedback]">
    <app-photo-founder />
    <app-feedback-form />
  </section>
</template>

<script>
import AppPhotoFounder from "./AppPhotoFounder.vue";
import AppFeedbackForm from "./AppFeedbackForm.vue";

export default {
  name: "AppFeedback",
  components: {
    "app-photo-founder": AppPhotoFounder,
    "app-feedback-form": AppFeedbackForm,
  },
};
</script>

<style module>
.feedback {
  display: flex;
  background-color: #6630ff;
  margin-bottom: 130px;
}

@media all and (max-width: 768px) {
  .feedback {
    display: block;
    margin: 0;
  }
}
</style>
