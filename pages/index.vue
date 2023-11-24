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
  <section class="flex-1 md:flex flex-wrap gap-5">
    <div class="flex-1 max-w-full">
      <h1 class="mb-3 text-3xl">Merhaba Ben Nurullah</h1>
      <p>
        Merhaba, Ben Nurullah, Türkiye'den bir ön uç geliştiriciyim. <br>
        2016 yılından beri Web Teknolojileri ile
        uğraşıyorum. <br>
        Web sitemdeki projelerimi ve deneyimlerimi paylaşmak için buradayım. <br>
        Sizlere en iyi kullanıcı
        deneyimini sunmak için tutkulu bir şekilde çalışıyorum. <br>
        Hadi birlikte keşfedin!
      </p>
      <div>
        <a href="./cv.html" download
          class="mt-5 py-2 px-3 text-gray-500 bg-secondary border border-current rounded-br-xl rounded-tl-xl shadow-inner shadow-current inline-block">
          <i class='bx bx-download'></i>
          CV'yi indir
        </a>
        <a href="./cv.html"
          class="mt-5 ml-5 py-2 px-3 text-black bg-white border border-current rounded-br-xl rounded-tl-xl shadow-inner shadow-current inline-block">
          <i class='bx bx-link-external'></i>
          CV'yi ziyaret et
        </a>
      </div>
    </div>
    <div class=" md:max-w-xs md:px-5 flex flex-col gap-3">
      <h2 class="mr-5 text-2xl">Sosyal Medya</h2>
      <a href="https://www.instagram.com/nurullahnergiz_/" target="_blank"
        class="px-3 py-2 flex items-center gap-2 border border-current rounded-xl ">
        <i class='bx bxl-instagram'></i>
        <span>Instagram</span>
      </a>
      <a href="https://twitter.com/nurullahNergiz_" target="_blank"
        class="px-3 py-2 flex items-center gap-2 border border-current rounded-xl ">
        <i class='bx bxl-twitter'></i>
        <span>Twitter</span>
      </a>
      <a href="https://www.linkedin.com/in/nurullah-nergiz/" target="_blank"
        class="px-3 py-2 flex items-center gap-2  border border-current rounded-xl ">
        <i class="bx bxl-linkedin text-xl"></i>
        <span>Linkedin</span>
      </a>
      <a href="mailto:nurullah@nergiz.me" class="px-3 py-2 flex items-center gap-2 border border-current rounded-xl ">
        <i class="bx bx-envelope text-xl"></i>
        <span>Mail</span>
      </a>
      <a href="https://github.com/Nurullah-Nergiz/" target="_blank"
        class="px-3 py-2 flex items-center gap-2 border border-current rounded-xl ">
        <i class="bx bxl-github text-xl"></i>
        <span>Github</span>
      </a>
    </div>
  </section>
</template>
