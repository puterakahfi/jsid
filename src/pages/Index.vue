<template>
  <Layout>
    <div class="columns">
      <div class="column is-3 has-margin-left-10 has-margin-right-10 is-hidden-mobile">
        <RandomDev data-aos="zoom-in" />
        <h1 class="title is-5 has-margin-top-50 has-text-dark">Komunitas</h1>
        <Community />
      </div>
      <div class="column is-8" data-aos="fade-down">
        <div class="has-margin-top-5">
          <h1 class="title is-1 has-margin-top-5">Awesome Javascript Developer Indonesia</h1>
          <h1 class="subtitle is-5 has-text-grey-light has-margin-bottom-20">
            Daftar developer/programmer javascript terkece asal Indonesia, data developer di ambil dari repository induk
            <a
              target="_blank"
              href="https://github.com/mazipan/awesome-js-dev-id"
            >https://github.com/mazipan/awesome-js-dev-id</a>
          </h1>
          <b-field>
            <b-input
              placeholder=" masukkan nama untuk melakukan pencarian "
              type="search"
              icon-pack="fas"
              icon="search"
              v-model="search"
            ></b-input>
          </b-field>

          <Devs class :devs="filteredDev" />

          <p class="title is-6 has-margin-top-10 has-text-grey-light	"> {{$page.devs.edges.length }} developer </p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </Layout>
</template>


<page-query>
{
  devs: allDevs (filter: { published: { eq: true }},sortBy: "name", order: ASC){
    edges {
      node {
        id
        name
        company
        description
        profile_image
        tags
        skills
        links{
          label
          url
        }
      }
    }
  }
}
</page-query>

<script>
import RandomDev from "~/components/RandomDev";
import Community from "~/components/Community";
import Devs from "~/components/Devs";
import Footer from "~/components/organisms/Footer";
import SearchInput from "~/components/molecules/SearchInput";
export default {
  data() {
    return {
      search: "",
      devs: []
    };
  },
  components: {
    Devs,
    RandomDev,
    Community,
    Footer,
    SearchInput
  },
  mounted() {
    this.devs = this.$page.devs.edges;
  },
  computed: {
    filteredDev: function() {
      const newArr = [...this.devs];

      newArr.map(el => {
        return (el.node.skills = el.node.skills.toString().split(","));
      });

      let newData = this.devs.filter(item => {
        return (
          item.node.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });

      if (this.search.length > 0 && this.search.toString().charAt(0) === "#") {
        newData = this.devs.filter(item => {
          return (
            item.node.skills.join(",").indexOf(this.search.toLowerCase()) > -1
          );
        });
      }

      return newData;
    }
  },
  methods: {
    updateValue: function(event) {
      alert(event);
    }
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.sticky {
  position: sticky;
  top: 0;
}

.scrolling {
  float: right;
  width: 50%;
  padding: 20px;
}

.random-dev {
  background-color: #fff;
  box-shadow: 0 0 25px rgba(103, 119, 239, 0.1);
  border-radius: 5px;
  box-shadow: none;
  border: solid 1px #f5f5f5;
}
</style>
