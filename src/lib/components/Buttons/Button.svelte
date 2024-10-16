<!-- markup (zero or more items) goes here -->
<button
  class="
  text-nowrap
text-starstorm-dim-50

  rounded-xl

  bg-gradient-to-t
  from-starstorm-dim-300
  to-starstorm-dim-400

  px-7
  py-2.5
  min-w-40
  
  transition-[box-shadow,transform]
  duration-300
  ease-circular-in-out
  hover:scale-105
  hover:shadow-lg
  hover:shadow-starstorm-dim-300/30

  active:scale-[.975]
  "
  {...$$restProps}
>
  <slot />
</button>
