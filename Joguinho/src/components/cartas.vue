<template>
  <div class="caixaCartas">
    <div class="carta"></div>
    <div class="carta" v-if="cartaAtual">
      <!-- v-for="(carta, index) in cartas" :key="index" -->
      <!-- Topo (área superior da carta) -->
      <div class="topo-carta" :style="{ backgroundImage: cartaAtual.imagem ? `url(${cartaAtual.imagem})` : 'none' }">
      </div>
  
      <!-- Corpo principal (área central da carta) -->
      <div class="corpo-carta">
        <p>{{ cartaAtual.texto }}</p>
      </div>
  
      <!-- Rodapé (área inferior da carta) -->
      <div class="rodape-carta">
        <div class="botao botao-esquerda">
          <input type="text" placeholder="Digite Aqui">
        </div>
        <div class="botao botao-direita">
          <input type="button" value="Enviar" @click="sortearCarta">
        </div>
      </div>
    </div>
  </div>
  </template>

  <script>
  export default {
    name: "Carta",
    data(){
      return{
        cartas:{
          0:{
            nivel: "1" , texto:"Qualquer coisa", resposta:"Sim", imagem:"https://portalgerais.com/wp-content/uploads/2014/11/o-que-te-faz-feliz-600x376.jpg"
          },
          1:{
            nivel: "1" , texto:"Qualquer coisa 2", resposta:"Não", imagem:"https://st4.depositphotos.com/2934765/28878/v/450/depositphotos_288788394-stock-illustration-emoji-smile-icon-vector-symbol.jpg"
          },
          2:{
            nivel: "1" , texto:"Qualquer coisa 3", resposta:"Não", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQvCWG9vl-2ioYShf7hXqPTsQOtxUcET1Sg&s"
          },
        },
        cartaAtual: null,
      }
    },
    methods:{
      sortearCarta(){
        const idsCartas = Object.keys(this.cartas);

        let idsAleatorio;
        do{
          idsAleatorio = idsCartas[Math.floor(Math.random() * idsCartas.length)];
        } while (this.cartaAtual && this.cartaAtual === this.cartas[idsAleatorio]);

        this.cartaAtual = this.cartas[idsAleatorio];
      }
    },
    mounted(){
      this.sortearCarta()
    }
  };

  </script>
  
  <style scoped>
  .caixaCartas{
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20vh;
  }

  .carta {
    width: 300px;
    height: 450px;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border: 1px solid #ddd;
    overflow: hidden;
  }
  
  .topo-carta {
    width: 100%;
    height: 35%;
    /* background-color: #cccccc; */
    /* background: no-repeat center url(https://portalgerais.com/wp-content/uploads/2014/11/o-que-te-faz-feliz-600x376.jpg); */
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

    input{
      background-color: transparent;
      border: none;
      width: 190px;
      height: 28px;
      padding: 5px;
      border-radius: 8px;
      color: white;
    }
  }
  
  .botao-direita {
    background-color: #666666;
    width: 60px;

    
    input{
      width: 60px;
      height: 40px;
      border-radius: 8px;
      border: none;
      color: white;
      background: none;
      cursor: pointer;
    }
  }
  </style>