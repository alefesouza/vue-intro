<template>
    <div>
        Contador: {{ counter }}

        <p v-if="counter > avisar">O contador é maior que {{avisar}}</p>

        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>

<script>
export default {
    name: 'Counter',
    props: ['avisar'],
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        decrement() {
            this.counter--;
        },
        increment() {
            this.counter++;
        }
    }
}
</script>
