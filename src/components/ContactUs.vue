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
            <form :class="[$style.formColumn]">
                <h3 :class="[$style.formHeadline]">03__оставить заявку</h3>
                <div :class="[$style.formRow, $style.contactForm]">
                    <div :class="[$style.formControlWrap]">
                        <input type="text" :class="[$style.formControl]" placeholder="Ваше имя*" name="your-name" />
                    </div>
                    <div :class="[$style.formControlWrap]">
                        <input type="email" :class="[$style.formControl]" placeholder="Ваш email*" name="your-email" />
                    </div>
                </div>
                <div :class="[$style.formRow]">
                    <input type="tel" :class="[$style.formControl]" placeholder="Ваш номер телефона" name="your-tel" />
                </div>

                <textarea :class="[$style.formControl, $style.resizeControl]" placeholder="Текст сообщения*" name="your-message"></textarea>
                <div :class="[$style.formButton]">
                    <input type="submit" :class="[$style.formControlSubmit]" value="Отправить" />
                </div>
            </form>
        </div>
    </section>
</template>
<script>
export default {
    name: 'ContactUs',
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
    resize: none;
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