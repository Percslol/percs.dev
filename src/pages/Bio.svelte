<script lang="ts">
  import { Icon, Link } from "svelte-hero-icons";
  const name = "Percs";
  const profession = '"software engineer"';
  const description =
    "bored.";
  const github = "Percslol";
  const socials = [
    { name: "Discord", link: "https://discord.com/users/767559339841683467" },
    { name: "GitHub", link: "https://github.com/Percslol" },
    { name: "Steam", link: "https://steamcommunity.com/id/percslol" }
  ];
</script>

<div class="fixed flex justify-center items-center w-screen h-screen">
  <div class="bg-gray-800 rounded-lg shadow-md hover:shadow-xl hover:shadow-gray-950 transition-all shadow-gray-950 p-8 min-h-[16rem]">
    <div class="flex justify-center">
      <img
        class="h-16 w-16 rounded-full"
        src="https://avatars.githubusercontent.com/{github}?size=128"
        alt="Github Avatar"
      />
    </div>
    <div class="text-center mt-4">
      <h1 class="text-2xl font-semibold text-white">{name}</h1>
      <p class="text-gray-200 mt-2">{profession}</p>
      {#each description.split("\n") as desc}
        <p class="text-gray-200 mt-2">{desc}</p>
      {/each}
      <img alt="languageIcons" src="https://skillicons.dev/icons?i=py,js,ts,css,html,bash">
      <div class="mt-4 flex items-center justify-center">
        <Icon src={Link} class="mr-2" size="20" />
        {#each socials as social}
          <a
            href={social.link}
            target="_blank"
            class="text-blue-500 hover:text-blue-700 font-semibold mr-2 size text-xl"
            > 
            <i class="fab fa-{social.name.toLowerCase()}"></i>
            </a>
        {/each}
          <a
          rel="me" 
          href="https://fedi.omada.cafe/@percs"
          target="_blank"
          class="text-blue-500 hover:text-blue-700 font-semibold mr-2 size text-xl"
          > 
          <i class="fab fa-mastodon"></i>
          </a>
      </div>
    </div>
  </div>
</div>
