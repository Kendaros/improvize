<template>
  <main class="product">
    <warning-bar
      :text="$t('warning.not-ready')"
    />
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
      category="products"
      product-name="inpro"
      :pricing="pricing"
    />
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import WarningBar from '~/components/WarningBar.vue'
import ProductPresentation from '~/components/products/ProductPresentation.vue'
import ListImage from '~/components/products/ListImage.vue'
import PricingBlock from '~/components/products/PricingBlock.vue'
import config from '~/improvize.config'
import { Pricing } from '~/utils/interfaces'

@Component({
  components: { PricingBlock, ProductPresentation, ListImage, WarningBar }
})
export default class Inpro extends Vue {
  layout (): string {
    return 'product'
  }

  get pricing (): Array<Pricing> {
    return config.pricings.inpro
  }
}

</script>

<style lang="scss">
</style>
