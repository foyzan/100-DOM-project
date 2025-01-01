const button = document.querySelector("button");
const cardContainer = document.querySelector(".cards");

const cardAppend = (data) => {
    const { name, email, picture } = data.results[0];
    cardContainer.innerHTML += `
        <div class="card">
            <div class="img">
                <img src="${picture.medium}" alt="${name.first}">
            </div>
            <h2>${name.first}</h2>
            <h4>${email}</h4>
            <h3>Description</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>`;
};

const fetchCard = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        cardAppend(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

button.addEventListener("click", fetchCard);

fetchCard();
