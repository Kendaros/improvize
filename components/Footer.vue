<template>
  <footer class="main-footer">
    <div class="logo">
      <img src="../assets/img/logo-simple.svg" alt="Improvize logo">
    </div>
    <site-map />
  </footer>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import SiteMap from '~/components/SiteMap.vue'

@Component({
  components: { SiteMap }
})
export default class Footer extends Vue {}
</script>

<style lang="scss">
@import "~@/assets/styles/variables";

.main-footer {
  height: 350px;
  padding: 0 $padding-xl;
  background-image: linear-gradient(to bottom, rgba(248, 246, 255, 0), rgba(75, 121, 234, 0.06));

  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    width: 78px;
  }
}
</style>
