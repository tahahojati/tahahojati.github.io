<template>
  <div>
    <app-navigation></app-navigation>
    <div id="page" class="en">
      <router-view></router-view>
    </div>
    <!--   <app-preloader></app-preloader> -->
  </div>
</template>


<script>
import Navigation from './components/Navigation.vue';
// import Preloader from './components/Preloader.vue';


export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    appNavigation: Navigation,
    // appPreloader: Preloader,
  }
}
</script>

<style>

</style>
