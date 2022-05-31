import Container from "../Container/Container";
import React from "react";
import "./Subscribe.css";

function Subscribe() {
  return (
    <section className='subscribe'>
      <Container className='subscribe-cont'>
        <div className='subscribe-title'>
          <h1>Subscribe to our Newsletter for More Information</h1>
        </div>
        <div className='subscribe-text'>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </div>
        <form action='#'>
          <input type='email' placeholder='Insert your E-mail here' />
          <button>Subscribe</button>
        </form>
      </Container>
    </section>
  );
}

export default Subscribe;
