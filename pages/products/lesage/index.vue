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
  </main>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import ProductPresentation from '~/components/products/ProductPresentation.vue'

@Component({
  components: { ProductPresentation }
})
export default class LeSage extends Vue {
}

</script>

<style lang="scss">
.products-lesage {
  > .bg-gradient {
    width: 100%;
  }
}
</style>
