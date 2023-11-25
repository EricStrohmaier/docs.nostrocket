<script setup>
import AOS from "aos";
import { getHashtags } from "~~/lib/Nostr";

onMounted(async () => {
  AOS.init();
  await loadHashtags(); // Use await to wait for the result
});

const loadHashtags = async () => {
  try {
    const hashtags = await getHashtags();
    console.log("hashtags", hashtags);
  } catch (error) {
    console.error("Error loading hashtags", error);
  }
};
</script>

<template>
  <div class="relative">
    <div class="relative">
      <section class="relative w-full min-h-[96vh] mt-16">
        <div class="max-w-5xl mx-auto text-center px-5 lg:px-0">
          <h1 class="GradientTextPurple text-6xl lg:text-7xl font-bold my-9">
            Nostrocket
          </h1>
          <h2 class="text-3xl lg:text-5xl font-bold dark:text-white px-4">
            The <u>fastest way ever</u> to make an open source project
            profitable.
          </h2>
          <h3 class="text-lg mt-8 text-gray-800 dark:text-gray-400">
            Nostrocket is a **[Self Organizing Unorganization
            (SOU)](/self-organizing-unorganization.html) factory** built with
            Bitcoin and Nostr. It provides a hyper-efficient and radically fair
            way for anyone to collaborate on open source projects for *fun and
            profit*.
          </h3>
          <h3 class="text-lg mt-8 text-gray-800 dark:text-gray-400">
            Nostrocket makes open source projects **hyper-efficient** because
            work can be done asynchronously without [organizational
            mutexes](/mutexes.html). It makes them radically fair [add protocol
            link here] in the way that participants form consensus over the
            value of each contribution.
          </h3>
          <h3 class="text-lg mt-8 text-gray-800 dark:text-gray-400">
            It makes projects **rapidly profitable** by providing guard rails
            against solving problems that are not in the **critical path** to
            more participation and revenue. It makes them **perpetually
            sustainable** in the way that they [distribute project
            revenue](/protocol.html) to project creators, investors, and
            contributors.
          </h3>
        </div>

        <div
          class="relative mx-auto flex items-center space-x-5 w-full justify-center mt-5 px-5 lg:px-0"
        >
          <ButtonLink href="/nostrocket"> Learn More </ButtonLink>
          <NuxtLink
            href="https://github.com/nostrocket"
            target="_blank"
            class="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-bold"
          >
            Everthing on GitHub
          </NuxtLink>
        </div>
        <div class="max-w-5xl mx-auto p-5 lg:px-0">
          Check out latest #nostrocket posts directly from the protocol
          <div>event</div>
          <div>event</div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.GradientTextPurple {
  background: linear-gradient(to right, #8136d4 40%, #9881e6 40%, #95b4ab 20%);
  background-size: 200% auto;

  color: #000;
  background-clip: text;
  border-inline-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
