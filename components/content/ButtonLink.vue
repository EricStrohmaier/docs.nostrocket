<script setup lang="ts">
defineProps({
  blank: {
    type: Boolean,
    required: false,
    default: false
  },
  href: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
})
</script>

<template>
  <NuxtLink class="ButtonLink" :to="href" :target="blank ? '_blank' : undefined">
    <Icon v-if="icon" :name="icon" />
    <ContentSlot :use="$slots.default" unwrap="p ul li" />
  </NuxtLink>
</template>

<style scoped>
.ButtonLink {
  position: relative;
  padding: 0.1rem 1.5rem;
  line-height: 3rem;
  font-weight: bold;
  color: white;
  background-image: linear-gradient(160deg, #7D51FA, rgb(155, 129, 239));
  border-radius: 0.75rem;
  cursor: pointer;
  transition: box-shadow 0.4s;
  border: none;
}
.ButtonLink:hover {
  box-shadow: 0 0 60px  #683ddf, 0.5rem 0.5rem 30px rgb(134, 110, 212);
}
.ButtonLink:after {
  content: '';
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  left: 2px;
  border-radius: 0.75rem;
  pointer-events: none;
  border: none;
}

@media (prefers-color-scheme: dark) {
  .ButtonLink {
    box-shadow: 0 0 0 0 #8c2df9, 0.5rem 0.5rem 30px #13092d;
  }
  .ButtonLink:hover {
    box-shadow: 0 0 60px #8c2df9, 0.5rem 0.5rem 30px #9881e6;
  }
  .ButtonLink:after {
    background-image: linear-gradient(170deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
  }
}
</style>
