<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ $store.state.counter }}</h1>
    <div class="buttons">
      <button @click="$store.commit('increment')">Increment</button>
      <button @click="$store.commit('decrement')">Decrement</button>
    </div>
    <h1>{{ $store.state.randomCounter }}</h1>
    <div class="randomNumButtons">
      <button @click="randomUp">Random Up</button>
      <button @click="randomDown">Random Down</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  methods: {
    ...mapActions({
      randomUp: 'randomUp',
      randomDown: 'randomDown',
    }),
  },
}
</script>

// Import what is needed and refactor button @click methods
