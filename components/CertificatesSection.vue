<template>
    <div id="skills" class="w-full max-w-7xl mx-auto h-fit pb-14 space-y-10 mt-20 lg:mt-32">
        <div class="text-center space-y-2">
            <h1 class="text-4xl">Certificates</h1>
        </div>
        <div class="px-10">
            <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full md:basis-1/2 snap-end' }" class="rounded-lg overflow-hidden mx-auto" indicators arrows>
                <NuxtImg :src="item" class="w-full aspect-video" draggable="false" format="webp" densities="x1" />
            </UCarousel>
        </div>
    </div>
</template>

<script setup>
const items = [
  '/certs/googledev.png',
  '/certs/courseraui2.png',
  '/certs/courseraui3.png',
  '/certs/courseraui.png',
]
</script>