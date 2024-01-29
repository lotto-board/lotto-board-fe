<template>
  <div class="pt-6 pr-6 pl-6">
    <va-card v-if="props.data">
      <va-card-title>{{ props.title }}</va-card-title>
      <va-card-content calss="overflow-auto">
        <va-data-table
          :items="props.data"
          :columns="column"
          :wrapper-size="400"
          virtual-scroller
          sticky-header
          hoverable
        ></va-data-table>
      </va-card-content>
    </va-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { NumberRanking } from '@/type/statistics';

const column = ref([
  {
    key: "rank",
    label: "랭킹",
  },
  {
    key: "number",
    label: "로또번호",
  },
  {
    key: "frequency",
    label: "당첨횟수",
  }
]);

const props = defineProps<{
  data: NumberRanking[],
  title: string,
}>();

</script>

<style scoped>
</style>