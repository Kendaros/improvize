<template>
  <section class="contact-us">
    <h4 class="title">
      {{ $t('contact-us.title') }}
    </h4>
    <div class="text">
      {{ $t('contact-us.text') }}
    </div>
    <div class="button">
      <span>{{ $t('contact-us.button') }}</span>
    </div>
  </section>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import SiteMap from '~/components/SiteMap.vue'

@Component({
  components: { SiteMap }
})
export default class Footer extends Vue {}
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

  .title {
    font-family: $miso;
    font-size: $f60;
  }

  .text {
    font-size: $f22;
    line-height: $f33;
    max-width: 647px;
    text-align: center;
    margin: 38px 0 50px;
  }

  .button {
    background-color: #31ab9b;
    color: white;
    font-size: $f18;
    width: 213px;
    height: 60px;
    font-weight: bold;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
