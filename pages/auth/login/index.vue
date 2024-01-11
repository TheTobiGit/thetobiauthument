<template>
  <section class="h-svh flex items-center justify-center">
    <form @submit.prevent="signInWithEmail">
      <div class="w-max h-max">
        <p class="text-center text-2xl mb-2">Log in with</p>
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              v-model="email"
              placeholder="Enter email address"
              class="p-2 dark:bg-[#26202e] border dark:border-none"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              class="p-2 dark:bg-[#26202e] border dark:border-none"
            />
          </div>
          <button
            type="submit"
            class="bg-[#8e80f5] text-white p-3 w-full rounded-sm"
          >
            <p>Login</p>
          </button>
          <p>
            Don't have an account yet?
            <NuxtLink to="./register"
              ><span class="text-[#8e80f5] font-bold">Sign up</span></NuxtLink
            >
          </p>
        </div>
        <p class="text-red-600 text-center">{{ errorMessage }}</p>
      </div>
    </form>
  </section>
</template>

<script setup>
const supabase = useSupabaseClient();
let email, password;
const errorMessage = ref(null);

async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    errorMessage.value = error.message;
  }

  navigateTo("/");
}
</script>
