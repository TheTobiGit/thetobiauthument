<template>
  <section class="flex justify-center items-center h-svh">
    <form @submit.prevent="updateInfo">
      <div class="flex flex-col gap-4">
        <p class="text-center text-2xl mb-2">Onboarding</p>
        <div class="flex flex-col gap-2">
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
        </div>
        <button
          type="submit"
          class="bg-[#8e80f5] text-white p-3 w-full rounded-sm"
        >
          Save
        </button>
      </div>
      <p class="text-red-600">{{ errorMessage }}</p>
    </form>
  </section>
</template>

<script setup>
const supabase = useSupabaseClient();

const fName = ref(null);
const lName = ref(null);
const errorMessage = ref(null);

async function updateInfo() {
  const { data, error } = await supabase.auth.updateUser({
    data: {
      First_Name: fName.value,
      Last_Name: lName.value,
    },
  });

  if (error) {
    errorMessage.value = error.message;
    console.log(error.message);
  }

  navigateTo("/");
}
</script>
