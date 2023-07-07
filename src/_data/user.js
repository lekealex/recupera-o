import {ref} from 'vue'
const usuario = ref({
    primeiroNome: '',
    segundoNome:'',
    cidade:'',
    estado:'',
    zip: '',
    cvc: '',
    cartao: '',
    formaPagamento: '',
})

const mostrarCompraFinalizada = ref(false)


function validaForm() {
  if (
    usuario.value.primeiroNome == '' ||
    usuario.value.segundoNome == '' ||
    usuario.value.cartao == '' ||
    usuario.value.cidade == '' ||
    usuario.value.estado == ''
  ) {
    return alert('Voce precisa preencher todos os campos')
  } else {
    return (mostrarCompraFinalizada.value = true)
  }
}


export { validaForm, mostrarCompraFinalizada, usuario }
