<template>
  <div>
    <h1>Home</h1>
    <button @click="pedirPermissaoParaReceberNotificacoes">Pedir permissão</button>
  </div>
</template>

<style scoped>
h1 {
  color: blue;
}
</style>

<script>
import { pedirPermissaoParaReceberNotificacoes } from "../push-notification";

export default {
  methods: {
    pedirPermissaoParaReceberNotificacoes
  }
};
</script>