<script>
  import { CTAButton, Logo } from '..';
  import { page } from '$app/stores';
  import NavLink from './NavLink.svelte';
</script>

<a class="logo-wrapper flex-grow basis-0" href={$page.url.origin}>
  <Logo vivid />
</a>
<nav class="hidden flex-grow basis-0 justify-center gap-4 md:flex">
  <NavLink href="/#services">Services</NavLink>
  <NavLink href="/#team">Team</NavLink>
</nav>
<div class="hidden flex-grow basis-0 justify-end md:flex">
  <CTAButton />
</div>
