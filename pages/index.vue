<script>
export default {
  setup() {
    useHead({
      meta: [
        {
          hid: "description",
          name: "description",
          content: `
          Benim kişisel portfolyo sitem, yazılım geliştirme projelerim hakkında detaylı bilgi içerir.
          Bu projeler, farklı programlama dilleri ve teknolojiler kullanılarak geliştirilmiştir.
          Uzmanlık alanlarım arasında web uygulama geliştirme,
          veritabanı tasarımı ve API entegrasyonu bulunmaktadır.`,
        },
      ],
    });
  },
};
</script>

<template>
  <section class="about">
    <h2>
      <b>Merhaba Ben Nurullah</b><br />
      Konya'da yaşayan bir yazılımcıyım
    </h2>
    <br />
    <div class="descriptions">
      Ben bir web geliştiricisiyim. Bu portföyüm, web tasarım ve geliştirme
      projelerimdeki yeteneklerimi ve deneyimimi sergiliyor. Front-end
      teknolojileri, HTML, CSS ve JavaScript'te derin bir bilgiye sahibim ve
      React Vue gibi modern JavaScript çerçevelerinde deneyimliyim. Back-end
      olarak Node.js, Express ve MongoDB gibi teknolojilerde de deneyimim
      bulunmaktadır. Bu projeler, müşterilerime veya kişisel ilgi alanlarıma
      yönelik işleri içerir. Yaratıcı fikirlerimle ve problem çözme yeteneğimle
      birlikte güzel, işlevsel ve kullanıcı dostu web siteleri geliştiriyorum.
      Siz de, projelerim hakkında daha fazla bilgi edinmek için sayfaları
      ziyaret edebilirsiniz. İletişime geçmek veya işbirliği yapmak için bana
      e-posta veya LinkedIn aracılığıyla ulaşabilirsiniz.
    </div>
  </section>
  <section class="contact">
    <h1>İletişim</h1>
    <span>
      <a href="mailto:nurullah-nergiz@hotmail.com" class="bx bx-envelope"
        ><p>Email</p>
      </a>
      <a
        href="https://github.com/Nurullah-Nergiz/"
        target="_blank"
        class="bx bxl-github"
        ><p>Github</p>
      </a>
      <a
        href="https://www.linkedin.com/in/nurullah-nergiz-375674221/"
        target="_blank"
        class="bx bxl-linkedin"
        ><p>Linkedin</p>
      </a>
    </span>
  </section>
</template>

<style></style>
