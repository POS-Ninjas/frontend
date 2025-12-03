<script setup lang="ts">
const email = ref("");
const password = ref("");
const rememberMe = ref(false);

const handleLogin = () => {
  // TODO: Implement login logic
  console.log("Login attempt", {
    email: email.value,
    password: password.value,
    rememberMe: rememberMe.value,
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
              Sign In
            </h1>
            <p class="text-gray-500 dark:text-gray-400">
              Login to stay connected.
            </p>
          </div>

          <form @submit.prevent="handleLogin" class="flex flex-col gap-8">
            <UInput
              v-model="email"
              placeholder="Email"
              class="w-full"
              size="xl"
            />

            <UInput
              v-model="password"
              type="password"
              placeholder="Password"
              class="w-full"
              size="xl"
            />

            <div class="flex items-center justify-between">
              <UCheckbox v-model="rememberMe" label="Remember Me" />
              <NuxtLink
                to="/forgot-password"
                class="text-sm text-primary-500 hover:text-primary-600"
              >
                Forgot Password?
              </NuxtLink>
            </div>

            <UButton type="submit" block size="lg" color="primary">
              Sign In
            </UButton>

            <div class="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Create an Account
              <NuxtLink
                to="/signup"
                class="text-primary-500 hover:text-primary-600"
                >Sign Up</NuxtLink
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
              alt="Login Illustration"
              class="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </UCard>
  </div>
</template>
