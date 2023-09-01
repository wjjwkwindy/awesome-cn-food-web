<script setup>
import { about, setAbout, search, setSearch, current, setCurrent } from '@/utils/store';
import Map from './components/Map.vue';
import Header from './components/Header.vue';
import About from './components/About.vue';
import Search from './components/Search.vue';
import Detail from './components/Detail.vue';
import Model from './components/Model.vue';
</script>

<template>
  <div class="h-full">
    <div class="h-full grid" style="grid-template-rows: max-content auto">
      <Header />
      <Map />
    </div>

    <Model :value="about" :setValue="() => setAbout(false)">
      <About />
    </Model>

    <Model :value="search" :setValue="() => setSearch(false)">
      <Search />
    </Model>

    <Model :value="!!current" :setValue="() => setCurrent(null)">
      <Detail v-if="current" :shop="current" />
    </Model>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
