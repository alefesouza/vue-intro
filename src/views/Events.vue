<template>
    <div>
        <h1>Eventos</h1>

        <div class="card mt-2" v-for="event in events" :key="event.id">
            <div class="card-body">
                <div class="card-title">{{ event.name }}</div>

                <div class="card-text">{{ event.venue.name }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Events',
    data() {
        return {
            events: []
        }
    },
    mounted() {
        fetch('https://api.meetup.com/Grupy-SP/events')
            .then((res) => res.json())
            .then(events => {
                this.events = events;
            });
    }
}
</script>
