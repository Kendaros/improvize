<template>
  <div class="pricing-block-item">
    <h3 class="title">
      {{ title }}
    </h3>
    <div class="price">
      <span class="figure">{{ price }}€</span>
      <span class="ht">H.T</span>
    </div>
    <div
      v-if="monthly"
      class="monhtly"
    >
      {{ $t('general.monthly') }}
    </div>
    <ul
      v-if="features !== ''"
      class="features"
    >
      <li
        v-for="(item, i) in features.split('\n')"
        :key="`features-item-${title}-${i}`"
        class="feature"
      >
        {{ item }}
      </li>
    </ul>
    <rect-button
      v-if="button"
      :text="$t('contact-us.button')"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import RectButton from '~/components/RectButton.vue'

@Component({
  components: { RectButton }
})
export default class PricingBlockItem extends Vue {
  @Prop() title!: string
  @Prop() price!: number
  @Prop({ default: '' }) features!: string
  @Prop({ default: false }) button!: boolean
  @Prop() monthly!: boolean
}
</script>

<style lang="scss">
@import "~@/assets/styles/variables";

$pricing-block-item-padding: 33px;

.pricing-block-item {
  width: 343px;
  border-radius: 4px;
  border: solid 1px #e0dfdf;
  background-color: #ffffff;
  padding: 33px 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  > .title {
    text-align: center;
  }

  > .price {
    margin-top: 40px;
    padding: 0 $pricing-block-item-padding;

    > .figure {
      font-family: $miso;
      font-size: $f60;
      line-height: 0.97;
    }

    > .ht {
      margin-left: 5px;
    }
  }

  > .features {
    margin: 46px $pricing-block-item-padding 40px;
    text-align: left;

    > .feature {
      list-style-image: url('../../assets/img/check.svg');
      line-height: 1.63;

      + .feature {
        margin-top: 20px;
      }
    }
  }

  > .button {
    margin-bottom: 10px;
  }
}
</style>
