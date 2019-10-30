<script lang="ts">
import config from '~/improvize.config.ts'
export default {
  fetch ({ redirect, route }: { redirect: any, route: any }) {
    redirect(301, route.name.slice(-2) === 'fr'
      ? config!.documentation.find(d => d.lang === 'fr')!.url
      : config!.documentation.find(d => d.lang === 'en')!.url
    )
  }
}
</script>

<style lang="scss">
</style>
