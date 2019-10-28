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
export default class ProductLayout extends Vue {}
</script>

<style lang="scss">
@import "~@/assets/styles/variables";
main.product {
  > .product-presentation {
    margin: 115px auto;

    @media screen and (max-width: $break-md) {
      margin: 50px;
    }

    @media screen and (max-width: $break-xs) {
      margin: 0;
    }
  }

  > .list-image {
    margin-top: 120px;
    flex-wrap: wrap-reverse;

    &:nth-child(even) {
      flex-wrap: wrap;
      > .left {
        order: 2;
      }

      > .right {
        order: 1;
        text-align: left;
      }
    }
  }
}
</style>
