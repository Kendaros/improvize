<template>
  <header class="main-header padded">
    <div class="logo">
      <n-link to="/">
        <img src="../assets/img/logo.svg" alt="Improvize logo">
      </n-link>
    </div>
    <nav-bar />
  </header>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import NavBar from '~/components/NavBar.vue'

@Component({
  components: { NavBar }
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/variables";

.main-header {
  height: 80px;
  padding: 0 $padding-xl;
  display: flex;
  align-items: center;

  .logo {
    width: 161px;
    margin-right: 51px;
  }
}
</style>
