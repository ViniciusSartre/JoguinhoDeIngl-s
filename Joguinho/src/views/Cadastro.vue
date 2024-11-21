<template>
    <div>
        <Formulario />
        <Rodape />
    </div>
</template>
<script>
    import Cartas from "../components/cartas.vue"
    import Formulario from "../components/formulario.vue"
    import Rodape from "../components/footer.vue"
    export default {
        name: "Cadastro",
        components: {
            Cartas,
            Formulario,
            Rodape,
        }
    }
</script>
<style>
</style>