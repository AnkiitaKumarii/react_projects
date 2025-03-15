import React from 'react';
import Button from './Button';
import './Joke.css';

const Joke = () => {
  const [joke, setJoke] = React.useState('');

  const fetchApi = () => {
    fetch('https://sv443.net/jokeapi/v2/joke/Programming?type=single')
      .then((response) => response.json())
      .then((data) => setJoke(data.joke));
  }

  return(
    <div className="joke">
      <Button CallApi={fetchApi}/>
      <p>{joke}</p>
    </div>
  )
}
export default Joke;