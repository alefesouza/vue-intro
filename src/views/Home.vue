<template>
  <div>
    Hello World
    <div>
      <label>Nome: </label>
      <b-form-input type="text" name="name" v-model="name" />
    </div>
    <div>
      {{ name }} {{ lastName }}
    </div>

    <b-form-input type="number" v-model="counter1Warn" />

    <counter :warn="counter1Warn"></counter>
    <counter warn="8"></counter>

    <div>Números</div>
    <ul>
      <li v-for="number in numbers" :key="number">
        {{ number }}
      </li>
    </ul>
    <b-button @click="newNumber">Novo item</b-button>
  </div>
</template>

<script>
import Counter from '../components/Counter';

export default {
  name: 'Home',
  components: {
    Counter,
  },
  data() {
    return {
      name: 'Alefe',
      lastName: 'Souza',
      counter1Warn: 3,
      numbers: [0, 2, 6, 45, 7, 154, 153]
    }
  },
  mounted() {
    setTimeout(() => {
      this.lastName = 'Silva';
    }, 2000);
  },
  methods: {
    newNumber() {
      this.numbers.push(Math.random());
    }
  }
}
</script>
