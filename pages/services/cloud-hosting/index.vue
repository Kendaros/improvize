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
        v-html="$t('services.cloud-hosting.presentation').replace(/\n/g, '<br>')"
      />
    </div>

    <img
      class="bg-gradient"
      src="../../../assets/img/bg-gradient.svg"
      alt=""
    >

    <list-image
      v-for="n in 4"
      :key="`services-lesage-block-${n}`"
      :title="$t(`services.cloud-hosting.block-${n}.title`)"
      :text="$t(`services.cloud-hosting.block-${n}.text`)"
      :list="$t(`services.cloud-hosting.block-${n}.list`)"
      :img-path="`services/cloud-hosting/block-${n}`"
      class="inside-the-grid"
    />
  </main>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import ListImage from '~/components/products/ListImage.vue'

@Component({
  components: { ListImage }
})
export default class CloudHosting extends Vue {
}

</script>

<style lang="scss">
.cloud-hosting {
  > .presentation {
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

  > .list-image {
    margin-top: 100px;
  }

  > .list-image:nth-child(even) {
    > .left {
      order: 2;
    }

    > .right {
      order: 1;
      text-align: left;
    }
  }
}
</style>
