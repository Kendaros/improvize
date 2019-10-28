<template>
  <section class="pricing">
    <h2 class="title">
      {{ title === '' ? $t('general.pricing') : title }}
    </h2>
    <p
      v-if="text !== ''"
      class="text"
    >
      {{ text }}
    </p>
    <div class="pricings-and-link">
      <div class="pricings">
        <pricing-block-item
          v-for="(item, i) in pricing"
          :key="`pricing-block-${i}`"
          :title="$t(`${category}.${productName}.pricing.${pricingSubKey ? `${pricingSubKey}.` : ''}${item.title}.title`)"
          :price="item.price"
          :features="$t(`${category}.${productName}.pricing.${pricingSubKey ? `${pricingSubKey}.` : ''}${item.title}.features`)"
          :button="item.button"
          :frequency="item.frequency"
        />
      </div>
      <n-link
        v-if="assistance"
        :to="{ name: `services-support___${$route.name.slice(-2)}` }"
        class="technical-assistance"
      >
        {{ $t('general.technical-assistance') }}
        <img
          src="../../assets/img/arrow.svg"
          alt="arrow"
          class="image"
        >
      </n-link>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import PricingBlockItem from '~/components/products/PricingBlockItem.vue'
import { Pricing } from '~/utils/interfaces'

@Component({
  components: { PricingBlockItem }
})
export default class PricingBlock extends Vue {
  @Prop() pricing!: Array<Pricing>
  @Prop() category!: string
  @Prop() productName!: string
  @Prop() pricingSubKey!: string
  @Prop({ default: '' }) title!: string
  @Prop({ default: '' }) text!: string
  @Prop({ default: true }) assistance!: boolean
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

  > .pricings-and-link {
    margin-top: 38px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    > .pricings {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      .pricing-block-item {
        margin: 14px;

        &:first-child {
          box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
        }
      }
    }

    > .technical-assistance {
      margin-top: 20px;
      /*margin-left: auto;*/
      /*align-self: flex-end;*/
      color: $contrast_color;
      font-weight: bold;
      text-decoration: none;

      > .image {
        width: 10px;
        position: relative;
        top: 3px;
        margin-left: 10px;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
