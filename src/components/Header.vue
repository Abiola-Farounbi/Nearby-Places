<template>
    <header class=' py-6  h-full  px-6  bg-purple-900 '>
        <div class='flex mb-4'>
          <h1 class='text-3xl sm:text-xl font-bold text-pink-500 mr-2'> Nearby Places </h1>
          <i class="fas fa-map-marker-alt text-3xl sm:text-xl font-bold text-pink-500 " ></i>
        </div>
        <p class='  text-white'> Find Places Close to You !!! </p>
    </header>
</template>

<script>
export default {
  name: "Header",

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rye&display=swap');

header{
 font-family: 'Rye', cursive;
}

</style>
