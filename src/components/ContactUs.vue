<template>
    <div class="consult">
        <div class="consult-1">
            <div class="consult-title">
                03__Связь с нами
            </div>
            <div class="consult-text">
                Наша юридическая фирма предоставит полную информацию о вашем юрилическом вопросе
            </div>
            <div :class="[$style.imageDecor]">
                <img src="../../public/assets/leader.svg" :class="[$style.columnImage]" alt="Фото сооснователя">
            </div>
        </div>
        <div class="consult-2">
            <form class="consult-form">

            </form>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style module>
    .imageDecor {
    position: relative;
    border: 5px solid #fff;
}

.imageDecor::before,
.imageDecor::after {
    content: "";
    position: absolute;
    width: 150px;
    height: 55px;
    background: #fff;
}

.imageDecor::before {
    left: -50px;
    bottom: -30px;
    transform: rotate(30deg);
}

.imageDecor::after {
    right: -50px;
    bottom: -30px;
    transform: rotate(-30deg);
}

.columnImage {
    display: block;
}
</style>

<style>
    .consult-1 {
        width: 40%;
    }
</style>