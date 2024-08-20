<script>
  export let name;
  export let description;
  export let language;
  export let githubURL = undefined;
</script>

<div
  class="bg-gray-800 shadow-lg rounded-lg shadow-gray-950 w-96 min-h-[10rem] overflow-hidden text-center relative"
>
  <h1 class="text-white font-semibold mb-2 ml-2 mr-2">{name}</h1>
  <p class="text-white">{description}</p>
  <div class="flex justify-center items-center">
    <slot />
    {#if language}
      <img alt="languagesIcon" src="https://skillicons.dev/icons?i={language}">
    {/if}
    {#if githubURL}
      <a
        href={githubURL}
        class="text-blue-500 hover:text-blue-700 font-semibold bottom-0 absolute flex justify-center items-center text-2xl"
      >
      <i class="fab fa-github"></i>
      </a>
    {/if}
    
  </div>
</div>
