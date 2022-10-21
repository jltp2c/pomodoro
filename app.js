const minTravail = document.querySelector(".travail");
const minRepos = document.querySelector(".repos");
const start = document.querySelector(".start");
const play = document.querySelector(".play");
const reset = document.querySelector(".reset");
const cycles = document.querySelector("h5");
let nbCycles = 0;

cycles.innerText = `Nombre de cycles : ${nbCycles}`

let totalSecondT= 1800;
let totalSecondR = 300;
let pause = false;
let checkInterval = false;

minTravail.innerHTML = `
<p> Travail </p>
<h2> ${Math.trunc(totalSecondT/60)} : ${(Math.trunc(totalSecondT%60< 10)) ? `0${Math.trunc(totalSecondT%60)}`: Math.trunc(totalSecondT%60)} </h2>
`
minRepos.innerHTML = `
<p> Repos </p>
<h2> ${Math.trunc(totalSecondR/60)} : ${(Math.trunc(totalSecondR%60<10)) ? `0${Math.trunc(totalSecondR%60)}`: Math.trunc(totalSecondR%60)}</h2>
`

start.addEventListener('click', ()=>{
    if (checkInterval === false){
  checkInterval = true;
  totalSecondT++;
  minTravail.innerHTML = `
  <p> Travail </p>
  <h2> ${Math.trunc(totalSecondT/60)} : ${(Math.trunc(totalSecondT%60< 10)) ? `0${Math.trunc(totalSecondT%60)}`: Math.trunc(totalSecondT%60)} </h2>
  `
    

  let timer =  setInterval(()=>{
      if (pause === false && totalSecondT > 0){
         totalSecondT--;
         minTravail.innerHTML = `
         <p> Travail </p>
         <h2> ${Math.trunc(totalSecondT/60)} : ${(Math.trunc(totalSecondT%60< 10)) ? `0${Math.trunc(totalSecondT%60)}`: Math.trunc(totalSecondT%60)} </h2>
         `
      } else if (pause === false && totalSecondR === 0 && totalSecondT ===0){
            totalSecondT= 1800;
            totalSecondR = 300;
            nbCycles++;
            cycles.innerText = `Nombre de cycles : ${nbCycles}`;

            minTravail.innerHTML = `
                <p> Travail </p>
                <h2> ${Math.trunc(totalSecondT/60)} : ${(Math.trunc(totalSecondT%60< 10)) ? `0${Math.trunc(totalSecondT%60)}`: Math.trunc(totalSecondT%60)} </h2>
            `

            minRepos.innerHTML = `
                <p> Repos </p>
                <h2> ${Math.trunc(totalSecondR/60)} : ${(Math.trunc(totalSecondR%60<10)) ? `0${Math.trunc(totalSecondR%60)}`: Math.trunc(totalSecondR%60)}</h2>
            `
      }else if(pause === false && totalSecondT===0){
            totalSecondR--;
            minRepos.innerHTML = `
                <p> Repos </p>
                <h2> ${Math.trunc(totalSecondR/60)} : ${(Math.trunc(totalSecondR%60<10)) ? `0${Math.trunc(totalSecondR%60)}`: Math.trunc(totalSecondR%60)}</h2>
        `
      };

  }, 5)

  //reset 
  reset.addEventListener('click', () =>{
    clearInterval(timer);
    checkInterval =false;
    totalSecondT = 1800;
    totalSecondR = 300;
    nbCycles=0
    cycles.innerText = `Nombre de cycles : ${nbCycles}`
    minTravail.innerHTML = `
    <p> Travail </p>
    <h2> ${Math.trunc(totalSecondT/60)} : ${(Math.trunc(totalSecondT%60< 10)) ? `0${Math.trunc(totalSecondT%60)}`: Math.trunc(totalSecondT%60)} </h2>
`
    minRepos.innerHTML = `
    <p> Repos </p>
    <h2> ${Math.trunc(totalSecondR/60)} : ${(Math.trunc(totalSecondR%60<10)) ? `0${Math.trunc(totalSecondR%60)}`: Math.trunc(totalSecondR%60)}</h2>
    `
    
  })


    }else {
        return;
    }
});


//play pause btn
play.addEventListener('click',()=>{
    if(pause === false){
        play.innerHTML = "Play";
    
    }else if (pause ===true){
        play.innerHTML = "Pause";
    }
    pause = !pause;
});