import { defineAsyncComponent } from 'vue'

export const defaultConfig = {
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        font: {
          color: '#34495e',
          family: 'sans-serif',
          size: 14,
        },
        usePointStyle: true,
      },
    },
    tooltip: {
      bodyFont: {
        size: 14,
        family: 'sans-serif',
      },
      boxPadding: 4,
    },
  },
  datasets: {
    line: {
      fill: 'origin',
      tension: 0.3,
      borderColor: 'transparent',
    },
    bubble: {
      borderColor: 'transparent',
    },
    bar: {
      borderColor: 'transparent',
    },
  },
  maintainAspectRatio: false,
  animation: true,
}

export const chartTypesMap = {
  pie: defineAsyncComponent(() => import('@/components/chart/type/PieChart.vue')),
  donut: defineAsyncComponent(() => import('@/components/chart/type/DonutChart.vue')),
  line: defineAsyncComponent(() => import('@/components/chart/type/LineChart.vue')),
}