<script setup >
import { getRepoReadme, getRepoDetails } from '~/services/githubRepos';
import markdownParse from 'markdown-html-transformer';
import { useHead } from '@unhead/vue';

const [repo, readme] = [ref({}), ref('')]
const { params } = useRoute();

Promise.all([
    useFetch(`https://raw.githubusercontent.com/Nurullah-Nergiz/${params.slug[0]}/${params.slug[1]}/README.md`),
    useFetch(`https://api.github.com/repos/Nurullah-Nergiz/${params.slug[0]}`)
]).then((res) => {
    [readme.value, repo.value] = [markdownParse.convertMarkdownToHTML(res[0].data._rawValue), res[1].data._rawValue]

    useHead({
        title: `${res[1].data._rawValue.full_name}`,
        meta: [
            {
                name: "description",
                content: `
                        ${res[1].data._rawValue.description ?? (params.slug[0] + " - Modern ve etkileyici web tasarımıyla kullanıcı deneyimini zirveye taşıyan bir proje. Örneklerimizi keşfedin ve ilham alın!")}
                        `,
            },
        ],
    });
});
</script>
<template>
    <h1 class="mb-5 px-2 py-3 bg-secondary flex items-center"> <i class='bx bx-chevron-right text-primary'></i>
        {{ repo?.name }}
    </h1>
    <section class="flex gap-5 flex-col-reverse md:flex-row">
        <div class="md:w-9/12  bg-secondary p-5">
            <h2 class="mb-1">{{ repo.default_branch }}/README.md</h2>
            <div v-html="readme" class="readme-description"> </div>
        </div>
        <aside class="md:max-w-[270px] h-min bg-secondary p-5 flex flex-col gap-3">
            <a v-if="repo?.homepage" :href="repo?.homepage" target="_blank">Home Page <br>
                <i class='bx bx-link text-white'></i>{{ repo?.homepage?.replace('https://', "") }}
            </a>
            <a :href="repo?.html_url">
                <i class='bx bxl-github text-white'></i>
                Github </a>
            <ul>
                <li>Topics </li>
                <li v-for="item in repo?.topics" class="my-2">
                    <a :href="`https://github.com/topics/${item}`">
                        <i class='bx bx-chevron-right text-primary'></i>
                        {{ item }}
                    </a>
                </li>
                <li>
                </li>
            </ul>
            <hr>
            <h3>About</h3>
            <p>{{ repo?.description }}</p>
        </aside>
    </section>
</template>