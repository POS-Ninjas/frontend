<template>
  <div class="space-y-8">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-[#01041B]">Sales Dashboard</h1>
        <p class="text-[#676E8A]">Welcome back, Browne! Here's what's happening today.</p>
      </div>
      <div class="flex gap-3">
        <UButton color="#01041B" icon="i-heroicons-calendar" label="This Month" variant="solid" class="rounded-xl shadow-sm text-black" />
        <UButton color="primary" icon="i-heroicons-arrow-down-tray" label="Download Report" class="rounded-xl shadow-sm" />
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <UCard v-for="stat in stats" :key="stat.label" :ui="{ body: { padding: 'p-6' }, base: 'overflow-hidden border-none shadow-sm rounded-2xl' }">
        <div class="flex items-center gap-5">
          <div :class="[stat.bg, 'w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0']">
            <UIcon :name="stat.icon" :class="stat.color" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-[#676E8A] truncate">{{ stat.label }}</p>
            <h3 class="text-xl font-bold text-white mt-1">{{ stat.value }}</h3>
            <div class="flex items-center gap-2 mt-2">
              <UProgress :value="stat.progress" :color="stat.progressColor" size="xs" />
            </div>
          </div>
        </div>
      </UCard>
    </div>

    <!-- Main Analytics Row -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Overview Chart -->
      <UCard class="lg:col-span-2 border-none shadow-sm rounded-2xl" :ui="{ header: { padding: 'px-6 py-4' } }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="font-bold text-white">Sales Overview</h3>
            <USelect v-model="view" :options="['Last 7 Days', 'Last 30 Days', 'Last Year']" size="sm" class="w-32" />
          </div>
        </template>
        <div class="h-[350px] flex items-end gap-3 px-4 pb-4">
          <!-- Placeholder simple bar chart -->
          <div v-for="n in 12" :key="n" class="flex-1 bg-primary-50 rounded-t-lg transition-all duration-500 hover:bg-primary-200" :style="{ height: Math.random() * 80 + 20 + '%' }" />
        </div>
      </UCard>

      <!-- Revenue Vs Cost -->
      <UCard class="border-none shadow-sm rounded-2xl" :ui="{ header: { padding: 'px-6 py-4' } }">
        <template #header>
          <h3 class="font-bold text-white">Revenue Vs Cost</h3>
        </template>
        <div class="space-y-6">
          <div v-for="item in revenueItems" :key="item.label" class="space-y-2">
            <div class="flex justify-between text-sm">
              <span class="text-[#676E8A]">{{ item.label }}</span>
              <span class="font-bold text-white">{{ item.value }}</span>
            </div>

            <UProgress :value="item.progress" :color="item.color" size="sm" />

          </div>
          <div class="pt-4 mt-4 border-top border-[#F4F5FA]">
            <p class="text-[11px] text-[#676E8A] uppercase font-bold tracking-wider mb-2">Efficiency</p>
            <div class="flex items-center gap-4">
              <div class="text-3xl font-bold text-primary-600">85%</div>
              <p class="text-xs text-[#676E8A]">Performance is up by <span class="text-green-500 font-bold">5.2%</span> compared to last month.</p>
            </div>
          </div>
        </div>
      </UCard>
    </div>

    <!-- Bottom Row -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Order Summary -->
      <UCard class="border-none shadow-sm rounded-2xl">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="font-bold text-white">Order Summary</h3>
            <UButton variant="ghost" color="gray" label="View All" size="xs" />
          </div>
        </template>
        <div class="space-y-4">
          <div v-for="order in recentOrders" :key="order.id" class="flex items-center gap-4 p-3 rounded-xl hover:bg-[#F4F5FA] transition-colors">
            <div class="w-10 h-10 rounded-lg bg-white border border-[#DCDFE8] flex items-center justify-center font-bold text-xs text-primary-600">
              #{{ order.id }}
            </div>
            <div class="flex-1">
              <p class="text-sm font-bold text-white">{{ order.customer }}</p>
              <p class="text-xs text-[#676E8A]">{{ order.date }}</p>
            </div>
            <div class="text-right">
              <p class="text-sm font-bold text-white">{{ order.amount }}</p>
              <UBadge :color="order.statusColor" variant="soft" size="xs" class="rounded-full">{{ order.status }}</UBadge>
            </div>
          </div>
        </div>
      </UCard>

      <!-- Top Products -->
      <UCard class="border-none shadow-sm rounded-2xl">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="font-bold text-[#01041B]">Top Products</h3>
            <UButton variant="ghost" color="gray" label="Full List" size="xs" />
          </div>
        </template>
        <div class="grid grid-cols-2 gap-4">
          <div v-for="product in topProducts" :key="product.name" class="p-4 rounded-2xl border border-[#F4F5FA] bg-[#F4F5FA]/30 hover:shadow-md transition-shadow">
            <div class="w-full aspect-square bg-white rounded-xl mb-3 flex items-center justify-center p-4">
              <UIcon :name="product.icon" class="text-4xl text-primary-600" />
            </div>
            <h4 class="text-sm font-bold text-[#01041B] truncate">{{ product.name }}</h4>
            <div class="flex justify-between items-center mt-1">
              <span class="text-xs text-[#676E8A]">{{ product.sold }} Sold</span>
              <span class="text-sm font-bold text-primary-600">{{ product.price }}</span>
            </div>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'default' })

const view = ref('Last 7 Days')

const stats = [
  { label: 'Total Sales', value: '$31,500', icon: 'i-heroicons-banknotes', bg: 'bg-blue-50', color: 'text-blue-500', progress: 75, progressColor: 'blue' },
  { label: 'Total Cost', value: '$12,450', icon: 'i-heroicons-wallet', bg: 'bg-orange-50', color: 'text-orange-500', progress: 45, progressColor: 'orange' },
  { label: 'Product Sold', value: '1,280 Pcs', icon: 'i-heroicons-shopping-bag', bg: 'bg-purple-50', color: 'text-purple-500', progress: 60, progressColor: 'purple' }
]

const revenueItems = [
  { label: 'Net Profit', value: '$19,050', progress: 70, color: 'primary' },
  { label: 'Operating Income', value: '$8,200', progress: 40, color: 'blue' },
  { label: 'Taxes', value: '$4,350', progress: 15, color: 'orange' }
]

const recentOrders = [
  { id: '8542', customer: 'Alice Johnson', date: 'Jan 16, 2024', amount: '$450.00', status: 'Completed', statusColor: 'green' },
  { id: '8541', customer: 'Robert Smith', date: 'Jan 15, 2024', amount: '$120.50', status: 'Pending', statusColor: 'orange' },
  { id: '8540', customer: 'Charlie Brown', date: 'Jan 15, 2024', amount: '$89.00', status: 'Completed', statusColor: 'green' },
  { id: '8539', customer: 'Diana Prince', date: 'Jan 14, 2024', amount: '$1,200.00', status: 'Processing', statusColor: 'blue' }
]

const topProducts = [
  { name: 'Organic Coffee Beans', sold: '450', price: '$24.00', icon: 'i-heroicons-beaker' },
  { name: 'Luxury Cotton Towel', sold: '320', price: '$15.50', icon: 'i-heroicons-receipt-percent' },
  { name: 'Smart Watch Series 5', sold: '280', price: '$299.00', icon: 'i-heroicons-clock' },
  { name: 'Wireless Earbuds', sold: '190', price: '$89.00', icon: 'i-heroicons-speaker-wave' }
]
</script>

<style lang="scss" scoped>

</style>