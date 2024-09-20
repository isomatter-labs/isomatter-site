<script lang="ts">
  import { spring } from 'svelte/motion';

  // your script goes here
  const scaleSpring = spring(1, { stiffness: 0.1, damping: 0.5 });
</script>

<!-- markup (zero or more items) goes here -->
<button
  class="
  text-nowrap

  rounded-xl

  bg-gradient-to-t
  from-starstorm-dim-300
  to-starstorm-dim-400

  px-7
  py-2.5
  text-starstorm-dim-50
  
  transition-[box-shadow,transform]
  duration-300
  ease-circular-in-out
  hover:shadow-lg
  hover:shadow-starstorm-dim-300/30

  active:scale-95
  "
>
  <slot />
</button>
