import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const DetailContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  background: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  transition: background 0.25s linear;
  text-align: left;
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 300px;
  max-width: 300px;
  @media (max-width: 768px) {
    flex: none;
    max-width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  display: block;
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const BackButton = styled.button`
  background: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 6px 12px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background: ${({ theme }) => theme.background};
  }
`;

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeById = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/recipes/${id}`);
        setRecipe(response.data);
      } catch (error) {
        console.error('Error fetching the recipe: ', error);
      }
    };
    fetchRecipeById();
  }, [id]);

  if (!recipe) {
    return <p>Loading recipe...</p>;
  }

  return (
    <DetailContainer>
      <ImageContainer>
        <Image src={recipe.image_url} alt={recipe.name} />
      </ImageContainer>
      <ContentContainer>
        <BackButton onClick={() => navigate(-1)}>← Back</BackButton>
        <Title>{recipe.name}</Title>
        <p><strong>Ingredients:</strong></p>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p><strong>Instructions:</strong></p>
        <p>{recipe.cooking_instructions}</p>
      </ContentContainer>
    </DetailContainer>
  );
};

export default RecipeDetail;
