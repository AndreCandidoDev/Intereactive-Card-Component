import './App.css';
import { useState } from 'react';
import { CardThanks } from './components/cardThanks';

function App() {

  const [ratingValue, setRatingValue] = useState(null);
  const [activeRating, setActiveRating] = useState(new Array(5).fill(false));
  const [flagChange, setFlagChange] = useState(false);

  const handleRatingValue = (e, key) => {
    const value = e.target.value;
    const aux = activeRating;
    
    for(let i = 0; i<aux.length; i++){
      if(i === key) aux[i] = true;
      else aux[i] = false;
    }

    setActiveRating(aux)
    setRatingValue(value)
  }

  const handleRating = () => {
    if(ratingValue !== null)  setFlagChange(true)
  }

  return (
     <div className='container'> 
      <div className='card'>
        <div className='card-content'>
        {
          !flagChange ?
            <>
              <div className='circle-comp'>
                <span>
                  <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>
                </span>
              </div>
              <div className='card-text'>
                <h2>How did we do?</h2>
                <p>
                  Please let us know how we did with your support request. All feedback is appreciated 
                  to help us improve our offering!
                </p>
              </div>
              <div className='rating-area'>
                <div className='ratings'>
                  <div className='circle-comp'>
                    
                    {/* can be a component */}
                    <input 
                      type='button' 
                      value='1'
                      className={activeRating[0] ? 'circleCompActive' : 'circleCompInput'}
                      onClick={(e) => {
                        // setActiveRating(true)
                        handleRatingValue(e, 0)
                        // setRatingValue(e.target.value)
                      }}
                    />
                  </div>
                  <div className='circle-comp'>
                    <input 
                      type='button' 
                      value='2'
                      className={activeRating[1] ? 'circleCompActive' : 'circleCompInput'}
                      onClick={(e) => {
                        // setActiveRating(true)
                        handleRatingValue(e, 1)
                        // setRatingValue(e.target.value)
                      }}
                    />
                  </div>
                  <div className='circle-comp'>
                    <input 
                      type='button' 
                      value='3'
                      className={activeRating[2] ? 'circleCompActive' : 'circleCompInput'}
                      onClick={(e) => {
                        // setActiveRating(true)
                        handleRatingValue(e, 2)
                        // setRatingValue(e.target.value)
                      }}
                    />
                  </div>
                  <div className='circle-comp'>
                    <input 
                      type='button' 
                      value='4'
                      className={activeRating[3] ? 'circleCompActive' : 'circleCompInput'}
                      onClick={(e) => {
                        // setActiveRating(true)
                        handleRatingValue(e, 3)
                        // setRatingValue(e.target.value)
                      }}
                    />
                  </div>
                  <div className='circle-comp'>
                    <input 
                      type='button' 
                      value='5'
                      className={activeRating[4] ? 'circleCompActive' : 'circleCompInput'}
                      onClick={(e) => {
                        // setActiveRating(true)
                        handleRatingValue(e, 4)
                        // setRatingValue(e.target.value)
                      }}
                    />
                  </div>
                </div>
                <button onClick={handleRating}>Submit</button>
              </div>
            </>
            :
            <CardThanks ratingValue={ratingValue}/>
        }
        </div>
      </div>
     </div>
  );
}

export default App;
