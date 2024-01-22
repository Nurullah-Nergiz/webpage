<script setup>
const repos = ref([]);

useFetch(`https://api.github.com/users/Nurullah-Nergiz/repos?sort=updated`).then((data) => {
    repos.value = data?.data._rawValue.filter((i => i.name !== 'Nurullah-Nergiz'));
})
useHead({
    title: "Nurullah Nergiz Projeler Sayfası - nurullahnergiz",
    meta: [
        {
            name: "description",
            content: `Benim adım Nurullah Nergiz ve front-end developer olarak tasarladığım çeşitli projeleri burada keşfedin.`
        }
    ],
    link: [
        {
            rel: "canonical",
            href: `https://nurullahnergiz.com/projects`
        }
    ],
});
</script>
<template>
    <section>
        <h1 class="p-3 shadow-sm shadow-secondary rounded-md">Halka Açık Github Depolarım</h1>
        <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
            <NuxtLink :to="`./projects/${repo.name}/${repo.default_branch}`" v-for=" repo  in  repos " :key="repo.id"
                class="p-3 shadow-sm shadow-secondary rounded-md">
                <ul class="flex gap-2">
                    <li class="w">
                        <img :src="repo.owner.avatar_url" alt="Github avatar"
                            class="w-12 p-px border border-primary border-b-transparent border-r-transparent rounded-full shadow-lg">
                    </li>
                    <li class="w">
                        <span class="text">{{ repo.owner.login }}</span>
                        <p class="text-xs">
                            <i class='bx bx-git-branch'></i>
                            {{ repo.default_branch }}
                        </p>
                    </li>
                </ul>
                <ul class="mt-2 block">
                    <li class="flex">
                        <h3 class="flex items-center">
                            <i class="bx bx-chevron-right text-primary "></i>
                            <b class="h-6 text-ellipsis overflow-hidden">
                                {{ repo.name }}
                            </b>
                        </h3>
                    </li>
                    <li>
                        <p class="max-h-12 mb-2 p-1 text-xs overflow-hidden text-ellipsis">
                            {{ repo.description }}
                        </p>
                    </li>
                    <li>
                        <ul class="flex flex-wrap gap-x-3">
                            <li v-for=" topic  in  repo.topics " class="text-xs whitespace-nowrap">
                                #{{ topic }}
                            </li>
                        </ul>
                    </li>
                </ul>
            </NuxtLink>
        </div>
    </section>
</template>
