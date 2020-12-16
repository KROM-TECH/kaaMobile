<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar>
        <ion-tab-button tab="home" href="/">
          <ion-icon :icon="home"></ion-icon>
          <ion-label>home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="book" href="/book">
          <ion-icon :icon="book"></ion-icon>
          <ion-label>book</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="video" href="/video">
          <ion-icon :icon="videocam"></ion-icon>
          <ion-label>video</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="article" href="/article">
          <ion-icon :icon="bookmark"></ion-icon>
          <ion-label>article</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="upload" href="/upload">
          <ion-icon :icon="cloudUpload"></ion-icon>
          <ion-label>upload</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonIcon, IonLabel, IonPage, IonTabBar, IonTabButton, IonTabs } from "@ionic/vue";
import { calendar, book, home, videocam, bookmark, cloudUpload } from "ionicons/icons";

export default defineComponent({
  name: "bottomTab",
  components: { IonIcon, IonLabel, IonPage, IonTabBar, IonTabButton, IonTabs },
  setup() {
    return {
      home,
      bookmark,
      cloudUpload,
      videocam,
      book,
    };
  },
});
</script>
