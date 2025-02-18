import './App.css';
import { useState } from 'react';
import { CardThanks } from './components/cardThanks';
import { CardRating } from './components/cardRating';

function App() 
{
  const [ratingValue, setRatingValue] = useState(null);
  const [flagChange, setFlagChange] = useState(false);

  return (
    <div className='container'> 
      <div className='card'>
        <div className='card-content'>
        {
          !flagChange ?
            <CardRating 
              setFlagChange={setFlagChange}
              ratingValue={ratingValue}
              setRatingValue={setRatingValue}
            />
            :
            <CardThanks ratingValue={ratingValue}/>
        }
        </div>
      </div>
    </div>
  );
}

export default App;
