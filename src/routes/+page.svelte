<script lang="ts">
  import { Button, Header } from '$lib/components';
  import { Scene } from '$lib/three';
  import { Canvas } from '@threlte/core';
  import { PerfMonitor } from '@threlte/extras';
</script>

<Header />
<div class="mx-20 mt-40 max-w-[34rem]">
  <h1 class="mb-8 text-6xl text-[56px]">Custom software to launch your mission</h1>
  <p class="mb-8">
    At Isomatter Laboratories, we combine expert experience in product management and software
    engineering. We’re the team that dives deep into your organization's unique needs, helping you
    navigate the world of technology with clarity and confidence.
  </p>
  <Button>Let's build together</Button>
</div>

<div
  class="fixed top-0 -z-10 h-screen
w-full
"
>
  <Canvas>
    <PerfMonitor anchorX={'right'} anchorY={'bottom'} logsPerSecond={30} />
    <Scene />
  </Canvas>
</div>
<div class="h-screen"></div>
<div class="h-screen"></div>
<div class="h-screen"></div>
