<script lang="ts">
  import { CTAButton, Logo } from './index';
  import NavLink from './NavLink.svelte';

  $: isFixed = false;
</script>

<header
  class="
  z-20 flex w-full items-center justify-between gap-4 bg-plum-100 p-7
  
  shadow-starstorm-dim-400/20
  "
  class:shadow-2xl={isFixed}
  on:scroll={(x) => console.log(x)}
>
  <div class="logo-wrapper flex-grow basis-0">
    <Logo />
  </div>
  <nav class="flex flex-grow basis-0 justify-center gap-4">
    <NavLink href="#services">Services</NavLink>
    <NavLink href="#team">Team</NavLink>
  </nav>
  <div class="flex flex-grow basis-0 justify-end">
    <CTAButton />
  </div>
</header>