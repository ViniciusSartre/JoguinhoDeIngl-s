<template>
    <div class="cadastro">
      <div class="caixaconteudo">
        <div class="titulo">
          <h1>Nome do Jogo</h1>
        </div>
        <div class="subtitulo">
          <h2>Cadastre os Jogadores</h2>
        </div>
        <form @submit.prevent="irParaProximaEtapa">
          <div class="jogador" v-for="(jogador, index) in jogadores" :key="index">
            <label>
              Jogador {{ index + 1 }}
              <input
                type="text"
                v-model="jogadores[index]"
                :placeholder="'Jogador ' + (index + 1)"
              />
            </label>
          </div>
          <div class="botao">
            <input type="submit" value="jogar" />
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Formulario",
    data() {
      return {
        jogadores: ["", "", "", ""],
      };
    },
    methods: {
      irParaProximaEtapa() {
        console.log("Jogadores cadastrados:", this.jogadores);
        alert("Jogadores cadastrados com sucesso: " + this.jogadores.join(", "));
      },
    },
  };
  </script>
  
  <style scoped>
  .cadastro {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: gray;
    color: white;
    align-content: center;
  }
  
  .caixaconteudo {
    width: 30%;
    margin: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 50px;
    background-color: darkgray;
  }
  
  .titulo {
    font-size: 25px;
    margin: 0 0 30px 0;
  }
  
  .subtitulo {
    font-size: 20px;
    margin: 0 0 10px 0;
  }
  
  .jogador {
    margin-bottom: 10px;
  }
  
  .jogador label {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .jogador input {
    border: none;
    margin: 5px;
    padding: 12px;
    border-radius: 30px;
  }
  
  .botao {
    display: flex;
    justify-content: center;
  }
  
  .botao input {
    margin: 10px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>