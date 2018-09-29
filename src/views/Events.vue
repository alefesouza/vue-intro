<template>
  <div>
    <h2>Eventos</h2>

    <div class="card mt-2" v-for="event in events" :key="event.id">
      <div class="card-body">
        <p class="card-title">{{event.name}}</p>

        <div class="card-text">{{event.venue.name}}</div>
      </div>
    </div>  
  </div>  
</template>

<script>
export default {
    name: 'Events',
    data() {
      return {
        events: [],
      };
    },
    mounted() {
      fetch('https://api.meetup.com/Grupy-SP/events')
        .then(res => res.json())
        .then(eventos => {
          console.log(eventos);
          this.events = eventos;
        })
    }
}
</script>
