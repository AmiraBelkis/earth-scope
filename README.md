# Earth Scope

Earth Scope is an interactive platform that allows users to explore natural events such as wildfires, storms, and volcanic activity on a map. This project was created as part of a coding challenge to demonstrate proficiency in full-stack web development, showcasing skills in handling real-time data, integrating complex APIs, and creating interactive user experiences.

## Table of Contents
- Features
- Technologies Used
- Setup
- Usage
- Future Enhancements

## Features
- **Interactive Map**: View natural events on a dynamic map interface.
- **Date Filtering**: Filter events by their date of occurrence to see historical data or recent activities.
- **Region Filtering**: Narrow down events by specific regions to focus on areas of interest.
- **Category Filtering**: Explore events by categories such as wildfires, storms, and more.
- **Source Filtering**: Identify events based on their data sources.
- **Event Status**: Check the current status of events, whether they are open or closed.
- **Responsive Design**: The application is fully responsive and can be used on mobile devices through a web browser.

## Technologies Used
- **React**: For building the user interface.
- **Node.js & Express**: For server-side logic and API integration.
- **Leaflet**: For rendering and interacting with the map.
- **Jest & Supertest**: For creating integration tests.
- **Iconify & Bootstrap**: For UI enhancements.

Sure, here's a cleaned-up version of the setup instructions:

## Setup
1. **Install Node.js**: 
    Ensure you have Node.js version `10.5.0` installed. You can download it from the official Node.js website.

2. **Clone the repository**:
    ```bash
    git clone https://github.com/AmiraBelkis/earth-scope.git
    cd earth-scope
    ```

3. **Install server dependencies**:
    ```bash
    cd backend
    npm install
    ```

4. **Install client dependencies**:
    ```bash
    cd ../frontend
    npm install
    ```

5. **Get your NASA API Key**:
    Visit [NASA API](https://api.nasa.gov/) and go to the "Generate API Key" section. Fill out the form, and an email with the generated key will be sent to your email address.

6. **Set up environment variables**:
    Rename the `.env.example` files in both `backend` and `frontend` directories to `.env` and add your NASA EONET API key:
    ```env
    NASA_API_KEY=your_nasa_api_key
    ```

7. **Start the server**:
    ```bash
    cd ../backend
    npm run start
    ```

8. **Start the client**:
    Open a new terminal window and run:
    ```bash
    cd frontend
    npm run build
    npm run preview
    ```

**Note**: The URL of the client/server will display in the terminal. If it is different from the `CLIENT_URL` / `VITE_API_URL` field in your `.env` file, update the field and re-start the client/server.


## Usage
1. **Navigate to the Map**: The homepage features an interactive map displaying various natural events.
2. **Filter Events**: Use the filtering options to narrow down events by date, region, category, and source.
3. **View Event Details**: Click on an event marker on the map to view detailed information about the event.

## Future Enhancements
- **predict future events using AI**: Implement a deep learning model to predict future natural events based on historical data and trends, helping users anticipate and prepare for potential occurrences.
- **Advanced Analytics**: Provide deeper insights and analytics on the natural events data.
- **Custom Region Division**: Allow users to define their own region divisions for more personalized data analysis.
- **Mobile Application**: Develop a mobile application to provide a seamless experience on smartphones and tablets.
