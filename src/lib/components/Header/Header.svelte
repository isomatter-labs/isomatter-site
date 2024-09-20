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
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > headerRef.scrollHeight * 2) {
        if ($translateY === 1 && $opacity === 0) {
          console.log('slideDown');
          slideDown = true;
          translateY.set(0);
          opacity.set(1);
        }
      } else {
        if (
          window.scrollY < headerRef.scrollHeight / 2 ||
          ($translateY === 0 && $opacity === 1)
        ) {
          translateY.set(1, { duration: 600 }).then(() => (slideDown = false));
          opacity.set(0);
        }
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
