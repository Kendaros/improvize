<template>
  <div class="pricing-block-item">
    <h3 class="title">
      {{ title }}
    </h3>
    <div class="price">
      <span class="figure">
        {{ $n(price, `${price % 1 === 0 ? 'currency' : 'currencyDecimals'}`) }}
      </span>
      <span class="ht">H.T</span>
    </div>
    <div
      v-if="frequency !== ''"
      class="monhtly"
    >
      {{ $t(`general.${frequency}`) }}
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
    <email-link
      v-if="button"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import config from '~/improvize.config'
import EmailLink from '~/components/EmailLink.vue'

@Component({
  components: { EmailLink }
})
export default class PricingBlockItem extends Vue {
  @Prop() title!: string
  @Prop() price!: number
  @Prop({ default: '' }) frequency!: string
  @Prop({ default: '' }) features!: string
  @Prop({ default: false }) button!: boolean

  get email (): string {
    return config.email
  }
}
</script>

<style lang="scss">
@import "~@/assets/styles/variables";

$pricing-block-item-padding: 33px;

.pricing-block-item {
  max-width: 343px;
  flex: 0 1 343px;
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

  > .link {
    text-decoration: none;

    > .button {
      margin-bottom: 10px;
    }
  }
}
</style>
