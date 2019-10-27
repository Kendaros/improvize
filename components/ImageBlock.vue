<template>
  <div class="image-block">
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
    <rect-button
      :text="btnText"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import RectButton from '~/components/RectButton.vue'

@Component({
  components: { RectButton }
})
export default class ImageBlock extends Vue {
  @Prop() title!: string
  @Prop() text!: string
  @Prop() imgSrc!: string
  @Prop() imgAlt!: string
  @Prop() imgWidth!: number
  @Prop() btnText!: string
}
</script>

<style lang="scss">
@import "~@/assets/styles/variables";
.image-block {
  max-width: 341px;
  flex: 0 1 341px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 48px;

  text-align: center;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  > .image {
    margin-bottom: 14px;
  }

  > .title {
    font-weight: bold;
    margin-bottom: 3px;
    line-height: $f26;
    font-family: $helvetica_neue;
  }

  > .text {
    margin-bottom: 30px;
    line-height: $f26;
  }
}
</style>
