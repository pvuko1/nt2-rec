<template>
    <div id="app" class="container-fluid mt-3">
        <div class="jumbotron">
        
        <br>
        <Navbar />
        <router-view></router-view>
      

        </div>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
 
    Navbar
  }
}
</script>

<style>
#app {
}

h1 {
  color: blue;
}

.jumbotron {
  padding: 32px !important;
}

</style>
