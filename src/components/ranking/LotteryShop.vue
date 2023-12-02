<template>
  <div class="row">
    <div class="flex flex-col md6 lg4 h-22">
      <va-infinite-scroll :load="appendRecordsAsync">
        <div
            v-for="(record, index) in records"
            :key="index"
        >
          List item and some text #{{ index }}
        </div>
      </va-infinite-scroll>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const records = ref(Array(50).fill({}));

const appendRecordsAsync = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  records.value.push({});
};

</script>
