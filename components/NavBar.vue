<template>
  <nav class="main-nav">
    <ul class="menu">
      <li
        v-for="group in groups"
        :key="group.title"
        class="menu-item"
        @mouseenter="toggleSubmenu(group.title)"
        @mouseleave="toggleSubmenu('')"
      >
        {{ $t(`menu.${group.title}`) }}
        <div
          v-if="activeCategory === group.title"
          class="submenu"
        >
          <n-link
            v-for="submenuItem in group.links"
            :key="submenuItem"
            :to="{ name: `${group.title}-${submenuItem}___${$route.name.slice(-2)}` }"
            class="link"
          >
            <sub-item
              :img-path="`${group.title}/${submenuItem}`"
              :title="$t(`menu.${submenuItem}`)"
              :description="$t(`menu.descriptions.${submenuItem}`)"
            />
          </n-link>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'nuxt-property-decorator'
import SubItem from '~/components/NavBarSubmenuItem.vue'
import config from '~/improvize.config'
import { Category } from '~/utils/interfaces'

@Component({
  components: { SubItem }
})
export default class NavBar extends Vue {
  activeCategory: string = ''

  @Watch('$route')
  onRouteChanged () {
    this.activeCategory = ''
  }

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
      display: block;
      color: $font_dark_color;
      text-decoration: none;

      & + .link {
        border-top: 1px solid #ebebeb;
      }
    }
  }
}
</style>
