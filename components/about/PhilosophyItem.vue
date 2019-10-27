<template>
  <div class="philosophy-item">
    <img
      :src="getImage(imgPath)"
      :alt="title"
      class="image">
    <h3 class="title">{{ title }}</h3>
    <p
      class="text"
      v-html="text.replace(/\n/g, '<br>')"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
declare function require(path: string): any

@Component
export default class PhilosophyItem extends Vue {
  @Prop() title!: string
  @Prop() text!: string
  @Prop() imgPath!: string

  getImage (path: string): any {
    try {
      return require(`../../assets/img/philosophy/${path}.svg`)
    } catch {
      console.error(`Couldn't load assets/img/philosophy/${path}.svg`)
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/styles/variables";

.philosophy-item {
  max-width: 341px;
  border-radius: 4px;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding: 50px 35px;

  text-align: center;

  & > .title {
    margin: 30px auto 0;
    max-width: 80%;
  }

  & > .text {
    text-align: left;
    margin-top: 42px;
    line-height: 1.63;
  }
}
</style>
