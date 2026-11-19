const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Cochabamba Bolivia",
        location: "Cochabamba Bolivia",
        dedicated: "2000, April, 30",
        area: 26000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/cochabamba-bolivia-temple/cochabamba-bolivia-temple-13721-main.jpg"
    },
    {
        templeName: "La Paz Bolivia",
        location: "La Paz Bolivia",
        dedicated: "2021, October, 3",
        area: 26000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/la-paz-bolivia-temple/la-paz-bolivia-temple-44435-main.jpg"
    },
    {
        templeName: "Santa Cruz Bolivia",
        location: "Santa Cruz Bolivia",
        dedicated: "2020, October, 4",
        area: 29000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/santa-cruz-bolivia-temple/santa-cruz-bolivia-temple-48551-main.jpg"
    }

];

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const menuButton = document.querySelector("#menu-button");
const primaryNav = document.querySelector("#primary-nav");

menuButton.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.textContent = isOpen ? "×" : "☰";
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        primaryNav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
    });
});

// Filter temple cards
const templeCards = document.querySelector("#temple-cards");

// The array stores dedication dates as strings like "2005, August, 7".
const getDedicatedYear = (temple) => Number(temple.dedicated.split(",")[0]);

const templeFilters = {
    home: () => temples,
    old: () => temples.filter((temple) => getDedicatedYear(temple) < 1900),
    new: () => temples.filter((temple) => getDedicatedYear(temple) > 2000),
    large: () => temples.filter((temple) => temple.area > 90000),
    small: () => temples.filter((temple) => temple.area < 10000)
};

function displayTemples(templesToDisplay) {
    templeCards.replaceChildren();

    templesToDisplay.forEach((temple) => {
        const card = document.createElement("figure");

        const name = document.createElement("h2");
        name.textContent = temple.templeName;

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";

        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;

        const dedication = document.createElement("p");
        dedication.textContent = `Dedicated: ${temple.dedicated}`;

        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

        card.append(name, image, location, dedication, area);
        templeCards.append(card);
    });
}

// Show all temples when the page first loads.
displayTemples(temples);

// Filter the cards when a menu link is selected.
primaryNav.querySelectorAll("a[data-filter]").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const filterName = link.dataset.filter;
        const filterTemples = templeFilters[filterName];

        const templesToShow = filterTemples();
        displayTemples(templesToShow);
    });
});