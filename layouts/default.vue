<script setup>

</script>
<template>
  <section class="h-16 flex flex-wrap justify-between items-center">
    <Header />
    <Nav />
  </section>
  <main class="pt-3 flex-1">
    <slot />
  </main>
  <Footer />
</template>
