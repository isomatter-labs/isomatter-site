<script lang="ts">
  import { Button } from '$lib/components';
  import { Scene } from '$lib/three';
  import { Canvas } from '@threlte/core';
    import { PerfMonitor } from '@threlte/extras';
</script>

<h1>Hangloves & Aethers</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Button></Button>

<div class="h-screen fixed top-0 w-full -z-10">
  <Canvas>
    <PerfMonitor anchorX={'right'} logsPerSecond={30}/>
    <Scene />
  </Canvas> 
</div>
<div class="h-screen"></div>
<div class="h-screen"></div>
<div class="h-screen"></div>
