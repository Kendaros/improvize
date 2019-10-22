<template>
  <nav class="main-nav">
    <ul class="menu">
      <li class="menu-item">
        {{ $t('menu.products') }}
      </li>
      <li class="menu-item">
        {{ $t('menu.services') }}
      </li>
      <li class="menu-item">
        {{ $t('menu.resources') }}
      </li>
      <li class="menu-item">
        {{ $t('menu.about-us') }}
      </li>
    </ul>
  </nav>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class NavBar extends Vue {}
</script>

<style lang="scss">
.main-nav {
  .menu {
    list-style-type: none;
    padding: 0;

    .menu-item {
      display: inline-block;
      line-height: 80px;
      padding: 0 25px;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
