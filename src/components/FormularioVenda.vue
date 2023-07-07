<script setup>
import { usuario, validaForm,  mostrarCompraFinalizada } from '@/_data/user.js'
import { mostraFormulario } from '@/_data/carrinho.js'
</script>

<template>

<div class="container" v-if="mostraFormulario">
    
<div class="row g-3">
      <div class="col-md-3">
        <label for="validationDefault01" class="form-label">Primeiro Nome</label>
        <input
          type="text"
          class="form-control"
          id="validationDefault01"
          v-model="usuario.primeiroNome"
        />
      </div>
      <div class="col-md-3">
        <label for="validationDefault02" class="form-label">Ultimo Nome</label>
        <input
          type="text"
          class="form-control"
          id="validationDefault02"
          v-model="usuario.segundoNome"
        />
      </div>
      <div class="col-md-4">
        <label for="validationDefault03" class="form-label">Numero do Cartão</label>
        <input type="text" class="form-control" id="validationDefault03" v-model="usuario.cartao" />
      </div>
      <div class="col-md-2">
        <label for="validationDefaultUsername" class="form-label">Código de Confirmação</label>
        <div class="input-group">
          <span class="input-group-text" id="inputGroupPrepend2">CVC</span>
          <input
            type="text"
            class="form-control"
            id="validationDefaultUsername"
            v-model="usuario.cvc"
            aria-describedby="inputGroupPrepend2"
          />
        </div>
      </div>
      <div class="col-md-3">
        <label for="validationDefault03" class="form-label">Cidade</label>
        <input type="text" class="form-control" id="validationDefault03" v-model="usuario.cidade" />
      </div>
      <div class="col-md-3">
        <label for="validationDefault04" class="form-label">Estado</label>
        <input type="text" class="form-control" id="validationDefault04" v-model="usuario.estado" />
      </div>
      <div class="col-md-3">
        <label for="validationDefault05" class="form-label">Zip</label>
        <input type="text" class="form-control" id="validationDefault05" v-model="usuario.zip" />
      </div>
      <div class="col-md-3">
        <label for="validationDefault04" class="form-label">Forma de Pagamento</label>
        <select class="form-select" id="validationDefault04">
          <input v-model="usuario.formaPagamento" type="text" />
          >
          <option selected disabled value="">Crédito/Debito</option>
          <option>Débito</option>
          <option>Crédito</option>
        </select>
      </div>
      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" />
          <label class="form-check-label" for="invalidCheck2">
            Concordo em ter o cartão clonado
          </label>
        </div>
      </div>
      <div class="col-12">
        <button class="btn btn-success" type="submit" @click="validaForm()">
          Confirmar Compra
        </button>
      </div>
      </div>
      <div v-if=" mostrarCompraFinalizada">
    <h1>Sua compra foi realizada com sucesso.</h1>
    </div>
    </div>
</template>

<style scoped>

h1{
    color: green;
    text-align: center;
    font-weight: bold;
}
.container {
    text-align: center;
}

</style>