<template>
  <div class="flex min-h-screen bg-[#F4F5FA]">
    <!-- Sidebar -->
    <aside
      class="fixed inset-y-0 left-0 z-50 w-[260px] bg-white border-r border-[#DCDFE8] flex flex-col transition-transform duration-300 md:translate-x-0"
      :class="[showMobileMenu ? 'translate-x-0' : '-translate-x-full']"
    >
      <div class="h-full flex flex-col">
        <!-- Logo Area -->
        <div class="h-[73px] flex items-center px-6 border-b border-[#DCDFE8]">
          <div class="text-2xl font-bold flex items-center gap-2">
            <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white text-sm">RB</div>
            <span class="text-[#01041B]">ROB<span class="text-primary-600">Dang</span></span>
          </div>
        </div>

        <!-- Navigation -->
        <nav class="flex-1 overflow-y-auto p-4 space-y-6">
          <div v-for="group in groups" :key="group.label" class="space-y-2">
            <h3 v-if="group.label" class="px-4 text-[11px] font-bold text-[#676E8A] uppercase tracking-wider">
              {{ group.label }}
            </h3>
            <div class="space-y-1">
              <NuxtLink
                v-for="link in group.items"
                :key="link.to"
                :to="link.to"
                class="flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 group"
                :class="[
                  route.path === link.to
                    ? 'bg-[#F4F5FA] text-primary-600 font-semibold'
                    : 'text-[#676E8A] hover:bg-[#F4F5FA] hover:text-[#01041B]'
                ]"
              >
                <UIcon
                  :name="link.icon"
                  class="w-5 h-5 transition-colors"
                  :class="[route.path === link.to ? 'text-primary-600' : 'text-[#676E8A] group-hover:text-primary-600']"
                />
                <span class="text-[15px]">{{ link.label }}</span>
              </NuxtLink>
            </div>
          </div>
        </nav>

        <!-- User/Logout at bottom of sideNav -->
        <div class="p-4 border-t border-[#DCDFE8]">
          <UButton
            variant="ghost"
            color="red"
            block
            class="justify-start gap-3 rounded-xl hover:bg-red-50"
            @click="logoutUser"
          >
            <template #leading>
              <UIcon name="i-heroicons-arrow-left-on-rectangle" class="w-5 h-5" />
            </template>
            Logout
          </UButton>
        </div>
      </div>
    </aside>

    <!-- Overlay for mobile -->
    <div
      v-if="showMobileMenu"
      class="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
      @click="showMobileMenu = false"
    />

    <!-- Main Content -->
    <div class="flex-1 flex flex-col md:ml-[260px]">
      <!-- Top Navbar -->
      <header class="h-[73px] bg-white border-b border-[#DCDFE8] flex items-center justify-between px-6 sticky top-0 z-30">
        <div class="flex items-center gap-4 flex-1">
          <!-- Mobile Toggle -->
          <UButton
            icon="i-heroicons-bars-3"
            variant="ghost"
            color="gray"
            class="md:hidden"
            @click="showMobileMenu = !showMobileMenu"
          />

          <!-- Search -->
          <div class="hidden md:flex flex-1 max-w-md">
            <UInput
              icon="i-heroicons-magnifying-glass"
              placeholder="Search..."
              class="w-full"
              size="md"
              :ui="{
                base: 'rounded-xl bg-[#F4F5FA] border-none ring-1 ring-[#DCDFE8] focus:ring-2 focus:ring-primary-500',
                placeholder: 'text-[#676E8A]'
              }"
            />
          </div>
        </div>

        <!-- Navbar Funcs -->
        <div class="flex items-center gap-2">
          <UButton
            icon="i-heroicons-plus"
            label="New Order"
            color="primary"
            class="hidden lg:flex rounded-xl mr-2 shadow-sm"
          />

          <UButton
            icon="i-heroicons-chat-bubble-left-right"
            variant="ghost"
            color="gray"
            class="rounded-full"
          />

          <UButton
            icon="i-heroicons-bell"
            variant="ghost"
            color="gray"
            class="rounded-full"
          >
            <template #trailing>
              <span class="absolute top-2.5 right-2.5 w-2 h-2 bg-primary-500 rounded-full border-2 border-white" />
            </template>
          </UButton>

          <div class="h-8 w-[1px] bg-[#DCDFE8] mx-2 hidden sm:block" />

          <!-- User Profile -->
          <UButton
            variant="ghost"
            color="gray"
            class="p-1 pr-3 rounded-full hover:bg-[#F4F5FA]"
          >
            <template #leading>
              <UAvatar
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Avatar"
                size="sm"
                class="rounded-xl"
              />
            </template>
            <div class="hidden sm:flex flex-col items-start ml-2">
              <span class="font-semibold text-[#01041B] text-sm leading-tight">Browne R.</span>
              <span class="text-[10px] text-[#676E8A] leading-tight">Admin</span>
            </div>
          </UButton>
        </div>
      </header>

      <!-- Main Surface -->
      <main class="flex-1 p-6 lg:p-8 space-y-8">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const showMobileMenu = ref(false)
const route = useRoute()

const groups = [
  {
    label: 'Main',
    items: [
      { label: 'Dashboard', to: '/dashboard', icon: 'i-heroicons-squares-2x2' }
    ]
  },
  {
    label: 'Inventory',
    items: [
      { label: 'Products', to: '/products', icon: 'i-heroicons-cube' },
      { label: 'Categories', to: '/categories', icon: 'i-heroicons-tag' }
    ]
  },
  {
    label: 'Sales & Purchases',
    items: [
      { label: 'Sales', to: '/sales', icon: 'i-heroicons-shopping-cart' },
      { label: 'Purchases', to: '/purchases', icon: 'i-heroicons-briefcase' },
      { label: 'Returns', to: '/returns', icon: 'i-heroicons-arrow-path' }
    ]
  },
  {
    label: 'People',
    items: [
      { label: 'Customers', to: '/customers', icon: 'i-heroicons-user-group' },
      { label: 'Suppliers', to: '/suppliers', icon: 'i-heroicons-truck' }
    ]
  },
  {
    label: 'Others',
    items: [
      { label: 'Reports', to: '/reports', icon: 'i-heroicons-chart-bar' },
      { label: 'Settings', to: '/settings', icon: 'i-heroicons-cog-6-tooth' }
    ]
  }
]

const logoutUser = () => {
  console.log('Logging out...')
}
</script>

<style scoped>
aside {
  box-shadow: 16px 0 15px 0 rgba(0, 0, 0, 0.03);
}

header {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.01), 0 2px 4px -1px rgba(0, 0, 0, 0.01);
}

nav::-webkit-scrollbar {
  width: 4px;
}

nav::-webkit-scrollbar-thumb {
  background: #DCDFE8;
  border-radius: 10px;
}
</style>
