<template>
    <div>
        {{ counter }}

        <div v-if="counter > avisar">O número é maior que {{avisar}}</div>

        <div>
            <button @click="decrement">-</button>
            <button @click="increment">+</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Counter',
    props: ['avisar'],
    computed: {
        counter() {
            return this.$store.state.counter;
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
