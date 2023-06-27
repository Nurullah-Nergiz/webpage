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
          Nurullah Nergiz, son teknolojileri takip eden bir web yazılımcısıdır. Web sitelerinizin kullanıcı deneyimini geliştirerek, markanızın bilinirliğini artırmak için sizinle çalışmak için sabırsızlanıyor. İletişim için nurullah-nergiz@hotmail.com adresine e-posta gönderebilirsiniz.`,
        },
      ],
    });
  },
};
</script>

<template>
  <section class="h-full">
    <div class="flex-1 max-w-full">
      <h1 class="text-3xl">Merhaba Ben Nurullah</h1><br>
      <p>Yaklaşık 5 yıldır bu alanda çalışıyorum ve bu süre boyunca birçok farklı proje için çalışma fırsatım oldu. Web
        geliştirme alanındaki en büyük tutkularımdan biri, web sitelerinin kullanıcı deneyimini geliştirmektir.
        Kullanıcılar için daha iyi bir deneyim sunmak için, her zaman araştırmalar yapıyor ve en son teknolojileri takip
        ediyorum.Benim için web geliştirme sadece bir iş değil, bir tutku. Kendimi sürekli olarak geliştiriyor ve daha iyi
        olmak için çaba sarf ediyorum.</p>

      <a href="#"
        class="mt-3 py-2 px-3 text-gray-500 border border-current rounded-br-lg rounded-tl-lg shadow-inner shadow-current inline-block">CV'yi
        indir</a>
      <br><br>
    </div>
    <h2 class="text-2xl">İletişim</h2><br>
    <div class="flex ">
      <a href="https://github.com/Nurullah-Nergiz/" target="_blank"
        class="bx bxl-github p-2 flex items-center gap-1 border border-current rounded-full ">
        <!-- <span>Github</span> -->
      </a>
      <a href="https://www.linkedin.com/in/nurullah-nergiz/" target="_blank"
        class="bx bxl-linkedin p-2 flex items-center gap-1  border border-white rounded-full ">
        <!-- <span>Linkedin</span> -->
      </a>
      <a href="mailto:nurullah-nergiz@hotmail.com"
        class="bx bx-envelope p-2 flex items-center gap-1 border border-white rounded-full ">
        <!-- <span>Mail</span> -->
      </a>
    </div>
  </section>
</template>
