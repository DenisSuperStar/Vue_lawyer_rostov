<template>
  <div :class="[$style.socialList]">
    <span :class="[$style.socialTitle]">Подписаться</span>

    <div :class="[$style.socials]">
      <div :class="[$style.social]">
        <a href="#" :class="[$style.socialLink]">
          <font-awesome-icon icon="fa-brands fa-twitter" />
        </a>
      </div>
      <div :class="[$style.social]">
        <a href="#" :class="[$style.socialLink]">
          <font-awesome-icon icon="fa-brands fa-vk" />
        </a>
      </div>
      <div :class="[$style.social]">
        <a href="#" :class="[$style.socialLink]">
          <font-awesome-icon icon="fa-brands fa-linkedin-in" />
        </a>
      </div>
      <div :class="[$style.social]">
        <a href="#" :class="[$style.socialLink]">
          <font-awesome-icon icon="fa-brands fa-instagram" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooterSocialList",
};
</script>

<style module>
.socialList {
  padding-top: 19.5px;
}

.socialTitle {
  display: block;
  font-size: 16px;
  line-height: 1.1;
  color: #fff;
  padding-bottom: 13px;
}

.socials {
  display: flex;
  grid-gap: 13px;
}

.social {
  background-color: #fff;
  padding: 6.5px;
}

.socialLink {
  color: #6630ff;
}

@media all and (max-width: 768px) {
  .socialTitle {
    padding-top: 13px;
  }
}
</style>
