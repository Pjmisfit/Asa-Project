<template>
  <section class="container">
    <h1>Welcome to Asa. A fan dummy page.</h1>

    <img src="~/static/images/asa.jpg" alt="">
  </section>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  head () {
    return {
      script: [
        
      ],
      link: [
        
      ]
    }
  }
}
</script>

<style>

section{
  text-align: center;
}

img{
  margin-top: 20px;
  height: 400px;
  width: 400px;
  border-radius: 6px;
}

body {
  font-family:  'Roboto', 'Helvetica Neue', Arial, sans-serif;

  color: #35495e;
  letter-spacing: 1px;
}

</style>
