import React, { useState } from "react";
import "./Categories.css";
import Container from "../Container/Container";
import { allData } from "./Market";
import { foodData } from "./Market";
import { coffeeData } from "./Market";
import { dessertsData } from "./Market";
import { drinksData } from "./Market";

function Categories() {
  const [categorie, setCategorie] = useState("all");

  const all = categorie === "all";
  const food = categorie === "food";
  const drinks = categorie === "drinks";
  const coffee = categorie === "coffee";
  const desserts = categorie === "desserts";

  console.log(drinks);

  return (
    <section className='categories' id='categories'>
      <Container className='categories-cont'>
        <div className='categories-menu'>
          <h1 className='categories-title'>Categories</h1>
          <ul>
            <li className={all && "active"} onClick={() => setCategorie("all")}>
              All
            </li>
            <li
              className={food && "active"}
              onClick={() => setCategorie("food")}>
              Food
            </li>
            <li
              className={drinks && "active"}
              onClick={() => setCategorie("drinks")}>
              Drinks
            </li>
            <li
              className={coffee && "active"}
              onClick={() => setCategorie("coffee")}>
              Coffee
            </li>
            <li
              className={desserts && "active"}
              onClick={() => setCategorie("desserts")}>
              Deserts
            </li>
          </ul>
        </div>

        <div className='cards-cont'>
          {all &&
            allData.map((food) => {
              return (
                <div className={all ? "card active-card" : "card"}>
                  <img src={food.img} alt='ramen' />
                </div>
              );
            })}
          {food &&
            foodData.map((food) => {
              return (
                <div className={food ? "card active-card" : "card"}>
                  <img src={food.img} alt='ramen' />
                </div>
              );
            })}

          {coffee &&
            coffeeData.map((food) => {
              return (
                <div className={coffee ? "card active-card" : "card"}>
                  <img src={food.img} alt='ramen' />
                </div>
              );
            })}
          {desserts &&
            dessertsData.map((food) => {
              return (
                <div className={desserts ? "card active-card" : "card"}>
                  <img src={food.img} alt='ramen' />
                </div>
              );
            })}
          {drinks &&
            drinksData.map((food) => {
              return (
                <div className={desserts ? "card active-card" : "card"}>
                  <img src={food.img} alt='ramen' />
                </div>
              );
            })}
        </div>
      </Container>
    </section>
  );
}

export default Categories;
