<template>
  <div class="space-y-8">
    <!-- Page Header -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 class="text-2xl font-bold text-[#01041B]">Reports Overview</h1>
        <p class="text-[#676E8A] mt-1">Detailed analysis of your sales and performance.</p>
      </div>
      <div class="flex items-center gap-3">
        <UButton
          icon="i-heroicons-calendar"
          label="Jan 01, 2024 - Jan 15, 2024"
          variant="outline"
          color="gray"
          class="rounded-xl bg-white shadow-sm"
        />
        <UButton
          icon="i-heroicons-arrow-down-tray"
          label="Export"
          color="primary"
          class="rounded-xl shadow-lg shadow-primary-500/20"
        />
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="stat in stats" :key="stat.label" class="bg-white p-6 rounded-2xl border border-[#DCDFE8] shadow-sm hover:shadow-md transition-shadow">
        <div class="flex items-start justify-between">
          <div :class="[stat.bg, 'p-3 rounded-xl']">
            <UIcon :name="stat.icon" class="w-6 h-6" :class="stat.color" />
          </div>
          <span :class="[stat.trend === 'up' ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50', 'text-xs font-bold px-2 py-1 rounded-lg']">
            {{ stat.percent }}
          </span>
        </div>
        <div class="mt-4">
          <h3 class="text-[#676E8A] text-sm font-medium">{{ stat.label }}</h3>
          <p class="text-2xl font-bold text-[#01041B] mt-1">{{ stat.value }}</p>
        </div>
      </div>
    </div>

    <!-- Main Content Cards -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2 bg-white p-6 rounded-2xl border border-[#DCDFE8] shadow-sm">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-lg font-bold text-[#01041B]">Sales Analytics</h2>
          <USelectMenu v-model="selectedPeriod" :options="['Last 7 Days', 'Last 30 Days', 'This Year']" class="w-40" />
        </div>
        <div class="h-[300px] flex items-center justify-center border-2 border-dashed border-gray-100 rounded-xl bg-gray-50/50">
          <div class="text-center text-[#676E8A]">
            <UIcon name="i-heroicons-chart-bar" class="w-12 h-12 mx-auto opacity-20" />
            <p class="mt-2">ApexCharts Visualization Placeholder</p>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-2xl border border-[#DCDFE8] shadow-sm">
        <h2 class="text-lg font-bold text-[#01041B] mb-6">Top Selling Category</h2>
        <div class="space-y-6">
          <div v-for="category in categories" :key="category.name" class="group">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-[#01041B]">{{ category.name }}</span>
              <span class="text-xs font-bold text-[#676E8A]">{{ category.amount }}</span>
            </div>
            <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                class="h-full bg-primary-500 rounded-full transition-all duration-1000"
                :style="{ width: category.progress + '%' }"
              />
            </div>
          </div>
        </div>
        <UButton block variant="ghost" color="primary" class="mt-8">View Detailed Report</UButton>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'default' })

const selectedPeriod = ref('Last 30 Days')

const stats = [
  { label: 'Total Sales', value: '$45,231.89', icon: 'i-heroicons-currency-dollar', color: 'text-blue-600', bg: 'bg-blue-50', percent: '+12.5%', trend: 'up' },
  { label: 'Orders', value: '1,245', icon: 'i-heroicons-shopping-cart', color: 'text-purple-600', bg: 'bg-purple-50', percent: '+5.2%', trend: 'up' },
  { label: 'Revenue', value: '$12,302.00', icon: 'i-heroicons-banknotes', color: 'text-orange-600', bg: 'bg-orange-50', percent: '-2.4%', trend: 'down' },
  { label: 'Visitors', value: '15.6k', icon: 'i-heroicons-user-group', color: 'text-green-600', bg: 'bg-green-50', percent: '+8.1%', trend: 'up' }
]

const categories = [
  { name: 'Electronics', amount: '$12.5k', progress: 85 },
  { name: 'Fashion & Apparel', amount: '$8.2k', progress: 62 },
  { name: 'Home Appliances', amount: '$5.6k', progress: 45 },
  { name: 'Groceries', amount: '$2.1k', progress: 28 }
]
</script>
