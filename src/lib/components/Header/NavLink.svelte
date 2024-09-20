<script lang="ts">
  export let href: string;
  import { page } from '$app/stores';
  import { circInOut, cubicInOut, quadOut } from 'svelte/easing';
  import { tweened } from 'svelte/motion';

  $: isActive = $page.url.hash === href;
  $: isActive ? toggleUnderline(1) : toggleUnderline(0);

  const scaleX = tweened(0, { duration: 400, delay: 50, easing: circInOut });

  function toggleUnderline(toggle: 0 | 1) {
    scaleX.set(toggle);
  }
</script>

<a
  class="relative border-plum-200 px-[2px] pb-1 leading-6 text-plum-400 no-underline"
  {href}
  {...$$restProps}
  on:mouseover={() => toggleUnderline(1)}
  on:focus={() => toggleUnderline(1)}
  on:mouseout={() => {
    if (!isActive) toggleUnderline(0);
  }}
  on:blur={() => {
    if (!isActive) toggleUnderline(0);
  }}
>
  <slot />
  <div
    class="absolute left-0 mt-[2px] w-full origin-center border-b border-plum-200 underline"
    style="transform: scaleX({$scaleX});"
  ></div>
</a>
