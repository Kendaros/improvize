<script>
export default {
  fetch ({ redirect, route }) {
    redirect(301, `${route.name.includes('___fr') ? '/fr/' : '/'}products/lesage`)
  }
}
</script>
