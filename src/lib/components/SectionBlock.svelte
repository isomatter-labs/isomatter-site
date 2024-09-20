<script lang="ts">
  export let subheading: string = '';
  export let heading: string;
  export let type: 'header' | 'default' = 'default'; // header should be used once on page

  let className = '';
  // creates a `class` property, even though it is a reserved word
  export { className as class };
</script>

<section
  class="w-full max-w-[34rem] py-60 {className}"
  class:md:max-w-md={type === 'default'}
  {...$$restProps}
>
  {#if subheading}
    <div
      role="doc-subtitle"
      class="text-sm uppercase text-plum-400 text-opacity-[.8625]"
    >
      {subheading}
    </div>
  {/if}

  {#if type === 'header'}
    <h1 class="mb-8 text-6xl text-[56px]">{heading}</h1>
  {:else}
    <h2 class="mb-6 mt-2 text-5xl">{heading}</h2>
  {/if}

  <p class="mb-8 last:mb-0">
    <slot />
  </p>

  <slot name="extras" />
</section>
