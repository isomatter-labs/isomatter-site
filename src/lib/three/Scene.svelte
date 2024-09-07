<script>
  import { T, useTask } from '@threlte/core';

  let rotation = 0;
  useTask((delta) => {
    rotation += delta;
  });
</script>

<T.PerspectiveCamera
  makeDefault
  position={[10, 10, 10]}
  on:create={({ ref }) => {
    ref.lookAt(0, 1, 0);
  }}
/>
<T.Mesh position.y={1} rotation.y={rotation} scale={6}>
  <T.BoxGeometry args={[1, 2, 1]} />
  <T.MeshBasicMaterial color="purple" />
</T.Mesh>
