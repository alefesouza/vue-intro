<template>
  <div id="app">
    <navbar></navbar>
    
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>
