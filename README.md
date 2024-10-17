# Fullstack APP with React

React and Express are two popular technologies to use when developing a full-stack web application. The Express app provides a REST API that is called asynchronously by the React application.

Run npm install cors within the backend folder to install the CORS package. CORS, which stands for cross-origin resource sharing, will allow our Express backend to respond to network requests from another origin, in this case the origin of our React application. Without this, our Express backend (which will be hosted on localhost:3010) would not accept requests from our React frontend (which will be hosted on lcoalhost:3000).