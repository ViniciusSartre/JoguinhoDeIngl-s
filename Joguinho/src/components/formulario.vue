<template>
    <div class="cadastro">
      <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1507580/ss_8db1997119b44bf18e6c41d72b696b097210ce8d.1920x1080.jpg?t=1732837719" alt="">
      <div class="caixaconteudo">
        <div class="titulo">
          <h1>Guess!</h1>
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
            <input type="submit" value="JOGAR" />
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
        // alert("Jogadores cadastrados com sucesso: " + this.jogadores.join(", "));
        localStorage.setItem("jogadores", JSON.stringify(this.jogadores));
        this.$router.push('/tabuleiro')
      },
    },
  };
  </script>
  
  <style scoped>
  .cadastro {
    display: flex;
    position: relative;
    flex-direction: column;
    height: 100vh;
    /* background-color: gray; */
    color: white;
    align-content: center;

    img{
      filter: blur(5px);
      display: block;
      max-width: 100vw;
      max-height: 100vh;
    }
  }
  
  .caixaconteudo {
    position: absolute;
    width: 30%;
    margin-top: 20vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 50px;
    background-color: #a9a9a9cb;
    align-self: center;
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

  .botao input:hover {
    background-color: black;
    color: white;
  }
  </style>