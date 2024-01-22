<script setup>

</script>
<template>
  <section class="p-3 flex flex-wrap justify-between items-center gap-3 shadow-sm shadow-secondary rounded-md">
    <Header />
    <Nav />
  </section>
  <main class="my-4 flex-1 flex flex-col rounded-md">
    <slot />
  </main>
  <Footer />
</template>
