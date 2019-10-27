<template>
  <section class="pricing">
    <h2 class="title">
      {{ $t('general.pricing') }}
    </h2>
    <p
      v-if="text !== ''"
      class="text"
    >
      {{ text }}
    </p>
    <div class="pricing-wrapper">
      <div class="flex-wrapper">
        <div class="left">
          <div class="hourly-pricing-block-item-header">
            <div class="header-hours">
              {{ $t('general.hours') }}
            </div>
            <div class="header-price">
              {{ $t('general.price') }}
            </div>
          </div>
          <hourly-pricing-block-item
            v-for="item in leftPricing"
            :key="item.hours"
            :hours="item.hours"
            :price="item.price"
          />
        </div>
        <div class="right">
          <div class="hourly-pricing-block-item-header">
            <div class="header-hours">
              {{ $t('general.hours') }}
            </div>
            <div class="header-price">
              {{ $t('general.price') }}
            </div>
          </div>
          <hourly-pricing-block-item
            v-for="item in rightPricing"
            :key="item.hours"
            :hours="item.hours"
            :price="item.price"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Pricing } from '~/utils/interfaces'
import HourlyPricingBlockItem from '~/components/services/HourlyPricingBlockItem.vue'

@Component({
  components: { HourlyPricingBlockItem }
})
export default class HourlyPricingBlock extends Vue {
  @Prop() pricing!: Array<Pricing>
  @Prop({ default: '' }) text!: string

  get leftPricing (): Array<Pricing> {
    return this.pricing.slice(0, this.pricing.length / 2)
  }

  get rightPricing (): Array<Pricing> {
    return this.pricing.slice(this.pricing.length / 2, this.pricing.length)
  }
}
</script>

<style lang="scss">
@import "~@/assets/styles/variables";

.pricing {
  background-image: linear-gradient(to bottom, rgba(248, 246, 255, 0), rgba(75, 121, 234, 0.06));
  padding: 145px 0;
  text-align: center;

  > .title {
    text-align: center;
  }

  > .text {
    margin: 10px 0 20px;
  }

  > .pricing-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    > .flex-wrapper {
      display: flex;
      justify-content: center;
      align-items: flex-start;

      > .right {
        margin-left: 29px;
        flex: 1;
      }
    }

    .hourly-pricing-block-item {
      & + .hourly-pricing-block-item {
        margin-top: 20px;
      }
    }

    .hourly-pricing-block-item-header {
      display: flex;
      width: 277px;
      line-height: 2.25;
      color: $font_dark_color;
      font-weight: bold;
      margin-bottom: 12px;

      > .header-hours {
        flex: 0.5;
      }

      > .header-price {
        flex: 1;
      }
    }
  }
}
</style>
