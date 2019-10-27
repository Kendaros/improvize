<template>
  <main
    class="cloud-hosting"
  >
    <div class="presentation padded inside-the-grid">
      <img
        src="../../../assets/img/services/cloud-hosting.svg"
        alt="Cloud Hosting"
      >
      <h1 class="title">
        {{ $t('menu.cloud-hosting') }}
      </h1>
      <p
        class="description"
        v-html="$t('services.long-description.cloud-hosting').replace(/\n/g, '<br>')"
      />
    </div>

    <img
      class="bg-gradient"
      src="../../../assets/img/bg-gradient.svg"
      alt=""
    >
  </main>
</template>

<script>
import { Vue } from 'nuxt-property-decorator'

export default class CloudHosting extends Vue {
}

</script>

<style lang="scss">
.presentation {
  margin-top: 87px;
  text-align: center;

  > .title {
    margin-top: 2px;
  }

  > .description {
    margin: 38px auto 0 auto;
    max-width: 712px;
    text-align: left;
    line-height: 1.63;
  }
}
</style>
