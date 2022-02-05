import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data.js';

function App() {
  const cards = data.map(value => {
    return <Card 
              img={value.coverImg}
              rating={value.stats.rating}
              reviewCount={value.stats.reviewCount}
              location={value.location}
              title={value.title}
              price={value.price}
            />
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
