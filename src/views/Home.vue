<template>
  <div>
    <counter avisar="2"></counter>
      <counter avisar="5"></counter>

      <ul>
          <li v-for="numero in numeros" :key="numero">
              {{ numero }}
          </li>
      </ul>

      <input type="text" v-model="valorInput">

      {{ valorInput }}
  </div>  
</template>

<script>
import Counter from './../components/Counter.vue';

export default {
    name: 'Home',
    components: {
        Counter,
    },
    data() {
        return {
            numeros: [1, 2, 5, 6, 7],
            valorInput: 'teste'
        }
    }
}
</script>
