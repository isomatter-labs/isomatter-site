<script>
    import { enhance } from "$app/forms";
    import { Button } from "$lib/components";
    import { InputGroup } from "$lib/components";
    import { Footer } from "$lib/components";
</script>

<section class="container mx-4 md:mx-auto my-16">
  <h1 class="mb-8 text-4xl">How can we help?</h1>
  <form class="max-w-md" method="POST" use:enhance>
    <InputGroup id="name" label="What's your name?" required/>
    <InputGroup id="company" label="What's your company or project name?"/>
    <InputGroup id="email" label="What is your email address?" type="email" required/>
    <InputGroup textArea id="description" label="Can you tell us a little bit about your project?" required/>
    <Button type="submit">Submit for takeoff</Button>
  </form>
</section>

<Footer showCTA={false}/>