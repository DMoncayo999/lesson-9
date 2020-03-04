// store the resource URL of the JSON
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

//use fetch() method to feed the required argument. First .then, returns a Promise. Second .then to work
//with the converted response data in JS
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then( function (jsonObject) {
    // console.table(jsonObject);   ----checking for valid response and data parsing---
    //store the results of the converted response into an array
    const prophets = jsonObject['prophets'];
    //To produce the output. We create a loop
    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');      
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname; 
        card.appendChild(h2); 
        let p = document.createElement('p');      
        p.innerHTML = 'Birthdate: ' + prophets[i].birthdate + '<br/>Death: ' + prophets[i].death + '<br/>Length: ' + prophets[i].length
        + '<br/>Order: ' + prophets[i].order +'<br/>Birthplace: ' + prophets[i].birthplace +  '<br/>Number of Children: ' + prophets[i].numofchildren;
        card.appendChild(p);                                             
        let image = document.createElement('img');   
        image.setAttribute('src', prophets[i].imageurl);   
        image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order );  
        card.appendChild(image);
        document.querySelector('div.cards').appendChild(card);
        /*
      "name": "Joseph",
      "lastname": "Smith",
      "birthdate": "23 December 1805",
      "death": "27 June 1844",
      "length": 14,
      "order": 1,
      "birthplace": "Vermont",
      "numofchildren": 11,
      "imageurl": "https://media.ldscdn.org/images/media-library/gospel-art/latter-day-prophets/american-prophet-joseph-smith-jr-1178035-gallery.jpg"
        */
    }
  })
  .catch( error => console.log(error) );




//update day and time in webpage
function updateCurrentDate() {
    let options = {
        weekday: "long"
        ,day: "numeric"
        ,month: "long"
        ,year: "numeric"
        ,hour: "numeric"
        ,minute: "numeric"
    };
    // return new Date();
    return new Date().toLocaleDateString("en-Us", options)
}

