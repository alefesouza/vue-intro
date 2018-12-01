<template>
    <div class="card mt-3">
        <div class="card-body">
            <h5 class="card-title">{{ data.name }}</h5>
            <p class="card-text">{{ data.venue ? data.venue.name : '' }}</p>
            <a :href="data.link" target="_blank" class="card-link">Abrir</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Events',
        props: ['data']
    }
</script>
