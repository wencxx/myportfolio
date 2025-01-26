<template>
    <div id="projects" class="w-full max-w-7xl mx-auto h-fit py-14 space-y-10 lg:mt-20">
        <div class="text-center space-y-2">
            <p class="text-lg">Projects</p>
            <h1 class="text-4xl">Selected Projects</h1>
        </div>
        <div class="px-10">
            <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden mx-auto" arrows>
                <div class="h-[80dvh] lg:h-[50dvh] w-full flex flex-col lg:flex-row gap-x-5">
                    <div class="h-full lg:w-1/2 rounded-2xl overflow-hidden relative border border-neutral-300">
                        <NuxtImg :src="`/systems/${item.images[0]}.png`" format="webp" densities="x1" alt="system" class="object-cover h-full w-full" /> 
                        <UTooltip class="absolute bottom-5 right-5" text="Click to view">
                            <UBadge class="text-md cursor-pointer" @click="showImages(item.images)">{{ item.images.length }} <Icon name="mdi:image" /></UBadge>
                        </UTooltip>
                    </div>
                    <div class="h-full lg:w-1/2 p-5 space-y-10">
                        <div class="space-y-5">
                            <h1 class="uppercase font-semibold tracking-wide text-xl">{{ item.title }}</h1>
                            <p>{{ item.description }}</p>
                        </div>
                        <div class="space-y-2">
                            <p>Tech Used:</p>
                            <div class="flex gap-x-2 flex-wrap">
                                <NuxtImg v-for="tech in item.techs" :key="tech" :src="`/${tech}.png`" width="40" densitis="x1" format="webp" />
                            </div>
                        </div>
                        <div class="space-x-3">
                            <NuxtLink :to="item.link" target="_blank">
                                <UButton color="white" variant="solid" class="space-x-2">
                                    Live Site
                                    <Icon name="ph:arrow-square-out-light" class="text-lg" />
                                </UButton>
                            </NuxtLink>
                            <NuxtLink :to="item.github" target="_blank">
                                <UButton color="white" variant="solid" class="space-x-2">
                                    Github
                                    <Icon name="mdi:github" class="text-lg" />
                                </UButton>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </UCarousel>
        </div>

        <!-- modal to show system images -->
        <UModal v-model="isOpen">
            <div class="p-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <UCarousel v-slot="{ item }" :items="imagesToShow" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden w-[90dvw] lg:w-[60dvw]" arrows>
                    <NuxtImg :src="`/systems/${item}.png`" class="w-full" draggable="false" />
                </UCarousel>
            </div>
        </UModal>
    </div>
</template>

<script setup>
const items = [
  {
    title: 'Sporst events and atheletes management',
    description: 'This application aims NOPSCCEA to modernize its operations, improve data accuracy, and provide a seamless experience for sports directors, coaches, and student-athletes.',
    images: [
        'sportslogin',
        'sportsdashboard',
        'sportslist',
        'sportsevents',
        'sportseventsdetails',
        'sportsschedule',
        'sportsaddsched',
        'sportsscoreboard',
        'sportstrophy'
    ],
    techs: [
        'frontend4', 
        'frontend6', 
        'backend1', 
        'backend2', 
        'backend3'
    ],
    github: 'https://github.com/wencxx/nopsscea.git',
    link: 'https://nopsscea.vercel.app/'
  }
]

const imagesToShow = ref([])
const isOpen = ref(false)

const showImages = (images) => {
    imagesToShow.value = images
    isOpen.value = true
}
</script>