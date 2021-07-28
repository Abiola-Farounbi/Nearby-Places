<template>
<section>

  <div class='profileBox'
  v-for="venue in venues"
      :key="venue.id"
  >
    <li>
{{venue.categories[0].name}}
    </li> 
    <button>
      {{venue.location.formattedAddress.join(" ")}}
    </button>
    
  </div>
 
 
 

 </section>
  
</template>

<script>
export default {
  name: 'Search',
  props:['venues'],
   data () {
    return {
     
     }
   },

}
</script>