<script>
  import { CTAButton, Logo } from '..';
  import { page } from '$app/stores';
  import NavLink from './NavLink.svelte';
</script>

<div class="logo-wrapper flex-grow basis-0">
  <a href={$page.url.origin}>
    <Logo vivid />
  </a>
</div>
<nav class="hidden flex-grow basis-0 justify-center gap-4 md:flex">
  <NavLink href="/#services">Services</NavLink>
  <NavLink href="/#team">Team</NavLink>
</nav>
<div class="hidden flex-grow basis-0 justify-end md:flex">
  <CTAButton />
</div>
