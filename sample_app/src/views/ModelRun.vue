<template>
  <h1>Model Run</h1>
  <p>모델 ID : {{ modelId }}</p>
</template>

<script>
export default {
  computed:{
    modelId(){
      return this.$route.params
    }
  },
  created(){
    console.log("router", this.$router)
    console.log("route", this.$route)
  }
}

</script>
