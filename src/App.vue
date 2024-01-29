<template>
  <va-layout
      :top="{ fixed: true, order: 2 }"
      :left="{ fixed: true, absolute: breakpoints.smDown, order: 1, overlay: breakpoints.smDown && isSidebarVisible }"
      @left-overlay-click="isSidebarVisible = false"
  >
    <template #top>
      <va-navbar shadowed >
        <template #left>
          <va-button
              color="white"
              :icon="isSidebarVisible ? 'menu_open' : 'menu'"
              @click="isSidebarVisible = !isSidebarVisible"
          >
          </va-button>
          <VaNavbarItem
              class="ml-5 logo">
            타이틀 미정
          </VaNavbarItem>

        </template>
      </va-navbar>
    </template>

    <template #left>
      <va-sidebar v-model="isSidebarVisible">
        <router-link :to="path" v-for="{ icon, title, path } in menu" :key="icon"
                     v-slot="{ isActive }"
        >
          <va-sidebar-item :active="isActive">
            <va-sidebar-item-content>
              <va-icon :name="icon"/>
              <va-sidebar-item-title>
                {{ title }}
              </va-sidebar-item-title>
            </va-sidebar-item-content>
          </va-sidebar-item>
        </router-link>
      </va-sidebar>
    </template>

    <template #content>
      <main>
        <article>
          <router-view/>
        </article>
      </main>
    </template>
  </va-layout>
</template>

<script setup lang="ts">
import {RouterView} from 'vue-router'
import {ref, watchEffect} from 'vue'
import {useBreakpoint} from 'vuestic-ui'

const breakpoints = useBreakpoint()
const isSidebarVisible = ref(breakpoints.mdUp)

watchEffect(() => {
  isSidebarVisible.value = breakpoints.smUp
})


const menu = [
  {icon: 'map', title: '로또지도', path: '/'},
  {icon: 'list_alt', title: '로또랭킹', path: '/ranking'},
  {icon: 'insert_chart_outlined', title: '로또통계', path: '/statistics'},
]
</script>

<style lang="scss">
@import "scss/main.scss";

.logo {
  font-weight: 600;
  font-size: 1.5rem;
}
</style>
