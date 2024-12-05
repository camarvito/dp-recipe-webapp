# Recipe WebApp - README

Welcome to the frontend of the Recipe App! This React application allows users to browse, search, and favorite their favorite recipes with a modern and responsive interface.

## Features

- View Recipes: Browse through a list of delicious recipes.
- Search by Ingredients: Search for recipes by entering one or multiple ingredients.
- Favorite Recipes: Mark your favorite recipes and view them in a dedicated favorites page.
- Li/ght/Dark Mode: Toggle between light and dark themes for a comfortable viewing experience.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Install Node.js from here.
- Yarn: Install Yarn from here.

## Getting Started

Follow these steps to set up and run the application locally.

1. **Clone the Repository**

```bash
git clone git@github.com:camarvito/dp-recipe-webapp.git
```

2. **Install Dependencies**
Install all the required dependencies using Yarn:

```bash
yarn install
```

3. **Start the Development Server**
Run the application in development mode:

```bash
yarn dev
```

Open http://localhost:3000 (or the port specified) to view it in the browser.

Note: If the frontend is running on the same port as the backend (3001), you may need to change the frontend port. To do this, create a .env file in the frontend root directory and add:


**Technologies Used**

- React: Frontend library for building user interfaces.
- Styled-Components: CSS-in-JS library for styling React components.
- React Router: Library for routing in React applications.
- Framer Motion: Library for animations in React.
- LocalStorage: Browser storage for persisting favorite recipes.
