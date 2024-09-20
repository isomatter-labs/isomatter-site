<script>
  import { CTAButton, Logo } from '.';
</script>

<footer class="bg-plum-50 py-24">
  <div class="container mx-auto">
    <div class="flex flex-wrap justify-between gap-4">
      <h1 class="text-5xl">Ready to get started?</h1>
      <CTAButton />
    </div>
    <div class="mt-32 flex items-end justify-between">
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
        <Logo />
        © 2024 Isomatter Laboratories
        <br />
        Website created by <a href="https://kufa.io">Jack Kufa</a>
      </div>
    </div>
  </div>
</footer>
