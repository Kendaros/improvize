<template>
  <main class="home">
    <section class="software-solutions padded">
      <div class="left">
        <div class="wrapper">
          <h1 class="title">
            {{ $t('home.title') }}
          </h1>
          <p class="text">
            {{ $t('home.description') }}
          </p>
          <rect-button
            :text="$t('menu.contact-us')"
          />
        </div>
      </div>
      <div class="right">
        <img
          src="../assets/img/software-solutions.jpg"
          alt="Software Solutions"
          class="image"
        >
      </div>
    </section>

    <section class="they-trust-us padded">
      <h3 class="title">
        {{ $t('general.they-trust-us') }}
      </h3>
      <div class="clients">
        <img
          v-for="client in frontClients"
          :key="client"
          :src="require(`~/assets/img/clients/${client}.png`)"
          :alt="client"
          class="client-image"
        >
      </div>
    </section>

    <section class="softwares padded">
      <h2 class="title">
        Softwares
      </h2>
      <div class="softwares-blocks">
        <image-block
          v-for="software in softwares"
          :key="`software-${software}`"
          :title="$t(`menu.${software}`)"
          :text="$t(`softwares.${software}`)"
          :img-src="require(`~/assets/img/softwares/${software}.svg`)"
          :img-alt="$t(`menu.${software}`)"
          img-width="121"
          :btn-text="$t('softwares.discover', { software: $t(`menu.${software}`) })"
        />
      </div>
    </section>

    <section class="services">
      <h2 class="title">
        {{ $t('menu.services') }}
      </h2>
      <div class="services-blocks">
        <service-block
          v-for="service in services"
          :key="`service-${service}`"
          :title="$t(`menu.${service}`)"
          :text="$t(`services.${service}`)"
          :img-src="require(`~/assets/img/services/${service}.svg`)"
          :img-alt="$t('menu.service')"
          img-width="45"
        />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import RectButton from '~/components/RectButton.vue'
import ImageBlock from '~/components/ImageBlock.vue'
import ServiceBlock from '~/components/ServiceBlock.vue'

@Component({
  components: { RectButton, ImageBlock, ServiceBlock }
})
export default class LandingPage extends Vue {
  get frontClients (): Array<string> {
    return [
      'velvetica',
      'peermusic',
      'cymba',
      'sentinel',
      'budde',
      'idol'
    ]
  }

  get softwares (): Array<string> {
    return [
      'lesage',
      'inpro'
    ]
  }

  get services (): Array<string> {
    return [
      'cloud-hosting',
      'support',
      'training'
    ]
  }
}
</script>

<style lang="scss">
@import "~@/assets/styles/variables";

.home {
  .padded {
    padding: 0 180px;
  }

  .software-solutions {
    min-height: 730px;
    display: flex;

    .left {
      flex: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .wrapper {
        max-width: 500px;

        .title {
          margin-bottom: 36px;
        }

        .text {
          margin-bottom: 50px;
          line-height: 1.5;
        }
      }
    }

    .right {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      .image {
        width: 405px;
      }
    }
  }

  .they-trust-us {
    text-align: center;
    margin-bottom: 150px;

    & > .title {
      margin-bottom: 12px;
    }

    & > .clients {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      margin: 0 -48px;

      & > .client-image {
        flex: 0 0 114px;
        width: 114px;
        height: 114px;
        margin: 0 24px;
      }
    }
  }

  .softwares {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 120px;

    & > .title {
      margin-bottom: 52px;
    }

    & > .softwares-blocks {
      display: flex;

      .image-block {
        + .image-block {
          margin-left: 29px;
        }
      }
    }
  }

  .services {
    min-height: 552px;
    background-image: linear-gradient(to bottom, rgba(248, 246, 255, 0), rgba(75, 121, 234, 0.06));

    padding: 78px;
    text-align: center;

    & > .title {
      margin-bottom: 53px;
    }

    & > .services-blocks {
      display: flex;
      justify-content: center;
      align-items: stretch;
    }
  }
}
</style>
