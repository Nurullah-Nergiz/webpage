<script>
import { getRepos } from "~~/services/githubRepos.js";
export default {
    data() {
        return {
            repos: null,
        };
    },
    created() {
        getRepos().then((data) => {
            if (data.status !== 200) console.error("repos");

            this.repos = data.data;
        });
    },
    setup() {
        useHead({
            title: "Nurullah Nergiz Projeler Sayfası - nurullahnergiz",
            meta: [
                {
                    name: "description",
                    content: `Benim adım Nurullah Nergiz ve front-end developer olarak tasarladığım çeşitli projeleri burada keşfedin.`
                }
            ]
        });
    },
};
</script>
<template>
    <section>
        <h1>Halka Açık Github Depolarım</h1>
        <hr> <br>
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-3">
            <NuxtLink :to="`./projects/${repo.name}/${repo.default_branch}`" v-for="repo in repos" :key="repo.id"
                class="px-3 py-2 bg-secondary rounded-xl ">
                <ul>
                    <li class="flex gap-1">
                        <i class="bx bx-chevron-right text-primary text-2xl"></i>
                        <b class="flex-1 text-xl ">
                            {{ repo.full_name }}
                        </b>
                        <img :src="repo.owner.avatar_url" alt="Github avatar" class="max-h-16 ml-5 ">
                    </li>
                </ul>
            </NuxtLink>
        </div>
    </section>
</template>
