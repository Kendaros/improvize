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
main.service {
  > .presentation {
    margin-top: 87px;
    text-align: center;

    > .title {
      margin-top: 2px;
    }

    > .description {
      margin: 38px auto 0 auto;
      max-width: 712px;
      text-align: left;
      line-height: 1.63;
    }
  }

  > .list-image {
    margin-top: 120px;

    &:nth-child(even) {
      > .left {
        order: 2;
      }

      > .right {
        order: 1;
        text-align: left;
      }
    }

    @media screen and (max-width: $break-md) {
      > .left {
        order: 2
      }

      > .right {
        order: 1
      }
    }
  }
}
</style>
