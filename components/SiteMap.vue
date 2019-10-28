<template>
  <nav class="sitemap">
    <ul
      v-for="group in groups"
      :key="group.title"
      class="group"
    >
      <li class="group-title group-item">
        {{ $t(`menu.${group.title}`) }}
      </li>
      <li
        v-for="link in group.links"
        :key="link"
        class="group-item"
      >
        <n-link
          class="link"
          :to="{ name: `${group.title}-${link}___${$route.name.slice(-2)}` }"
        >
          {{ $t(`menu.${link}`) }}
        </n-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Category } from '~/utils/interfaces'
import config from '~/improvize.config'

@Component
export default class SiteMap extends Vue {
  get groups (): Array<Category> {
    return config.menu
  }
}
</script>

<style lang="scss">
@import "~@/assets/styles/variables";
.sitemap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: cener;

  .group {
    list-style-type: none;
    padding: 0;
    width: 200px;

    @media screen and (max-width: $break-md) {
      width: 150px;
      margin: 10px;
    }

    .group-title {
      color: $font_dark_color;
      font-weight: bold;
    }

    .group-item {
      padding: 10px 0;

      .link {
        color: $font_dark_color;
        text-decoration: none;

        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }

    }
  }
}
</style>
