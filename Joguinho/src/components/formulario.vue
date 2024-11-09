<template>
    <div class="cadastro">
        <div class="caixaconteudo">
        <div class="titulo"><h1>Nome do Jogo</h1></div>
        <div class="subtitulo"><h2>Cadastre os Jogadores</h2></div>
        <form action="">
            <div class="jogador"><label for="">
                Jogador 1
                <input type="text" placeholder="escreva seu nick"></input>
            </label>
        </div>
            <div class="jogador"><label for="">
                Jogador 2
                <input type="text" placeholder="escreva seu nick"></input>
            </label>
        </div>
            <div class="jogador"><label for="">
                Jogador 3
                <input type="text" placeholder="escreva seu nick"></input>
            </label>
        </div>
            <div class="jogador"><label for="">
                Jogador 4
                <input type="text" placeholder="escreva seu nick"></input>
            </label>
        </div>
            <div class="botao">
                <input type="button" value="jogar">
            </div>
            
        </form>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Formulario"
    }
</script>
<style>
    .cadastro{
        display: flex;
        flex-direction: column;
        height: 100vh;
        background-color: gray;
        color: white;
        align-content: center;

        .caixaconteudo{
            width: 30%;
            margin: auto;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 50px;
            background-color: darkgray;

            .titulo{
                font-size: 25px;
                margin: 0 0 30px 0;
            }
            .subtitulo{
                font-size: 20px;
                margin: 0 0 10px 0;
            }
            .jogador{
                label{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                   input{
                    border: none;
                    margin: 5px;
                    padding: 12px;
                    border-radius: 30px;
                   } 
                }

            }
            .botao{
                display: flex;
                justify-content: center;
                input{
                    margin: 10px;
                    padding: 10px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                
            }
        }
       
    }
   
</style>