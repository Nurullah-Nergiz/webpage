<script setup >
import { convertMarkdownToHTML } from 'markdown-html-transformer';

const { params } = useRoute()
const [repo, readme, readmeDescription] = [ref({}), ref(''), ref(null)]

Promise.all([
  useFetch(`https://api.github.com/repos/Nurullah-Nergiz/${params.slug[0]}/readme`),
  useFetch(`https://api.github.com/repos/Nurullah-Nergiz/${params.slug[0]}`)
]).then((res) => {
  [readme.value, repo.value] = [convertMarkdownToHTML(atob(res[0].data._rawValue.content)), res[1].data._rawValue]

  useSeoMeta({
    title: `${res[1].data._rawValue?.full_name} - Nurullah Nergiz`,
    meta: [
      {
        name: "description",
        content: `
        ${res[1].data._rawValue?.description ?? (params.slug[0] + " - Modern ve etkileyici web tasarımıyla kullanıcı deneyimini zirveye taşıyan bir proje. Örneklerimizi keşfedin ve ilham alın!")}
                        `,
      },
      {
        name: "keywords",
        content: ["nurullah nergiz", ...res[1].data._rawValue?.topics].join(", ")
      }
    ],
    link: [
      {
        rel: "canonical",
        href: `https://nurullahnergiz.com/projects/${params.slug[0]}/${params.slug[1]}`
      }
    ],
  });
});

</script>
<template>
  <article class="mb-5 px-2 py-3  flex items-center gap-4 shadow-lg shadow-secondary">
    <NuxtLink to="/">
      <i class='bx bx-home-alt-2 text-primary'></i>
      Anasayfa
    </NuxtLink>
    <NuxtLink to="/projects">
      <i class='bx bx-chevron-right text-primary'></i>
      projects
    </NuxtLink>
    <NuxtLink :to="`/projects/${repo.name}/${repo.default_branch}`">
      <i class='bx bx-chevron-right text-primary'></i>
      {{ repo?.name }}
    </NuxtLink>
  </article>
  <section class="flex gap-5 flex-col-reverse lg:flex-row">
    <div class="lg:w-9/12  shadow-lg shadow-secondary p-5">
      <h2 class="mb-1">{{ repo.default_branch }}/README.md</h2>
      <div v-html="readme" ref="readmeDescription" class="readme-description"> </div>
    </div>
    <aside class="lg:max-w-xs  h-min shadow-lg shadow-secondary p-4 flex flex-col gap-3">
      <span v-if="repo?.description">About</span>
      <p>{{ repo?.description }}</p>
      <hr>
      <span>Home Page</span>
      <a v-if="repo?.homepage" :href="repo?.homepage" target="_blank"
        class="bx bx-link flex gap-2 items-center text-white text-ellipsis overflow-hidden">
        {{ repo?.homepage?.replace('https://', "") }}
      </a>
      <span>Github</span>
      <a :href="repo?.html_url" class='bx bxl-github flex gap-2 items-center text-white'>
        {{ repo?.full_name }}
      </a>
      <span v-if="repo?.topics">Topics </span>
      <a v-for="item in repo?.topics" :href="`https://github.com/topics/${item}`">
        <i class='bx bx-chevron-right text-primary'></i>
        {{ item.replaceAll("-", " ") }}
      </a>
    </aside>
  </section>
</template>
