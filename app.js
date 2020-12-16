 let pronoun = ['the','our','his','her','their','da','its'];
  let adj = ['great', 'big','colorful','huge','smelly','delicious','stinky' ];
  let noun = ['jogger','racoon','dog','cat','fish','dinasour','butterfly'];

const getRandomDomain=()=>
    `${pronoun[Math.floor(Math.random()*pronoun.length)]}${adj[Math.floor(Math.random()*adj.length)]}${noun[Math.floor(Math.random()*noun.length)]}`;
    console.log(getRandomDomain()+".com");

    