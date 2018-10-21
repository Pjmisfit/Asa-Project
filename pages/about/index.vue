<template>
    <section>
        <h3 class="bio">
            Asa is a wonderful musiciain. <!-- A legend., 
            probably one of the greatest R&B artist that Nigeria has produced, 
            even though her artistry is not celebrated well enough in Nigeria -->.
        </h3>
      <social-sharing url="https://distracted-pike-fbbaf4.netlify.com/about"
                      title="An asa dummy"
                      description="A nothing about Asa website."
                      quote="This is about nothing"
                      hashtags="#Asa"
                      twitter-user="pastquest"
                      inline-template>
          <div> <!-- quote is the default message in fb, title default in email -->
            <network network="email">
                <i class="fa fa-envelope"></i> Email
            </network>
            <network network="facebook">
              <i class="fa fa-facebook"></i> Facebook
            </network>
            <network network="linkedin">
               LinkedIn
            </network>

            <network network="skype">
               Skype
            </network>
            <network network="sms">
               SMS
            </network>
            <network network="twitter">
               Twitter
            </network>
       
            <network network="whatsapp">
               Whatsapp
            </network>
          </div>
      </social-sharing>
    </section>
</template>
<script>
  import ogImage from '@/static/images/asa.jpg';

export default {
  head () {
    return {
        titleTemplate: "%s - About",
      script: [
        
      ],
      link: [

      ],
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' },
        { hid: 'og:title', name: 'og:title', content: 'That Asa project' },
        { hid: 'og:image', name: 'og:image', content:'images/asa.jpg'  },
        { hid: 'og:url', name: 'og:url', content: 'https://distracted-pike-fbbaf4.netlify.com/about' },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Asa Money' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
    h3{
        width: 400px;
        margin: auto;
        padding: 15px;
    }
</style>

