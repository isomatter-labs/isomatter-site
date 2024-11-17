<script lang="ts">
  import { SectionBlock, Footer, Icon, CTAButton } from '$lib/components';
  import { Scene } from '$lib/three';
  import { Canvas } from '@threlte/core';
  import { PerfMonitor } from '@threlte/extras';
</script>

<div
  class="fixed top-0 -z-10 h-screen
w-full
"
>
  <Canvas>
    <!-- <PerfMonitor anchorX={'right'} anchorY={'bottom'} logsPerSecond={30} /> -->
    <Scene />
  </Canvas>
</div>

<div class="container mx-4 md:mx-auto">
  <!-- HEADER -->
  <SectionBlock
    heading={'Custom software to launch your mission'}
    type="header"
  >
    At Isomatter Laboratories, we combine expert experience in product
    management and software engineering. We’re the team that dives deep into
    your organization's unique needs, helping you navigate the world of
    technology with clarity and confidence.
    <CTAButton slot="extras"/>
  </SectionBlock>

  <!-- SERVICES -->
  <SectionBlock
    heading={'Your mission is our mission'}
    subheading={'Our Services'}
    id="services"
    class="ms-auto"
  >
    We dive deep into your world, nerding out over every detail to uncover the
    technology challenges that are holding you back. Whether it’s streamlining
    your operations, improving your outreach, or making sense of your data,
    we’re here to build custom software solutions that fit like a glove.
    <a
      slot="extras"
      href="."
      class="arrow flex items-center gap-2 text-starstorm-dim-400 w-fit hover:*first:translate-x-4"
      >Learn more 
      <div class="transition-transform ease-circular-in-out">
        <Icon class="fill-starstorm-dim-400 stroke-starstorm-dim-400" />
      </div>
    </a>
  </SectionBlock>

  <!-- TEAM -->
  <SectionBlock heading={'A dynamic duo'} subheading={'Our Team'} id="team">
    Isomatter Laboratories brings together product experience with nonprofits
    and software experience on teams ranging from startups to large companies.
    Together, we’re passionate, nerdy, and committed to making technology work
    for you.
  </SectionBlock>
</div>

<Footer />

<style>
  a.arrow:hover > div {
    transform: translateX(8px);
  }
</style>
