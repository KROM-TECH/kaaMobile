<template>
  <ion-app>
    <ion-router-outlet />
    <bottom-nav />
  </ion-app>
</template>

<script lang="ts">
import BottomNav from "@/components/bottomNav.vue";
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
    BottomNav,
  },
});
</script>

<style>
button {
  border-radius: 2px !important;
}
.button-native {
  border-radius: 2px !important;
}
</style>
