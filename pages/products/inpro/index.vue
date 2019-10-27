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
    <list-image
      v-for="n in 5"
      :key="`products-product-block-${n}`"
      :title="$t(`products.product.block-${n}.title`)"
      :list="$t(`products.product.block-${n}.list`)"
      :img-path="`products/product/block-${n}`"
      class="inside-the-grid"
    />
    <pricing-block
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
    return config.inproPricing
  }
}

</script>

<style lang="scss">
</style>
