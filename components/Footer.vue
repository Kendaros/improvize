<template>
  <footer class="main-footer padded">
    <div class="footer-wrapper inside-the-grid">
      <div class="logo">
        <img src="../assets/img/logo-simple.svg" alt="Improvize logo">
      </div>
      <site-map />
    </div>
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
  min-height: 350px;
  background-image: linear-gradient(to bottom, rgba(248, 246, 255, 0), rgba(75, 121, 234, 0.06));

  & > .footer-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    & > .logo {
      width: 78px;
    }
  }
}
</style>
