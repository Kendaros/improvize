<template>
  <section class="list-image padded">
    <div class="left">
      <h3 class="title">
        {{ title }}
      </h3>
      <p
        v-if="text !== ''"
        class="text"
        v-html="text.replace(/\n/g, '<br>')"
      />
      <ul
        v-if="list !== '' && list"
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
    <img
      :src="getImage(imgPath)"
      :alt="title"
      class="right image"
    >
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
declare function require(path: string): any

@Component
export default class ProductPresentation extends Vue {
  @Prop() title!: string
  @Prop({ default: '' }) list!: string
  @Prop({ default: '' }) text!: string
  @Prop() imgPath!: string

  getImage (path: string): any {
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
  justify-content: center;
  flex-wrap: wrap;

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

    > .text {
      margin-top: 10px;
      line-height: 1.63;
    }

    @media screen and (max-width: $break-xs) {
      flex-basis: 100%;
    }
  }

  > .right {
    max-width: 432px;
    flex: 1;
    text-align: right;
    width: 100%;
    min-width: 120px;

    @media screen and (max-width: $break-xs) {
      flex-basis: 100%;
    }
  }
}
</style>
