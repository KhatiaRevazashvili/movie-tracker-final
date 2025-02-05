Description

The Movie Tracker App is a React-based web application that allows users to browse trending movies, search for specific movies, and manage a watchlist.
The app fetches data from the OMDb API and provides an intuitive user interface for movie enthusiasts.

Features

Browse trending movies

Search for movies by title

View detailed movie information

Add movies to a watchlist

Remove movies from the watchlist

Responsive design

Technologies Used

React.js

React Router

Axios for API requests

CSS for styling

LocalStorage for watchlist persistence

Installation

Clone the repository:

git clone https://github.com/your-username/movie-tracker-app.git

Navigate into the project folder:

cd movie-tracker-app

Install dependencies:

npm install

Running the Project

To start the development server, run:

npm start

This will launch the app at http://localhost:3000/.

Environment Variables

Create a .env file in the root directory and add your API key:

REACT_APP_OMDB_API_KEY=1b457a18



Project Structure

movie-tracker-app/
│── public/
│── src/
│   ├── components/
│   │   ├── Navbar.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Search.js
│   │   ├── Watchlist.js
│   ├── styles/
│   │   ├── Home.css
│   │   ├── Search.css
│   │   ├── Watchlist.css
│   ├── App.js
│   ├── index.js
│   ├── MovieDetails.js
│── .env
│── package.json
│── README.md

API Usage

The app fetches movie data using the OMDb API:
http://www.omdbapi.com/?s=movie&apikey=1b457a18
