<script setup>
import { ref, onMounted } from "vue";
import AOS from "aos";
import { getNostrocketContent } from "~~/lib/Nostr";
import Event from "~~/components/landing/Event.vue";

const listEvents = ref([]);
const isLoading = ref(true); // Added loading state

onMounted(async () => {
  AOS.init();
  await loadHashtags();
});

const loadHashtags = async () => {
  try {
    listEvents.value = await getNostrocketContent();
    isLoading.value = false; // Set loading state to false when data is loaded
    console.log("listEvents", listEvents.value);
  } catch (error) {
    console.error("Error loading hashtags", error);
    isLoading.value = false; // Set loading state to false in case of an error
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
          class="relative mx-auto flex items-center space-x-5 w-full justify-center mt-10 px-5 lg:px-0"
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
        <div class="max-w-5xl mx-auto p-5 lg:px-0 mt-10">
          <h2 class="font-bold text-2xl">Latest posts about #Nostrocket</h2>
          <div v-if="isLoading" class="text-gray-600 dark:text-gray-300 mt-4">
            Loading...
          </div>
          <Event v-for="event in listEvents" :key="event.id" :event="event" />
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.GradientTextPurple {
  background: linear-gradient(to right, #7d51fa 40%, #9b84e5 40%, #a08fdb 20%);
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
