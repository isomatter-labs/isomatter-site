<script lang="ts">
  export let href: string;
  import { page } from '$app/stores';

  $: isActive = $page.url.hash === href;
</script>

<a
  class="border-plum-200 leading-6 px-[2px] pb-1 text-plum-400 no-underline"
  class:border-b={isActive}
  {href}
  {...$$restProps}
>
  <slot />
</a>
