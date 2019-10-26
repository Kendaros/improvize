<template>
  <section class="list-image padded">
    <div class="left">
      <h3 class="title">
        {{ title }}
      </h3>
      <ul
        v-if="list !== ''"
        class="list"
      >
        <li
          v-for="(item, i) in list.split('\n')"
          :key="`list-item-${title}-${i}`"
          class="list-item"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="right">
      <img
        :src="getImage(imgPath)"
        :alt="title"
        class="image"
      >
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
declare function require(path: string): any

@Component
export default class ProductPresentation extends Vue {
  @Prop() title!: string
  @Prop({ default: '' }) list!: string
  @Prop() imgPath!: string
  @Prop() imgWidth!: number

  getImage (path: string): any {
    console.log(path)
    try {
      return require(`../../assets/img/${path}.svg`)
    } catch {
      try {
        return require(`../../assets/img/${path}.png`)
      } catch {
        try {
          return require(`../../assets/img/${path}.jpg`)
        } catch {
          return null
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/variables.scss';

.list-image {
  display: flex;
  align-items: center;

  > .left {
    flex: 1;

    > .list {
      margin: 31px 0 0 14px;
      padding: 0;
      line-height: 2.25;

      > .list-item {
        padding-left: 10px;
      }
    }
  }

  > .right {
    flex: 1;
    text-align: right;

    > .image {
      width: 432px;
    }
  }
}
</style>
