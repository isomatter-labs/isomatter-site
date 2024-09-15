<script lang="ts">
  import { T, useTask, useThrelte } from '@threlte/core';
  import { MeshLineGeometry, MeshLineMaterial } from '@threlte/extras';
  import { Color, CubicBezierCurve3, Vector3 } from 'three';
  import { colors } from '$lib/theme';
    import { onMount } from 'svelte';

  const curve = new CubicBezierCurve3(
    new Vector3(1.5, -1.5, -1),
    new Vector3(8, -6, 1),
    new Vector3(-14, -4, -2),
    new Vector3(2, -24, 0),
  );
  const points = curve.getPoints(100);
  const { camera } = useThrelte();

  let multiplier = 1;
  let scrollY = 0;
  let count = 0;
  let dashOffset = 0;
  let color = new Color();
  const orange = new Color(colors.starstorm.dim[300]);
  const purple = new Color(colors.starstorm.bright.DEFAULT);

  // Adjust the width of the curve
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
    console.log(multiplier);

    count++;
    return result;
  }

  function handleScroll() {
    scrollY = window.scrollY;
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useTask((delta) => {
    camera.current.position.y = -scrollY * 0.01;

    // every frame we:
    // increase the dash offset
    dashOffset += delta / 2
    // transition between two colors
    color.lerpColors(orange, purple, Math.sin(dashOffset * 2) / 2 + 0.5)
  });
</script>

<T.Mesh
  position.y={3}
  scale={2}
>
  <MeshLineGeometry
    points={points}
    shape="custom"
    shapeFunction={(p) => goBig(p)}
  />

  <MeshLineMaterial
    {color}
    {dashOffset}
    transparent
    depthTest={false}
  />
</T.Mesh>

<T.PerspectiveCamera
  makeDefault
  on:create={({ ref }) => {
    ref.position.set(0, 3, 10)
  }}
>
</T.PerspectiveCamera>