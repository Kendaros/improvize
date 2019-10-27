<template>
  <main class="clients">
    <div class="presentation padded inside-the-grid">
      <h1 class="title">
        {{ $t('general.they-trust-us') }}
      </h1>
    </div>
    <div class="all-clients padded inside-the-grid">
      <div
        v-for="client in clients"
        :key="client"
        class="client"
      >
        <img
          :src="getImage(client)"
          :alt="client"
          class="image"
        >
      </div>
    </div>

    <img
      class="bg-gradient"
      src="../../../assets/img/bg-gradient.svg"
      alt=""
    >
  </main>
</template>

<script lang="ts">
import { Vue } from 'nuxt-property-decorator'
import config from '~/improvize.config'

declare function require(path: string): any

export default class Clients extends Vue {
  get clients (): Array<string> {
    return config.clients
  }

  getImage (path: string): any {
    try {
      return require(`../../../assets/img/clients/${path}.png`)
    } catch {
      console.error(`Couldn't load assets/img/clients/${path}.png`)
    }
  }
}

</script>

<style lang="scss">
main.clients {
  text-align: center;

  > .presentation {
    margin: 150px auto 50px;
  }

  > .all-clients{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    > .client {
      max-width: 157px;
      margin: 13px;

      .image {
        max-width: 157px;
      }
    }
  }
}
</style>
