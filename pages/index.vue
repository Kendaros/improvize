<template>
  <main class="home">
    <section class="software-solutions padded inside-the-grid">
      <div class="left">
        <div class="wrapper">
          <h1 class="title">
            {{ $t('home.title') }}
          </h1>
          <p class="text">
            {{ $t('home.description') }}
          </p>
          <a
            :href="`mailto:${email}`"
            class="link"
          >
            <rect-button
              :text="$t('menu.contact-us')"
            />
          </a>
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

    <img
      class="bg-gradient"
      src="../assets/img/bg-gradient.svg"
      alt=""
    >

    <section class="they-trust-us padded inside-the-grid">
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

    <section class="softwares padded inside-the-grid">
      <h2 class="title">
        {{ $t('general.softwares') }}
      </h2>
      <div class="softwares-blocks">
        <image-block
          v-for="software in softwares"
          :key="`software-${software}`"
          :title="$t(`menu.${software}`)"
          :text="$t(`home.softwares.${software}`)"
          :img-src="require(`~/assets/img/products/${software}.svg`)"
          :img-alt="$t(`menu.${software}`)"
          img-width="121"
          :btn-text="$t('home.softwares.discover', { software: $t(`menu.${software}`) })"
          :link="`products-${software}___${$route.name.slice(-2)}`"
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
          :text="$t(`home.services.${service}`)"
          :img-src="require(`~/assets/img/services/${service}.svg`)"
          :img-alt="$t('menu.services')"
          img-width="45"
          :more-route="`services-${service}`"
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
import config from '~/improvize.config'

@Component({
  components: { RectButton, ImageBlock, ServiceBlock }
})
export default class LandingPage extends Vue {
  get email (): string {
    return config.email
  }

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
  > .software-solutions {
    margin-top: 80px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap-reverse;

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

        > .link {
          text-decoration: none;
        }
      }
    }

    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 0 1 405px;
      max-width: 405px;

      .image {
        width: 100%;
      }
    }
  }

  > .they-trust-us {
    text-align: center;
    margin-top: 120px;
    margin-bottom: 150px;

    > .title {
      margin-bottom: 12px;
    }

    > .clients {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      margin: 0 -48px;

      > .client-image {
        flex: 0 0 114px;
        width: 114px;
        height: 114px;
        margin: 0 24px;
      }
    }
  }

  > .softwares {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 120px;

    > .title {
      margin-bottom: 52px;
    }

    > .softwares-blocks {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      .image-block {
        margin: 14px;
      }
    }
  }

  > .services {
    min-height: 552px;
    background-image: linear-gradient(to bottom, rgba(248, 246, 255, 0), rgba(75, 121, 234, 0.06));

    text-align: center;

    > .title {
      margin-bottom: 53px;
    }

    > .services-blocks {
      display: flex;
      justify-content: center;
      align-items: stretch;
      flex-wrap: wrap;
    }
  }
}
</style>
