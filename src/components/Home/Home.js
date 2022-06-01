import React from "react";
import "./Home.css";
import Container from "../Container/Container";

function Home() {
  return (
    <section className='home' id='home'>
      <Container className='home-cont'>
        <div className='home-left'>
          <div className='home-title'>
            <h1>Savor The Flavor All Weekend Along</h1>
          </div>
          <div className='home-text'>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
        <div className='home-right'>
          <div className='home-image-sm'>
            <img
              src='https://images.pexels.com/photos/4753650/pexels-photo-4753650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='cocacola'
            />
          </div>
          <div className='home-image-lg'>
            <img
              src='https://images.pexels.com/photos/2714722/pexels-photo-2714722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='burger'
            />
          </div>
          <div className='home-image-sm'>
            <img
              src='https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='fries'
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Home;
