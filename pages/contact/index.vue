<template>
    <section>
        <h3>Get in touch with Asa.</h3> <br><br><br>

        <form action="../success/" name="contact" method="POST" data-netlify="true">
            <input type="text" placeholder="name" name="Name"> <br><br>
            <input type="email" placeholder="your email" name="Email address"><br><br>
            <input type="text" placeholder="your message" name="Message"> <br><br>
            <p>Hey don't spam me!</p>
            <a href="../success/">sucess</a>
            <button>Submit</button>
        </form>
    </section>
</template>

<script>
export default {
  head () {
    return {
        titleTemplate: "%s - Contact",
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

