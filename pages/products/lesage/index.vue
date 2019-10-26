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
      :title="$t('products.lesage.block-1.title')"
      :list="$t('products.lesage.block-1.list')"
      img-path="products/lesage/lesage-01.svg"
    />
  </main>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import ProductPresentation from '~/components/products/ProductPresentation.vue'
import ListImage from '~/components/products/ListImage.vue'

@Component({
  components: { ProductPresentation, ListImage }
})
export default class LeSage extends Vue {
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
  }
}
</style>
