<template>
  <div class="caixaCartas">
    <!-- Exibe o jogador atual sem a posição -->
    <div v-if="jogadorAtual" class="informacao-jogador">
      <h1>Vez de: {{ jogadorAtual.nome }}</h1>
    </div>

    <!-- Exibe as cartas -->
    <div class="cartas">
      <div class="carta"></div>
      <div class="carta" v-if="cartaAtual">
        <!-- Topo (área superior da carta) -->
        <div class="topo-carta" :style="{ backgroundImage: cartaAtual.imagem ? `url(${cartaAtual.imagem})` : 'none' }"></div>

        <!-- Corpo principal (área central da carta) -->
        <div class="corpo-carta">
          <p>{{ cartaAtual.texto }}</p>
        </div>

        <!-- Rodapé (área inferior da carta) -->
        <div class="rodape-carta">
          <div class="botao botao-esquerda">
            <input type="text" v-model="respostaJogador" placeholder="Digite Aqui">
          </div>
          <div class="botao botao-direita">
            <input type="button" value="Enviar" @click="verificarResposta">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cartas",
  data() {
    return {
      jogadores: [],  // Lista de jogadores
      turnoAtual: 0,   // Índice do jogador atual
      respostaJogador: "", // Resposta do jogador
      cartas: {
        0: { nivel: "1", texto: "Qualquer coisa", resposta: "Sim", imagem: "https://portalgerais.com/wp-content/uploads/2014/11/o-que-te-faz-feliz-600x376.jpg" },
        1: { nivel: "1", texto: "Qualquer coisa 2", resposta: "Não", imagem: "https://st4.depositphotos.com/2934765/28878/v/450/depositphotos_288788394-stock-illustration-emoji-smile-icon-vector-symbol.jpg" },
        2: { nivel: "1", texto: "Qualquer coisa 3", resposta: "Não", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQvCWG9vl-2ioYShf7hXqPTsQOtxUcET1Sg&s" },
      },
      cartaAtual: null,
    };
  },
  computed: {
    jogadorAtual() {
      return this.jogadores[this.turnoAtual];
    },
  },
  methods: {
    // Carrega os jogadores do localStorage
    carregarJogadores() {
      const jogadoresSalvos = JSON.parse(localStorage.getItem("jogadores"));
      if (jogadoresSalvos) {
        this.jogadores = jogadoresSalvos;
      } else {
        this.jogadores = [];  // Se não houver jogadores, iniciamos uma lista vazia
      }
    },

    // Avança para o próximo turno
    proximoTurno() {
      if (this.jogadores.length > 0) {
        this.turnoAtual = (this.turnoAtual + 1) % this.jogadores.length;
        this.sortearCarta(); // Sorteia uma nova carta após o turno mudar
      }
    },

    // Sorteia uma carta aleatória
    sortearCarta() {
      const idsCartas = Object.keys(this.cartas);
      let idAleatorio;
      do {
        idAleatorio = idsCartas[Math.floor(Math.random() * idsCartas.length)];
      } while (this.cartaAtual && this.cartaAtual === this.cartas[idAleatorio]);

      this.cartaAtual = this.cartas[idAleatorio];
    },

    // Verifica a resposta do jogador e avança para o próximo turno
    verificarResposta() {
      if (this.respostaJogador.trim().toLowerCase() === this.cartaAtual.resposta.toLowerCase()) {
        alert("Resposta Correta!");
      } else {
        alert("Resposta Errada!");
      }
      this.proximoTurno(); // Avança para o próximo turno
      this.respostaJogador = ""; // Limpa a resposta do jogador
    },

    // Inicia o jogo e seleciona o primeiro jogador e carta
    iniciarJogo() {
      this.carregarJogadores();
      if (this.jogadores.length > 0) {
        this.sortearCarta(); // Sorteia a primeira carta
      } else {
        alert("Nenhum jogador encontrado!");
      }
    },
  },
  mounted() {
    this.iniciarJogo(); // Inicia o jogo ao carregar o componente
  },
};
</script>

<style scoped>
.caixaCartas {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
}

.informacao-jogador {
  margin-bottom: 20px;
}

.cartas {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.carta {
  width: 300px;
  height: 450px;
  background-color: lightgray;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid #ffffff;
  overflow: hidden;
}

.topo-carta {
  width: 100%;
  height: 35%;
  background-position: center;
  border-bottom: 1px solid #bbb;
  border-radius: 16px 16px 0 0;
}

.corpo-carta {
  width: 100%;
  height: 45%;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rodape-carta {
  width: 100%;
  height: 20%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-top: 1px solid #ccc;
}

.botao {
  width: 200px;
  height: 40px;
  background-color: #888888;
  border-radius: 8px;
  font-size: 12px;
  color: #ffffff;
  text-align: center;
}

.botao-esquerda {
  background-color: #999999;
}

.botao-esquerda input {
  background-color: transparent;
  border: none;
  width: 190px;
  height: 28px;
  padding: 5px;
  border-radius: 8px;
  color: white;
}

.botao-direita {
  background-color: #666666;
  width: 60px;
}

.botao-direita input {
  width: 60px;
  height: 40px;
  border-radius: 8px;
  border: none;
  color: white;
  background: none;
  cursor: pointer;
}
</style>