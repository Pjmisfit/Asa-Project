<template>
  <div class="parent">
    <div class="child">
      <navigation />

      <nuxt/>
      
    </div>
  </div>
</template>

<script>
import Navigation from '~/components/navigation.vue'

export default {
  components: {
    Navigation,
  },
  head () {
    return {
      script: [
        
      ],
      link: [
        // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
      ]
    }
  }
}
</script>


<style lang="scss">

.parent{
  display: flex;
  justify-content: center;
  
  .child{
    margin-top: 20px;
    width: 600px;
    height: 700px;
    background-color: #f1f1f1;
    border-radius: 5px 5px 0px 0px;
  }
}
html {
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

</style>
