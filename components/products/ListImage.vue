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
          class="list-item">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="right">
      <img :src="getImage(imgPath)" :alt="title">
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

  getImage (path: string): any {
    try {
      return require(`../../assets/img/${path}`)
    } catch {
      return null
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/variables.scss';

.list-image {
  display: flex;

  > .left {
    flex: 1;

    > .title {
    }

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
    text-align: center;
  }
}
</style>
