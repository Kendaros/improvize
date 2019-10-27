<template>
  <div class="presentation padded inside-the-grid">
    <img
      :src="require(`../../assets/img/services/${name}.svg`)"
      :alt="$t(`menu.${name}`)"
    >
    <h1 class="title">
      {{ $t(`menu.${name}`) }}
    </h1>
    <p
      class="description"
      v-html="$t(`services.${name}.presentation`).replace(/\n/g, '<br>')"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class ServicePresentationBlock extends Vue {
  @Prop() name!: string
}
</script>

<style lang="scss">
@import "~@/assets/styles/variables";
</style>
