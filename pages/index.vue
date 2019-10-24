<template>
  <main class="home">
    <section class="software-solutions">
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

    <section class="they-trust-us">
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

    <section class="softwares">
      <h2 class="title">
        Softwares
      </h2>
      <div class="softwares-blocks">
        <image-block
          :title="$t('menu.lesage')"
          :text="$t('softwares.lesage')"
          :img-src="require('~/assets/img/softwares/lesage.svg')"
          img-alt="Le Sage icon"
          img-width="121"
          :btn-text="$t('softwares.discover', { software: $t('menu.lesage') })"
        />
        <image-block
          :title="$t('menu.inpro')"
          :text="$t('softwares.inpro')"
          :img-src="require('~/assets/img/softwares/inpro.svg')"
          img-alt="Inpro icon"
          img-width="121"
          :btn-text="$t('softwares.discover', { software: $t('menu.inpro') })"
        />
      </div>
    </section>

    <section class="services">

    </section>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import RectButton from '~/components/RectButton.vue'
import ImageBlock from '~/components/ImageBlock'

@Component({
  components: { RectButton, ImageBlock }
})
export default class LandingPage extends Vue {
  get frontClients () {
    return [
      'velvetica',
      'peermusic',
      'cymba',
      'sentinel',
      'budde',
      'idol'
    ]
  }
}
</script>

<style lang="scss">
@import "~@/assets/styles/variables";

.home {
  padding: 0 180px;

  .software-solutions {
    min-height: 730px;
    display: flex;

    .left {
      flex: 1;
      display: flex;
      justify-content: center;
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
    margin-bottom: 149px;

    & > .title {
      margin-bottom: 12px;
    }

    & > .clients {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;

      & > .client-image {
        flex: 0 0 114px;
        width: 114px;
        height: 114px;
        margin: 0 39.5px;
      }
    }
  }

  .softwares {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

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
}
</style>
