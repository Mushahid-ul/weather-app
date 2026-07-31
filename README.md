# Weather App 🌤️

A simple, clean weather web application built with **HTML, CSS, and Vanilla JavaScript** — no frameworks, no backend. It fetches live weather data from [WeatherAPI.com](https://www.weatherapi.com/) and displays it in a responsive card.

## Live Demo

```
https://mushahid-ul.github.io/weather-app/
```


## Features

- Search for weather by city name
- Search by pressing **Enter** or clicking the **Search** button
- Displays:
  - City name
  - Temperature (°C)
  - Humidity (%)
  - Wind speed
  - UV index
- Loading message while data is being fetched
- Friendly error message when a city isn't found
- Prevents empty searches
- Fully responsive, modern design

## Tech Stack

- HTML5 (semantic markup)
- CSS3 (CSS variables, flexbox, media queries)
- Vanilla JavaScript (async/await, fetch API)
- [WeatherAPI.com](https://www.weatherapi.com/) for weather data

## Project Structure

```
weather-app/
│── index.html
│── style.css
│── script.js
└── README.md
```

## Setup Instructions

1. **Get a free API key**
   - Go to [weatherapi.com](https://www.weatherapi.com/)
   - Sign up for a free account
   - Copy your API key from the account dashboard

2. **Add your API key**
   - Open `script.js`
   - Find this line:
     ```javascript
     const API_KEY = "PASTE_YOUR_API_KEY_HERE";
     ```
   - Replace `PASTE_YOUR_API_KEY_HERE` with your actual key

3. **Run locally**
   - Simply open `index.html` in any web browser — no server or build tools required

## Deployment (GitHub Pages)

1. Push all files (`index.html`, `style.css`, `script.js`, `README.md`) to the `main` branch of this repository
2. Go to **Settings → Pages**
3. Under **Build and deployment**, set:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Click **Save**
5. Wait 1–5 minutes, then visit your live URL:
   ```
   https://Mushahid-ul.github.io/weather-app/
   ```

Since this is a frontend-only app, it works exactly the same on GitHub Pages as it does locally — all API calls happen directly in the browser.

## Updating the Site

1. Edit any file
2. Commit and push the changes to `main`
3. GitHub Pages automatically redeploys within a few minutes

## Troubleshooting

| Issue | Fix |
|---|---|
| 404 on GitHub Pages | Confirm `index.html` is in the repo root and Pages has finished deploying |
| Old content showing | Hard refresh the browser (Ctrl+Shift+R / Cmd+Shift+R) |
| Wrong branch selected | Check Settings → Pages: Branch should be `main`, Folder `/ (root)` |
| API key missing/invalid | Make sure `script.js` has your real key, not the placeholder |
| Mixed content error | Ensure the fetch URL uses `https://`, not `http://` |

## License

Free to use and modify for personal or educational purposes.

