<script lang="ts">
  import { routes } from "./lib/routes";
  import Router from "svelte-spa-router";
  import Navbar from "./lib/Navbar.svelte";
  function animateTitle(Title = "percs", delay = 400) {
    let counter = 0;
    let direction = true;
    let newtitle
    let aniTitle = setInterval(function () {
        if (counter == Title.length)
            direction = false;
        if ((counter as any) == false)
            direction = true;
        counter = (direction == true) ? ++counter : --counter;
        newtitle = (counter == 0) ? Title.slice(0,1) : Title.slice(0, counter);
        document.title = newtitle;
    }, delay)
}
animateTitle("percs",400);
</script>

<main class="overflow-hidden">
  <body
    class="bg-gray-900 text-white h-screen w-screen scrollbar-hide"
  >
    <Navbar />
    <Router {routes} />
  </body>
</main>

<style>
  /* For Webkit-based browsers (Chrome, Safari and Opera) */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  /* For IE, Edge and Firefox */
  .scrollbar-hide {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
</style>
