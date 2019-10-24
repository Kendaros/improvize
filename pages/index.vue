<template>
  <main class="home">
    <div class="software-solutions">
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
    </div>

    <div class="they-trust-us">
      <h2 class="title">
        They trust us
      </h2>
      <div class="clients" />
    </div>

    <div class="softwares">
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
    </div>
  </main>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import RectButton from '~/components/RectButton.vue'
import ImageBlock from '~/components/ImageBlock'

@Component({
  components: { RectButton, ImageBlock }
})
export default class LandingPage extends Vue {

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
