import React from "react";
import "./Featured.css";
import Container from "../Container/Container";

function Featured() {
  return (
    <section className='featured'>
      <div className='red-ball1'></div>
      <div className='red-ball2'></div>
      <Container className='featured-cont'>
        <div className='featured-left'>
          <img
            src='https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='food'
          />
        </div>
        <div className='featured-right'>
          <div className='featured-title'>
            <h1>Featured Food</h1>
          </div>
          <div className='featured-text'>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Featured;
