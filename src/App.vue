<script setup>
import packageInfo from "../package.json";
import { pages } from "./router.js";

function toggleDrawer() {
    const drawer = document.querySelector('mdui-navigation-drawer');
    drawer.open = !drawer.open;
}
</script>

<template>
  <mdui-layout style="position: fixed; left: 0; right: 0; top: 0; bottom: 0;">
      <mdui-top-app-bar order="1" scroll-behavior="elevate" style="user-select: none; -webkit-user-select: none;">
          <mdui-button-icon icon="menu" variant="standard" @click="toggleDrawer"></mdui-button-icon>
            <router-link class="router-link" to="/">
                <mdui-top-app-bar-title>
                  {{ packageInfo.displayName }}
                </mdui-top-app-bar-title>
            </router-link>
          <mdui-top-app-bar-title style="font-weight: 350;">
                  {{ pages[$route.path][1] }}
          </mdui-top-app-bar-title>
          <div style="flex-grow: 1"></div>
      </mdui-top-app-bar>

      <mdui-navigation-drawer style="padding-left: 10px;" order="2" :modal="packageInfo.uiSettings.navDrawer.modal" :close-on-esc="packageInfo.uiSettings.navDrawer.modal" close-on-overlay-click :open="packageInfo.uiSettings.navDrawer.openByDefault">
          <mdui-list style="margin: 0rem .5rem;">
              <mdui-collapse accordion>
                  <router-link class="router-link" v-for="(info, path) in pages" :to="path"><mdui-list-item rounded :icon="info[3] || null"
                          :active="$route.path == path">{{ info[1] || path.slice(1) }}</mdui-list-item></router-link>
              </mdui-collapse>
          </mdui-list>
      </mdui-navigation-drawer>

      <mdui-layout-main>
          <router-view></router-view>
      </mdui-layout-main>
  </mdui-layout>
</template>

<style scoped>
.router-link {
    text-decoration: none;
}
</style>
