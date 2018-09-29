<template>
    <div>
        <counter avisar="3"></counter>
        <counter avisar="6"></counter>

        <ul>
            <li v-for="numero in numeros" :key="numero">
                {{ numero }}
            </li>
        </ul>
    </div>
</template>

<script>
import Counter from './../components/Counter.vue';

export default {
    name: 'Home',
    components: {
        Counter
    },
    data() {
        return {
            numeros: [2, 4, 6, 3, 7, 1]
        }
    },
}
</script>
