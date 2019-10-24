<template>
  <div class="button">
    <span>{{ text }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class RectButton extends Vue {
  @Prop() text!: string
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/variables";

.button {
  background-color: $contrast_color;
  color: white;
  font-size: $f18;
  width: 213px;
  height: 60px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
   cursor: pointer;
  }
}
</style>
