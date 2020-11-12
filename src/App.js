import React from 'react';
import PropTypes from 'prop-types';


function Food({name, picture, rating}){
  
  
  return (<div>
  <h2>I love {name}.</h2>
  <h4>{rating}/5.0</h4>
  <img src={picture} alt={name} />

  </div>
  
  );
}


const foodILike = [
  {
    id:1,
    name: 'kimchi',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.6Mea2CXE0T5R9pbPWubGUgHaEK%26pid%3DApi&f=1',
    rating: 5
  },
  {
    id:2,
    name: 'sam',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GLxnJpKDohpsrPZQGrGywQHaE7%26pid%3DApi&f=1',
    rating: 2
  },
  {
    id:3,
    name: 'kimbab',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7-rpW2ynK3Mq89GWd2Q36QHaE8%26pid%3DApi&f=1',
    rating: 1
  }
];


function App() {
  
  return(
    <div>
      {foodILike.map(dish => <Food  key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />)}
    </div>
    );
}


Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};


export default App;

