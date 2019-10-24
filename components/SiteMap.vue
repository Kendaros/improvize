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
          to="/"
        >
          {{ $t(`menu.${link}`) }}
        </n-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

interface Category {
  title: string,
  links: Array<string>
}

@Component
export default class SiteMap extends Vue {
  static get groups (): Array<Category> {
    return [
      {
        title: 'products',
        links: ['lesage', 'inpro', 'spain']
      },
      {
        title: 'services',
        links: ['cloud-hosting', 'support', 'training']
      },
      {
        title: 'resources',
        links: ['documentation', 'issue-tracking']
      },
      {
        title: 'about-us',
        links: ['who-we-are', 'contact-us', 'careers']
      }
    ]
  }
}
</script>

<style lang="scss">
@import "~@/assets/styles/variables";
.sitemap {
  display: flex;

  .group {
    list-style-type: none;
    padding: 0;
    margin: 0 50px;

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
