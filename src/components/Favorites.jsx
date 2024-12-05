import React, { useEffect, useState } from 'react';
import RecipeList from './RecipeList';

const Favorites = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    setFavoriteRecipes(favorites);
  }, []);

  return (
    <div>
      <h2>Your Favorite Recipes</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet. Try adding some from the main page!</p>
      ) : (
        <RecipeList recipes={favoriteRecipes} />
      )}
    </div>
  );
};

export default Favorites;
