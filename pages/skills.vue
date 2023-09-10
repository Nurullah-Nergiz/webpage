<script>
export default {
  setup() {
    useHead({
      title: "Nurullah Nergiz Yeteneklerim - Nurullah Nergiz",
      link: [
        {
          rel: "canonical",
          href: `https://nurullahnergiz.com/skills`
        }
      ],
    });
  },
  created() {
  }
};
</script>
<template>
  <section class="skills">
    <h1 class="text-3xl">Yeteneklerim</h1>
    <hr><br>
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      <div>
        <h2>Geliştirme Dilleri</h2>
        <ul class="px-5 py-2 list-disc marker:text-primary">
          <li>Html5</li>
          <li>Css3</li>
          <li>Javascript</li>
          <li>C#</li>
          <li>Php</li>
        </ul>
      </div>
      <div>
        <h3>Frameworkler</h3>
        <ul class="px-5 py-2 list-disc marker:text-primary">
          <li>Nextjs</li>
          <li>Nuxtjs</li>
          <li>Expressjs</li>
          <li>Electronjs</li>
          <li>Asp.Net</li>
          <li>Windows Forms</li>
        </ul>
      </div>
      <div>
        <h4>Kütüphaneler</h4>
        <ul class="px-5 py-2 list-disc marker:text-primary">
          <li>React </li>
          <li>Vue</li>
          <li>Vuex</li>
          <li>Vuetur</li>
          <li>Threejs</li>
          <li>Tailwindcss</li>
        </ul>
      </div>
      <div class="">
        <h5>Veri Tabanları</h5>
        <ul class="px-5 py-2 list-disc marker:text-primary">
          <li> MySql</li>
          <li> Mongodb</li>
        </ul>
      </div>
      <div class="">
        <h6>Teknolojiler</h6>
        <ul class="px-5 py-1 list-disc marker:text-primary">
          <li>Git</li>
          <li>Docker</li>
          <li>Bash</li>
          <li>Linux</li>
        </ul>
      </div>
    </div>
  </section>
</template>
