<template>
  <main class="products-lesage">
    <product-presentation
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
export default class LeSage extends Vue {
  get pricing () {
    return config.lesagePricing
  }
}

</script>

<style lang="scss">
.products-lesage {
  > .product-presentation {
    margin: 115px 0;
  }

  > .bg-gradient {
    width: 100%;
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
  }
}
</style>
