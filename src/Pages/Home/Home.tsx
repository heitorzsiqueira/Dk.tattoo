import React from 'react';
import './Home.css';
import Header from '../../Components/Header/Header.tsx';
import TattooCard from '../../Components/Portifolio/Portifolio.tsx';
import { tattoos } from '../../Components/Portifolio/Tattoos.ts';

const Home: React.FC = () => {

  return (
    <div className="home-container">
      <Header />

      <section className="home-hero">
        <div className="content-limit">
          <h1 className="hero-title">
            Do zero ao<br />
            <span className="accent-italic">Realismo Elite.</span>
          </h1>
          <p className="hero-subtitle">
            Participe do nosso grupo exclusivo e receba conteúdos gratuitos, 
            técnicas de realismo e a oferta de lançamento do meu curso completo.
          </p>
          <a 
            href='https://wa.me/5531993335553' 
            className="portfolio-cta"
            target="_blank" 
            rel="noopener noreferrer"
          >
            ENTRAR NO GRUPO VIP (GRÁTIS)
            <span className="cta-line"></span>
          </a>
        </div>
      </section>

    
      <section id="portfolio" className="portfolio-section">
        <div className="portfolio-header">
            <span className="portfolio-subtitle">O MÉTODO NA PRÁTICA</span>
            <h2 className="portfolio-main-title">O que você vai dominar</h2>
        </div>

        <div className="portfolio-grid">
          {tattoos.map((tattoo) => (
            <TattooCard 
              key={tattoo.id} 
              image={tattoo.image} 
              category={tattoo.category} 
              title={tattoo.title} 
            />
          ))}
        </div>
      </section>
      
      <footer className="home-footer">
        <p>© 2024 DK.TATTOO — TODOS OS DIREITOS RESERVADOS</p>
      </footer>
    </div>
  );
};

export default Home;