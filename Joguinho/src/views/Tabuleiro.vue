<template>
    <div class="caixaTabuleiro">
        <div>
            <div class="jogadores">
                <Jogadores />
            </div>
            <div class="cartas">
                <Cartas />
            </div>
            <div class="rodape">
                <Rodape />
            </div>
        </div>
    </div>
</template>
<script>
    import Cartas from "../components/cartas.vue"
    import Jogadores from "../components/jogadores.vue"
    import Rodape from "../components/footer.vue"
    export default {
        name: "Tabuleiro",
        components: {
            Cartas,
            Jogadores,
            Rodape,
        }                 
    }
</script>
<style>
    .caixaTabuleiro{
        background-color: #5c5c5c;
        height: 100vh;
    }
</style>                  