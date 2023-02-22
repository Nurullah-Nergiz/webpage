<script>
import getRepos from "~~/services/getRepos.js";
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
      title: "Nurullah Nergiz Projeler Sayfası",
    });
  },
};
</script>
<template>
  <section class="project">
    <h1>Halka Açık Github Depolarım</h1>

    <div class="repo-list">
      <a :href="repo.html_url" v-for="repo in repos" :key="repo.id">
        <i class="bx bx-chevron-right"></i>
        {{ repo.name.replaceAll("-", " ") }}
      </a>
    </div>
  </section>
</template>
