<template>
  <div class="button">
    <span>{{ $t('contact-us.button') }}</span>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class ContactButton extends Vue {}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/variables";

.button {
  background-color: #31ab9b;
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
