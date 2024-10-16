<script lang="ts">
  export let required: boolean = false;
</script>

<textarea
class="
  h-40
  p-2
  border border-plum-200/60 rounded
  w-full
  "
  {required}
  {...$$restProps}
/>