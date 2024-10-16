<script lang="ts">
  import { onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicInOut } from 'svelte/easing';
  import HeaderContent from './HeaderContent.svelte';

  $: slideDown = false;

  const translateY = tweened(1, { duration: 800, easing: cubicInOut });
  const opacity = tweened(0, { duration: 500, easing: cubicInOut });

  let headerRef: HTMLHeadElement;

  onMount(() => {
    window.addEventListener('scroll', async () => {
      if (window.scrollY > headerRef.scrollHeight && !slideDown) {
        slideDown = true;
        await Promise.all([translateY.set(0), opacity.set(1)]);
        return;
      } 
      if (window.scrollY < headerRef.scrollHeight / 2 && slideDown) {
        await Promise.all([translateY.set(1, { duration: 600 }), opacity.set(0)]);
        slideDown = false;
      }
    });
  });
</script>

<header
  class="
  z-20 flex w-full items-center justify-between gap-4 bg-plum-100 px-10 py-7"
  bind:this={headerRef}
>
  <HeaderContent />
</header>

<header
  class="
    fixed left-0 top-0 z-20 flex w-full items-center justify-between gap-4 bg-plum-100 px-10 py-7
    shadow-2xl shadow-starstorm-dim-400/20
  "
  class:hidden={!slideDown}
  style="
    transform: translateY({-50 * $translateY}px);
    opacity: {1 - $translateY};
  "
>
  <HeaderContent />
</header>
