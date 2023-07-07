<script setup>
import { livros} from '@/_data/livros.js'
import {  mostraLivros } from '@/_data/carrinho.js'
import { adicionarAoCarrinho } from '@/_data/carrinho.js'
import CardLivro from '@/components/CardLivro.vue'
</script>

<template>
  <div v-if="mostraLivros" class="listagem-livros">
    <card-livro
      v-for="livro in livros"
      :key="livro.id"
      :livro="livro"
      @adicionarAoCarrinho="adicionarAoCarrinho"
    />
  </div>
</template>

<style scoped>
.listagem-livros {
  display: flex;
  flex-wrap: wrap;
}
</style>
