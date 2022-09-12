<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <nav class="navbar navbar-expand-lg panel">
          <div class="container-fluid panel__content">
            <a class="navbar-brand panel__brand">
              <img src="" class="img-fluid panel__img" alt="logo" />
            </a>
            <div class="collapse navbar-collapse panel__navbar">
              <ul class="navbar-nav panel__nav">
                <li class="nav-item panel__nav-item">
                  <a class="nav-link panel__nav-link"></a>
                </li>
                <li class="nav-item panel__nav-item">
                  <a class="nav-link panel__nav-link">+8 (800)-200-00-00</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="panel__underline"></div>
        <nav class="nav nav-pills nav-justified primary-nav">
          <a
            class="nav-link primary-nav__item"
            v-for="(item, index) in items"
            :class="[index === active ? 'active' : '']"
            @click="selected(index)"
            :key="index"
          >
            {{ item }}
          </a>
        </nav>
        <div class="banner">
          <img
            src="../../public/assets/Rostov.svg"
            class="img-fluid banner__background"
            alt="Rostov city"
          />
          <div class="card banner__content">
            <div class="card-body">
              <h5 class="card-title banner__title">Мы можем помочь каждому</h5>
              <p class="card-text banner__text">
                Наши специалисты в любой момент готовы выполнить анализ вашей
                задачи, обсудить сроки выполнения и стоимость услуг
              </p>
            </div>
            <div class="card-footer banner__btn-group">
              <a href="#" class="btn banner__button">Начать</a>
              <a href="#" class="btn btn-link banner__link">Узнать больше</a>
            </div>
          </div>
        </div>

        <ul class="tab">
          <li class="tab__item" :class="[active === 0 ? 'is-active' : '']">
            <a class="tab__link">
              <div class="container tab__content">
                <div class="row">
                  <div class="col-4">
                    <VueSlickCarousel :arrows="true" :dots="true">
                      <div class="card simple-item">
                        <div class="card-body simple-item__body">
                          <h5 class="card-title simple-item__title">
                            sunt aut facere repellat provident occaecati
                            excepturi optio reprehenderit
                          </h5>
                          <p class="card-text simple-item__text">
                            quia et suscipit suscipit recusandae consequuntur
                            expedita et cum reprehenderit molestiae ut ut quas
                            totam nostrum rerum est autem sunt rem eveniet
                            architecto
                          </p>
                        </div>
                      </div>
                      <div class="card simple-item">
                        <div class="card-body">
                          <h5 class="card-title simple-item__title">
                            qui est esse
                          </h5>
                          <p class="card-text simple-item__text">
                            est rerum tempore vitae sequi sint nihil
                            reprehenderit dolor beatae ea dolores neque fugiat
                            blanditiis voluptate porro vel nihil molestiae ut
                            reiciendis qui aperiam non debitis possimus qui
                            neque nisi nulla
                          </p>
                        </div>
                      </div>
                      <div class="card simple-item">
                        <div class="card-body">
                          <h5 class="card-title simple-item__title">
                            ea molestias quasi exercitationem repellat qui ipsa
                            sit aut
                          </h5>
                          <p class="card-text simple-item__text">
                            et iusto sed quo iure voluptatem occaecati omnis
                            eligendi aut ad voluptatem doloribus vel accusantium
                            quis pariatur molestiae porro eius odio et labore et
                            velit aut
                          </p>
                        </div>
                      </div>
                      <div class="card simple-item">
                        <div class="card-body">
                          <h5 class="card-title simple-item__title">
                            eum et est occaecati
                          </h5>
                          <p class="card-text simple-item__text">
                            ullam et saepe reiciendis voluptatem adipisci sit
                            amet autem assumenda provident rerum culpa quis hic
                            commodi nesciunt rem tenetur doloremque ipsam iure
                            quis sunt voluptatem rerum illo velit
                          </p>
                        </div>
                      </div>
                      <div class="card simple-item">
                        <div class="card-body">
                          <h5 class="card-title simple-item__title">
                            nesciunt quas odio
                          </h5>
                          <p class="card-text simple-item__text">
                            repudiandae veniam quaerat sunt sed alias aut fugiat
                            sit autem sed est voluptatem omnis possimus esse
                            voluptatibus quis est aut tenetur dolor neque
                          </p>
                        </div>
                      </div>
                    </VueSlickCarousel>
                  </div>
                  <div class="col-4">
                    <VueSlickCarousel
                      :arrows="true"
                      :dots="true"
                      :lazyLoad="ondemand"
                      :infinite="true"
                      :slidesToShow="1"
                      :slidesToScroll="1"
                    >
                      <div class="card lazy-load-item">
                        <div class="card-header lazy-load-item__content">
                          <a
                            href="#"
                            class="btn btn-link lazy-load-item__btn-link"
                            >Выбрать</a
                          >
                          <img
                            src="../../public/assets/Rostov.svg"
                            class="card-img-top lazy-load-item__card-img"
                            alt="img-1"
                          />
                        </div>
                        <div class="card-body lazy-load-item__content">
                          <h5 class="card-title lazy-load-item__title">
                            accusamus beatae ad facilis cum similique qui sunt
                          </h5>
                        </div>
                      </div>
                      <div class="card lazy-load-item">
                        <div class="card-header lazy-load-item__content">
                          <a
                            href="#"
                            class="btn btn-link lazy-load-item__btn-link"
                            >Выбрать</a
                          >
                          <img
                            src=""
                            class="card-img-top lazy-load-item__card-img"
                            alt="img-2"
                          />
                        </div>
                        <div class="card-body lazy-load-item__content">
                          <h5 class="card-title lazy-load-item__title">
                            reprehenderit est deserunt velit ipsam
                          </h5>
                        </div>
                      </div>
                      <div class="card lazy-load-item">
                        <div class="card-header lazy-load-item__content">
                          <a
                            href="#"
                            class="btn btn-link lazy-load-item__btn-link"
                            >Выбрать</a
                          >
                          <img
                            src=""
                            class="card-img-top lazy-load-item__card-img"
                            alt="img-3"
                          />
                        </div>
                        <div class="card-body lazy-load-item__content">
                          <h5 class="card-title lazy-load-item__title">
                            officia porro iure quia iusto qui ipsa ut modi
                          </h5>
                        </div>
                      </div>
                      <div class="card lazy-load-item">
                        <div class="card-header lazy-load-item__content">
                          <a
                            href="#"
                            class="btn btn-link lazy-load-item__btn-link"
                            >Выбрать</a
                          >
                          <img
                            src=""
                            class="card-img-top lazy-load-item__card-img"
                            alt="img-4"
                          />
                        </div>
                        <div class="card-body lazy-load-item__content">
                          <h5 class="card-title lazy-load-item__title">
                            culpa odio esse rerum omnis laboriosam voluptate
                            repudiandae
                          </h5>
                        </div>
                      </div>
                      <div class="card lazy-load-item">
                        <div class="card-header lazy-load-item__content">
                          <a
                            href="#"
                            class="btn btn-link lazy-load-item__btn-link"
                            >Выбрать</a
                          >
                          <img
                            src=""
                            class="card-img-top lazy-load-item__card-img"
                            alt="img-5"
                          />
                        </div>

                        <div class="card-body lazy-load-item__content">
                          <h5 class="card-title lazy-load-item__title">
                            natus nisi omnis corporis facere molestiae rerum in
                          </h5>
                        </div>
                      </div>
                    </VueSlickCarousel>
                  </div>
                  <div class="col-4">
                    <div class="card content">
                      <div class="card-header content__header">
                        <h5 class="card-title content__title">
                          Сергей Назаров
                        </h5>
                        <h6 class="card-subtitle content__subtitle">
                          sergeynazarov161@yandex.ru
                        </h6>
                      </div>
                      <div class="card-body content__content">
                        <p class="card-text content__text">
                          Давно выяснено, что при оценке дизайна и композиции,
                          читаемый текст мешает сосредоточиться.
                        </p>
                        <p class="card-text content__note">
                          Тел. +7 (951) 839-59-39
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li class="tab__item" :class="[active === 1 ? 'is-active' : '']">
            <a class="tab__link"
              ><app-category-carousel
                :isShow="true"
                :slidesShow="4"
                :slidesScroll="4"
            /></a>
          </li>
          <li class="tab__item" :class="[active === 2 ? 'is-active' : '']">
            <a class="tab__link"></a>
          </li>
          <li class="tab__item" :class="[active === 3 ? 'is-active' : '']">
            <a class="tab__link"><app-catalog /></a>
          </li>
        </ul>
        <nav class="navbar submit">
          <div class="container-fluid">
            <a class="navbar-brand submit__text">Оставить заявку</a>
            <form class="d-flex submit__form">
              <input
                type="text"
                class="form-control me-2 submit__input"
                placeholder="Ваше Имя"
              />
              <input
                type="text"
                class="form-control me-2 submit__input"
                placeholder="Ваш Email"
              />
              <button type="submit" class="btn submit__action">
                Отправить
              </button>
            </form>
          </div>
        </nav>
      </div>
    </div>

    <!--<app-feedback /> -->
    <!--<app-info-mode /> -->
    <!--<app-footer /> -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-3">
            <div class="card">
              <div class="card-header">Связаться с нами</div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">+7 (951) 839-59-39</li>
                <li class="list-group-item">
                  г.Ростов-на-Дону, ул.Максима Горького
                </li>
                <li class="list-group-item">Пн-Вс: 10.00 - 20.00</li>
                <li class="list-group-item">sergeynazarov161@yandex.ru</li>
              </ul>
            </div>
          </div>
          <div class="col-3">
            <div class="card">
              <div class="card-header">Услуги компании</div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Проф 1</li>
                <li class="list-group-item">Проф 2</li>
                <li class="list-group-item">Проф 3</li>
                <li class="list-group-item">Проф 4</li>
                <li class="list-group-item">Проф 5</li>
                <li class="list-group-item">Проф 6</li>
                <li class="list-group-item">Проф 7</li>
                <li class="list-group-item">Проф 8</li>
              </ul>
            </div>
          </div>
          <div class="col-3">
            <div class="card">
              <div class="card-header">Наши профкомпетенции</div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Проф 1</li>
                <li class="list-group-item">Проф 2</li>
                <li class="list-group-item">Проф 3</li>
                <li class="list-group-item">Проф 4</li>
                <li class="list-group-item">Проф 5</li>
              </ul>
            </div>
          </div>
          <div class="col-3">
            <nav class="navbar">
              <div class="container">
                <a href="#" class="navbar-brand">Логотип</a>
              </div>
            </nav>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Вконтакте</li>
              <li class="list-group-item">Твиттер</li>
              <li class="list-group-item">Инстаграмм</li>
              <li class="list-group-item">linked</li>
            </ul>
            <div class="alert alert-dark">sergeynazarov161@yandex.ru</div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
/*import AppAbout from "./index/partials/AppAbout.vue";*/
import AppCatalog from "./index/partials/AppCatalog.vue";
/*import AppFeedback from "./index/partials/AppFeedbackForm.vue";
import AppInfoMode from "./index/partials/AppInfoMode.vue";*/
import AppCategoryCarousel from "@/components/index/AppCategoryCarousel.vue";
/*import AppFooter from "@/components/index/AppFooter.vue";*/

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "IndexContent",
  components: {
    /*"app-about": AppAbout,*/
    "app-catalog": AppCatalog,
    /*"app-feedback": AppFeedback,
    "app-info-mode": AppInfoMode,*/
    "app-category-carousel": AppCategoryCarousel,
    /*"app-footer": AppFooter,*/
    VueSlickCarousel,
  },
  data: function () {
    return {
      active: 0,
      items: ["Главная", "О проекте", "Контакты", "Прайс-лист"],
    };
  },
  methods: {
    selected(_index) {
      this.active = _index;
    },
  },
};
</script>
<style scoped>
.panel {
  padding: 20px 40px;
}

.panel .panel__content {
  padding-left: 0;
  padding-right: 0;
}

.panel .panel__navbar {
  flex-grow: 0;
}

.panel .panel__nav {
  display: flex;
  align-items: center;
  grid-gap: 10px;
}

.panel .panel__nav-item:first-child .panel__nav-link {
  display: block;
  width: 14px;
  height: 14px;
  border: 2px solid #6630ff;
  border-radius: 0;
}

.panel .panel__nav-item:last-child .panel__nav-link {
  display: block;
  width: 178px;
  border: 2px solid #6630ff;
  padding: 11.5px 47px 11.5px 10px;
  font-size: 12px;
  line-height: 15px;
  color: #404045;
  border-radius: 0;
  text-transform: uppercase;
}

.panel__underline {
  width: calc(100% - calc(40px * 2));
  height: 1px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24.5px;
  border-bottom: 1px solid #6630ff;
}

.primary-nav {
  display: flex;
  grid-gap: 10px;
  padding-left: 40px;
  padding-right: 40px;
  margin-bottom: 24.5px;
}

.primary-nav .primary-nav__item {
  background-color: #fff;
  border: 2px solid #6630ff;
  color: #6630ff;
  padding: 11.5px 45px 11.5px 10px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600px;
  text-transform: uppercase;
  border-radius: 0;
}

.primary-nav .primary-nav__item.active {
  border: none;
  background-color: #6630ff;
  color: #fff;
}

.banner {
  position: relative;
}

.banner .banner__content {
  width: 50%;
  position: absolute;
  top: 50%;
  left: calc(50% / 2);
  background-color: transparent;
  border: none;
}

.banner .banner__title {
  color: #fff;
  font-size: 64px;
  font-weight: 700;
  line-height: 60px;
  padding-bottom: 10px;
}

.banner .banner__text {
  color: #fff;
  font-size: 14px;
  line-height: 16.94px;
}

.banner .banner__button {
  color: #fff;
  border-radius: 0;
  background-color: #6630ff;
  padding: 15px 25px;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 17.5px;
}

.banner .banner__link {
  color: #fff;
  background-color: transparent;
  padding: 15px 25px;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 17.5px;
}

.tab {
  padding-top: 72.5px;
  padding-left: 0;
}

.tab .tab__item {
  display: none;
}

.tab .tab__item.is-active {
  display: block;
}

.tab .tab__content {
  padding-left: 0;
  padding-right: 0;
}

.simple-item {
  background-color: #6630ff;
  border-radius: 0;
  padding: 35px 20px calc(28px + 18px) 20px;
  height: 360px;
  overflow: hidden;
}

.simple-item .simple-item__title {
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  padding-bottom: 10px;
  margin-bottom: 0;
}

.simple-item .simple-item__text {
  font-size: 14px;
  line-height: 17px;
  color: rgba(255, 255, 255, 0.6);
  padding-bottom: 18px;
}

.simple-item .simple-item__body {
  padding: 0;
}

.lazy-load-item {
  background-color: #6630ff;
  border-radius: 0;
  padding: 35px 20px calc(28px + 18px) 20px;
  height: 360px;
  overflow: hidden;
}

.lazy-load-item .lazy-load-item__content {
  padding: 0;
}

.lazy-load-item .lazy-load-item__content:first-child {
  position: relative;
  background-color: transparent;
  margin-bottom: 20px;
}

.lazy-load-item .lazy-load-item__btn-link {
  display: block;
  position: absolute;
  background-color: #fff;
  color: #6630ff;
  font-size: 12px;
  line-height: 15px;
  font-weight: 600;
  border-radius: 0;
  text-transform: uppercase;
  right: 0;
  margin-right: 10px;
}

.lazy-load-item .lazy-load-item__card-img {
  display: block;
  height: 225px;
}

.lazy-load-item .lazy-load-item__title {
  font-size: 14px;
  line-height: 17px;
  color: #fff;
  text-align: right;
  margin-bottom: 0;
}

.content {
  padding: 20px;
  border-radius: 0;
  border: none;
  height: 360px;
  background-color: #f8eefd;
}

.content .content__header {
  display: flex;
  align-items: baseline;
  grid-gap: 15px;
  background-color: transparent;
  padding: 0;
  margin-bottom: 10px;
}

.content .content__title {
  color: #111;
  margin-bottom: 0;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
}

.content .content__subtitle {
  font-size: 14px;
  line-height: 17px;
  color: #6630ff;
}

.content .content__content {
  padding: 0;
}

.content .content__text {
  font-size: 14px;
  line-height: 17px;
  color: #404045;
}

.content .content__note {
  font-size: 14px;
  line-height: 17px;
  color: #6630ff;
  font-weight: 600;
}

.submit .submit__text {
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
  color: #000;
}

.submit {
  padding: 0;
  margin-bottom: 100px;
}

.submit .submit__input {
  width: 396px;
  height: 38px;
  border-radius: 0;
  background-color: rgba(102, 48, 255, .2);
  border: none;
}

.submit .submit__input::placeholder {
  color: #6630ff;
  font-size: 14px;
  line-height: 17px;
}

.submit .submit__input:focus {
  border: 2px solid #b2b2b9;
}

.submit .submit__input:focus::placeholder {
  color: #404045;
}

.submit .submit__action {
  width: 122px;
  height: 38px;
  border: none;
  border-radius: 0;
  background-color: #6630ff;
  font-size: 14px;
  line-height: 18px;
  color: #fff;
}
</style>

<style>
.slick-dots {
  bottom: 50px !important;
  padding: 5px 18px;
}

.slick-dots li {
  margin: 5px;
  background-color: rgba(255, 255, 255, 0.6);
}

.slick-dots .slick-active {
  background-color: #fff;
}

.slick-arrow {
  top: 50%;
  width: 30px;
  height: 30px;
  margin: 0 5px;
  border: none;
  z-index: 100;
}

.slick-prev {
  left: 0;
}

.slick-next {
  right: 0;
}

.slick-prev,
.slick-next {
  background-color: #fff;
}

.slick-prev:hover,
.slick-prev:focus,
.slick-next:hover,
.slick-next:focus {
  background-color: #fff;
}

.slick-prev::before,
.slick-next::before {
  background-color: #fff;
  color: #6630ff;
  opacity: 1;
}
</style>
