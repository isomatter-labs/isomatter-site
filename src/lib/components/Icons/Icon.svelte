<script lang="ts">
  import Arrow from './Arrow.svelte';

  export let icon: 'arrow' = 'arrow';
</script>

{#if icon === 'arrow'}
  <Arrow {...$$restProps} />
{/if}
