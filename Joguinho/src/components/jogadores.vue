<template>
    <div class="jogadores-container">
      <div
        class="caixajogadores"
        v-for="(jogador, index) in jogadores"
        :key="jogador.nome"
        :style="{ borderColor: jogador.cor }"
      >
        
        <div class="jogadores">
          <div class="nome">
            <h1>{{ jogadorSalvo[index] }}</h1>
          </div>
          <div class="posicao">
            <h1>{{ jogador.posicao }}°</h1>
          </div>
        </div>
  
        <!-- <div class="caixapoderes">
          <div class="poderes" v-for="(poder, index) in jogador.poderes" :key="index"></div>
        </div> -->
  
        <div class="caixapontos">
          <div class="pontos">
            <h1>{{ jogador.pontos }}</h1>
          </div>
        </div>
      </div>
    </div>
  </template>
  

  <script>
  export default {
    name: "jogadores",
    data() {
      return {
        jogadorSalvo: '',
        jogadores: [
          { nome: "Rene", posicao: 1, poderes: [1, 2, 3, 4, 5], pontos: 20, cor: "#bce1ab" },
          { nome: "Advalker", posicao: 2, poderes: [1, 2, 3, 4, 5], pontos: 18, cor: "#573e54" },
          { nome: "João", posicao: 3, poderes: [1, 2, 3, 4, 5], pontos: 16, cor: "#361542" },
          { nome: "Fernanda", posicao: 4, poderes: [1, 2, 3, 4, 5], pontos: 14, cor: "#828a7d" },
        ],
      };
    },

    methods:{
      pegaJogadores(){
        this.jogadorSalvo = JSON.parse(localStorage.getItem("jogadores"));
        console.log("pegou os jogadores", this.jogadorSalvo)
      }
    },

    mounted() {
      this.pegaJogadores();
    }
  };
  </script>
  

<style scoped>
.jogadores-container {
  display: flex;
  gap: 20px; 
  justify-content: center; 
  flex-wrap: wrap; 
}

.caixajogadores {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border: 3px solid; 
  border-radius: 10px;
  padding: 10px;
  width: 300px;
  color: rgb(0, 0, 0);
}

.jogadores {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
}

.nome h1 {
  margin: 0;
  font-size: 1.5rem;
  text-align: center;
  flex: 1; 
}

.posicao h1 {
  margin: 0;
  font-size: 1rem; 
  position: absolute;
  right: 0; 
  top: 0px; 
}

.caixapoderes {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin: 10px 0;
}

.poderes {
  width: 30px;
  height: 30px;
  background-color: #b9b9b9;
  border-radius: 50%;
}

.caixapontos {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.pontos h1 {
  font-size: 2rem;
  margin: 0;
}

</style>
 -->














<!-- 
<!-- <template>
    <div class="caixajogadores">
        <div class="jogadores">
            <div class="nome"><h1>Rene</h1></div>
            <div class="posicao"><h1>1°</h1></div>
        </div>
        <div class="caixapoderes">
            <div class="poderes"></div>
            <div class="poderes"></div>
            <div class="poderes"></div>
            <div class="poderes"></div>
            <div class="poderes"></div>
        </div>
        <div class="caixapontos">
            <div class="pontos"><h1>20</h1></div>
        </div>
    </div>
</template>
<script>
</script>
<style>
    .caixajogadores{
        .jogadores{
            .nome{
                h1{

                }
            }
            .posicao{
                h1{
                    
                }
            }
        }
        .caixapoderes{

        }
        .caixapontos{

        }
    }
</style> --> -->