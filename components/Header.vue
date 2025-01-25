<template>
    <div class="h-[5dvh] w-full max-w-7xl fixed left-1/2 -translate-x-1/2 top-5 flex items-center justify-between px-10 z-30">
        <h1 class="text-2xl font-medium">wenc</h1>
        <!-- large screens navigation -->
        <div class="h-full w-1/2 bg-white/55 dark:bg-transparent border border-neutral-300 dark:border-gray-100/20 backdrop-blur-sm rounded-full hidden lg:block">
            <ul class="flex items-center justify-center gap-x-10 h-full p-0">
                <li class="-mt-1">
                    <NuxtLink to="#home" class="">home</NuxtLink>
                </li>
                <li class="-mt-1">
                    <NuxtLink to="#about" class="">about</NuxtLink>
                </li>
                <li class="-mt-1">
                    <NuxtLink class="">project</NuxtLink>
                </li>
                <li class="-mt-1">
                    <NuxtLink class="">contact</NuxtLink>
                </li>
            </ul>
        </div>
        <!-- mobile screen navigation -->
        <div class="fixed -top-5 left-0 w-full h-screen bg-white dark:bg-neutral-800 border-r dark:border-gray-100/10 -translate-x-full duration-300 flex lg:hidden z-50" :class="{ '!translate-x-0': displaySidebar }">
            <button class="absolute top-5 right-5" @click="displaySidebar =! displaySidebar">
                <Icon name="ion:close" class="text-4xl" />
            </button>
            <ul class="flex flex-col items-center justify-center w-full pt-[10dvh] gap-y-8 h-full">
                <li>
                    <NuxtLink to="#home" class="text-2xl text-center">home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#about" class="text-2xl text-center">about</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="text-2xl text-center">project</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="text-2xl text-center">contact</NuxtLink>
                </li>
            </ul>
        </div>
        <div class="flex gap-x-4">
            <button @click="toggleDarkMode">
                <Icon v-if="!isDarkMode" name="line-md:sun-rising-loop" class="text-4xl text-yellow-500" />
                <Icon v-else name="line-md:moon-rising-loop" class="text-4xl" />
            </button>
            <button class="block lg:hidden" @click="displaySidebar =! displaySidebar">
                <Icon name="fluent:list-rtl-16-filled" class="text-4xl" />
            </button>
        </div>
    </div>
</template>

<script setup>
import { setData, getData } from 'nuxt-storage/local-storage'

const route = useRoute()

const isDarkMode = ref(true)

const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.classList.toggle('dark', isDarkMode.value);

    if (isDarkMode.value) {
        setData('theme', 'dark');
    } else {
        setData('theme', 'light');
    }
};

onMounted(() => {
    const savedTheme = getData('theme');
    if (savedTheme) {
        isDarkMode.value = savedTheme === 'dark';
        document.documentElement.classList.toggle('dark', isDarkMode.value);
    }
});

const displaySidebar = ref(false)

watch(route, (newVal) => {
    if(newVal){
        displaySidebar.value = false
    }
})
</script>