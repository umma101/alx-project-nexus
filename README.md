MovieBuddy — Movie Recommendation App
MovieBuddy is a React-based web application that helps users discover popular, trending, and top-picked movies with rich details including posters, release years, descriptions, and embedded trailers. It also features a genre filter and a watchlist to keep track of movies you want to watch.

Features
Fetches real-time movie data from the TMDB API

Displays movie posters, titles, release years, and descriptions

Clickable movie cards open a modal with embedded YouTube trailers

Search functionality to find movies by title

Genre filter panel for easy browsing

Watchlist section with customizable columns

Responsive design optimized for desktop and mobile

Social media footer with links

Demo
(Add your deployed demo URL here once available)

Getting Started
Prerequisites
Node.js (v14 or later recommended)

npm or yarn

Installation
Clone this repository:

bash
Copy
Edit
git clone https://github.com/yourusername/moviebuddy.git
cd moviebuddy
Install dependencies:

bash
Copy
Edit
npm install
# or
yarn install
Obtain a TMDB API key by signing up at TMDB API.

Create a .env file in the project root and add your API key:

ini
Copy
Edit
VITE_TMDB_API_KEY=your_api_key_here
(If you’re not using Vite, adapt accordingly.)

Running the App Locally
Start the development server with:

bash
Copy
Edit
npm run dev
# or
yarn dev
The app will run on http://localhost:5173. To access it on other devices in your network, run:

bash
Copy
Edit
npm run dev -- --host
and use your machine’s local IP address with port 5173.

Building for Production
To build the optimized production bundle:

bash
Copy
Edit
npm run build
# or
yarn build
You can then deploy the contents of the dist or build folder to your preferred hosting platform.

Project Structure
src/ — React components and app code

public/ — Static assets

App.jsx — Main app component with movie fetching, UI, and modal logic

Technologies Used
React.js with Vite

TMDB API for movie data and trailers

CSS-in-JS styling

Fetch API for network requests

Future Enhancements
User authentication for personalized watchlists

Advanced search with suggestions

User ratings and reviews

Integration with streaming platforms for “Watch Now”

UI/UX improvements with animations

Offline support and caching

Dark/light mode toggle

License
This project is licensed under the MIT License.