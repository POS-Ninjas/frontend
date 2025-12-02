<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50">
    <p class="mt-4 text-sm text-center text-gray-500">
        Hello
        <NuxtLink to="/register" class="text-primary-600">Register</NuxtLink>
      </p>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'auth' })

/**
 * IMPORTS
*/
  // import { useAuth } from '~/composables/useAuth'

/**
 * DECLARATIONS
*/
  // const { login } = useAuth()

</script>
