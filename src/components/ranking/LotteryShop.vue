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
          color="white"
          stripe
          :stripe-color="setColorOnlyRanked(index)"
          gradient
      >
        <va-card-block
            class="flex-nowrap"
            horizontal
        >
          <div class="flex-auto">
            <va-card-title>
              <va-badge>{{ index + 1 }}
              </va-badge>
            </va-card-title>
            <va-card-content class="va-h6">
              {{ record.shop_info.name }}
            </va-card-content>
            <va-card-content>
              {{ record.shop_info.address }}
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
          </div>
          <va-card-block v-if="index === 0"
              class="flex-grow-0 flex-shrink-0 basis-52"
          />
        </va-card-block>
      </va-card>
    </div>
  </va-infinite-scroll>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {getShop} from "@/api/shop";
import type {ShopResponse} from "@/type/shop";


const page = ref(0)
const records = ref<ShopResponse[]>([]);
const icons = ref([
  {name: 'filter_1', key: 'count_shop_first', color: 'success'},
  {name: 'filter_2', key: 'count_shop_second', color: 'warning'}
])
const appendRecordsAsync = async () => {
  const response = await getShop(page.value, 10);
  if (!response.length) return

  let value = records.value
  value.push(...response)
  page.value++
};

const setColorOnlyRanked = (index: Number) => {
  if (index === 0) {
    return 'success';
  } else if (index === 1) {
    return 'secondary';
  }
  return 'white';
}

onMounted(() => {
  appendRecordsAsync()
})

</script>

<style>
#container {
  display: flex;
  align-items: center;
}

#card-container {
  width: 100%;
}

@media (max-width: 600px) {
  #card-container {
    width: 100%
  }
}

</style>
