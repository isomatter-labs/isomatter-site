<script lang="ts">
  export let href: string;
</script>

<a
  class="
  text-nowrap

  rounded-xl

  bg-gradient-to-t
  from-starstorm-dim-300
  to-starstorm-dim-400
  no-underline

  px-7
  py-2.5
  text-starstorm-dim-50
  
  transition-[box-shadow,transform]
  duration-300
  ease-circular-in-out
  hover:scale-105
  hover:shadow-lg
  hover:shadow-starstorm-dim-300/30

  active:scale-[.975]
  "
  {href}
  {...$$restProps}
>
  <slot />
</a>
