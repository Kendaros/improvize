<template>
  <div class="service-block">
    <img
      :src="imgSrc"
      :alt="imgAlt"
      :style="{ width: `${imgWidth}px` }"
      class="image"
    >
    <h4 class="title">
      {{ title }}
    </h4>
    <div class="text">
      {{ text }}
    </div>
    <div class="more">
      Learn more
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import RectButton from '~/components/RectButton.vue'

@Component({
  components: { RectButton }
})
export default class ServiceBlock extends Vue {
  @Prop() title!: string
  @Prop() text!: string
  @Prop() imgSrc!: string
  @Prop() imgAlt!: string
  @Prop() imgWidth!: number
}
</script>

<style lang="scss">
@import "~@/assets/styles/variables";
.service-block {
  width: 341px;
  padding: 48px;

  text-align: center;

  display: flex;
  align-items: center;
  flex-direction: column;

  & > .image {
    margin-bottom: 14px;
  }

  & > .title {
    font-weight: bold;
    line-height: $f26;
    font-size: $f35;
    margin: 10px 0 25px;
  }

  & > .text {
    margin-bottom: 30px;
    line-height: $f26;
  }

  & > .more {
    margin-top: auto;
    align-self: flex-end;
    color: $contrast_color;
    font-weight: bold;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
