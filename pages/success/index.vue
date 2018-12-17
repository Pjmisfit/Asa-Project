<template>
    <section>
        <h3>Your message has been sent!</h3> <br><br><br>

    </section>
</template>

<script>
export default {
  head () {
    return {
        titleTemplate: "%s - Message sent",
      script: [
        
      ],
      link: [

      ]
    }
  }
}
</script>

<style lang="scss" scoped>
    section {
        text-align: center;
    }

    input{
        padding: 15px;
        border: 1px solid lightcoral;
        border-radius: 4px;
    }
    button{
      padding: 20px 40px;
      border-radius: 4px;
      font-size: 16px;
      border: 1px solid #DDD;
    }
</style>

