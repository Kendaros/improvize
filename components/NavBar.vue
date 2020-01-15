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
            :to="{ name: `${group.title}-${submenuItem}___${$route.name ? $route.name.slice(-2) : 'en'}` }"
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
    <div
      class="button-burger"
      @click="toggleMenu"
    >
      <img src="../assets/img/burger.svg" alt="Menu icon">
    </div>
    <div
      v-if="menu"
      class="mobile-menu"
    >
      <div
        class="close"
        @click="toggleMenu"
      >
        <img src="../assets/img/close.svg" alt="Close menu">
      </div>
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
          @click="toggleMenu"
        >
          <n-link
            class="link"
            :to="{ name: `${group.title}-${link}___${$route.name ? $route.name.slice(-2) : 'en'}` }"
          >
            <div>
              <div class="title">
                {{ $t(`menu.${link}`) }}
              </div>
              <div class="description">
                {{ $t(`menu.descriptions.${link}`) }}
              </div>
            </div>
          </n-link>
        </li>
      </ul>
    </div>
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
  menu: boolean = false

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

  toggleMenu () {
    this.menu = !this.menu
    window.document.body.style.overflow = this.menu ? 'hidden' : 'scroll'
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/variables';

.main-nav {
  display: flex;
  width: 100%;

  @media screen and (max-width: $break-sm) {
    justify-content: flex-end;
  }

  > .menu {
    list-style-type: none;
    padding: 0;

    @media screen and (max-width: $break-sm) {
      display: none;
    }

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

    @media screen and (max-width: $break-sm) {
      display: none;
    }

    .link {
      display: block;
      color: $font_dark_color;
      text-decoration: none;

      & + .link {
        border-top: 1px solid #ebebeb;
      }
    }
  }

  > .button-burger {
    width: 20px;
    display: none;

    @media screen and (max-width: $break-sm) {
      display: inline-block;
    }

    @media screen and (max-width: $break-xs) {
      margin-right: 10px;
    }
  }

  > .mobile-menu {
    width: 100vw;
    min-height: 100vh;
    background: $contrast_color;
    color: #FFFFFF;
    position: fixed;
    top: 0;
    left: 0;
    padding: 25px;
    height: 0;
    overflow-y: scroll;

    > .close {
      width: 30px;
      position: fixed;
      top: 25px;
      right: $padding-md;

      @media screen and (max-width: $break-xs) {
        right: $padding-xs
      }
    }

    > .group {
      list-style-type: none;
      padding: 0;
      margin-bottom: 25px;

      > .group-title {
        font-family: $miso;
        font-size: $f30;
      }

      > .group-item {
        display: block;

        & + .group-item {
          margin-top: 20px;
        }
      }

      .link {
        display: block;
        text-decoration: none;
        color: white;
        margin-left: 25px;

        .title {
          font-weight: bold;
        }

        .description {
          line-height: 1.5;
        }
      }
    }
  }
}
</style>
