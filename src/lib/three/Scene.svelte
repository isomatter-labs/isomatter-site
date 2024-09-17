<script lang="ts">
  import { T, useTask, useThrelte } from '@threlte/core';
  import { Grid, MeshLineGeometry, MeshLineMaterial, OrbitControls } from '@threlte/extras';
  import { Color, CubicBezierCurve3, LineBasicMaterial, Vector3 } from 'three';
  import { colors } from '$lib/theme';
  import { Rocket } from './index'
  import { onMount } from 'svelte';
  import { sineInOut } from 'svelte/easing';
    import { tweened, type Tweened } from 'svelte/motion';
    import fragmentShader from '../../assets/shader.glsl?raw';

  const curve = new CubicBezierCurve3(
    new Vector3(.8, -1, 0),
    new Vector3(8, -6, -8),
    new Vector3(-14, -4, 0),
    new Vector3(2, -24, 0),
  );
  const points = curve.getPoints(100);
  
  const { camera } = useThrelte();

  let multiplier = 1;
  let scrollY = 0;
  let dashOffset = 0;
  let color = new Color();
  const color1 = new Color(colors.starstorm.dim[300]);
  const color2 = new Color(colors.starstorm.bright.DEFAULT);
  let rotation = 1;

  const rotateX = tweened(0, { duration: 2500, easing: sineInOut });
	const rotateY = tweened(0, { duration: 3000, easing: sineInOut });
	const rotateZ = tweened(0, { duration: 2500, easing: sineInOut });
	const animateY = tweened(0, { duration: 2500, easing: sineInOut });

  // Adjust the width of the curve
  let count = 0;
  function goBig(p: number) {
    const result = p *= multiplier;
    if (count > 50) {
      multiplier *= 1.02;
    }
    else if (count < 15) {
      multiplier *= 1.1;
    }
    else {
      multiplier *= 1.01;
    }

    count++;
    return result;
  }

  function handleScroll() {
    scrollY = window.scrollY;
  }

  let x = 0;
  async function loop() {
    while(true) {
      const rand = Math.random()
      if (rand < 0.5) {
        await rotateY.set(x - 0.5);
        x += 6.3
        await rotateY.set(x + 0.5);
      }
      else {
        await rotateY.set(x - 0.25);
        await rotateY.set(x + 0.25);
      }
    }
  }

  async function tweenBetween(t: Tweened<number>, x1: (() => number), x2: () => number, dampener?: number) {
    if (!dampener)
      dampener = 1;
    while(true) {
      await t.set(x2() * dampener);
      await t.set(x1() * dampener);
    }
  }

  onMount(async () => {
    window.addEventListener('scroll', handleScroll);

    // Intro
    // await rotateY.set(12);

    loop(); // rotateY
    tweenBetween(rotateX, () => 0, () => 0.05 * (Math.random() * 2 - 1));
    tweenBetween(rotateZ, () => 0, () => 0.1 * (Math.random() * 2 - 1));
    tweenBetween(animateY, () => 0, () => 0.5);

    // return new Promise(() => {
      // window.removeEventListener('scroll', handleScroll);
    // });
  });

  useTask((delta) => {
    camera.current.position.y = 3 - scrollY * 0.01;

    // every frame we:
    // increase the dash offset
    dashOffset += delta / 2
    // transition between two colors
    color.lerpColors(color1, color2, Math.sin(dashOffset * 2) / 2 + 0.5)

    rotation += delta * 0.25;
  });
</script>

<!-- rotation={[-0.25, 0.5, 1]} -->
<T.AmbientLight intensity={10} />

<!-- [-0.25, 1, 1.25] -->
<!-- [0, 0, 0] -->
<T.Object3D
    rotation={
    [-0.25, 0.9, 1.25]
    }
    >
  <Rocket
    scale={3}
    position={[2, $animateY, 0]}
    rotation={[$rotateX, $rotateY, $rotateZ]}
    />
</T.Object3D>
<T.Mesh
  position={[-1, 3.6, -1.2]}
  scale={2}
>
  <MeshLineGeometry
    points={points}
    shape="custom"
    shapeFunction={(p) => goBig(p)}
  />

  <T.ShaderMaterial
    {fragmentShader}
  />

  <!-- <MeshLineMaterial
    {color}
    {dashOffset}
  />  -->
</T.Mesh>

<T.PerspectiveCamera
  makeDefault
  
  on:create={({ ref }) => {
    ref.position.set(0, 3, 10)
  }}
>
  <!-- <OrbitControls enableDamping/> -->
</T.PerspectiveCamera>

<!-- <Grid
  gridSize={[10, 10]}
  cellColor={'#46536b'}
  sectionThickness={0}
/> -->