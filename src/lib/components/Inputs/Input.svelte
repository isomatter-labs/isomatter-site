<script lang="ts">
  export let value: string = '';
</script>

<input
  bind:value
  class="
    h-12
    p-2
    border border-plum-200/60 rounded
    w-full
  "
  {...$$restProps}
/>