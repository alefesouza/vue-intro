<template>
    <nav class="navbar navbar-expand navbar-light bg-light">
        <a class="navbar-brand" href="#">{{ counter }}</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Início</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/events">Eventos</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    computed: {
        counter() {
            return this.$store.state.counter;
        }
    },
}
</script>
