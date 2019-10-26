<template>
  <main>
    <product-presentation />
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
