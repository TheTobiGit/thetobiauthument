<template>
  <section class="h-svh flex items-center justify-center">
    <form @submit.prevent="signUp">
      <div class="w-max h-max">
        <p class="text-center text-2xl mb-2">Register with</p>
        <div class="flex flex-col gap-4">
          <!-- <div class="flex flex-col gap-2">
            <label for="fName">First Name</label>

            <input
              type="text"
              name="fName"
              id="fName"
              v-model="fName"
              placeholder="Enter your first name"
              class="p-2 dark:bg-[#26202e] border dark:border-none"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label for="lName">Last Name</label>
            <input
              type="text"
              name="lName"
              id="lName"
              v-model="lName"
              placeholder="Enter your last name"
              class="p-2 dark:bg-[#26202e] border dark:border-none"
            />
          </div> -->
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
              placeholder="Set your password"
              class="p-2 dark:bg-[#26202e] border dark:border-none"
            />
          </div>

          <button class="bg-[#8e80f5] text-white p-3 w-full rounded-sm">
            <p>Register</p>
          </button>
          <p>
            Already have an account?
            <NuxtLink to="./login"
              ><span class="text-[#8e80f5] font-bold">Login</span></NuxtLink
            >
          </p>
        </div>
      </div>
      <p class="text-red-600">{{ errorMessage }}</p>
    </form>
  </section>
</template>

<script setup>
const supabase = useSupabaseClient();

let fName, lName, email, password;
const errorMessage = ref(null);

const isOpen = ref(false);

async function signUp() {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        First_Name: fName,
        Last_Name: lName,
      },
    },
  });

  if (error) {
    errorMessage.value = error.message;
    return;
  }

  navigateTo("./confirm");
}
</script>
