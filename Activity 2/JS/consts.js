<html>
<body>

<h2>JavaScript const</h2>

<p>Declaring a constant array does NOT make the elements unchangeble:</p>

<p id="demo"></p>

<script>
// Create an Array:
const cars = ["Saab", "Volvo", "BMW"];

// Change an element:
cars[0] = "Toyota";

// Add an element:
cars.push("Audi");

// Display the Array:
document.getElementById("demo").innerHTML = cars; 
</script>

</body>
</html>
