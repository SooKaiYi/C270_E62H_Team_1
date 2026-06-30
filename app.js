const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

const bikeStations = [
  // Central Area
  { name: "Orchard", lat: 1.3048, lng: 103.8318 },
  { name: "Marina Bay", lat: 1.2823, lng: 103.8585 },
  { name: "Bugis", lat: 1.3009, lng: 103.8558 },
  { name: "City Hall", lat: 1.2930, lng: 103.8530 },
  { name: "Raffles Place", lat: 1.2855, lng: 103.8515 },
  { name: "Dhoby Ghaut", lat: 1.2987, lng: 103.8447 },
  { name: "Newton", lat: 1.3117, lng: 103.8378 },
  { name: "Novena", lat: 1.3203, lng: 103.8433 },
  
  // East Area
  { name: "Tampines", lat: 1.3521, lng: 103.9442 },
  { name: "Bedok", lat: 1.3245, lng: 103.9283 },
  { name: "Pasir Ris", lat: 1.3787, lng: 103.9730 },
  { name: "Punggol", lat: 1.4047, lng: 103.9090 },
  { name: "Changi", lat: 1.3521, lng: 104.0090 },
  { name: "Geylang", lat: 1.3117, lng: 103.8773 },
  { name: "Kallang", lat: 1.3070, lng: 103.8652 },
  
  // West Area
  { name: "Clementi", lat: 1.3364, lng: 103.7619 },
  { name: "Jurong East", lat: 1.3392, lng: 103.7414 },
  { name: "Jurong", lat: 1.3453, lng: 103.7089 },
  { name: "Boon Lay", lat: 1.3415, lng: 103.7057 },
  { name: "Pioneer", lat: 1.3395, lng: 103.6986 },
  { name: "Choa Chu Kang", lat: 1.3860, lng: 103.7446 },
  { name: "Bukit Batok", lat: 1.3476, lng: 103.7489 },
  { name: "Bukit Timah", lat: 1.3521, lng: 103.7757 },
  
  // North Area
  { name: "Ang Mo Kio", lat: 1.3695, lng: 103.8453 },
  { name: "Yishun", lat: 1.4290, lng: 103.8355 },
  { name: "Woodlands", lat: 1.4381, lng: 103.8224 },
  { name: "Hougang", lat: 1.3574, lng: 103.8932 },
  { name: "Toa Payoh", lat: 1.3321, lng: 103.8539 },
  
  // Bukit Merah (Central)
  { name: "Bukit Merah", lat: 1.2902, lng: 103.8189 }
];

app.get("/", (req, res) => {
  res.render("index", { bikeStations });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


