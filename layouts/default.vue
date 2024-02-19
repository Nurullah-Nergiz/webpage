<script setup>

</script>
<template>
  <section
    class="p-3 my-2 flex flex-wrap justify-between items-center gap-4 shadow-sm shadow-secondary rounded-md">
    <Header />
    <Nav />
  </section>
  <main class=" flex-1 flex flex-col rounded-md">
    <slot />
  </main>
  <Footer />
</template>
