let results = document.getElementById('results');
let input =document.getElementById('search');
let char = document.getElementById('char');

///////////////////




input.addEventListener('keyup', function(e){

    results.innerHTML = '';

    data.forEach(element => {

    
        
        var name = element.breeds[0].name;
        var breedfor =element.breeds[0].bred_for;
        var breedgroup =element.breeds[0].breed_group;
        var nuotrauka = element.url;
        var temperament = element.breeds[0].temperament;
        ////////////////////////////////////
        var card = document.createElement('div');
        card.classList.add('card')
        var cardImage = document.createElement('div');
        cardImage.classList.add('card__image')
        var cardContent = document.createElement('div');
        cardContent.classList.add('card__content')
        var img = document.createElement('img');
        

        ///////////////////////////////////////
        var h2 = document.createElement('h2');
        var p =document.createElement('p');
        p.innerHTML =breedfor + '<br>' + breedgroup;
        h2.innerHTML = name;
        
        /////////////////////
        cardImage.style.backgroundImage =  `url(${nuotrauka})` ;
        card.appendChild(cardImage);
        card.appendChild(cardContent);
        cardContent.appendChild(h2)
        cardContent.appendChild(p)
       
        

        if(temperament.includes(char.value) && name.toLowerCase().includes(input.value.toLowerCase())) {
          results.appendChild(card);
          
       }
        
    });

});

