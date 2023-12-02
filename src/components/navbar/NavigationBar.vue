<template>
    <va-navbar
      color="darkNavbarColors"
      class="mb-1"
    >
      <va-navbar-item class="logo">
        로또
      </va-navbar-item>
      <va-navbar-item class="navbar-item-slot">
        <router-link to='/'>
          <va-button>지도</va-button>
        </router-link>
      </va-navbar-item>
      <va-navbar-item class="hidden sm:block">
        <router-link to='/ranking'>
          <va-button>랭킹</va-button>
        </router-link>
      </va-navbar-item>
    </va-navbar>
</template>

<script setup lang='ts'>
import { computed } from "vue";
import { useColors } from "vuestic-ui";

const { currentPresetName } = useColors();

const darkNavbarColors = computed(() => {
  if (currentPresetName.value === "light") {
    return {
      color: "#111111",
      textColor: "#BAFFC5",
    };
  } else {
    return {
      color: "#FBCAF6",
      textColor: "#481269",
    };
  }
});
</script>

<style scoped>
.logo {
  font-weight: 600;
  font-size: 1.5rem;
}

.va-custom--success {
  border-width: 1px;
  border-style: solid;
}
</style>
