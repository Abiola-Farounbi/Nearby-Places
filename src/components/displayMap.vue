<template>
<section>


   <div id="mapid">
  
   </div>

 </section>
  
</template>

<script>
import L from "leaflet";


export default {
  name: 'DisplayMap',
  props:['venues','centreLat','centreLng'],

   data () {
    return {
      map: null,
      center: [this.centreLat,this.centreLng],
     }
   },

 mounted(){
      this.map = L.map("mapid").setView(this.center, 13);
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 22,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWJpb2xhZXN0aGVyIiwiYSI6ImNrcjg2a2FvaDA1eHMzMHF4eHdtOWt4bTYifQ.YK2m2Oit9YM8TfWjsOGXNw'
}).addTo(this.map);    
     

      this.venues.forEach((venue) => {
      const lat = venue.location.lat;
      const lng = venue.location.lng;
      L.marker([lat,lng]).addTo(this.map).bindPopup(venue.name).openPopup();

    });

    },
    



}
</script>

<style scoped>

#mapid { height: 100vh; }
</style>