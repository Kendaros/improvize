<template>
  <nav class="main-nav">
    <ul class="menu">
      <li
        v-for="menuItem in groups"
        :key="menuItem.title"
        class="menu-item"
        @mouseenter="toggleSubmenu(menuItem.title)"
        @mouseleave="toggleSubmenu('')"
      >
        {{ $t(`menu.${menuItem.title}`) }}
        <div
          v-if="activeCategory === menuItem.title"
          class="submenu"
        >
          <n-link
            v-for="submenuItem in menuItem.links"
            :key="submenuItem"
            :to="{ name: `${menuItem.title}-${submenuItem}___${$route.name.slice(-2)}` }"
            class="link"
          >
            <sub-item />
          </n-link>
        </div>
      </li>
    </ul>
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
  activeCategory: string = ''

  get groups (): Array<Category> {
    return config.menu
  }

  toggleSubmenu (category: string) {
    this.activeCategory = category || ''
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

    .link {
      color: $font_dark_color;
      text-decoration: none;
    }
  }
}
</style>
