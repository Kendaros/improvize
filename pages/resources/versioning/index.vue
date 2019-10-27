<template>
  <main class="versioning">
    <div class="presentation padded inside-the-grid">
      <img src="../../../assets/img/resources/version.svg" alt="Versioning">
      <h1 class="title">
        {{ $t('menu.versioning') }}
      </h1>
      <div class="text">
        {{ $t('versioning.description') }}
      </div>
    </div>
    <div class="product-selector">
      <ul class="product-selector-list">
        <li
          v-for="product in products"
          :key="product"
          :class="{ active: product === productSelected }"
          class="product-selector-item"
          @click="setProduct(product)"
        >
          {{ $t(`menu.${product}`) }}
        </li>
      </ul>
    </div>

    <div
      v-for="product in products"
      :key="`versions-list-${product}`"
      class="versioning-wrapper"
    >
      <div
        v-if="product === productSelected"
        class="versioning padded"
      >
        <div class="versioning-item-header versioning-item">
          <div class="name">
            {{ $t('general.name') }}
          </div>
          <div class="date">
            {{ $t('general.date') }}
          </div>
          <div class="size">
            {{ $t('general.size') }}
          </div>
          <div class="download" />
        </div>
        <versioning-item
          v-for="version in versions[product]"
          :key="version.name"
          :name="version.name"
          :date="version.date"
          :size="version.size"
          :url="version.url"
        />
        <a
          :href="versions.history[product]"
          class="link"
        >
          {{ $t('versioning.history') }}
          <img
            src="../../../assets/img/arrow.svg"
            alt="arrow"
            class="image"
          >
        </a>
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
import { Component } from '~/node_modules/nuxt-property-decorator'
import VersioningItem from '~/components/resources/VersioningItem.vue'
import { Versions } from '~/utils/interfaces'
declare function require(path: string): any

@Component({
  components: { VersioningItem }
})
export default class Versioning extends Vue {
  productSelected: string = 'lesage'

  get clients (): Array<string> {
    return config.clients
  }

  get products (): Array<string> {
    return config.menu.find(a => a.title === 'products')!.links
  }

  get versions (): Versions {
    return config.versions
  }

  getImage (path: string): any {
    try {
      return require(`../../../assets/img/clients/${path}.png`)
    } catch {
      console.error(`Couldn't load assets/img/clients/${path}.png`)
    }
  }

  setProduct (name: string) {
    this.productSelected = name
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/variables';

main.versioning {
  text-align: center;

  > .presentation {
    margin: 87px auto 50px;
  }

  > .all-clients {
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

  > .product-selector {
    margin-top: 96px;

    > .product-selector-list {
      display: inline-block;
      list-style-type: none;
      margin: 0;
      padding: 0;

      > .product-selector-item {
        display: inline-block;
        width: 102px;
        height: 46px;
        border-radius: 4px;
        background-color: #f7f7f7;

        text-align: center;
        line-height: 46px;
        margin: 5px;

        transition: color 0.3s ease, background-color 0.3s ease;

        &.active {
          color: #4b79ea;
          background: #e0e6f7;
        }

        &:hover {
          cursor: pointer;
          color: #4b79ea;
          background: #e0e6f7;
        }
      }
    }
  }

  > .versioning-wrapper {
    > .versioning {
      display: flex;
      margin: 50px auto;
      text-align: center;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      > .versioning-item-header {
        color: $font_dark_color;
        font-weight: bold;
        box-shadow: none;
        background: none;
        height: 30px;

        > .download {
          width: 36px;
        }
      }

      > .versioning-item {
        margin: 6px;
      }

      > .link {
        margin-top: 40px;
        color: $contrast_color;
        font-weight: bold;
        text-decoration: none;

        > .image {
          width: 10px;
          position: relative;
          top: 3px;
          margin-left: 10px;
        }

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
