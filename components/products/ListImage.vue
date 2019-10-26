<template>
  <section class="list-image padded">
    <div class="left">
      <h3 class="title">
        An open ecosystem
      </h3>
      <ul class="list">
        <li>Rights and catalogue imports compatible with roughly 300 systems</li>
        <li>Fast processing even on high data volumes</li>
      </ul>
    </div>
    <div class="right">
      <img src="../../assets/img/products/lesage/lesage-01.svg" alt="">
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class ProductPresentation extends Vue {
  @Prop() title!: string
  @Prop() subtitle!: string
  @Prop() description!: string
  @Prop() imgPath!: string
}
</script>

<style lang="scss">
@import '~/assets/styles/variables.scss';

.list-image {
  display: flex;

  > .left {
    flex: 1;

    > .title {
    }

    > .list {
      margin: 31px 0 0 14px;
      padding: 0;
      line-height: 2.25;
    }
  }

  > .right {
    flex: 1;
    text-align: center;
  }
}
</style>
