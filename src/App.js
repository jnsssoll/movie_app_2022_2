import React from 'react';

function Food({name, picture}) {
  return (
  <div>
    <h2>I like {name}</h2>
    <img src={picture} />
    </div>
  );
}

const foodLike = [ {
  name: 'Kimchi',
  image: 'https://www.platingsandpairings.com/wp-content/uploads/2014/12/Kimchi-5.jpg',
},
{
  name: 'Samgyeopsal',
  image: 'https://trazy.s3.amazonaws.com/images/main/theme/cover/korean%20barbecue%20restaurant%20cover.jpg',
},
{
  name: 'Bibimbap',
  image: 'https://recipetineats.com/wp-content/uploads/2019/05/Bibimbap_3.jpg',
},
{
  name: 'Doncasu',
  image: 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FySZaT%2FbtrKHZoIbWD%2FMGeTK0YKjBJoBidiGklXf0%2Fimg.jpg',
},
{
  name: 'Kimbap',
  image: 'https://curiouskimchi.com/wp-content/uploads/2022/02/LIM01948-min.jpeg',
},
];

function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />;
}

function App() {
  console.log(foodLike.map(renderFood));
  
  return ( <div>
    {foodLike.map(renderFood)}
   
    </div>
  );
}

export default App;
