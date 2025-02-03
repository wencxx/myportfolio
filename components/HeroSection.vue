<template>
    <div id="home" class="h-screen w-full">
        <Header />
        <div class="flex flex-col h-full items-center justify-center gap-y-8 pt-28 md:pt-14 lg:pt-0">
            <div class="flex flex-col items-center gap-y-3">
                <NuxtImg src="/profile.png" format="webp" densities="x1" :placeholder="[50, 25]" class="rounded-full bg-neutral-200 !w-40 !h-40 object-cover" v-motion :initial="{ opacity: 0, x: -100 }" :visible="{ opacity: 1, x: 0 }" :duration="900" />
                <p class="capitalize text-xl flex items-center gap-x-2" v-motion :initial="{ opacity: 0, x: -100 }" :visible="{ opacity: 1, x: 0 }" :duration="900" :delay="450">
                    Hi! i'm wency baterna
                    <Icon name="fluent-emoji-flat:waving-hand-light" class="text-3xl" />
                </p>
            </div>
            <h1 class="text-[calc(1.5rem+1vw)] w-full max-w-3xl px-5 lg:px-0 text-center tracking-wide leading-tight" v-motion :initial="{ opacity: 0, x: -100 }" :visible="{ opacity: 1, x: 0 }" :duration="900" :delay="800">full-stack web developer based in bacolod city.</h1>
            <p class="w-full max-w-xl text-center text-sm dark:text-gray-200 px-5 lg:px-0" v-motion :initial="{ opacity: 0, x: -100 }" :visible="{ opacity: 1, x: 0 }" :duration="900" :delay="1100">I am a full-stack developer based in Bacolod City, Philippines, with experience in technologies such as VueJS, NuxtJS, NodeJS, ExpressJS, firebase and more.</p>
            <div class="flex flex-col md:flex-row gap-5 px-10">
                <NuxtLink to="mailto:wncbtrn@gmail.com" class="bg-neutral-900 dark:bg-gray-300/30 hover:bg-neutral-700 dark:hover:bg-gray-300/20 text-white px-5 py-3 rounded-full text-sm flex items-center gap-x-1" v-motion :initial="{ opacity: 0, x: -100 }" :visible="{ opacity: 1, x: 0 }" :duration="900" :delay="1300">
                    connect with me
                    <Icon name="basil:arrow-right-outline" class="text-2xl" />
                </NuxtLink>
                <a href="/resume.pdf" target="_blank" download="resume.pdf" class="cursor-pointer border border-neutral-300 dark:border-neutral-300/30 hover:border-neutral-500 dark:hover:border-neutral-300/20 px-5 py-3 rounded-full text-sm flex items-center justify-center gap-x-1" v-motion :initial="{ opacity: 0, x: -100 }" :visible="{ opacity: 1, x: 0 }" :duration="900" :delay="1300">
                    my resume
                    <Icon name="material-symbols-light:download" class="text-2xl !z-0" />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>  

</script>