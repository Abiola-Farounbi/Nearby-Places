<template>
  <Header></Header>
  <main class=" grid grid-cols-2 gap-4 sm:block">
     
    <!-- Venues -->
   <section class='my-12 mx-4 '>
     <!-- Form for data -->
    <div>
    <form  @submit.prevent="submit">
    <div class='rounded-md shadow-xl mb-8 px-4 py-4'>
     <div class='my-4'>
        <label for='location'> Your Current Location </label>
       <div class="flex  ">
          <input id='location' type="text" placeholder="Enter your address" v-model="coordinates" 
          class='border-purple-900
          p-2
          rounded-l-md
          text-black
          border
          w-full
          '
          />
          <button
          class='border-none rounded-r-md bg-purple-900 py-2 px-4 text-white text-xl'>
             <i class="fas fa-compass"></i>
          </button>
      </div>
     </div>
      <div class='my-4'>
             <label for='type'> Select The Place Type </label>
             <br>
            <select v-model="type" id='type'  class='border-purple-900
          p-2
          rounded
          text-black
          border
          w-full
          '>
              <option value="restaurant"> Food </option>
              <option value="Arts & Entertainment">Arts & Entertainment</option>
                <option value="Post Office">    Post Office</option>
                 <option value="School">   School </option>
                 <option value="Bank">Bank</option>
                <option value="Clothing Store"> Clothing Store</option>
                <option value="Market">  Market</option>
                <option value="Hotel">  Hotel</option>
                <option value="Bus Station">      Bus Station </option>
                <option value="Travel & Transport">   Travel & Transport </option>
      
              
            </select>
      </div>
      <div class=" my-4 flex justify-end">
        <button class='border-none rounded-md bg-purple-900 p-2 text-white text-xl'
         @click="findCloseBuyButtonPressed">Find CloseBuy</button>
      </div>
    </div>
  </form>
    </div>

     <!-- Displaying Venues -->
    <div class=' px-4 py-4 '>

      <!--Load  -->
   <div  v-if="isLoading"  class='  flex item-cnter'>
     <img src='./assets/loading.gif' alt="Loading gif">
    </div>
    <display-venues :venues ='places'/>
  <div v-if='isVenueEmpty' class='my-12 mx-4 font-bold text-pink-500 text-xl text-center'>
    No Venue Found
  </div>
  <div v-if='isError' class='bg-white rounded-md border-double border-4 p-2 border-pink-500 text-red-700 text-xl text-center'>
      {{erroredMessage}}
  </div>
    </div>

  </section>

<!-- Maps -->
  <section>
    <div v-if='!isVenueEmpty' class='my-12 mx-4'>
      <display-map :venues="places" :centreLat="lat" :centreLng="lng"/>
  </div>
  <div  v-else class='my-12 mx-4 font-bold text-pink-500 text-xl text-center'>
     No Location Found !!!
  </div>
  </section>

  
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import DisplayVenues from './components/displayVenues.vue';
import DisplayMap from './components/displayMap.vue';
import axios from "axios";


export default {
  name: "App",
  components: {
    Header,
    DisplayVenues,
    DisplayMap
  },
   metaInfo: {
      title: ' Nearby Places',
      description:'Find Places Close to You !!!'
    },
    data() {
    return {
      lat: 0,
      lng: 0,
      type: "",
      places: [],
      parameters : {
       client_id: process.env.VUE_APP_CLIENT_ID,
       client_secret:process.env.VUE_APP_CLIENT_SECRET,
      //  this is required for foursquare api calls 
       v:'20210627',
       limit:'5',
       radius:'1000',       
       erroredMessage: " "

     }
    };
},
computed: {
    coordinates() {
      return `${this.lat}, ${this.lng}`;
    },
    isVenueEmpty() {
      return this.places.length == 0;
    },
    isLoading(){
      return this.$store.state.isLoading
    },
    isError(){
        return this.$store.state.isError
    }
},
created(){
  navigator.geolocation.getCurrentPosition(
      position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      },
      error => {
        console.log(error.message);
      }
    );
},
methods: {
    findCloseBuyButtonPressed() {
          this.$store.state.isLoading = true
        const endpoint = `https://api.foursquare.com/v2/venues/search?client_id=${this.parameters.client_id}&client_secret=${this.parameters.client_secret}&v=${this.parameters.v} &near=${this.coordinates}&query=${this.type}&limit=${this.parameters.limit}&radius=${this.parameters.radius}`
        axios.get(endpoint)
        .then((data) => {
            this.places = data.data.response.venues 
            this.$store.state.isLoading = false
          })
         
          .catch(error => {
            this.$store.state.isLoading = false
            this.$store.state.isError=true
            this.erroredMessage = error.message
          })
    },
}
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

#app {
  margin:0px;
  padding:0px;
  font-family: 'Roboto', sans-serif;
}

</style>
