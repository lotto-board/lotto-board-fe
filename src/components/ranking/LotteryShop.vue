<template>
  <va-infinite-scroll :load="appendRecordsAsync"
                      id="container"
  >
    <div
        id="card-container"
        class="ma-3 flex flex-col"
        v-for="(record, index) in records"
        :key="index"
    >
      <va-card
          stripe
          :stripe-color="setColorOnlyRanked(index)"
          gradient
      >
        <va-card-title class="va-h5">
          <va-badge>{{ index + 1 }}
          </va-badge>
        </va-card-title>
        <va-card-content class="va-h5">
          {{ record.shopName }}
        </va-card-content>
        <va-card-content>
          {{ record.address }}
        </va-card-content>
        <va-card-block class="flex-auto ma-3"
                       style="align-items: flex-end; flex-direction: row">
          <VaChip
              outline
              v-for="(icon, index) in icons"
              :key="index"
              :icon="icon.name"
              :color="icon.color"
              class="ml-1 mr-2 mb-3 va-text-bold"
          >
            {{ record[icon.key] }}
          </VaChip>
        </va-card-block>
      </va-card>
    </div>
  </va-infinite-scroll>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const records = ref(Array(50).fill({shopName: '종로로또', address: '서울특별시 종로구', first: 5, second: 15}));
const icons = ref([
  {name: 'filter_1', key: 'first', color: 'success'},
  {name: 'filter_2', key: 'second', color: 'warning'}
])
const appendRecordsAsync = async () => {
  // TODO:: lotto shop paging api fetch
  await new Promise((resolve) => setTimeout(resolve, 300));
  records.value.push({shopName: '종로로또', address: '서울특별시 종로구', first: 5, second: 15});
};

const setColorOnlyRanked = (index: Number) => {
  if (index === 0) {
    return 'success';
  } else if (index === 1) {
    return 'secondary';
  }
  return 'white';
}

</script>

<style>
#container {
  display: flex;
  align-items: center;
}

#card-container {
  width: 600px;
}

@media (max-width: 600px) {
  #card-container {
    width: 100%
  }
}

</style>
