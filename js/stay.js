/* =========================================
   VOYARA - STAY PAGE
========================================= */


/* =========================================
   GET DATA FROM LOCAL STORAGE
========================================= */

const selectedDestinations =
    JSON.parse(
        localStorage.getItem(
            "selectedDestinations"
        )
    ) || [];


const selectedPlaces =
    JSON.parse(
        localStorage.getItem(
            "selectedPlaces"
        )
    ) || [];


let selectedStay = null;

let searchText = "";

let selectedTypes = [];

let minimumRating = 0;

let maximumPrice = 10000;

let sortMode = "recommended";


/* =========================================
   DOM ELEMENTS
========================================= */

const stayGrid =
    document.getElementById(
        "stayGrid"
    );


const stayCount =
    document.getElementById(
        "stayCount"
    );


const staySummary =
    document.getElementById(
        "staySummary"
    );


const selectedStayName =
    document.getElementById(
        "selectedStayName"
    );


const destinationSummary =
    document.getElementById(
        "destinationSummary"
    );


const placesSummary =
    document.getElementById(
        "placesSummary"
    );


/* =========================================
   DESTINATION
========================================= */

function getDestinationIds() {

    return selectedDestinations.map(
        destination =>
            destination.id
    );

}


/* =========================================
   GET STAYS
========================================= */

function getAvailableStays() {

    const destinationIds =
        getDestinationIds();


    return stays.filter(
        stay =>
            destinationIds.includes(
                stay.destination
            )
    );

}


/* =========================================
   SHOW SUMMARY
========================================= */

function showSummary() {

    if (
        selectedDestinations.length
        > 0
    ) {

        destinationSummary.textContent =
            selectedDestinations
                .map(
                    destination =>
                        destination.name
                )
                .join(", ");

    } else {

        destinationSummary.textContent =
            "Your Destination";

    }


    placesSummary.textContent =
        selectedPlaces.length;


    staySummary.textContent =
        getAvailableStays().length;

}


/* =========================================
   DISPLAY STAYS
========================================= */

function displayStays() {

    let availableStays =
        getAvailableStays();


    /* SEARCH */

    if (searchText) {

        availableStays =
            availableStays.filter(
                stay =>

                    stay.name
                        .toLowerCase()
                        .includes(
                            searchText
                                .toLowerCase()
                        )

            );

    }


    /* PROPERTY TYPE */

    if (
        selectedTypes.length
        > 0
    ) {

        availableStays =
            availableStays.filter(
                stay =>

                    selectedTypes.includes(
                        stay.type
                    )

            );

    }


    /* RATING */

    availableStays =
        availableStays.filter(
            stay =>
                stay.rating
                >= minimumRating
        );


    /* PRICE */

    availableStays =
        availableStays.filter(
            stay =>
                stay.price
                <= maximumPrice
        );


    /* SORT */

    if (
        sortMode === "rating"
    ) {

        availableStays.sort(
            (a, b) =>
                b.rating - a.rating
        );

    }


    if (
        sortMode === "price-low"
    ) {

        availableStays.sort(
            (a, b) =>
                a.price - b.price
        );

    }


    if (
        sortMode === "price-high"
    ) {

        availableStays.sort(
            (a, b) =>
                b.price - a.price
        );

    }


    /* UPDATE COUNT */

    stayCount.textContent =
        availableStays.length;


    stayGrid.innerHTML = "";


    /* EMPTY */

    if (
        availableStays.length === 0
    ) {

        stayGrid.innerHTML = `

            <div class="stay-empty">

                <div>
                    🏨
                </div>

                <h3>
                    No stays found
                </h3>

                <p>
                    Try changing your filters.
                </p>

            </div>

        `;

        return;

    }


    /* CREATE CARDS */

    availableStays.forEach(
        stay => {

            const isSelected =
                selectedStay === stay.id;


            const card =
                document.createElement(
                    "article"
                );


            card.className =
                `stay-card ${
                    isSelected
                        ? "selected"
                        : ""
                }`;


            card.innerHTML = `

                <div class="stay-image">

                    <img
                        src="${stay.image}"
                        alt="${stay.name}"
                        loading="lazy"
                    >


                    <span class="stay-type">

                        ${formatType(stay.type)}

                    </span>

                </div>


                <div class="stay-card-body">

                    <div class="stay-rating">

                        ⭐ ${stay.rating}

                    </div>


                    <h2>
                        ${stay.name}
                    </h2>


                    <p class="stay-location">

                        📍 ${stay.location}

                    </p>


                    <p class="stay-description">

                        ${stay.description}

                    </p>


                    <div class="stay-card-footer">

                        <div>

                            <strong>
                                ₹${stay.price.toLocaleString("en-IN")}
                            </strong>

                            <span>
                                / night
                            </span>

                        </div>


                        <button
                            class="select-stay-btn"
                            type="button"
                        >

                            ${
                                isSelected
                                    ? "Selected ✓"
                                    : "Select Stay"
                            }

                        </button>

                    </div>

                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    selectStay(
                        stay.id
                    );

                }
            );


            stayGrid.appendChild(
                card
            );

        }
    );

}


/* =========================================
   FORMAT TYPE
========================================= */

function formatType(type) {

    const names = {

        hotel: "Hotel",

        resort: "Resort",

        villa: "Villa",

        guesthouse: "Guest House"

    };


    return names[type] || type;

}


/* =========================================
   SELECT STAY
========================================= */

function selectStay(stayId) {

    selectedStay = stayId;


    const stay =
        stays.find(
            item =>
                item.id === stayId
        );


    if (!stay) {
        return;
    }


    selectedStayName.textContent =
        stay.name;


    displayStays();

}


/* =========================================
   SEARCH
========================================= */

document
    .getElementById("staySearch")
    .addEventListener(
        "input",
        event => {

            searchText =
                event.target.value;

            displayStays();

        }
    );


/* =========================================
   TYPE FILTER
========================================= */

document
    .querySelectorAll(
        ".type-filter"
    )
    .forEach(
        checkbox => {

            checkbox.addEventListener(
                "change",
                () => {

                    selectedTypes =
                        Array.from(
                            document.querySelectorAll(
                                ".type-filter:checked"
                            )
                        ).map(
                            item =>
                                item.value
                        );


                    displayStays();

                }
            );

        }
    );


/* =========================================
   RATING FILTER
========================================= */

document
    .querySelectorAll(
        'input[name="rating"]'
    )
    .forEach(
        radio => {

            radio.addEventListener(
                "change",
                () => {

                    minimumRating =
                        Number(
                            radio.value
                        );

                    displayStays();

                }
            );

        }
    );


/* =========================================
   PRICE RANGE
========================================= */

const priceRange =
    document.getElementById(
        "priceRange"
    );


const priceValue =
    document.getElementById(
        "priceValue"
    );


priceRange.addEventListener(
    "input",
    () => {

        maximumPrice =
            Number(
                priceRange.value
            );


        priceValue.textContent =
            maximumPrice.toLocaleString(
                "en-IN"
            );


        displayStays();

    }
);


/* =========================================
   SORT
========================================= */

document
    .getElementById("sortStays")
    .addEventListener(
        "change",
        event => {

            sortMode =
                event.target.value;

            displayStays();

        }
    );


/* =========================================
   CLEAR FILTERS
========================================= */

document
    .getElementById(
        "clearStayFilters"
    )
    .addEventListener(
        "click",
        () => {

            searchText = "";

            selectedTypes = [];

            minimumRating = 0;

            maximumPrice = 10000;


            document.getElementById(
                "staySearch"
            ).value = "";


            document
                .querySelectorAll(
                    ".type-filter"
                )
                .forEach(
                    checkbox =>
                        checkbox.checked = false
                );


            document
                .querySelector(
                    'input[name="rating"][value="0"]'
                )
                .checked = true;


            priceRange.value =
                10000;


            priceValue.textContent =
                "10,000";


            displayStays();

        }
    );


/* =========================================
   BACK TO PLACES
========================================= */

document
    .getElementById("backToPlaces")
    .addEventListener(
        "click",
        () => {

            window.location.href =
                "places.html";

        }
    );


/* =========================================
   CONTINUE TO DATES
========================================= */

document
    .getElementById("continueDates")
    .addEventListener(
        "click",
        () => {

            if (!selectedStay) {

                alert(
                    "Please select a stay first."
                );

                return;

            }


            const stay =
                stays.find(
                    item =>
                        item.id
                        === selectedStay
                );


            localStorage.setItem(
                "selectedStay",
                JSON.stringify(stay)
            );


            window.location.href =
                "dates.html";

        }
    );


/* =========================================
   INITIALIZE
========================================= */

showSummary();

displayStays();
 