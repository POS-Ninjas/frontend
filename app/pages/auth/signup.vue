<script setup lang="ts">
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const phone = ref("");
const password = ref("");
const confirmPassword = ref("");
const agreeTerms = ref(false);

const handleSignup = () => {
  // TODO: Implement signup logic
  console.log("Signup attempt", {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phone: phone.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
    agreeTerms: agreeTerms.value,
  });
};
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 p-4"
  >
    <UCard
      class="w-full max-w-5xl p-0 overflow-hidden"
      :ui="{ body: 'p-0 sm:p-0' }"
    >
      <div class="grid md:grid-cols-2">
        <!-- Left Side: Form -->
        <div class="p-8 md:p-12 flex flex-col justify-center">
          <div class="mb-8">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Sign Up
            </h1>
            <p class="text-gray-500 dark:text-gray-400">
              Create your POS-Ninja account.
            </p>
          </div>

          <form @submit.prevent="handleSignup" class="flex flex-col gap-6">
            <div class="grid grid-cols-2 gap-4">
              <UInput
                v-model="firstName"
                placeholder="First Name"
                class="w-full"
                size="xl"
              />
              <UInput
                v-model="lastName"
                placeholder="Last Name"
                class="w-full"
                size="xl"
              />
            </div>

            <div class="grid grid-cols-2 gap-4">
              <UInput
                v-model="email"
                placeholder="Email"
                class="w-full"
                size="xl"
              />
              <UInput
                v-model="phone"
                placeholder="Phone No."
                class="w-full"
                size="xl"
              />
            </div>

            <div class="grid grid-cols-2 gap-4">
              <UInput
                v-model="password"
                type="password"
                placeholder="Password"
                class="w-full"
                size="xl"
              />
              <UInput
                v-model="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                class="w-full"
                size="xl"
              />
            </div>

            <div class="flex items-center">
              <UCheckbox
                v-model="agreeTerms"
                label="I agree with the terms of use"
              />
            </div>

            <UButton type="submit" block size="lg" color="primary">
              Sign Up
            </UButton>

            <div class="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Already have an Account
              <NuxtLink
                to="/login"
                class="text-primary-500 hover:text-primary-600"
                >Sign In</NuxtLink
              >
            </div>
          </form>
        </div>

        <!-- Right Side: Illustration -->
        <div
          class="hidden md:flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-8 relative overflow-hidden"
        >
          <!-- Placeholder for the 3D character illustration -->
          <div class="relative z-10">
            <img
              src="https://placehold.co/400x400/3b82f6/white?text=Illustration"
              alt="Signup Illustration"
              class="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </UCard>
  </div>
</template>
