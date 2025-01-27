<template>
    <div id="about" class="w-full max-w-7xl mx-auto h-fit space-y-10 mt-20">
        <div class="text-center space-y-2">
            <p class="text-lg">Introduction</p>
            <h1 class="text-4xl">About me</h1>
        </div>
        <div class="w-full flex flex-col lg:flex-row items-center gap-10 px-10">
            <div class="w-full lg:w-1/4 h-fit rounded-xl overflow-hidden shadow">
                <NuxtImg src="/profile.png" densities="x1" format="webp" class="h-full w-full object-cover bg-neutral-300" />
            </div>
            <div class="lg:w-3/4 h-fit space-y-5">
                <p class="text-sm text-gray-500 dark:text-neutral-300 text-justify lg:text-start">Hi, I'm Wency baterna, a passionate and dedicated freelance web developer with 2 years of experience creating innovative and user-friendly websites and applications. I specialize in VueJS, NuxtJS, NodeJS, ExpressJS, MongoDB and firebase, crafting solutions tailored to the unique needs of businesses and individuals.</p>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 gap-x-10">
                    <div class="h-44 p-5 bg-white dark:bg-neutral-800 rounded border dark:border-neutral-300/40 flex flex-col justify-between">
                        <Icon name="lsicon:education-outline" class="text-4xl text-neutral-800 dark:text-neutral-300" />
                        <h3 class="text-lg font-medium">Education</h3>
                        <p class="text-sm text-neutral-500">Bachelor of Science in Information Technology</p>
                    </div>
                    <div class="h-44 p-5 bg-white dark:bg-neutral-800 rounded border dark:border-neutral-300/40 flex flex-col justify-between">
                        <Icon name="famicons:location-outline" class="text-4xl text-neutral-800 dark:text-neutral-300" />
                        <h3 class="text-lg font-medium">Location</h3>
                        <p class="text-sm text-neutral-500">Bacolod City, Negros Occidental, Philippines</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>