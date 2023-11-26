<template>
  <div class="my-5 rounded-3xl bg-[#333333db] p-5 lg:p-10 overflow-x-scroll  text-gray-300">
    <div class="flex items-center space-x-2 mb-3">
      <img
        class="w-10 h-10 rounded-full"
        :src="
          userMetadata && userMetadata.picture
            ? userMetadata.picture
            : defaultAvatar
        "
        alt="User Avatar"
      />
      <div class="">
        {{ userMetadata ? userMetadata.name : "Mr. Unknown" }}
      </div>
    </div>
    <div>
      <div v-html="renderContent"></div>
    </div>
    <div class="flex justify-between mt-3">
      <div v-if="event.previewLink" class="w-[75%] h-full">
        <div
          class="w-[75%] h-full"
          v-html="sanitizeLink(event.previewLink)"
        ></div>
      </div>
      <button @click="toggleView">View Raw data</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { getMyProfile } from "~~/lib/Nostr";
import DOMPurify from "dompurify";

export default {
  name: "Event",
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const userMetadata = ref(null);
    const defaultAvatar =
      "https://imgs.search.brave.com/LekNe868ug643HRwk12QCPnv-1Tm1Ei6MKKrRJnT25E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzgzLzc2LzE0/LzM2MF9GXzU4Mzc2/MTQ1MF9sbm1OVW1J/c1ZlMWx4OTZPcU82/WUNsMXdFUXJNdnk0/VC5qcGc";

    const isRawView = ref(false);

    onMounted(async () => {
      userMetadata.value = await getMyProfile(props.event.pubkey);
    });

    const toggleView = () => {
      isRawView.value = !isRawView.value;
    };

    const renderSanitizedContent = (content) => {
      const sanitizedContent = DOMPurify.sanitize(content, {
        ALLOWED_TAGS: ["br", "a", "img"],
        ALLOWED_ATTR: ["href", "target", "rel", "src", "alt"],
      });

      // Detect and render links and images
      const renderedContent = sanitizedContent.replace(
        /(?:https?|ftp):\/\/[^\s]+/g,
        (url) => {
          if (/\.(jpeg|jpg|gif|png|webp)$/.test(url)) {
            // Render images
            return `<img src="${url}" class="w-[45%] h-fit my-3 flex " alt="Preview Image">`;
          } else {
            // Render links
            return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-[#7d51fa]">${url}</a>`;
          }
        }
      );

      return renderedContent;
    };

    const sanitizeLink = (link) => {
      return DOMPurify.sanitize(link, {
        ALLOWED_TAGS: [],
        ALLOWED_ATTR: ["href", "target", "rel"],
      });
    };

    const renderContent = computed(() => {
      if (isRawView.value) {
        // Use JSON.stringify with indentation for a nice format
        return JSON.stringify(props.event, null, 2)
          .replace(/ /g, "&nbsp;") // Replace spaces with non-breaking spaces
          .replace(/\n/g, "<br>");
      } else {
        return renderSanitizedContent(props.event.content);
      }
    });

    return {
      userMetadata,
      defaultAvatar,
      renderSanitizedContent,
      sanitizeLink,
      isRawView,
      toggleView,
      renderContent,
    };
  },
};
</script>

<style scoped>
button {
  background: #7d51fa;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  transition: color 0.4s;
}
button:hover {
  color: #7d51fa;
  background: white;
}

a {
  color: #7d51fa;
  font-weight: bold;
  text-decoration: underline;
}
</style>
