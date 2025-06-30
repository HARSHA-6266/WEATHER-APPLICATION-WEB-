<h2>🌦️ JavaScript Weather Application</h2>

This is a simple, lightweight weather forecast web application that fetches **real-time weather data** for any city using the <strong>OpenWeatherMap API</strong>.

It displays the following information:
<ul>
  <li><strong>Temperature</strong> in Celsius</li>
  <li><strong>Humidity</strong> percentage</li>
  <li><strong>Wind speed</strong> in km/h</li>
  <li><strong>Dynamic weather icon</strong> based on weather condition</li>
</ul>

---

<h3>🔗 API Used</h3>

We use the <a href="https://openweathermap.org/current" target="_blank"><strong>OpenWeatherMap</strong></a> API, which returns weather details in JSON format.

API endpoint:

<code>https://api.openweathermap.org/data/2.5/weather?&units=metric&q=</code><br>

We append:
<ul>
  <li><code>city</code> name (from input field)</li>
  <li><code>appid</code> (API key)</li>
</ul>

The final request looks like:

<pre>
https://api.openweathermap.org/data/2.5/weather?&units=metric&q=rajahmundry&appid=fc9f33587d218545f233988966ed103d
</pre>

---

<h3>💻 Core Logic (JavaScript)</h3>

The script handles the following:

<ul>
  <li>Grabs input from user (city name)</li>
  <li>Makes <strong>asynchronous API call</strong> using <code>fetch()</code></li>
  <li>Parses the returned JSON</li>
  <li>Updates DOM elements with:
    <ul>
      <li>City name</li>
      <li>Temperature (rounded to integer)</li>
      <li>Humidity</li>
      <li>Wind speed</li>
    </ul>
  </li>
  <li>Sets <strong>weather icon</strong> dynamically based on <code>data.weather[0].main</code> value</li>
</ul>

<br>
<h4>🧠 Weather Condition to Image Mapping:</h4>

<pre>
if "Clouds" → clouds.png  
if "Clear" → clear.png  
if "Drizzle" → drizzle.png  
if "Rain" → rain.png  
if "Mist" → mist.png  
</pre>

All icons are fetched from the local folder: <code>weather_images\</code>

---

<h3>📦 HTML + CSS Structure</h3>

The webpage is built using a **card-style layout** inside a centered container. Input search is provided with a button containing a search icon.

<ul>
  <li><code>.search input</code> → City name input</li>
  <li><code>.search button</code> → Triggers search</li>
  <li><code>.weather-icon</code> → Image updated dynamically</li>
  <li><code>.city</code>, <code>.temp</code>, <code>.humidity</code>, <code>.wind</code> → Updated with live data</li>
</ul>

Font Awesome is used for icons and aesthetic enhancement.

The entire app is fully responsive and minimalistic.

---

<h3>⚙️ Event Handling</h3>

The JavaScript attaches an event listener to the search button:

<pre>
searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
});
</pre>

When clicked, it passes the city name to <code>checkweather()</code> function, which handles the fetch logic and UI update.

---

<h3>🛠 Technologies Used</h3>

<ul>
  <li><strong>HTML5</strong> - for markup</li>
  <li><strong>CSS3</strong> - for styling and layout</li>
  <li><strong>JavaScript (ES6+)</strong> - for logic, API handling, DOM manipulation</li>
  <li><strong>OpenWeatherMap API</strong> - for real-time weather data</li>
  <li><strong>Font Awesome</strong> - for icons</li>
</ul>

---

<h3>🧪 Testing</h3>

Tested with different city names including:
<ul>
  <li>rajahmundry</li>
  <li>hyderabad</li>
  <li>mumbai</li>
  <li>tokyo</li>
  <li>new york</li>
</ul>

It dynamically adapts to real-time values and icons update accordingly.

---

<h3>📁 Folder Structure</h3>

<ul>
  <li><code>index.html</code> - Main webpage</li>
  <li><code>weather.css</code> - Stylesheet</li>
  <li><code>script.js</code> - JavaScript logic</li>
  <li><code>weather_images/</code> - Folder with:
    <ul>
      <li>clear.png</li>
      <li>clouds.png</li>
      <li>drizzle.png</li>
      <li>rain.png</li>
      <li>mist.png</li>
      <li>search.png</li>
      <li>humidity.png</li>
      <li>wind.png</li>
    </ul>
  </li>
</ul>

---

<h3>🔐 API Key Note</h3>

The app uses a static API key:

<pre>
apikey = "fc9f33587d218545f233988966ed103d"
</pre>

💡 For production use, it's recommended to hide your key using:
<ul>
  <li>Environment variables</li>
  <li>Backend proxy service</li>
</ul>

---

<h3>✅ Final Remarks</h3>

This project is a **great beginner-level** introduction to:

<ul>
  <li>Using <strong>async/await</strong> in JavaScript</li>
  <li>Consuming <strong>REST APIs</strong></li>
  <li>Manipulating the DOM dynamically</li>
  <li>Building interactive UIs</li>
</ul>

With proper styling and real-time updates, it's a solid base for adding:
<ul>
  <li>Forecasts (hourly/daily)</li>
  <li>Geo-location support</li>
  <li>More themes and transitions</li>
</ul>
