<script>
  import { CTAButton, Logo } from '.';
  export let showCTA = true;
</script>

<footer class="bg-plum-50 py-24">
  <div class="container mx-auto">
    {#if showCTA}
      <div class="flex flex-wrap justify-between items-center gap-4">
        <h1 class="text-5xl">Ready to get started?</h1>
        <CTAButton />
      </div>
    {/if}
    <div class="flex items-end justify-between" class:mt-32={showCTA}>
      <div class="flex flex-col gap-6">
        <div>
          <h2 class="color-plum-400 font-normal text-opacity-80">Email</h2>
          <a
            href="mailto:hello@isomatterlabs.com"
            class="text-3xl text-plum-400 no-underline hover:underline"
            >hello@isomatterlabs.com</a
          >
        </div>
        <div class="">
          <h2 class="color-plum-400 font-normal text-opacity-80">LinkedIn</h2>
          <a
            href="https://linkedin.com/in/isomatterlabs"
            class="text-3xl text-plum-400 no-underline hover:underline"
            >linkedin.com/in/isomatterlabs</a
          >
        </div>
      </div>
      <div class="text-end text-sm opacity-80">
        <div class="mb-2 flex flex-row-reverse">
          <Logo />
        </div>
        © 2024 Isomatter Laboratories
        <br />
        Website created by <a href="https://kufa.io">Jack Kufa</a>
      </div>
    </div>
  </div>
</footer>
