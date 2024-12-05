<template>
  <div class="caixaCartas">
    <div class="botao voltar">
      <input type="button" value="VOLTAR" @click="voltar">
    </div>

    <!-- Exibe o jogador atual sem a posição -->
    <div v-if="cartaHabilitada">
      <div v-if="jogadorAtual" class="informacao-jogador">
      <h1>Vez de: {{ jogadorAtual.nome }}</h1>
      </div>      
    </div>
    <div v-if="jogadorVencedor" class="informacao-jogador">
      <h1>O Vencedor é <br> {{ jogadorMaisPontos.nome }}</h1>
      </div>
    <!-- Exibe as cartas -->
    <div class="cartas" v-if="cartaHabilitada">
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
    <div class="botao resete">
      <input type="button" value="RESETAR" @click="resetaJogo">
    </div>
    <div v-if="mensagemErro" class="mensagem-erro" :style="{backgroundColor: mensagemCor}">
      <p>{{ mensagemErro }}</p>
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
      respondidas: [],
      cartaHabilitada: true,
      mensagemCor: "red",
      jogadorVencedor: false,
      ponto:{
        0: 0,
        1: 0,
        2: 0,
        3: 0,
      },
      cartas: {
        0: { nivel: "1", texto: "What color is the sky on a clear day?", resposta: "Blue", imagem: "https://i.pinimg.com/originals/b5/bb/87/b5bb87a208d6ef3510fbfa8dd2177e73.jpg" },
        1: { nivel: "1", texto: "How many legs does a spider have?", resposta: "Eight", imagem: "https://img.freepik.com/fotos-premium/teia-de-aranha-na-teia-de-aranha-real-do-fundo-preto-da-escuridao_868749-7862.jpg" },
        2: { nivel: "1", texto: "What is the opposite of 'cold'?", resposta: "Hot", imagem: "https://wallpapercave.com/wp/wp3335319.jpg" },
        3: { nivel: "1", texto: "What animal says 'woof'?", resposta: "Dog", imagem: "https://static.vecteezy.com/ti/vetor-gratis/p3/20736956-cachorro-latido-animal-som-efeito-texto-dentro-uma-discurso-bolha-balao-clipart-fofa-desenho-animado-onomatopeia-historias-em-quadrinhos-e-rotulacao-vetor.jpg" },
        4: { nivel: "1", texto: "What planet do we live on?", resposta: "Earth", imagem: "https://s.hdnux.com/photos/43/10/55/9210689/6/1200x0.jpg" },
        5: { nivel: "1", texto: "What is the first letter of the alphabet?", resposta: "A", imagem: "https://img.freepik.com/premium-photo/multicolored-letters-english-alphabet-mixed-pink_74906-2986.jpg" },
        6: { nivel: "1", texto: "What fruit is yellow and curved?", resposta: "Banana", imagem: "https://www.fmdos.cl/wp-content/uploads/2017/05/frutas.jpg" },
        7: { nivel: "1", texto: "How many days are in a week?", resposta: "Seven", imagem: "https://img.freepik.com/premium-photo/calendar-white-background-3d-rendering_519469-7595.jpg?w=2000" },
        8: { nivel: "1", texto: "What do bees make?", resposta: "Honey", imagem: "https://img.ibxk.com.br/2019/10/17/17093503091025.jpeg" },
        9: { nivel: "1", texto: "What is the capital of France?", resposta: "Paris", imagem: "https://www.creativefabrica.com/wp-content/uploads/2023/02/27/Eiffel-Tower-Pencil-Sketch-62684714-1.png" },
        10: { nivel: "1", texto: "What is the main ingredient in bread?", resposta: "Flour", imagem: "https://img.freepik.com/fotos-premium/um-desenho-de-um-pouco-de-pao-e-um-pouco-de-pao-sobre-uma-mesa_890183-4698.jpg?w=826" },
        11: { nivel: "1", texto: "How many continents are there on Earth?", resposta: "Seven", imagem: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2023/02/mapa-mundi-em-fundo-azul.jpg" },
        12: { nivel: "1", texto: "What is the boiling point of water in Celsius?", resposta: "100 degrees", imagem: "https://static.vecteezy.com/ti/vetor-gratis/p2/6730612-agua-fervente-em-panela-panela-no-fogao-com-agua-vapor-fogo-design-vetor.jpg" },
        13: { nivel: "1", texto: "Who wrote 'Romeo and Juliet'?", resposta: "William Shakespeare", imagem: "https://cdn5.colorir.com/desenhos/color/201532/pilha-de-livros-colegio-1121090.jpg" },
        14: { nivel: "1", texto: "What is the largest bone in the human body?", resposta: "Femur", imagem: "https://upload.wikimedia.org/wikipedia/commons/2/27/Homo_sapiens_skeleton_-_MUSE.JPG" },
        15: { nivel: "1", texto: "What is the chemical symbol for gold?", resposta: "Au", imagem: "https://static.vecteezy.com/ti/vetor-gratis/p1/31091089-ouro-barra-simples-desenho-animado-ilustracao-marketing-conceito-icone-isolado-vetor.jpg" },
        16: { nivel: "1", texto: "Which planet is known as the 'Red Planet'?", resposta: "Mars", imagem: "https://cdn5.colorir.com/desenhos/color/202037/sistema-solar-espaco-1610788.jpg" },
        17: { nivel: "1", texto: "Who painted the 'Mona Lisa'?", resposta: "Leonardo da Vinci", imagem: "https://midias.jb.com.br/_midias/jpg/2020/10/02/1100x732/1_monalisa-557041.jpg" },
        18: { nivel: "1", texto: "What is the square root of 144?", resposta: "12", imagem: "https://img.freepik.com/vetores-premium/vetor-de-quadro-branco-em-branco-na-parede-de-tijolos-brancos-para-espaco-de-copia-ilustracao-vetorial-em-branco_542094-507.jpg?w=1380" },
        18: { nivel: "1", texto: "What is the name of our natural satellite?", resposta: "Moon", imagem: "https://static.vecteezy.com/ti/vetor-gratis/p3/13260861-sistema-solar-ilustracao-em-realista-do-sol-e-oito-planetas-que-orbitam-vetor.jpg" },
      },
      cartaAtual: null,
    };
  },
  computed: {
    jogadorAtual() {
      return this.jogadores[this.turnoAtual];
    },
    jogadorMaisPontos() {
      const pontos = Object.values(this.ponto);
      const jogadorMaisPontos = pontos.indexOf(Math.max(...pontos));
      return this.jogadores[jogadorMaisPontos];
    }
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
      const idsCartas = Object.keys(this.cartas).filter(id => !this.respondidas.includes(id)); // Exclui as cartas já respondidas
      if (idsCartas.length === 0) {
        this.mensagemErro = "Todas as cartas já foram respondidas!";
    this.mensagemCor = "black";
        setTimeout(() => {
          this.mensagemErro = "";
          this.mensagemCor = "red";
        }, 5000);
        // alert("Todas as cartas já foram respondidas!");
        this.cartaHabilitada = false;
        this.jogadorVencedor = true;
        this.jogadorMaisPontos();
        return; // Se todas as cartas foram respondidas, não sorteia mais cartas
      }
      
      let idAleatorio = idsCartas[Math.floor(Math.random() * idsCartas.length)];
      this.cartaAtual = this.cartas[idAleatorio];
    },


    // Verifica a resposta do jogador e avança para o próximo turno
    verificarResposta() {
  if (this.respostaJogador.trim().toLowerCase() === this.cartaAtual.resposta.toLowerCase()) {
    // Marca a carta como respondida
    const cartaId = Object.keys(this.cartas).find(id => this.cartas[id] === this.cartaAtual);
    this.respondidas.push(cartaId); // Adiciona a carta ao array de respondidas
    
    // Lógica de pontuação (não mudou)
    this.ponto[this.turnoAtual]++;
    localStorage.setItem(`pontos${this.turnoAtual}`, this.ponto[this.turnoAtual]);
    const event = new Event("storage");
    window.dispatchEvent(event);
    this.mensagemErro = "Resposta Correta.";
    this.mensagemCor = "green";
        setTimeout(() => {
          this.mensagemErro = "";
          this.mensagemCor = "red";
        }, 3000);
    // alert("Resposta Correta! Jogador " + this.turnoAtual + " tem " + this.ponto[this.turnoAtual]);
  } else {
    this.mensagemErro = "Resposta Errada.";
        setTimeout(() => {
          this.mensagemErro = "";
        }, 3000);
    // alert("Resposta Errada!");
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

    voltar(){
      localStorage.clear();
      this.$router.push("/");
    },

    resetaJogo(){
      this.ponto[0] = 0;
      this.ponto[1] = 0;
      this.ponto[2] = 0;
      this.ponto[3] = 0;

      localStorage.setItem("pontos0", this.ponto[0]);
      localStorage.setItem("pontos1", this.ponto[1]);
      localStorage.setItem("pontos2", this.ponto[2]);
      localStorage.setItem("pontos3", this.ponto[3]);

      this.cartaHabilitada = true;
      this.jogadorVencedor = false;
      this.respondidas = [];
      const event = new Event("storage");
      window.dispatchEvent(event);
    }
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
  margin-top: 10vh;
}

.informacao-jogador {
  margin-bottom: 20px;

  h1{
    color: #fff;
    text-align: center;
  }
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
  background-image: url(../img/imagem_para_verso_de_carta_Guess.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid #ffffff;
  overflow: hidden;
}

.topo-carta {
  width: 100%;
  height: 35%;
  background-position: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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

.voltar{
  width: 100px;
  margin-right: 500px;
  margin-bottom: 10px;
  align-self: right;
  background-color: #fff;

  input{
    border: none;
    background: none; 
    cursor: pointer;
    height: 40px;
    width: 100px;
  }
}

.resete{
  margin-top: 20px;
  width: 100px;

  input{
    border: none;
    background: none;
    color: #fff;
    cursor: pointer;
    height: 40px;
    width: 100px;
  }
}
.mensagem-erro {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: red;
  padding: 15px 25px;
  border-radius: 10px;
  color: white;
  font-weight: bolder;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>