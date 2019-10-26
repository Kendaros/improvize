<template>
  <section
    class="product-presentation padded"
  >
    <div class="left">
      <div class="wrapper">
        <h1 class="title">
          {{ $t('menu.lesage') }}
        </h1>
        <h2 class="subtitle">
          {{ $t('menu.descriptions.lesage') }}
        </h2>
        <p
          class="text"
          v-html="$t('products.lesage.presentation').replace(/\n/g, '<br>')"
        />
      </div>
    </div>
    <div class="right">
      <img
        src="../../assets/img/products/lesage.svg"
        alt="Le Sage"
        class="image"
      >
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class ProductPresentation extends Vue {}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/variables.scss';

.product-presentation {
  min-height: 730px;
  display: flex;

  .left {
    flex: 2;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .wrapper {
      max-width: 524px;

      .subtitle {
        margin-top: 5px;
        font-family: $helvetica_neue;
        font-weight: normal;
        font-size: $f22;
        line-height: 1.5;
      }

      .text {
        margin-top: 40px;
        line-height: 1.5;
      }
    }
  }

  .right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    .image {
      width: 306px;
    }
  }
}
</style>
