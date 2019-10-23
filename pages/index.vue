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
          <contact-button />
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
  </main>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import ContactButton from '~/components/ContactButton'

@Component({
  components: { ContactButton }
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
}
</style>
