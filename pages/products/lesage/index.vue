<template>
  <main class="product">
    <product-presentation
      class="inside-the-grid"
      :title="$t('menu.lesage')"
      :subtitle="$t('menu.descriptions.lesage')"
      :description="$t('products.lesage.presentation').replace(/\n/g, '<br>')"
      img-path="products/lesage"
    />
    <img
      class="bg-gradient"
      src="../../../assets/img/bg-gradient.svg"
      alt=""
    >
    <list-image
      v-for="n in 5"
      :key="`products-lesage-block-${n}`"
      :title="$t(`products.lesage.block-${n}.title`)"
      :list="$t(`products.lesage.block-${n}.list`)"
      :img-path="`products/lesage/block-${n}`"
      class="inside-the-grid"
    />
    <pricing-block
      product-name="lesage"
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
export default class LeSage extends Vue {
  layout () {
    return 'product'
  }

  get pricing () {
    return config.pricings.lesage
  }
}

</script>

<style lang="scss">
</style>
