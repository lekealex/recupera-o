<script setup>
import MButton from '@/components/MButton.vue'
import { mostraLivros } from '@/_data/carrinho.js'

const props = defineProps({
  livro: Object
})

const emit = defineEmits(['adicionarAoCarrinho'])

function formatarPreco(preco) {
  return 'R$ ' + preco.toFixed(2).replace('.', ',')
}
</script>

<template>
  <div v-if="mostraLivros" class="card-livro">
    <div class="card-info-livro">
      <div class="wrap-livro">
        <img :src="props.livro.img" alt="Capa do livro" class="capa-livro" />
      </div>
      <p class="titulo-livro">{{ props.livro.title }}</p>
      <p class="autor-livro">{{ props.livro.author }}</p>
      <p class="preco-livro">{{ formatarPreco(props.livro.price) }}</p>
    </div>
    <div class="card-buttons-livros">
      <m-button
        class="perigo"
        @click="emit('adicionarAoCarrinho', props.livro)"
        text="Adicionar ao carrinho"
      >
     Adicionar ao carrinho
      </m-button>
      <m-button class="sucesso">
        Compartilhar
      </m-button>
    </div>
  </div>
</template>

<style scoped>
.card-livro {
  margin: 5px 10px;
  padding: 10px;
  background-color: rgb(168, 165, 165);
  border-radius: 10px;
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.2s;
}

.card-livro:hover {
  transition: 0.2s;
  transform: scale(1.1);
}

.wrap-livro {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  width: 180px;
  height: 270px;
}
.capa-livro {
  width: 90%;
  max-height: 100%;
}

.card-livro p {
  margin: 0;
}

.card-livro .titulo-livro {
  font-weight: bold;
  margin-bottom: 5px;
}
</style>
