<script setup>

</script>
<template>
  <section
    class="p-3 my-2 bg-secondary flex flex-wrap justify-between items-center gap-3 shadow-sm shadow-black rounded-md">
    <Header />
    <Nav />
  </section>
  <main class=" flex-1 flex flex-col rounded-md">
    <slot />
  </main>
  <Footer />
</template>
