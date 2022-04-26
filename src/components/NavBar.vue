<template>
  <div class="m-auto fixed z-20 top-0 left-0 right-0 shadow-sm">
    <nav class="flex items-center justify-between lg:justify-evenly">
      <div class="brand mr-4 ml-4">
        <router-link to="/">
          <h1 class="brand__name text-3xl">AEJ</h1>
        </router-link>
      </div>
      <ul :class="navIsSelected ? 'show' : ''" class="">
        <li class="mr-10"><router-link to="/">Home</router-link></li>
        <li class="mr-10"><router-link to="/event">Event</router-link></li>
        <li class="mr-10"><router-link to="/academy">Academy</router-link></li>
        <li class="mr-10"><a href="#">Blog</a></li>
        <li class="mr-10"><a href="#">Career</a></li>
        <li @click="toggleDropdown1()">
          <a href="#" role="button"
            >Partner with us<i class="fas fa-angle-down"></i
          ></a>
          <ul v-if="dropdownIsSelected1" class="row dropdown text-center">
            <li class="col-md-3">
              <a
                href="https://wa.me/6281298292323?text=I'm%20interested%20for%20partner%20with%20AEJ"
                >Contact Us</a
              >
            </li>
          </ul>
        </li>
      </ul>
      <label id="icon" @click="navSelected">
        <i :class="navIsSelected ? 'fas fa-times' : 'fas fa-bars'"></i>
      </label>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoLink:
        "https://lelogama.go-jek.com/service_icon_text/gojek-logo_normal.svg",
      navIsSelected: false,
      dropdownIsSelected1: false,
      dropdownIsSelected2: false,
    };
  },
  // computed: {
  //     navClasses() {

  //     }
  // },
  methods: {
    navSelected() {
      this.navIsSelected = !this.navIsSelected;
    },
    // eslint-disable-next-line
    toggleDropdown1() {
      this.dropdownIsSelected1 = !this.dropdownIsSelected1;
    },
    toggleDropdown2() {
      this.dropdownIsSelected2 = !this.dropdownIsSelected2;
    },
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  list-style-type: none;
  text-decoration: none;
}

nav {
  /* height: 70px; */
  /* width: 100%; */
  /* display: flex; */
  /* justify-content: space-between; */
  background: white;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20; */
  /* justify-content: space-between; */
  /* box-shadow: 0 2px 6px 0 rgb(0 0 0 / 20%); */
}

.brand {
  /* display: inline-block;
    vertical-align: middle; */
  /* width: 10%; */
}

.brand__name {
  /* float: left; */
  /* margin-right: 220px; */
  /* padding: 25px 0; */
  /* text-align: left; */
  /* padding: 0 0 0 50%; */
  /* line-height: 80px; */
  font-weight: 700;
  color: black;
}
/* 
.fixed {

  background:white;
} */

nav ul {
  /* display: inline-block; */
  /* margin-right: 20px; */
  /* text-align: right; */
  /* width: calc(100% - 72px); */
  /* width: 90%; */
  /* vertical-align: middle; */
}

nav li {
  display: inline-block;
  margin-left: 2rem;
  line-height: 80px;
}

nav li:last-of-type {
  margin-right: 5px;
}

nav a {
  color: black;
  font-weight: 550;
  font-size: 18px;
}

a.active,
a:hover {
  color: green;
  transition: 0.5s;
}

nav #icon {
  color: green;
  font-size: 30px;
  line-height: 80px;
  float: right;
  margin-right: 40px;
  cursor: pointer;
  display: none;
}

.dropdown {
  /* max-width: unset; */
  width: 100%;
  padding: 0;
  position: fixed;
  /* visibility: hidden; */
  /* opacity: 0; */
  background-color: #f7f7f7;
  top: 70px;
  z-index: 200;
  left: 0;
  right: 0;
  list-style-type: none;
}

@media (max-width: 1048px) {
  .logo {
    padding-left: 60px;
  }
  /* nav ul {
        margin-right: 20px;
    } */
  nav a {
    font-size: 17px;
  }
}

@media (max-width: 720px) {
  nav {
    text-align: left;
  }

  nav #icon {
    display: block;
  }
  nav ul {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #2f3640;
    top: 80px;
    left: -100%;
    text-align: center;
    transition: all 0.5s;
  }
  nav li {
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }
  nav a {
    color: white;
    font-size: 20px;
  }
  a.active,
  a:hover {
    border: none;
    color: green;
  }
  nav ul.show {
    left: 0;
  }
}
</style>