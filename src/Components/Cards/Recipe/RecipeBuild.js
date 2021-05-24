import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Image, Container } from "react-bootstrap";

const RecipeBuild = ({
  title,
  calories,
  image,
  ingredients,
  digest,
  nutrients,
}) => {
  return (
    <div>
      <Container>
        <Table responive striped bordered hover variant="dark" size="xl">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Calories</th>
              <th>Ingredients</th>
              <th>Nutrients</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Image src={image}></Image>
              </td>
              <td>{title}</td>
              <td>{Math.round(calories)}</td>
              <td>
                <list>
                  <b>Ingredients</b>{" "}
                  {ingredients.map((ingredient) => (
                    <li>{ingredient.text}</li>
                  ))}
                </list>
              </td>
              <td>
                <list>
                  {digest.map((nutrient) => (
                    <li>{nutrient.label}:</li>
                  ))}
                </list>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default RecipeBuild;
