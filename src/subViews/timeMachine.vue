<template>
  <div class="timeMachine">
    <empty></empty>
  </div>
</template>

<script>
export default {
  name: 'timeMachine',
  components: {
    empty: ()=>import("../components/empty.vue")
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>