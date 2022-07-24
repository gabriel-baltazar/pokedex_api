<template>
  <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-5">
    <div v-for="(pokemon,key) in pokemons" :key="key" class="flex justify-center">
      <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://1.bp.blogspot.com/-UGEVmdvMDck/YNIcC3nE-OI/AAAAAAAATkk/Rc_-8wIDwUYPqacBr7WpcnGk3Y1TCkwUQCLcBGAsYHQ/s776/gengar.png" alt="" />
        <div class="p-6 flex flex-col justify-start">
          <h5 class="text-gray-900 text-xl font-medium mb-2">{{pokemon.name}}</h5>
          <p class="text-gray-700 text-base mb-4">
            {{pokemon.url}}
          </p>
          <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import api from "./services/api";
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const pokemons = ref([]);

    const fetchPokemons = () =>
      api
        .get("/pokemons?limit=10")
        .then((response) => (pokemons.value = response.data.results));
    onMounted(fetchPokemons);

    const promises = pokemons.value.map((pokemon) =>
      api.get(pokemon.url).then((response) => response.data)
    );

    return { pokemons };
  },
});
</script>

<style scoped>
</style>
