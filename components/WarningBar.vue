<template>
  <div class="warning-bar">
    {{ text }}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class WarningBar extends Vue {
  @Prop() text!: string
}
</script>

<style lang="scss">
@import "~@/assets/styles/variables";
.warning-bar {
  background: #ffb44b;
  font-weight: bold;
  text-align: center;
  min-height: 50px;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}
</style>
