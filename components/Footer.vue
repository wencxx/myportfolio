<template>
    <div class="border-t w-full max-w-7xl h-20 lg:h-16 gap-y-4 mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        <p class="text-sm text-neutral-500 dark:text-neutral-300">&copy; 2025 Wency Baterna, All rights reserve</p>
        <div class="text-2xl space-x-2">
            <UTooltip text="Github">
                <NuxtLink to="https://github.com/wencxx" target="_blank">
                    <Icon name="mdi:github" />
                </NuxtLink>
            </UTooltip>
            <UTooltip text="Facebook">
                <NuxtLink to="https://www.facebook.com/wncbtrn" target="_blank">
                    <Icon name="mdi:facebook" />
                </NuxtLink>
            </UTooltip>
            <UTooltip text="Email">
                <NuxtLink to="mailto:wncbtrn@gmail.com" target="_blank">
                    <Icon name="mdi:gmail" />
                </NuxtLink>
            </UTooltip>
        </div>
    </div>
</template>

<script setup>

</script>