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
          content: `Ben, yaratıcı bir front-end geliştirici olarak, web dünyasına özgü ve unutulmaz deneyimler sunmak üzere tasarım ve kodlama konusundaki tutkumu bir araya getiriyorum.
           Her proje, estetik bir bakış açısıyla şekillenirken, aynı zamanda interaktif özelliklerle zenginleştirilerek kullanıcılar arasında kalıcı bir etki bırakmayı hedefliyorum.`,
        },
      ],
    });
  },
};
</script>

<template>
  <section class="md:flex flex-wrap gap-4 mb-3">
    <div class="flex-1 max-w-full p-3 bg-secondary shadow-sm shadow-black rounded-md ">
      <h1 class="mb-2 text-3xl">Merhaba Ben Nurullah</h1>
      <p class="">
        Türkiye'den bir front-end geliştirici olarak, 2019 yılından bu yana web teknolojileriyle yoğun bir şekilde
        ilgileniyorum. HTML, CSS, JavaScript, React, Bootstrap gibi önemli araçları ustaca kullanarak, modern ve kullanıcı
        dostu web siteleri tasarlamak ve kodlamak konusundaki becerilerimi geliştirdim. Ayrıca, GitHub üzerinde kendi
        projelerimi paylaşarak toplulukla etkileşimde bulunuyorum.

        Web geliştirmeye olan tutkum, sadece bir meslek değil, aynı zamanda sürekli öğrenme ve kişisel gelişim
        hedefleriyle beslenen bir motivasyon kaynağıdır. Bu alandaki yenilikleri yakından takip ediyor, teknolojik
        gelişmelerle adım adım uyum sağlamaya çalışıyorum.

        Profesyonel bir kariyere odaklanıyor ve web geliştirme alanında kendimi kanıtlamak için adım atmaya kararlıyım.
      </p>
      <div class="my-2">
        <a href="./cv.html" download
          class="py-2 px-3 text-gray-500 border border-current rounded-br-xl rounded-tl-xl shadow-inner shadow-current inline-block">
          <i class='bx bx-download'></i>
          CV'yi indir
        </a>
        <a href="./cv.html"
          class="ml-5 py-2 px-3 text-black bg-white border border-current rounded-br-xl rounded-tl-xl shadow-inner shadow-current inline-block">
          <i class='bx bx-link-external'></i>
          CV'yi ziyaret et
        </a>
      </div>
    </div>
    <div class=" md:max-w-xs w-full p-3 bg-secondary md:px-5 flex flex-col gap-4 shadow-sm shadow-black rounded-md">
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
