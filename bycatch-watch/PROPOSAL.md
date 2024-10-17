
# **BycatchWatch Proposal**

## **Project Overview**
BycatchWatch is a real-time bycatch monitoring and mitigation system designed to help BC fisheries reduce their environmental impact. Bycatch occurs when non-target species are unintentionally caught during fishing activities. This project aims to provide fishers with a software-first solution that uses real-time data, manual input, and smart recommendations to help minimize bycatch.

## **Business Requirements**
1. **Target Audience**: Fisheries in British Columbia, specifically commercial fishing operations that need to comply with environmental regulations and improve their sustainability practices.
2. **Primary Objective**: Develop a software platform to help fisheries track, monitor, and reduce bycatch in real-time, offering valuable recommendations based on historical data and real-time environmental factors.
3. **Key Features**:
   - Bycatch logging and tracking
   - Real-time bycatch reduction recommendations
   - Data visualization for bycatch trends
   - Compliance reporting for regulatory bodies
4. **Zero-Cost Start-up**: The initial version of the project will be developed and deployed at no cost using free tiers of cloud services and open-source technologies.

## **Technical Requirements**

### **1. Front-End (React)**
   - **Description**: The front-end will be a React application, providing an intuitive user interface for fisheries to log catch data, view recommendations, and monitor their bycatch statistics.
   - **Key Components**:
     - **Catch Logging Form**: A form for users to input catch and bycatch data manually.
     - **Dashboard**: Displays visualizations such as bycatch trends and fishing patterns using charts and maps.
   - **Technology Stack**:
     - **React**: Front-end framework for building the user interface.
     - **Bootstrap/Bootswatch**: For styling the application with a modern, eco-friendly design.
     - **Chart.js**: For rendering data visualizations in the dashboard (e.g., bycatch trends, fishing patterns).
     - **Axios**: For handling API calls to the back-end.
   - **Deployment**:
     - The front-end will be deployed using **GitHub Pages** for free, with continuous deployment configured through **GitHub Actions**.

### **2. Back-End (Express.js + Node.js)**
   - **Description**: The back-end will handle API requests from the front-end, process bycatch data, and integrate with external APIs for real-time environmental data.
   - **Key Components**:
     - **API Endpoints**:
       - `/api/log-catch`: To log bycatch and catch data.
       - `/api/recommendations`: To provide real-time bycatch mitigation recommendations based on data.
     - **Data Processing**: Real-time data processing to provide fishers with actionable recommendations based on their current location and other environmental factors.
   - **Technology Stack**:
     - **Node.js**: Server-side JavaScript runtime.
     - **Express.js**: Web framework for building RESTful APIs.
     - **Firebase**: For real-time database and authentication.
     - **Axios**: For making requests to external environmental APIs (e.g., NOAA, NASA MODIS).
   - **Deployment**:
     - The back-end will be deployed on **Heroku** or **Render** using their free tier.
     - Continuous integration will be set up using **GitHub Actions** for automated deployments upon code changes.

### **3. Database (Firebase/Firestore)**
   - **Description**: Firestore will be used to store catch, bycatch, and user data.
   - **Key Features**:
     - Store user data (login details, catch logs, and bycatch history).
     - Real-time database sync to update data instantly across all devices.
     - Structured to allow fast queries and scaling.
   - **Technology Stack**:
     - **Firebase**: For real-time, cloud-hosted NoSQL database and authentication.

### **4. Data Sources and API Integrations**
   - **NASA MODIS API**: Provides environmental data (e.g., ocean temperature, chlorophyll levels) to help predict bycatch risk.
   - **Public Fisheries APIs**: Sources for marine species data, fish populations, and migration patterns.
   - **Custom Recommendations API**: Built using historical bycatch data and AI to offer real-time recommendations.

### **5. Real-Time Alerts and Notifications**
   - **Description**: The system will send real-time alerts to fishers when entering high bycatch-risk areas or catching non-target species.
   - **Technology Stack**:
     - **Firebase Cloud Messaging (FCM)**: For sending notifications to the users.
     - **SendGrid or EmailJS**: For email-based notifications.

### **6. DevOps and Continuous Deployment**
   - **GitHub Actions**:
     - Set up CI/CD pipelines to automate testing, building, and deploying the front-end to GitHub Pages and the back-end to Heroku.
     - Trigger automatic deployment on push to the `main` branch and manual deployment via `workflow_dispatch`.
   - **Heroku or Render**:
     - Free-tier back-end hosting with easy integration for deploying Node.js applications.

## **Deployment Strategy**
1. **Frontend**: Deployed on **GitHub Pages** via **GitHub Actions** using the free `gh-pages` branch for static hosting.
2. **Backend**: Deployed to **Heroku** or **Render** using their free tiers, with an automated deployment pipeline through GitHub Actions.
3. **Database**: **Firebase Firestore** for storing catch logs and bycatch data, offering real-time synchronization with low latency.

## **Project Milestones**
1. **Phase 1: Front-End Development**
   - Set up the initial React app with Bootstrap/Bootswatch styling.
   - Implement the CatchForm component and integrate it with the API to log catch and bycatch data.
   - Develop the Dashboard with basic data visualization.
   - Ensure the front-end is fully deployed to GitHub Pages.
   
2. **Phase 2: Back-End Development**
   - Set up the Express server with API endpoints for logging catch data and providing recommendations.
   - Integrate with Firebase for storing data and providing real-time updates.
   - Deploy the back-end to Heroku or Render.

3. **Phase 3: API Integrations and Recommendations**
   - Integrate with environmental data APIs to pull real-time information for bycatch recommendations.
   - Build the recommendation engine to offer real-time fishing location and technique suggestions.

4. **Phase 4: Testing and Pilot**
   - Conduct end-to-end testing of the system with a small group of fisheries to validate functionality and usability.
   - Optimize the recommendation engine based on pilot feedback.

5. **Phase 5: Full Deployment and Scaling**
   - Finalize all components and prepare the platform for full deployment.
   - Implement user onboarding and scale the application to accommodate multiple users.

## **Conclusion**
The **BycatchWatch** project aims to provide BC fisheries with a robust, zero-cost tool for managing and reducing bycatch through a software-first solution that integrates real-time data, intelligent recommendations, and compliance tracking. With the use of modern technologies, free cloud services, and continuous deployment pipelines, BycatchWatch will be both scalable and cost-effective for future growth.
