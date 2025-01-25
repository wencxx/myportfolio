<template>
    <div class="h-screen w-full">
        <Header />
        <div class="flex flex-col h-full items-center justify-center gap-y-5">
            <div class="flex flex-col items-center gap-y-3">
                <NuxtImg src="https://avatars.githubusercontent.com/u/739984?v=4" format="webp" densities="x1" width="158" :placeholder="[50, 25]" class="rounded-full" />
                <p class="capitalize text-xl flex items-center gap-x-2">
                    Hi! i'm wency baterna
                    <Icon name="fluent-emoji-flat:waving-hand-light" class="text-3xl" />
                </p>
            </div>
            <h1 class="text-5xl w-full max-w-3xl px-5 lg:px-0 text-center tracking-wide">full-stack web developer based in bacolod city.</h1>
            <p class="w-full max-w-xl text-center text-sm dark:text-gray-200 px-5 lg:px-0">I am a full-stack developer based in Bacolod City, Philippines, with experience in technologies such as Vue.js, Nuxt.js, Node.js, Express.js, Flask, MongoDB, MySQL, and more.</p>
            <div class="flex gap-x-5 mt-5">
                <button class="bg-neutral-900 text-white px-5 py-3 rounded-full text-sm flex items-center gap-x-1">
                    connect with me
                    <Icon name="basil:arrow-right-outline" class="text-2xl" />
                </button>
                <button class="border border-neutral-300 px-5 py-3 rounded-full text-sm flex items-center gap-x-1">
                    my resume
                    <Icon name="material-symbols-light:download" class="text-2xl" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>