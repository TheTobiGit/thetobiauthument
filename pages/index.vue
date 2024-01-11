<template>
  <section class="h-svh justify-center items-center flex">
    <p class="text-6xl">You made it.. wossop</p>
  </section>
</template>

<script setup>
const user = useSupabaseUser();
const userfName = user.value.user_metadata.First_Name;

console.log(userfName);
</script>

<style></style>
