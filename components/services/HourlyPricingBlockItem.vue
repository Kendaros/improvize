<template>
  <div class="hourly-pricing-block-item">
    <div class="left">
      {{ hours === -1 ? '∞' : hours }}<span v-if="hours !== -1">h</span>
    </div>
    <div class="right">
      {{ $n(price, `${price % 1 === 0 ? 'currency' : 'currencyDecimals'}`) }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class HourlyPricingBlockItem extends Vue {
  @Prop() hours!: number
  @Prop() price!: number
}
</script>

<style lang="scss">
@import "~@/assets/styles/variables";
.hourly-pricing-block-item {
  width: 277px;
  height: 60px;
  border-radius: 4px;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding: 13px 0;
  display: flex;
  align-items: center;

  > .left {
    flex: 0.5;
  }

  > .right {
    border-left: 1px solid $font_main_color;
    flex: 1;
  }
}
</style>
