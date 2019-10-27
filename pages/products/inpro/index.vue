<template>
  <main class="product">
    <product-presentation
      class="inside-the-grid"
      :title="$t('menu.inpro')"
      :subtitle="$t('menu.descriptions.inpro')"
      :description="$t('products.inpro.presentation').replace(/\n/g, '<br>')"
      img-path="products/inpro"
    />
    <img
      class="bg-gradient"
      src="../../../assets/img/bg-gradient.svg"
      alt=""
    >
    <pricing-block
      product-name="inpro"
      :pricing="pricing"
    />
  </main>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import ProductPresentation from '~/components/products/ProductPresentation.vue'
import ListImage from '~/components/products/ListImage.vue'
import PricingBlock from '~/components/products/PricingBlock.vue'
import config from '~/improvize.config'

@Component({
  components: { PricingBlock, ProductPresentation, ListImage }
})
export default class Inpro extends Vue {
  layout () {
    return 'product'
  }

  get pricing () {
    return config.pricings.inpro
  }
}

</script>

<style lang="scss">
</style>
