<template>
    <div class="carta">
      <!-- Topo (área superior da carta) -->
      <div class="topo-carta"></div>
  
      <!-- Corpo principal (área central da carta) -->
      <div class="corpo-carta"></div>
  
      <!-- Rodapé (área inferior da carta) -->
      <div class="rodape-carta">
        <div class="botao botao-esquerda"></div>
        <div class="botao botao-direita"></div>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: "Carta",
  };
  </script>
  
  <style scoped>
  .carta {
    width: 200px;
    height: 300px;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #ddd;
    overflow: hidden;
  }
  
  .topo-carta {
    width: 100%;
    height: 35%;
    background-color: #cccccc;
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
    width: 40px;
    height: 16px;
    background-color: #888888;
    border-radius: 8px;
  }
  
  .botao-esquerda {
    background-color: #999999;
  }
  
  .botao-direita {
    background-color: #666666;
  }
  </style>