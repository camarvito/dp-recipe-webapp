import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Card = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 300px;
  margin: 10px;
  padding: 15px;
  text-align: left;
  transition: background 0.25s linear;
  cursor: pointer;
  position: relative;
`;

const Title = styled.h2`
  font-size: 1.25rem;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const FavoriteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.toggleBorder};
  }
`;

const HeartFilled = '❤️';
const HeartEmpty = '🤍';

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    const alreadyFavorite = favorites.find(fav => fav._id === recipe._id);
    setIsFavorite(!!alreadyFavorite);
  }, [recipe._id]);

  const handleCardClick = (e) => {
    if (e.target.closest('button')) return;
    navigate(`/recipe/${recipe._id}`);
  };

  const toggleFavorite = (e) => {
    e.stopPropagation();
    let favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

    if (isFavorite) {
      favorites = favorites.filter(fav => fav._id !== recipe._id);
    } else {
      favorites.push(recipe);
    }

    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <Card onClick={handleCardClick}>
      <FavoriteButton onClick={toggleFavorite}>
        {isFavorite ? HeartFilled : HeartEmpty}
      </FavoriteButton>
      <Title>{recipe.name}</Title>
      <Image src={recipe.image_url} alt={recipe.name} />
      <p><strong>Ingredients:</strong></p>
      <ul>
        {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p><em>Click to see more details...</em></p>
    </Card>
  );
};

export default RecipeCard;
