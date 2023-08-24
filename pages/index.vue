<script>
export default {
  setup() {
    useHead({
      title: "Nurullah Nergiz - Full Stack Web Developer",
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
          Yaratıcı front-end geliştirici olarak, interaktif ve estetik web deneyimleri tasarlayıp kodluyorum. Portföyümü keşfedin!
          `,
        },
      ],
    });
  },
};
</script>

<template>
  <section class="flex-1 md:flex items-center flex-wrap gap-5">
    <div class="flex-1 max-w-full">
      <h1 class="mb-3 text-3xl">Merhaba Ben Nurullah</h1>
      <p>
        Türkiye'den Nurullah adında bir ön uç geliştiriciyim.<br>
        2016'dan beri Web Teknolojileri ile çalıştım.
      </p>

      <a href="./cv.html" download
        class="mt-5 py-2 px-3 text-gray-500 bg-secondary border border-current rounded-br-lg rounded-tl-lg shadow-inner shadow-current inline-block">
        CV'yi indir
      </a>
      <br><br>
    </div>
    <div class="flex-1 md:max-w-xs md:px-5 flex flex-col gap-5">
      <h2 class="text-2xl">Sosyal Medya</h2>
      <a href="https://github.com/Nurullah-Nergiz/" target="_blank"
        class="px-3 py-2 flex items-center gap-2 border border-current rounded-full ">
        <i class="bx bxl-github text-xl"></i>
        <span>Github</span>
      </a>
      <a href="https://www.linkedin.com/in/nurullah-nergiz/" target="_blank"
        class="px-3 py-2 flex items-center gap-2  border border-current rounded-full ">
        <i class="bx bxl-linkedin text-xl"></i>
        <span>Linkedin</span>
      </a>
      <a href="mailto:nurullah@nergiz.me" class="px-3 py-2 flex items-center gap-2 border border-current rounded-full ">
        <i class="bx bx-envelope text-xl"></i>
        <span>Mail</span>
      </a>
    </div>
  </section>
</template>
