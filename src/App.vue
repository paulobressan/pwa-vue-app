<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li v-for="(link, index) in links" :key="index" class="nav-item">
            <router-link class="nav-link" :to="link.to">{{ link.name }}</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  padding: 0;
}
li {
  padding: 5px 15px 5px 0;
}
li a {
  text-decoration: none;
  color: black;
}
li a:hover {
  color: #404040;
}
</style>

<script>
export default {
  data: () => ({
    links: [
      {
        name: "Home",
        to: "/"
      },
      {
        name: "Page 1",
        to: "/page-1"
      },
      {
        name: "Bad Link",
        to: "/random-bad-url"
      }
    ]
  })
};
</script>