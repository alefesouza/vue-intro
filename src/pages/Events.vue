<template>
    <div>
        <h3>Eventos</h3>

        <input type="text" class="form-control" v-model="busca">
        <button class="btn btn-primary" @click="buscar">Receber eventos</button>

        <div v-for="item in events" :key="item.id">
            <event :data="item"></event>
        </div>
    </div>
</template>

<script>
import Event from '../components/Event.vue';

export default {
    name: 'Events',
    components: {
        Event,
    },
    data() {
        return {
            events: [],
            busca: 'Developers-SP',
        }
    },
    mounted() {
    },
    methods: {
        buscar() {
            fetch('https://api.meetup.com/' + this.busca + '/events')
                .then(r => r.json())
                .then(response => {
                    this.events = response;
                });
        }
    }
}
</script>
