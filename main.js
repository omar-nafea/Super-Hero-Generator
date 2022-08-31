const url = "https://akabab.github.io/superhero-api/api/all.json";
const newHeroButton = document.getElementById('newHeroButton')
const search = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const heroImageDiv = document.getElementById('heroImage')
const heroName = document.querySelector('.hisName');

function createHeroButton() {
    const mySentence = search.value;
    const capitalStr = mySentence.replace(/\b\w/g, c => c.toUpperCase());
    fetch(url).then((response) => response.json()).then(json => {
        for (let i = 0; i < json.length; i++) {
            if (json[i].name === capitalStr) {
                heroImageDiv.innerHTML = `<img src='${json[i].images.md}'>`;
                heroName.innerHTML = `
            Name: ${json[i].name} <br>
            combat:  ${json[i].powerstats.combat} <br>
            durability:  ${json[i].powerstats.durability} <br>
            intelligence: ${json[i].powerstats.intelligence} <br>
            power:  ${json[i].powerstats.power} <br>
            speed:  ${json[i].powerstats.speed} <br>
            strength:  ${json[i].powerstats.strength} <br>`
                if (json[i].biography.fullName !== "") {
                    heroName.innerHTML += `full name:  ${json[i].biography.fullName}`
                }
            }
        }
    })
}

function createRandomHero(id) {
    fetch(url).then((response) => response.json()).then(json => {
        heroImageDiv.innerHTML = `<img src='${json[id].images.md}'>`;
        heroName.innerHTML = `
            Name: ${json[id].name} <br>
            combat:  ${json[id].powerstats.combat} <br>
            durability:  ${json[id].powerstats.durability} <br>
            intelligence: ${json[id].powerstats.intelligence} <br>
            power:  ${json[id].powerstats.power} <br>
            speed:  ${json[id].powerstats.speed} <br>
            strength:  ${json[id].powerstats.strength} <br>`
        if (json[id].biography.fullName !== "") {
            heroName.innerHTML += `full name:  ${json[id].biography.fullName}`
        }
    })
}

const randomHero = () => {
    const numberOfHeroes = 563
    return Math.floor(Math.random() * numberOfHeroes) + 1
}
searchButton.addEventListener('click', () => {
    createHeroButton();
});
newHeroButton.addEventListener('click', () => {
    createRandomHero(randomHero());
})