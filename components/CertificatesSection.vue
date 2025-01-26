<template>
    <div id="skills" class="w-full max-w-7xl mx-auto h-fit py-14 space-y-10 mt-20">
        <div class="text-center space-y-2">
            <h1 class="text-4xl">Certificates</h1>
        </div>
        <div class="px-10">
            <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full md:basis-1/2' }" class="rounded-lg overflow-hidden mx-auto" indicators arrows>
                <NuxtImg :src="item" class="w-full" draggable="false" format="webp" densities="x1" />
            </UCarousel>
        </div>
    </div>
</template>

<script setup>
const items = [
  '/certs/googledev.png',
  'https://picsum.photos/1920/1080?random=2',
  'https://picsum.photos/1920/1080?random=3',
  'https://picsum.photos/1920/1080?random=4',
  'https://picsum.photos/1920/1080?random=5',
  'https://picsum.photos/1920/1080?random=6'
]
</script>