<template>
  <section
    class="product-presentation padded"
  >
    <div class="left">
      <div class="wrapper">
        <h1 class="title">
          {{ title }}
        </h1>
        <h2 class="subtitle">
          {{ subtitle }}
        </h2>
        <p
          class="text"
          v-html="description"
        />
      </div>
    </div>
    <div class="right">
      <img
        :src="require(`../../assets/img/${imgPath}.svg`)"
        alt="Le Sage"
        class="image"
      >
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class ProductPresentation extends Vue {
  @Prop() title!: string
  @Prop() subtitle!: string
  @Prop() description!: string
  @Prop() imgPath!: string
}
</script>

<style lang="scss">
@import '~/assets/styles/variables.scss';

.product-presentation {
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;

  > .left {
    flex: 2;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: $break-sm) {
      flex-basis: 100%;
    }

    > .wrapper {
      max-width: 524px;

      > .subtitle {
        margin-top: 5px;
        font-family: $helvetica_neue;
        font-weight: normal;
        font-size: $f22;
        line-height: 1.5;
      }

      > .text {
        margin-top: 40px;
        line-height: 1.5;
      }
    }
  }

  > .right {
    max-width: 306px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: $break-sm) {
      flex-basis: 100%;
      margin-bottom: 40px;
    }

    > .image {
      width: 100%;
    }
  }
}
</style>
