import React from 'react';

function Food(props){
  console.log(props);
  return (<div>
  <h1>I love {props.fav}.</h1>
  </div>
  
  );
}


const foodILie = [
  {
    name: 'kimchi',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.6Mea2CXE0T5R9pbPWubGUgHaEK%26pid%3DApi&f=1'
  },
  {
    name: 'sam',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GLxnJpKDohpsrPZQGrGywQHaE7%26pid%3DApi&f=1'
  },
  {
    name: 'kimbab',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7-rpW2ynK3Mq89GWd2Q36QHaE8%26pid%3DApi&f=1'
  }
];


function App() {
  return (<div><h5>
    Hello
  </h5>
  

  </div>);
}

export default App;

