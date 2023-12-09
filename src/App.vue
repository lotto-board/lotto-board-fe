<template>
  <VaLayout
      :top="{ fixed: true, order: 2 }"
      :left="{ fixed: true, absolute: breakpoints.smDown, order: 1, overlay: breakpoints.smDown && isSidebarVisible }"
      @left-overlay-click="isSidebarVisible = false"
  >
    <template #top>
      <VaNavbar shadowed>
        <template #left>
          <VaButton
              :icon="isSidebarVisible ? 'menu_open' : 'menu'"
              @click="isSidebarVisible = !isSidebarVisible"
          >
          </VaButton>
        </template>
      </VaNavbar>
    </template>

    <template #left>
      <VaSidebar v-model="isSidebarVisible">
        <router-link :to="path" v-for="{ icon, title, path } in menu" :key="icon">
          <VaSidebarItem>
            <VaSidebarItemContent>
              <VaIcon :name="icon"/>
              <VaSidebarItemTitle>
                {{ title }}
              </VaSidebarItemTitle>
            </VaSidebarItemContent>
          </VaSidebarItem>
        </router-link>
      </VaSidebar>
    </template>

    <template #content>
      <main>
        <article>
          <router-view/>
        </article>
      </main>
    </template>
  </VaLayout>
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
]
</script>

<style scoped>
</style>
