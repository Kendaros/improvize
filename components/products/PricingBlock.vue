<template>
  <section class="pricing padded">
    <h2 class="title">
      Pricing
    </h2>
    <div class="pricings">
      <pricing-block-item
        v-for="(item, i) in pricing"
        :key="`pricing-block-${i}`"
        :title="$t(`products.lesage.pricing.${item.title}.title`)"
        :price="item.price"
        :features="$t(`products.lesage.pricing.${item.title}.features`)"
      />
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
}
</script>

<style lang="scss">
@import "~@/assets/styles/variables";

.pricing {
  background-image: linear-gradient(to bottom, rgba(248, 246, 255, 0), rgba(75, 121, 234, 0.06));
  padding: 145px 0;

  > .title {
    text-align: center;
  }

  > .pricings {
    display: flex;
    justify-content: center;
    margin-top: 38px;

    .pricing-block-item {
      + .pricing-block-item {
        margin-left: 28px;
      }

      &:first-child {
        box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>
