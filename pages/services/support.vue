<template>
  <main class="support service">
    <service-presentation-block
      name="support"
    />

    <img
      class="bg-gradient"
      src="../../assets/img/bg-gradient.svg"
      alt=""
    >

    <list-image
      v-for="n in 1"
      :key="`services-support-block-${n}`"
      :title="$t(`services.support.block-${n}.title`)"
      :text="$t(`services.support.block-${n}.text`)"
      :list="$t(`services.support.block-${n}.list`)"
      :img-path="`services/support/block-${n}`"
      class="inside-the-grid"
    />

    <hourly-pricing-block
      :pricing="pricing"
      :text="$t('services.support.pricing-description')"
    />
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import ListImage from '~/components/products/ListImage.vue'
import ServicePresentationBlock from '~/components/services/ServicePresentationBlock.vue'
import HourlyPricingBlock from '~/components/services/HourlyPricingBlock.vue'
import { HourlyPricing } from '~/utils/interfaces'
import config from '~/improvize.config'

@Component({
  components: { ListImage, ServicePresentationBlock, HourlyPricingBlock }
})
export default class Support extends Vue {
  layout (): string {
    return 'service'
  }

  get pricing (): Array<HourlyPricing> {
    return config.pricings.support
  }
}
</script>

<style lang="scss">
.support {
  > .pricing > .pricing-wrapper {
    margin-top: 50px;
  }
}
</style>
