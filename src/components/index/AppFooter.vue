<template>
  <footer :class="[$style.footer]">
    <div :class="[$style.leftColumn]">
      <div :class="[$style.head]">
        <span :class="[$style.title]">Юрист-на-Дону</span>
        <span :class="[$style.subtitle]">Всегда на страже ваших интересов</span>
      </div>
      <div :class="[$style.content]">
        <app-footer-contacts />
        <app-footer-social-list />
        <app-footer-content-button />
      </div>
    </div>
    <div :class="[$style.rightColumn]">
      <app-footer-overview-catalog />
    </div>
  </footer>
</template>

<script>
import AppFooterContacts from "@/views/index/partials/AppFooterContacts.vue";
import AppFooterSocialList from "@/views/index/partials/AppFooterSocialList.vue";
import AppFooterOverviewCatalog from "@/views/index/partials/AppFooterOverviewCatalog.vue";
import AppFooterContentButton from "@/views/index/partials/AppFooterContentButton.vue";

export default {
  name: "FooterBar",
  components: {
    "app-footer-contacts": AppFooterContacts,
    "app-footer-social-list": AppFooterSocialList,
    "app-footer-content-button": AppFooterContentButton,
    "app-footer-overview-catalog": AppFooterOverviewCatalog,
  },
};
</script>

<style module>
.footer {
  width: 100%;
  display: flex;
  padding: 97.5px 45.5px 26px 39px;
  background-color: #6630ff;
}

.leftColumn {
  display: flex;
  flex-wrap: wrap;
}

.leftColumn::before {
  display: block;
  content: "";
  width: 60px;
  height: 60px;
  background-color: #fff;
}

.rightColumn {
  display: flex;
  flex-direction: column;
}

.head {
  padding-left: 13px;
}

.title {
  display: block;
  font-size: 16px;
  line-height: 1.1;
  color: #fff;
  margin-bottom: 13px;
}

.subtitle {
  display: block;
  font-size: 14px;
  line-height: 1.1;
  color: #fff;
  margin-bottom: 13px;
}

.content {
  width: 100%;
}

@media all and (max-width: 768px) {
  .footer {
    display: block;
  }

  .head {
    padding-left: 6.5px;
  }

  .title {
    margin-top: 13px;
    padding-left: 0;
    padding-right: 0;
  }

  .rightColumn {
    display: block;
  }
}
</style>
