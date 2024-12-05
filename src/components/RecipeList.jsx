import React from 'react';
import RecipeCard from './RecipeCard';
import styled from 'styled-components';

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const RecipeList = ({ recipes }) => {
  if (recipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <List>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe._id} recipe={recipe} />
      ))}
    </List>
  );
};

export default RecipeList;
