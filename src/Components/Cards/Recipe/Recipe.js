import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container } from "react-bootstrap";
import RecipeBuild from "./RecipeBuild";
import "./Recipe.css";

const Recipe = () => {
  const APP_ID = "edf0da85";
  const APP_KEY = "f7ce8a0a2cff9447606274d9e264d277";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Pecan Pie");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="recipe">
      <Container>
        <Form inline onSubmit={getSearch}>
          <Form.Group className="search-form">
            <Form.Control
              type="text"
              value={search}
              placeholder="Search"
              onChange={updateSearch}
            />
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form.Group>
        </Form>

        <div className="recipes">
          {recipes.map((recipe) => (
            <RecipeBuild
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              digest={recipe.recipe.digest}
              nutrients={recipe.recipe.totalNutrients}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Recipe;
