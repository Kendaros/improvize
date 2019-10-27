<template>
  <main class="training service">
    <div class="presentation padded inside-the-grid">
      <img
        src="../../../assets/img/services/training.svg"
        alt="Training"
      >
      <h1 class="title">
        {{ $t('menu.training') }}
      </h1>
      <p
        class="description"
        v-html="$t('services.training.presentation').replace(/\n/g, '<br>')"
      />
    </div>

    <img
      class="bg-gradient"
      src="../../../assets/img/bg-gradient.svg"
      alt=""
    >

    <list-image
      v-for="n in 2"
      :key="`services-lesage-block-${n}`"
      :title="$t(`services.training.block-${n}.title`)"
      :text="$t(`services.training.block-${n}.text`)"
      :list="$t(`services.training.block-${n}.list`)"
      :img-path="`services/training/block-${n}`"
      class="inside-the-grid"
    />

    <pricing-block
      category="services"
      product-name="training"
      :pricing="pricing"
      :text="$t('services.training.not-included')"
      :assistance="false"
    />
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import PricingBlock from '~/components/products/PricingBlock.vue'
import ListImage from '~/components/products/ListImage.vue'
import { Pricing } from '~/utils/interfaces'
import config from '~/improvize.config'

@Component({
  components: { PricingBlock, ListImage }
})
export default class Training extends Vue {
  layout (): string {
    return 'service'
  }

  get pricing (): Array<Pricing> {
    return config.pricings.training
  }
}

</script>

<style lang="scss">
.training {
  > .pricing > .pricings-and-link > .pricings > .pricing-block-item {
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);

    .features {
      margin-bottom: 10px;
    }
  }
}
</style>
