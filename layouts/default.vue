<script setup>

</script>
<template>
  <section class="my-5 flex flex-wrap justify-between items-center gap-3">
    <Header />
    <Nav />
  </section>
  <main class="mt-3 flex-1 flex flex-col">
    <slot />
  </main>
  <Footer />
</template>
