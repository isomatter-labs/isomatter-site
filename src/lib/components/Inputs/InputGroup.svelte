<script lang='ts'>
    import Input from "./Input.svelte";
    import TextArea from "./TextArea.svelte";

    export let label: string;
    export let id: string = label.toLowerCase();
    export let name = id;
    export let value: string = '';
    export let required: boolean = false;
    export let textArea: boolean = false;
</script>

<div class="mb-6 last:mb-0">
  <label for={id}
    class="block text-sm mb-1"
    class:required={required}
    >
    {label}
  </label>
  {#if textArea}
    <TextArea {id} {name} {value} {required} {...$$restProps}/>
  {:else}
    <Input {id} {name} {value} {required} {...$$restProps}/>
  {/if}
</div>

<style>
  .required {
    @apply after:content-['*'];
  }
</style>