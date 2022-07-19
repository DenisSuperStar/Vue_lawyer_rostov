<template>
    <section :class="[$style.layout]">
        <div :class="[$style.layoutWrap]">
            <div :class="[$style.layoutOuterBorder]">
                <div :class="[$style.layoutImgBorder]">
                    <img :class="[$style.innerImg]" src="../../public/assets/leader.svg" alt="Фото сооснователя" />
                </div>
            </div>
        </div>
        <div :class="[$style.layoutForm]">
            <div :class="[$style.formColumn]">
                <h3 :class="[$style.formHeadline]">03__оставить заявку</h3>
                <div :class="[$style.formRow, $style.contactForm]">
                    <div :class="[$style.formControlWrap]">
                        <input @input="isField()" name="your_name" type="text" :class="[$style.formControl]"
                            placeholder="Ваше имя *" v-model="name" />
                        <span id="error" v-if="!isField()">Your field is not empty</span>
                    </div>
                    <div :class="[$style.formControlWrap]">
                        <ValidationProvider :rules="{regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}"
                            v-slot="{errors}">
                            <input @input="isEmail(errors)" name="Your email" :class="[$style.formControl]" type="email"
                                placeholder="Ваш email*" v-model="email" />
                            <span id="error">{{errors[0]}}</span>
                        </ValidationProvider>
                    </div>
                </div>
                <div :class="[$style.formRow]">
                    <ValidationProvider
                        :rules="{regex:/((8|\+7)-?)?\(?\d{3}\)?-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}/}"
                        v-slot="{ errors }">
                        <input @input="isPhone(errors)" name="Your phone" :class="[$style.formControl]" type="text"
                            placeholder="Ваш номер телефона" v-model="phone" />
                        <span id="error">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <input @input="isMessage()" name="your_message" type="text"
                    :class="[$style.formControl, $style.resizeControl]" placeholder="Текст сообщения*" v-model="message" />
                <span id="error" v-if="!isMessage()">Your message is not empty</span>
                <div :class="[$style.formButton]">
                    <input type="submit" :class="[$style.formControlSubmit]" value="Отправить" />
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { ValidationProvider, extend } from "vee-validate";
import { regex } from "vee-validate/dist/rules";

extend("regex", regex);

export default {
    name: 'ContactUs',
    components: {
        ValidationProvider
    },
    data: function () {
        return {
            name: "",
            email: "",
            phone: "",
            message: ""
        }
    },
    methods: {
        isField() {
            return this.name ? this.name.length : "";
        },
        isEmail(errors) {
            return errors[0].length ? true : false
        },
        isPhone(errors) {
            return errors[0].length ? true : false
        },
        isMessage() {
            return this.message ? this.message.length : "";
        }
    }
}
</script>

<style module>


.layout {
display: flex;
padding-top: 60px;
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
    border: 2px solid #6630ff;
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
    z-index: 100;
    padding: 6.5px;
    background: #fff;
    box-shadow: 1px 1px 20px 0 rgba(102, 48, 255, .1);
}

.innerImg {
    display: block;
    width: 100%;
}

.layoutForm {
    flex: 6;
    padding-top: 260px;
    padding-bottom: 130px;
}

.formColumn {
    width: 100%;
    height: 100%;
    padding-left: 60px;
    padding-right: 60px;
}

.formHeadline {
    font-size: 16px;
    line-height: 1;
    text-transform: uppercase;
    color: #6630FF;
    margin-bottom: 39px;
}

.formRow {
    margin-bottom: 6.5px;
}

.contactForm {
    display: flex;
    grid-gap: 26px;
}

.formControlWrap {
    flex: 5;
}

.formControl {
    width: 100%;
    border: 2px solid #B2B2B9;
    padding: 13px;
}

.resizeControl {
    height: 85px;
}
.formControl::placeholder {
    color: #B2B2B9;
}
.formControl:active,
.formControl:hover,
.formControl:focus {
    outline: 0;
    outline-offset: 0;
    border: 2px solid #6630FF;
}

.formControl {
    color: #6630FF;
}

.formButton {
    margin-top: 26px;
}

.formControlSubmit {
    appearance: none;
    border: 0;
    background-color: #6630FF;
    color: #fff;
    padding: 13px 26px;
    font-size: 14px;
    line-height: 1.25;
}
</style>