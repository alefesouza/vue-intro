<template>
    <div>
        <counter avisar="2"></counter>
        <counter avisar="5"></counter>

        <ul>
            <li v-for="number in numbers" :key="number">
                {{ number }}
            </li>
        </ul>

        <input type="text" class="form-control" v-model="text">
        <div>
            {{ text }}
        </div>
    </div>
</template>

<script>
import Counter from '../components/Counter.vue';

export default {
    name: 'Home',
    components: {
        Counter,
    },
    data() {
        return {
            numbers: [1, 5, 9, 6, 8, 7],
            text: ''
        }
    }
}
</script>
