<template>
  <main
    class="cloud-hosting service"
  >
    <div class="presentation padded inside-the-grid">
      <img
        src="../../../assets/img/services/cloud-hosting.svg"
        alt="Cloud Hosting"
      >
      <h1 class="title">
        {{ $t('menu.cloud-hosting') }}
      </h1>
      <p
        class="description"
        v-html="$t('services.cloud-hosting.presentation').replace(/\n/g, '<br>')"
      />
    </div>

    <img
      class="bg-gradient"
      src="../../../assets/img/bg-gradient.svg"
      alt=""
    >

    <list-image
      v-for="n in 4"
      :key="`services-lesage-block-${n}`"
      :title="$t(`services.cloud-hosting.block-${n}.title`)"
      :text="$t(`services.cloud-hosting.block-${n}.text`)"
      :list="$t(`services.cloud-hosting.block-${n}.list`)"
      :img-path="`services/cloud-hosting/block-${n}`"
      class="inside-the-grid"
    />

    <div class="pricing-wrapper">
      <pricing-block
        class="shared-pricing"
        category="services"
        product-name="cloud-hosting"
        pricing-sub-key="shared"
        :pricing="sharedPricing"
        :title="$t('services.cloud-hosting.shared')"
        :text="$t('services.cloud-hosting.shared-text')"
        :assistance="false"
      />

      <pricing-block
        category="services"
        product-name="cloud-hosting"
        pricing-sub-key="dedicated"
        :pricing="dedicatedPricing"
        :title="$t('services.cloud-hosting.dedicated')"
        :text="$t('services.cloud-hosting.dedicated-text')"
        :assistance="false"
      />
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import ListImage from '~/components/products/ListImage.vue'
import PricingBlock from '~/components/products/PricingBlock.vue'
import config from '~/improvize.config'
import { Pricing } from '~/utils/interfaces'

@Component({
  components: { ListImage, PricingBlock }
})
export default class CloudHosting extends Vue {
  layout (): string {
    return 'service'
  }

  get sharedPricing (): Array<Pricing> {
    return config.pricings['cloud-hosting'].shared
  }

  get dedicatedPricing (): Array<Pricing> {
    return config.pricings['cloud-hosting'].dedicated
  }
}

</script>

<style lang="scss">
.cloud-hosting {
  > .list-image {
    margin-top: 100px;
  }

  > .list-image:nth-child(even) {
    > .left {
      order: 2;
    }

    > .right {
      order: 1;
      text-align: left;
    }
  }

  > .pricing-wrapper {
    background-image: linear-gradient(to bottom, rgba(248, 246, 255, 0), rgba(75, 121, 234, 0.06));
    padding: 100px 0;

    > .pricing {
      background-image: none;
      padding: 100px 0;

      > .pricings-and-link {
        > .pricings {
          > .pricing-block-item {

            &:first-child {
              box-shadow: none;
            }

            &:nth-child(2) {
              box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
            }
          }
        }
      }
    }

    > .shared-pricing {
      > .pricings-and-link {
        > .pricings {
          > .pricing-block-item {
            padding: 54px 0;
            &:nth-child(2) {
              box-shadow: none;
            }
          }
        }
      }
    }
  }
}
</style>
