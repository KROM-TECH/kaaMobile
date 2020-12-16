<template>
  <div>
    <Menu />
    <section class="pt-4 pt-md-11">
      <b-container>
        <b-row align-h="center" class="font text-center">
          <b-col>
            <h1>
              <span class="tex-primary">Upload</span>
            </h1>
            <p class="lead text-gray-700">
              Upload books, videos and articles that would be benefical to other students
              <br />
              <span>If this is your first time uploading please read the <a>Guides</a></span>
            </p>
          </b-col>
        </b-row>

        <b-row class="justify-content-center">
          <b-form-select
            class="dropdown mb-3"
            v-model="selected"
            :options="options"
            required
          ></b-form-select>
        </b-row>

        <b-row class="justify-content-center align-items-center">
          <div class="upload justify-content-center align-items-center">
            <Upload :type="selected" :disable="selected == ''" />
          </div>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/storage";
import Menu from "@/components/Menu.vue";
import Upload from "@/components/Upload.vue";

export default {
  components: { Menu, Upload },
  data() {
    return {
      NumBook: "",
      selected: "",
      placeholder: "",
      searchInput: "",
      data: [],
      loading: true,
      options: [
        { value: "", text: "Type", disabled: true },
        { value: "Book", text: "Book" },
        { value: "Video", text: "Video" },
        { value: "Article", text: "Article" },
      ],
    };
  },

  methods: {
    dropdown(x) {
      this.selected = x;
    },
  },

  mounted() {},
};
</script>

<style scoped>
.lead {
  color: rgba(0, 0, 0, 0.726) !important;
  font-weight: 540;
  font-size: 1.1rem;
  padding: 1rem;
  word-spacing: 2px;
  line-height: 1.5rem;
}

.upload {
  color: #00276f !important;
  text-align: center;
  font-weight: 550 !important;
}
.tex-primary {
  color: #00276f !important;
  font-weight: 600;
  font-size: 2.5rem;
}
</style>
