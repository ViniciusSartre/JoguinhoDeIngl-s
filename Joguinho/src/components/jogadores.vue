<template>
    <div class="jogadores-container">
      <div
        class="caixajogadores"
        v-for="(jogador) in jogadorSalvo"
        :key="jogador.nome"
        :style="{ borderColor: jogador.cor }"
      >
        
        <div class="jogadores">
          <div class="nome">
            <h1>{{ jogador.nome }}</h1>
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
            <h1>{{ pontos[jogador.posicao] }}</h1>
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
      jogadorSalvo: [],
      pontos: [0, 0, 0, 0], // Inicializando o array reativo
    };
  },
  methods: {
    pegaJogadores() {
      this.jogadorSalvo = JSON.parse(localStorage.getItem("jogadores")) || [];
      console.log("Jogadores carregados:", this.jogadorSalvo);
    },
    pegaPontos() {
      // Atualiza os pontos diretamente no array reativo
      this.pontos = this.pontos.map((_, index) =>
        parseInt(localStorage.getItem(`pontos${index}`), 10) || 0
      );
    },
    sincronizaPontos() {
      console.log("Sincronizando pontos com localStorage");
      this.pegaPontos();
    },
  },
  mounted() {
    this.pegaJogadores();
    this.pegaPontos();

    // Listener para mudanças no localStorage
    window.addEventListener("storage", this.sincronizaPontos);
  },
  beforeUnmount() {
    // Remove o listener ao destruir o componente
    window.removeEventListener("storage", this.sincronizaPontos);
  },
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
  width: 150px;
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