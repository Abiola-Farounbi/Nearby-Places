<template>


  <div class='bg-white rounded-md border-double border-4 p-2 border-pink-500 my-4'
  v-for="venue in venues"
      :key="venue.id"
  >
    <li class='list-none  my-2'>
      <i class="fas fa-map-marker-alt text-3xl sm:text-xl font-bold text-black " ></i>
    {{venue.name}}
    </li> 
    <li class='list-none  my-2'>
      {{venue.categories[0].name}}
    </li>
    <p>
      {{venue.location.address}},{{venue.location.city}},{{venue.location.state}}
    </p>
    
  </div>
 
 
 
 


  
</template>

<script>
export default {
  name: 'DisplayVenues',
  props:['venues'],
   data () {
    return {
    // Handling state oooh
    //    statePlaces: this.$store.state.places
     }
   },

}
</script>