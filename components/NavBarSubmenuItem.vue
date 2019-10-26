<template>
  <div class="nav-bar-submenu-item">
    <div
      v-if="getImage(imgUrl)"
      class="left"
    >
      <img
        :src="getImage(imgUrl)"
        :alt="title"
        class="image"
      >
    </div>
    <div class="right">
      <div class="title">
        {{ title }}
      </div>
      <div
        v-if="description !== ''"
        class="description"
      >
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
declare function require(name: string)

@Component
export default class NavBarSubmenuItem extends Vue {
  @Prop() imgUrl!: string
  @Prop() title!: string
  @Prop() description!: string

  getImage (path): any {
    try {
      return require(`../assets/img/${path}.svg`)
    } catch {
      return null
    }
  }
}
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
    }

    & > .description {
      margin-top: 5px;
    }
  }

  &:hover {
    cursor: pointer;
  }
}

</style>
