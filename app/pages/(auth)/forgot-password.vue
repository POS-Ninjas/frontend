<script setup lang="ts">
const email = ref("");

const handleReset = () => {
  // TODO: Implement password reset logic
  console.log("Reset password attempt", { email: email.value });
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
              Reset Password
            </h1>
            <p class="text-gray-500 dark:text-gray-400">
              Enter your email address and we'll send you an email with
              instructions to reset your password.
            </p>
          </div>

          <form @submit.prevent="handleReset" class="flex flex-col gap-6">
            <UInput
              v-model="email"
              placeholder="Email"
              class="w-full"
              size="xl"
            />

            <UButton type="submit" block size="lg" color="primary" class="w-32">
              Reset
            </UButton>
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
              alt="Reset Password Illustration"
              class="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </UCard>
  </div>
</template>
