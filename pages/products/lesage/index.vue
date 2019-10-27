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
      category="products"
      product-name="lesage"
      :pricing="pricing"
    />
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import ProductPresentation from '~/components/products/ProductPresentation.vue'
import ListImage from '~/components/products/ListImage.vue'
import PricingBlock from '~/components/products/PricingBlock.vue'
import config from '~/improvize.config'
import { Pricing } from '~/utils/interfaces'

@Component({
  components: { PricingBlock, ProductPresentation, ListImage }
})
export default class LeSage extends Vue {
  layout (): string {
    return 'product'
  }

  get pricing (): Array<Pricing> {
    return config.pricings.lesage
  }
}

</script>

<style lang="scss">
</style>
