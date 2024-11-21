<template>
    <div class="caixaRodape">
        <h1>Direitos Autorais</h1>
    </div>
</template>
<script>
    export default {
        name: "rodape",
    }
</script>
<style>
    .caixaRodape{
        background-color: #fff;
        display: flex;
        justify-content: center;
        position: absolute;
        padding: 10px;
        right: 0;
        left: 0;
        bottom: 0;

        h1{
            font-size: 16px;
            color: #000;
        }
    }
</style>