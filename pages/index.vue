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
          name: "keywords",
          content: `Frontend developer,
              Web development,
              HTML,
              CSS,
              JavaScript,
              Mobile-friendly,
              React,
              Vue.js,
              Git`,
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
  <section class="about">
    <h1><b>Merhaba Ben Nurullah</b><br /></h1>
    <div class="descriptions">
	    Yaklaşık 5 yıldır bu alanda çalışıyorum ve bu
      süre boyunca birçok farklı proje için çalışma fırsatım oldu. 
      Web geliştirme alanındaki en büyük tutkularımdan biri, web sitelerinin
      kullanıcı deneyimini geliştirmektir. Kullanıcılar için daha iyi bir
      deneyim sunmak için, her zaman araştırmalar yapıyor ve en son
      teknolojileri takip ediyorum. Benim için web
      geliştirme sadece bir iş değil, bir tutku. Kendimi sürekli olarak
      geliştiriyor ve daha iyi olmak için çaba sarf ediyorum. Ayrıca, projelerin her aşamasında
      müşterilerimle açık bir iletişim kurarım, böylece her zaman aynı sayfada
      olduğumuzdan emin olurum. Web geliştirme alanındaki uzmanlığımla, size
      özel bir web sitesi tasarlamak ve geliştirmek için sabırsızlanıyorum.
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
        ><p></p>
      </a>
      <a
        href="https://www.linkedin.com/in/nurullah-nergiz/"
        target="_blank"
        class="bx bxl-linkedin"
        ><p></p>
      </a>
    </span>
  </section>
</template>
