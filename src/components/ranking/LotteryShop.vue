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
          stripe-color="success"
      >
        <va-card-title class="va-h5">
          <va-badge
              color="primary">{{ index + 1 }}
          </va-badge>
        </va-card-title>
        <va-card-content class="va-h5">
          종로로또
        </va-card-content>
        <va-card-content>
          서울특별시 종로구
        </va-card-content>
      </va-card>
    </div>
  </va-infinite-scroll>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const records = ref(Array(50).fill({}));

const appendRecordsAsync = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  records.value.push({});
};

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
