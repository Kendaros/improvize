<template>
  <section class="contact-us padded">
    <h4 class="title">
      {{ $t('contact-us.title') }}
    </h4>
    <div class="text">
      {{ $t('contact-us.text') }}
    </div>
    <email-link />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import SiteMap from '~/components/SiteMap.vue'
import EmailLink from '~/components/EmailLink.vue'

@Component({
  components: { SiteMap, EmailLink }
})
export default class ContactUs extends Vue {}
</script>

<style lang="scss">
@import "~@/assets/styles/fonts";
@import "~@/assets/styles/variables";
.contact-us {
  min-height: 572px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  > .title {
    font-family: $miso;
    font-size: $f60;
  }

  > .text {
    font-size: $f22;
    line-height: $f33;
    max-width: 647px;
    text-align: center;
    margin: 38px 0 50px;
  }

  > .link {
    text-decoration: none;
  }
}
</style>
