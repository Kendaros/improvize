<template>
  <div>
    <impro-header
      class="inside-the-grid"
    />
    <nuxt />
    <contact-us />
    <impro-footer />
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import ImproHeader from '~/components/Header.vue'
import ImproFooter from '~/components/Footer.vue'
import ContactUs from '~/components/ContactUs.vue'

@Component({
  components: { ImproHeader, ImproFooter, ContactUs }
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss">
@import "~@/assets/styles/fonts";
@import "~@/assets/styles/variables";

html {
  font-family: $helvetica_neue;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: $font_main_color;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

h1, h2, h3, h4, h5, h6 {
  font-family: $miso;
}

h1, h2 {
  font-size: $f60;
  line-height: 0.97;
}

h3 {
  font-size: $f35;
}

.padded {
  padding: 0 $padding-xl;

  @media screen and (max-width: $break-md) {
    padding: 0 $padding-md;
  }

  @media screen and (max-width: $break-xs) {
    padding: 0 $padding-xs
  }
}

.inside-the-grid {
  max-width: 1440px;
  margin: 0 auto;
}

.bg-gradient {
  width: 100%;
}
</style>
