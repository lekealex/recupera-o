<script setup>
import MeuCarrinho from '@/components/MeuCarrinho.vue'
import ListagemLivros from '@/components/ListagemLivros.vue'
import FormularioVenda from './components/FormularioVenda.vue';
</script>

<template>
  <h1>Minha livraria</h1>
  <div class="container-geral">
    <listagem-livros />
    <meu-carrinho />
    <formulario-venda />
  </div>
</template>

<style scoped>
.container-geral {
  display: grid;
  grid-template-columns: 3fr 1fr;
}
</style>
