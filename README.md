# Rock-paper-game and Rock-paper-scissor-lizard-spock

![Rock-paper-scissor-game](./public/desktop-step-1.jpg)

![Rock-paper-scissor-lizard-spock](./public/desktop-step-1-bonus.jpg)

This project is just a game the clasic : rock paper scissors, rock paper scissors spock lizard with api integration (records)

## Table of contents

  - [The challenge](#the-challenge)
   - [Built with](#built-with)
   - [Api](#API)

### The challenge

Users should be able to:

- See Records
- Login the name for records
- Put his name on the records if his score is better than the rest
- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer

### Built with
 [Next.js](https://nextjs.org/) - React framework
 [Style-component](https://styled-components.com/) - React style
 [NodeJS](https://nodejs.org/en/) - NodeJs
 [MongoDb](https://www.mongodb.com/) - MongoDb
 [Mongoose](https://mongoosejs.com/) - Object Modeling for nodeJs
 [ExpressJs](https://expressjs.com/) - NodeJs Framework
 [Babel](https://babeljs.io/) - js compiler
 [Redux](https://redux.js.org/) - state managent
 [Redux-toolkit](https://redux-toolkit.js.org/) - redux development
 [React-testing](https://testing-library.com/) - react testing


 ### API
 This API provides All records of the game in this case rock-paper-scissors and rock-paper-scissors-spock-lizard, by default, the API is limited five length 
  you can be on the record **only if you get a high score than currently record**

#### Get all shoes

```node
GET http://localhost:3000/api/record
```
#### example 
###### request

> javascript-fetch
```javascript
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://localhost:3000/api/record", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

###### Response

```json
[
    {
        "_id": "62a66b7f5aed442e385d5ae42",
        "name": "Dani",
        "point": 15,
        "updatedAt": "2022-06-24T17:09:55.807Z"
    },
    {
        "_id": "62a66c5155e017f89332a3023",
        "name": "Dani",
        "point": 15,
        "createdAt": "2022-06-12T22:44:33.299Z",
        "updatedAt": "2022-06-24T17:14:55.334Z",
        "__v": 0
    },
    {
        "_id": "62a66c5155e017f89332a3401",
        "name": "Dani",
        "point": 14,
        "createdAt": "2022-06-12T22:44:33.298Z",
        "updatedAt": "2022-06-24T17:09:54.136Z",
        "__v": 0
    },
    {
        "_id": "62a66c5155e017f89332a30554",
        "name": "Dani",
        "point": 14,
        "createdAt": "2022-06-12T22:44:33.299Z",
        "updatedAt": "2022-06-24T17:14:56.991Z",
        "__v": 0
    },
    {
        "_id": "62a66c5155e017f89332a6303",
        "name": "Dani",
        "point": 14,
        "createdAt": "2022-06-12T22:44:33.299Z",
        "updatedAt": "2022-06-24T17:23:07.435Z",
        "__v": 0
    }
]

```

#### Update the records 

#### Post 
for making a request you have to make it in json format and send name:string and point:number

```json
 {
    "name":"mod812",
    "point":2,
 }
```

#### example 
###### request

> javascript-fetch
```javascript
var requestOptions = {
  method: 'POST',
   body:JSON.stringify({name:"player",point:2}),
   headers:{"Content-Type":"application/json"}
};

fetch("http://localhost:3000/api/record", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
###### Response

###### succeful

```json
{
    "success": "success"
}
```
###### reject

```json
{
    "success": "failed"
}
```

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

