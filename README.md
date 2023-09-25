# My-Weather-App

This Weather App is a simple web application that provides real-time weather information for a user-specified location. It is built using HTML, CSS, and JavaScript to offer a user-friendly and visually appealing experience.

## Features

- **Location-based Weather:** The app allows users to input a location (city or coordinates), and it fetches and displays the current weather conditions for that location.

- **Weather Details:** It provides detailed weather information, including temperature, humidity, wind speed, and weather description.

- **Visual Representation:** The app includes icons and images to visually represent the weather conditions, making it easier for users to understand the current weather at a glance.

- **Responsive Design:** The app is designed to be responsive and works seamlessly on various screen sizes, including desktops, tablets, and mobile devices.

## Technologies Used

- **HTML:** The app's structure and content are created using HTML, including input forms and placeholders for weather data.

- **CSS:** CSS styles are applied to make the app visually appealing and responsive, ensuring a great user experience.

- **JavaScript:** JavaScript is used to fetch weather data from a weather API, parse the JSON response, and dynamically update the content on the page without requiring a full page reload.

## How to Use

1. **Access the Live Website:**
   Visit the live Weather App website by clicking on the following link: [Weather App](https://my-weather-app-dun-seven.vercel.app/).

2. **Input Location:**
   Enter the name of a city in the input field.

3. **Click "Get Weather":**
   Click the "Get Weather" button to fetch and display the current weather information for the specified location.

4. **View Weather Details:**
   The app will display weather details, including temperature, humidity, wind speed, and a weather description, along with icons representing the current conditions.

## API Integration

This app uses a weather API to fetch weather data. You will need to obtain an API key from a weather data provider (e.g., OpenWeatherMap, Weatherstack, or any other provider of your choice) and replace the placeholder API key in the JavaScript code with your actual API key.

```javascript
const apiKey = 'YOUR_OWN_API_KEY_HERE';
