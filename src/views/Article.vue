<template>
  <div>
    <Menu />
    <section class="pt-4 pt-md-11">
      <b-container>
        <b-row align-h="center" class="font text-center">
          <b-col>
            <h1>
              <span class="tex-primary">Article</span>
            </h1>
            <p class="lead text-gray-700">
              We currently have {{ NumBook }} in the Archive but you can view only
              {{ availableView }}.
              <br />
              <a>Learn More</a>
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

        <b-row class="justify-content-center ">
          <b-form-input
            v-if="selected == '' || selected == 'Uploader' || selected == 'Department'"
            class="input my-3"
            :placeholder="placeholder"
            v-model="searchInput"
            type="search"
            :disabled="selected == ''"
          ></b-form-input>

          <b-form-select
            v-if="selected == 'University'"
            class="input my-3"
            v-model="searchInput"
            :options="universities"
            required
          ></b-form-select>
          <b-form-select
            v-if="selected == 'Faculty'"
            class="input my-3"
            v-model="searchInput"
            :options="faculties"
            required
          ></b-form-select>
          <b-form-select
            v-if="selected == 'Level'"
            class="input my-3"
            v-model="searchInput"
            :options="level"
            required
          ></b-form-select>

          <button
            class="primary my-3 mt-3"
            :disabled="selected == '' || searchInput == ''"
            @click="searchButton"
          >
            Search
          </button>
        </b-row>

        <div style="overflow-x: auto;">
          <NotFound v-if="empty && !data.length" />
          <div class="d-flex justify-content-center" v-if="!data.length && !empty">
            <b-spinner type="grow load" label="Loading..."></b-spinner>
          </div>

          <div class="d-flex flex-wrap justify-content-center" v-else>
            <ArticleBox v-for="(item, index) in data" :key="item.title" :data="data[index]" />
          </div>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import Menu from "@/components/Menu.vue";
import NotFound from "@/components/404.vue";
import ArticleBox from "@/components/Articlebox.vue";

import faculties from "@/helpers/faculties.js";
import universities from "@/helpers/universities.js";
import level from "@/helpers/level.js";

export default {
  components: { Menu, ArticleBox, NotFound },
  data() {
    return {
      universities,
      faculties,
      level,

      NumBook: "",
      empty: false,
      selected: "",
      placeholder: "",
      searchInput: "",
      data: [],
      options: [
        { value: "", text: "Search by", disabled: true },
        { value: "Uploader", text: "Uploader" },
        { value: "University", text: "University" },
        { value: "Faculty", text: "Faculty" },
        { value: "Department", text: "Department" },
        { value: "Level", text: "Level" },
      ],
      loading: true,
    };
  },
  computed: {
    availableView() {
      return this.NumBook > 15 ? "15" : this.NumBook;
    },
  },

  methods: {
    loadData(querySnapshot) {
      querySnapshot.forEach((doc) => {
        const document = doc.data();
        this.data.push(document);
      });
      this.loading = false;
      console.log(this.data);
    },
    init() {
      firebase
        .firestore()
        .collection("articles")
        .get()
        .then((querySnapshot) => {
          this.NumBook = querySnapshot.size;
          this.loadData(querySnapshot);
        });
    },
    searchButton() {
      this.data = [];
      this.empty = false;

      const booksRef = firebase.firestore().collection("articles");
      const searchValue = this.searchInput;

      if (this.selected == "Uploader") {
        booksRef
          .orderBy("uploader")
          .startAt(searchValue)
          .endAt(searchValue + "\uf8ff")
          .onSnapshot((querySnapshot) => {
            if (!querySnapshot.empty) {
              this.loadData(querySnapshot);
            } else {
              this.empty = true;
            }
          });
      } else if (this.selected == "University") {
        booksRef
          .orderBy("university")
          .startAt(searchValue)
          .endAt(searchValue + "\uf8ff")
          .onSnapshot((querySnapshot) => {
            if (!querySnapshot.empty) {
              this.loadData(querySnapshot);
            } else {
              this.empty = true;
            }
          });
      } else if (this.selected == "Book Name") {
        booksRef
          .orderBy("bookName")
          .startAt(searchValue)
          .endAt(searchValue + "\uf8ff")
          .onSnapshot((querySnapshot) => {
            if (!querySnapshot.empty) {
              this.loadData(querySnapshot);
            } else {
              this.empty = true;
            }
          });
      } else if (this.selected == "Book Author") {
        booksRef
          .orderBy("bookAuthor")
          .startAt(searchValue)
          .endAt(searchValue + "\uf8ff")
          .onSnapshot((querySnapshot) => {
            if (!querySnapshot.empty) {
              this.loadData(querySnapshot);
            } else {
              this.empty = true;
            }
          });
      } else if (this.selected == "Faculty") {
        booksRef
          .orderBy("faculty")
          .startAt(searchValue)
          .endAt(searchValue + "\uf8ff")
          .onSnapshot((querySnapshot) => {
            if (!querySnapshot.empty) {
              this.loadData(querySnapshot);
            } else {
              this.empty = true;
            }
          });
      } else if (this.selected == "Department") {
        booksRef
          .orderBy("department")
          .startAt(searchValue)
          .endAt(searchValue + "\uf8ff")
          .onSnapshot((querySnapshot) => {
            if (!querySnapshot.empty) {
              this.loadData(querySnapshot);
            } else {
              this.empty = true;
            }
          });
      } else if (this.selected == "Level") {
        booksRef
          .orderBy("level")
          .startAt(searchValue)
          .endAt(searchValue + "\uf8ff")
          .onSnapshot((querySnapshot) => {
            if (!querySnapshot.empty) {
              this.loadData(querySnapshot);
            } else {
              this.empty = true;
            }
          });
      }

      this.loading = false;
    },
  },

  created() {
    this.init();
  },
};
</script>

<style scoped>
.input {
  width: 60% !important;
  background: #ffffff7a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0px 9px;
  margin-right: 3rem;
  font-weight: 550;
}
.img-fluid {
  height: 20px;
  width: 20px;
}
.form-control {
  width: 60% !important;
  background: #ffffff7a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0px 9px;
  margin-right: 3rem;
  font-weight: 550;
}
@media (max-width: 1000px) {
  .form-control {
    width: 80% !important;
    background: #ffffff7a;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0px 9px;
    /* margin-right: 3rem; */
  }

  .mt-3 {
    margin-top: 0rem !important;
  }
}
.btn-outline-success {
  color: #fff !important;
}
.soft {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff !important;
  border-color: #1a6b2d;
  /* background: #488b89; */
  width: 9rem;
  height: 2.4rem;
  border-radius: 0.2rem;
  font-weight: 600;
}
.primary,
.btn-secondary {
  background-color: #00276f !important;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff !important;
  width: 9rem;
  height: 2.4rem;
  border-radius: 0.2rem;
  font-weight: 600;
  border: none;
}
.primary:hover,
.btn-secondary:hover {
  background: #00276f94 !important;
  border-color: #00276f94 !important;
}

.spinner {
  margin: 10px auto 0;
  width: 70px;
  text-align: center;
}
a {
  color: #00276f !important;
  cursor: pointer;
}
.tex-primary {
  color: #00276f !important;
  font-weight: 600;
  font-size: 2.5rem;
}
.load {
  background-color: #00276f !important;
  height: 3rem !important;
  width: 3rem !important;
}
</style>
