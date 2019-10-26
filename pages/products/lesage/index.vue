<template>
  <main>
    <product-presentation
      :title="$t('menu.lesage')"
      :subtitle="$t('menu.descriptions.lesage')"
      :description="$t('products.lesage.presentation').replace(/\n/g, '<br>')"
      img-path="products/lesage"
    />
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
</style>
