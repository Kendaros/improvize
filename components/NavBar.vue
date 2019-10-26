<template>
  <nav class="main-nav">
    <ul class="menu">
      <li
        v-for="menuItem in groups"
        :key="menuItem.title"
        class="menu-item"
        @mouseover="showSubmenu(menuItem.links)"
        @mouseout="hideSubmenu"
      >
        {{ $t(`menu.${menuItem.title}`) }}
      </li>
    </ul>
    <div class="submenu">
      <sub-item
        v-for="submenuItem in submenu"
        :key="submenuItem"
      />
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import SubItem from '~/components/NavBarSubmenuItem.vue'
import config from '~/improvize.config'
import { Category } from '~/utils/interfaces'

@Component({
  components: { SubItem }
})
export default class NavBar extends Vue {
  submenu: Array<string> = []

  get groups (): Array<Category> {
    return config.menu
  }

  showSubmenu (submenuItems: Array<string>) {
    if (submenuItems) {
      this.submenu = submenuItems
    }
  }

  hideSubmenu () {
    this.submenu = []
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/variables';

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

  .submenu {
    position: absolute;
    top: 80px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.11);
    padding: 0 22px;
    background: #FFFFFF;
  }
}
</style>
