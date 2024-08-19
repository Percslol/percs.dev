<script lang="ts">
  import Card from "../components/Card.svelte";
</script>

<div class="flex flex-col justify-center items-center h-screen">
  <h1 class="text-white font-semibold mb-8 text-4xl">Projects</h1>

  <div class="grid gap-4 grid-cols-3">
    <Card
      name="percs.dev"
      description="self explanatory"
      githubURL="https://github.com/Percslol/percs.dev"
    />
    <Card
    name="AnuraOS"
    description="AnuraOS is the next-gen webOS and development environment with full Linux emulation."
    githubURL="https://github.com/MercuryWorkshop/AnuraOS"
    />
    <Card
    name="Ultraviolet"
    description="A highly sophisticated proxy used for evading internet censorship or accessing websites in a controlled sandbox using the power of service-workers."
    githubURL="https://github.com/titaniumnetwork-dev/Ultraviolet"
    />
  </div>
</div>
