
# BycatchWatch

BycatchWatch is a real-time bycatch monitoring and mitigation system designed to help BC fisheries reduce their environmental impact. This project provides a software-first solution that allows fishers to track, monitor, and reduce bycatch in real-time.

## Project Overview

BycatchWatch offers the following features:

- Bycatch logging and tracking
- Real-time bycatch reduction recommendations
- Data visualization for bycatch trends
- Compliance reporting for regulatory bodies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when changes are made.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production and optimizes it for best performance. The build is minified, and filenames include the hashes.

### `npm run eject`

Note: This is a one-way operation. Once ejected, you can't go back! This gives full control over the configuration.

## Learn More

- To learn more about Create React App, refer to the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- For more information on React, check the [React documentation](https://reactjs.org/).

## Deployment

BycatchWatch uses GitHub Actions for CI/CD, and the frontend is deployed on GitHub Pages.

### How to Deploy

1. Build the app using `npm run build`.
2. Deploy the production build to GitHub Pages using GitHub Actions.

## Technical Stack

- **Frontend**: React, Bootstrap, React-Leaflet (for maps)
- **Backend**: Node.js, Express.js (for future API development)
- **Database**: Firebase Firestore
- **Real-Time Alerts**: Firebase Cloud Messaging
- **Deployment**: GitHub Pages (frontend), Heroku (backend)

## Features

1. **Real-Time Bycatch Logging**: Fishers can log bycatch and track species data in real time.
2. **Bycatch Reduction Recommendations**: Provides fishers with real-time recommendations on modifying techniques or fishing locations based on bycatch risks.
3. **Heatmaps**: Displays heatmaps of different sea life species during different parts of the year.

## Future Development

- API integrations for marine life data from sources like NASA, NOAA, and AquaMaps.
- Backend for more advanced bycatch predictions using AI/ML.

---

BycatchWatch is designed to support fisheries in complying with environmental regulations and improving sustainability practices.
