<template>
  <header class="main-header">
    <div class="logo">
      <img src="../assets/img/logo.svg" alt="Improvize logo">
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
.main-header {
  height: 80px;
  padding: 0 180px;

  display: flex;
  align-items: center;

  .logo {
    width: 161px;
    margin-right: 51px;
  }
}
</style>
