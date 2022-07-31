<template>
  <section :class="[$style.layout]">
    <div :class="[$style.layoutWrap]">
      <div :class="[$style.layoutOuterBorder]">
        <div :class="[$style.layoutImgBorder]">
          <img
            :class="[$style.innerImg]"
            :src="leaderPhoto"
            alt="Фото сооснователя"
          />
        </div>
      </div>
    </div>
    <div :class="[$style.layoutForm]">
      <div :class="[$style.filledIconReverse]">
        <font-awesome-icon icon="fa-solid fa-file-pen" />
      </div>
      <form :class="[$style.formColumn]">
        <h3 :class="[$style.formHeadline]">03__оставить заявку</h3>
        <div :class="[$style.distenceInput, $style.contactForm]">
          <div :class="[$style.formControlWrap]">
            <input
              name="your_name"
              type="text"
              :class="[$style.formControl]"
              v-model="name"
              placeholder="Ваше имя*"
              autocomplete="off"
            />
            <span id="error" :class="[$style.invalidField]" v-if="!name.length"
              >Your field is empty</span
            >
          </div>
          <div :class="[$style.formControlWrap]">
            <ValidationProvider
              :rules="{
                regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              }"
              v-slot="{ errors }"
            >
              <input
                @input="isEmail(errors)"
                name="Your email"
                :class="[$style.formControl]"
                type="email"
                v-model="email"
                placeholder="Ваш email*"
                autocomplete="off"
              />
              <span id="error" :class="[$style.invalidField]">{{
                errors[0]
              }}</span>
            </ValidationProvider>
          </div>
        </div>
        <div :class="[$style.formControlWrap, $style.distanceInput]">
          <ValidationProvider
            :rules="{
              regex:
                /((8|\+7)-?)?\(?\d{3}\)?-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}/,
            }"
            v-slot="{ errors }"
          >
            <input
              @input="isPhone(errors)"
              name="Your phone"
              :class="[$style.formControl]"
              type="text"
              v-model="phone"
              placeholder="Ваш номер телефона"
              autocomplete="off"
            />
            <span id="error" :class="[$style.invalidField]">{{
              errors[0]
            }}</span>
          </ValidationProvider>
        </div>
        <div :class="[$style.formControlWrap]">
          <input
            name="your_message"
            type="text"
            :class="[$style.formControl, $style.resizeControl]"
            v-model="message"
            placeholder="Ваше сообщение*"
            autocomplete="off"
          />
          <span id="error" :class="[$style.invalidField]" v-if="!message.length"
            >Your message is empty</span
          >
        </div>
        <div :class="[$style.formButton]">
          <input
            type="submit"
            v-if="name && isEmailActive && isPhoneActive && message"
            :class="[$style.formControlSubmit]"
            value="Отправить"
          />
          <input
            type="submit"
            v-else
            :class="[$style.formControlSubmit, $style.disabledSubmit]"
            value="Отправить"
            disabled
          />
        </div>
      </form>
    </div>
  </section>
</template>
<script>
import { ValidationProvider, extend } from "vee-validate";
import { regex } from "vee-validate/dist/rules";
import leader from '../../public/assets/leader.svg';

extend("regex", regex);

export default {
  name: "ContactUs",
  components: {
    ValidationProvider,
  },
  data: function () {
    return {
      leaderPhoto: leader, 
      name: "",
      email: "",
      phone: "",
      message: "",
      isEmailActive: null,
      isPhoneActive: null,
    };
  },
  methods: {
    isEmail(err) {
      this.isEmailActive = err[0] ? 0 : 1;
    },
    isPhone(err) {
      this.isPhoneActive = err[0] ? 0 : 1;
    },
  },
};
</script>

<style module>
.layout {
  display: flex;
  padding-top: 60px;
  background-color: #6630ff;
  margin-bottom: 58.5px;
}

.layoutWrap {
  flex: 4;
  padding: 19.5px;
}

.layoutOuterBorder {
  position: relative;
  display: block;
}

.layoutOuterBorder::before,
.layoutOuterBorder::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid #fff;
  z-index: 10;
}

.layoutOuterBorder::before {
  top: -13px;
  left: -13px;
}

.layoutOuterBorder::after {
  right: -13px;
  bottom: -13px;
}

.layoutImgBorder {
  position: relative;
  padding: 6.5px;
  background: #fff;
  z-index: 100;
}

.innerImg {
  display: block;
  width: 100%;
}

.layoutForm {
  position: relative;
  flex: 6;
  padding: 260px 0 130px;
}

.formColumn {
  width: 100%;
  height: 100%;
  padding-left: 60px;
  padding-right: 60px;
}

.filledIconReverse {
  position: absolute;
  top: 0;
  left: 0;
  width: 120px;
  height: 120px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6630ff;
  font-size: 60px;
}

.formHeadline {
  font-size: 16px;
  line-height: 1.1;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 39px;
}

.distanceInput {
  margin-bottom: 6.5px;
}

.contactForm {
  display: flex;
  grid-gap: 26px;
}

.formControlWrap {
  position: relative;
  flex: 5;
}

.formControlWrap:nth-child(2) {
  margin-bottom: 6.5px;
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

.formControl {
  width: 100%;
  background-color: rgba(248, 238, 253, 0.1);
  padding: 13px;
  border: none;
}

.formControl::placeholder {
  color: #fff;
}

.formControl:active,
.formControl:hover,
.formControl:focus {
  outline: 0;
  outline-offset: 0;
}

.resizeControl {
  height: 85px;
}

.formButton {
  margin-top: 26px;
}

.formControlSubmit {
  appearance: none;
  border: 0;
  background-color: #6630ff;
  border: 2px solid #fff;
  color: #fff;
  padding: 13px 26px;
  font-size: 16px;
  line-height: 1.1;
  cursor: pointer;
}

.disabledSubmit {
  background-color: rgba(248, 238, 253, 0.1);
  border: none;
  cursor: auto;
}

@media all and (max-width: 360px) {
  .layout {
    display: block;
    padding: 0;
  }

  .layoutWrap {
    margin-bottom: 19.5px;
  }

  .contactForm {
    display: block;
  }

  .formControlWrap:first-child {
    padding-bottom: 6.5px;
  }

  .invalidField {
    position: relative;
  }
}
</style>
