<template>
  <section class="pricing">
    <h2 class="title">
      Pricing
    </h2>
    <div class="pricings-and-link">
      <div class="pricings">
        <pricing-block-item
          v-for="(item, i) in pricing"
          :key="`pricing-block-${i}`"
          :title="$t(`products.${productName}.pricing.${item.title}.title`)"
          :price="item.price"
          :features="$t(`products.${productName}.pricing.${item.title}.features`)"
          :button="item.button"
        />
      </div>
      <n-link
        :to="{ name: `services-support___${$route.name.slice(-2)}` }"
        class="technical-assistance"
      >
        {{ $t('general.technical-assistance') }}
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
  @Prop() productName!: string
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

  > .pricings-and-link {
    margin-top: 38px;
    display: inline-flex;
    flex-direction: column;

    > .pricings {
      display: flex;
      justify-content: center;

      .pricing-block-item {
        + .pricing-block-item {
          margin-left: 28px;
        }

        &:first-child {
          box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
        }
      }
    }

    > .technical-assistance {
      margin-top: 20px;
      margin-left: auto;
      align-self: flex-end;
      color: $contrast_color;
      font-weight: bold;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
