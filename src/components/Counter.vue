<template>
  <div>
    Contador: {{ counter }}
    <div>
      <b-button variant="success" @click="increment">+</b-button>
      <b-button class="ml-2" variant="danger" @click="decrement">-</b-button>
    </div>
    <div v-if="counter > warn">
      O contador é maior que {{ warn }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['warn'],
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    increment() {
      this.counter += 1;
    },
    decrement() {
      this.counter -= 1;
    },
  }
}
</script>
