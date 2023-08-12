<script>
import { getRepoReadme, getRepoDetails } from '~/services/githubRepos';
import markdownParse from 'markdown-html-transformer';
import { useHead } from '@unhead/vue';

export default {
    data() {
        return {
            repo: {},
            readme: "",
        }
    },
    created() {

        Promise.all([getRepoReadme(this.$route.params.slug[0], this.$route.params.slug[1]), getRepoDetails(this.$route.params.slug[0])])
            .then((data) => {
                this.readme = markdownParse.convertMarkdownToHTML(data[0].data);
                this.repo = data[1].data;

                useHead({
                    title: `${this.$route.params.slug[0]} - nurullahnergiz`,
                    meta: [
                        {
                            hid: "author",
                            name: "author",
                            content: "Nurullah Nergiz",
                        },
                        {
                            // hid: "description",
                            name: "description",
                            content: `
                    ${this.repo.description ?? (this.$route.params.slug[0] + " - Modern ve etkileyici web tasarımıyla kullanıcı deneyimini zirveye taşıyan bir proje. Örneklerimizi keşfedin ve ilham alın!")}
                            `,
                        },
                    ],
                });
            });
    },
}
</script>
<template>
    <h1 class="mb-5 px-2 py-3 bg-secondary flex items-center"> <i class='bx bx-chevron-right text-primary'></i>
        {{ repo.name }}
    </h1>
    <section class="flex gap-5 flex-col-reverse md:flex-row">
        <div class="md:w-9/12  bg-secondary p-5">
            <h2>README.md</h2>
            <br>
            <div v-html="readme" class=""> </div>
            <!-- <pre>{{ repo }}</pre> -->
        </div>
        <aside class="md:max-w-[270px] md:w-3/12 h-min bg-secondary p-5 flex flex-col gap-3">
            <a v-if="repo.homepage" :href="repo.homepage" target="_blank">Home Page <br>
                <i class='bx bx-link text-white'></i>{{ repo.homepage?.replace('https://', "") }}
            </a>
            <a :href="repo.html_url">
                <i class='bx bxl-github text-white'></i>
                Github </a>
            <ul>
                <li>Topics </li>
                <li v-for="item in repo.topics" class="my-2">
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
            <p>{{ repo.description }}</p>
        </aside>
    </section>
    <!-- <pre>{{ repo }}</pre> -->
</template>