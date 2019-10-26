<template>
  <div class="nav-bar-submenu-item">
    <div class="left">
      <img
        src="../assets/img/products/lesage.svg"
        alt="LeSage"
        class="image"
      >
    </div>
    <div class="right">
      <div class="title">
        Le Sage
      </div>
      <div class="description">
        Software solution for music publishers
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'

@Component()
export default class NavBarSubmenuItem extends Vue {}
</script>

<style lang="scss">
@import '~/assets/styles/variables';

.nav-bar-submenu-item {
  padding: 22px 0;
  line-height: $f16;

  display: flex;

  & > .left {
    margin-right: 13px;
    & > .image {
      width: 36px;
    }
  }

  & > .right {
    & > .title {
      font-weight: bold;
      margin-bottom: 5px;
    }
  }

  &:hover {
    cursor: pointer;
  }

  & + .nav-bar-submenu-item {
    border-top: 1px solid #ebebeb;
  }
}

</style>
