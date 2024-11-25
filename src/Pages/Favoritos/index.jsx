import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Favoritos.css";
import lasanha from '../../assets/Lasanha.jpg';
import pizza from '../../assets/Pizza.png';
import peixe from '../../assets/Peixe.png';
import iconPerfil from '../../assets/iconPerfil.png';


//  card de receita 
function RecipeCard({ recipe, onFavoriteToggle, img }) {
  return (
    <div className="recipe-card">
      <img src={img} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <button
        className="favorite-btn"
        onClick={() => onFavoriteToggle(recipe.id)}
      >
        {}
        <span style={{ color: recipe.isFavorite ? 'red' : 'white' }}>❤️</span>
      </button>
    </div>
  );
}

// Componente principal
function Favoritos() {
  // Lista de receitas
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: 'Pizza Portuguesa',
      image: pizza, 
      isFavorite: false,
    },
    {
      id: 2,
      title: 'Peixe Grelhado',
      image: peixe, 
      isFavorite: false,
    },
    {
      id: 3,
      title: 'Lasanha',
      image: lasanha, 
      isFavorite: false,
    },
  ]);

  // Função para alterar favorito
  const toggleFavorite = (id) => {
    const updatedRecipes = recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe
    );
    setRecipes(updatedRecipes);
  };

  //carrossel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <button className="next-arrow">→</button>,
    prevArrow: <button className="prev-arrow">←</button>,
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo" ><img className='cssLogo' src="/src/assets/logo.png" alt="" /></div>
        <input type="text" placeholder="O que vamos comer hoje?" />
        <button className="profile-btn">
            <img className="iconperfil" img={iconPerfil} alt="" />
        </button>
      </header>
      <nav className="navbar">
        <button>Favoritos</button>
        <button>Receitas</button>
        <button>Criar Receita</button>
      </nav>
      <h2>Suas receitas favoritas</h2>
      {/* <Slider {...sliderSettings} className="recipe-slider"> */}
      <div className="recipe-slider">

        {recipes.map((recipe) => (
            <RecipeCard
            img={recipe.image}
            key={recipe.id}
            recipe={recipe}
            onFavoriteToggle={toggleFavorite}
            />
            ))}
            </div>
      {/* </Slider> */}
    </div>
  );
}

export default Favoritos;