<template>
    <div id="skills" class="w-full max-w-7xl mx-auto h-fit py-14 space-y-10 mt-10">
        <div class="text-center space-y-2">
            <p class="text-lg">Technologies</p>
            <h1 class="text-4xl">Skills</h1>
        </div>
        <div class="w-full grid md:grid-cols-2 lg:grid-cols-3 px-10 gap-10 gap-y-5">
            <div class="h-60 p-5 bg-white dark:bg-neutral-800 rounded border dark:border-neutral-300/40 flex flex-col gap-y-10">
                <div class="flex items-center gap-x-5">
                    <Icon name="solar:code-bold" class="text-5xl text-neutral-800 dark:text-neutral-300" />
                    <h3 class="text-lg font-medium">Frontend Technologies</h3>
                </div>
                <div class="flex flex-wrap gap-4">
                    <NuxtImg v-for="i in 6" :key="i" :src="`/frontend${i}.png`" width="50" format="webp" densities="x1" class="hover:scale-110" />
                </div>
            </div>
            <div class="h-60 p-5 bg-white dark:bg-neutral-800 rounded border dark:border-neutral-300/40 flex flex-col gap-y-10">
                <div class="flex items-center gap-x-5">
                    <Icon name="ion:server-outline" class="text-5xl text-neutral-800 dark:text-neutral-300" />
                    <h3 class="text-lg font-medium">Backend Technologies</h3>
                </div>
                <div class="flex flex-wrap gap-4">
                    <NuxtImg v-for="i in 5" :key="i" :src="`/backend${i}.png`" width="50" format="webp" densities="x1" class="hover:scale-110" />
                </div>
            </div>
            <div class="h-60 p-5 bg-white dark:bg-neutral-800 rounded border dark:border-neutral-300/40 flex flex-col gap-y-10">
                <div class="flex items-center gap-x-5">
                    <Icon name="bx:brain" class="text-5xl text-neutral-800 dark:text-neutral-300" />
                    <h3 class="text-lg font-medium">Other Technologies</h3>
                </div>
                <div class="flex flex-wrap gap-4">
                    <NuxtImg v-for="i in 3" :key="i" :src="`/other${i}.png`" width="50" format="webp" densities="x1" class="hover:scale-110" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>