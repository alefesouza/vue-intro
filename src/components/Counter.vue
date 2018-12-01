<template>
    <div>     
        Contador: {{ counterStore }}

        <button @click="increment">Aumentar</button>
        <button @click="decrement">Diminuir</button>

        <div v-if="counter > avisar">
            O contador é maior que {{ avisar }}
        </div>
    </div>
</template>

<script>
export default {
  name: 'Counter',
  props: ['avisar'],
  computed: {
      counterStore() {
          return this.$store.state.counter;
      }
  },
  data() {
      return {
          counter: 0,
      }
  },
  methods: {
      increment() {
          this.$store.dispatch('increment');
      },
      decrement() {
          this.$store.dispatch('decrement');
      }
  }
}
</script>
