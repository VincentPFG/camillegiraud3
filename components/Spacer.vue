<script>
export default {
  functional: true,
  render(h, { children }) {
    return h(
      'v-row',
      children.map((child) => h('v-col', { props: { cols: 12 } }, [child]))
    )
  },
}
</script>
