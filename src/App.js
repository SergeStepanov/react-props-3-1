import './App.css';
import Stars from './components/RatingOfFilms/Stars';
import Listing from './components/ListOfOffers/Listing'

const data = require('./etsy.json');

function App() {
  return (
    <>
      <h2>Рейтинг фильмов</h2>
      <Stars count={1} />
      <Stars count={4} />
      <Stars count={6} />
      <Stars count='wer' />

      <hr />

      <h2>Список предложений</h2>
      <Listing items={data} />
    </>
  );
}

export default App;
