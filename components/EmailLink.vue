<template>
  <div
    class="link"
    @click="sendEmail"
  >
    <rect-button
      :text="$t('menu.contact-us')"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import RectButton from '~/components/RectButton.vue'
import config from '~/improvize.config'

@Component({
  components: { RectButton }
})
export default class EmailLink extends Vue {
  get email (): string {
    return Buffer.from(config.email, 'base64').toString()
  }

  sendEmail () {
    window.location.href = `mailto:${this.email}`
  }
}
</script>

<style lang="scss">
</style>
