/* =========================================
   VOYARA TOURIST PLACES
========================================= */


/* =========================================
   GET SELECTED DESTINATIONS
========================================= */

const selectedDestinations =
    JSON.parse(
        localStorage.getItem(
            "selectedDestinations"
        )
    ) || [];


let selectedPlaces = [];

let searchText = "";

let selectedCategories = [];

let sortMode = "recommended";


/* =========================================
   DOM ELEMENTS
========================================= */

const placesGrid =
    document.getElementById(
        "placesGrid"
    );

const placesCount =
    document.getElementById(
        "placesCount"
    );

const selectedPlaceCount =
    document.getElementById(
        "selectedPlaceCount"
    );

const mapPlaceCount =
    document.getElementById(
        "mapPlaceCount"
    );

const mapMarkers =
    document.getElementById(
        "mapMarkers"
    );

const mapFrame =
    document.getElementById(
        "mapFrame"
    );


/* =========================================
   SHOW DESTINATIONS
========================================= */

function showSelectedDestinations() {

    const container =
        document.getElementById(
            "selectedDestinationNames"
        );

    container.innerHTML = "";


    selectedDestinations.forEach(
        destination => {

            const pill =
                document.createElement(
                    "span"
                );

            pill.className =
                "destination-pill";

            pill.textContent =
                destination.name;

            container.appendChild(
                pill
            );

        }
    );

}


/* =========================================
   GET AVAILABLE PLACES
========================================= */

function getAvailablePlaces() {

    const destinationIds =
        selectedDestinations.map(
            destination =>
                destination.id
        );


    return touristPlaces.filter(
        place =>
            destinationIds.includes(
                place.destination
            )
    );

}


/* =========================================
   DISPLAY PLACES
========================================= */

function displayPlaces() {

    let places =
        getAvailablePlaces();


    /* SEARCH */

    if (searchText) {

        places =
            places.filter(place =>

                place.name
                    .toLowerCase()
                    .includes(
                        searchText.toLowerCase()
                    )

            );

    }


    /* CATEGORY */

    if (
        selectedCategories.length > 0
    ) {

        places =
            places.filter(place =>

                selectedCategories.includes(
                    place.category
                )

            );

    }


    /* SORT */

    if (sortMode === "rating") {

        places.sort(
            (a, b) =>
                b.rating - a.rating
        );

    }


    if (sortMode === "name") {

        places.sort(
            (a, b) =>
                a.name.localeCompare(
                    b.name
                )
        );

    }


    placesGrid.innerHTML = "";


    placesCount.textContent =
        places.length;


    /* EMPTY */

    if (places.length === 0) {

        placesGrid.innerHTML = `

            <div class="places-empty">

                <div>
                    🔍
                </div>

                <h3>
                    No places found
                </h3>

                <p>
                    Try another search or category.
                </p>

            </div>

        `;

        return;

    }


    /* CREATE CARDS */

    places.forEach(place => {

        const isSelected =
            selectedPlaces.includes(
                place.id
            );


        const card =
            document.createElement(
                "article"
            );


        card.className =
            `place-card ${
                isSelected
                    ? "selected"
                    : ""
            }`;


        card.innerHTML = `

            <div class="place-image">

                <img
                    src="${place.image}"
                    alt="${place.name}"
                    loading="lazy"
                >


                <button
                    class="place-select-button"
                    type="button"
                >

                    ${
                        isSelected
                            ? "✓"
                            : "+"
                    }

                </button>

            </div>


            <div class="place-card-content">

                <div class="place-category">

                    ${place.category}

                </div>


                <h2>
                    ${place.name}
                </h2>


                <div class="place-rating">

                    ⭐ ${place.rating}

                </div>


                <p>
                    ${place.description}
                </p>


                <div class="place-location">

                    📍 ${place.latitude.toFixed(4)},
                    ${place.longitude.toFixed(4)}

                </div>


                <div class="place-card-footer">

                    <span>
                        India
                    </span>


                    <strong>

                        ${
                            isSelected
                                ? "Selected"
                                : "Select Place"
                        }

                    </strong>

                </div>

            </div>

        `;


        card.addEventListener(
            "click",
            () => {

                togglePlace(
                    place.id
                );

            }
        );


        placesGrid.appendChild(
            card
        );

    });

}


/* =========================================
   TOGGLE PLACE
========================================= */

function togglePlace(placeId) {

    const index =
        selectedPlaces.indexOf(
            placeId
        );


    if (index === -1) {

        selectedPlaces.push(
            placeId
        );

    } else {

        selectedPlaces.splice(
            index,
            1
        );

    }


    updateSelection();

    displayPlaces();

    updateMap();

}


/* =========================================
   UPDATE SELECTION
========================================= */

function updateSelection() {

    selectedPlaceCount.textContent =
        selectedPlaces.length;


    mapPlaceCount.textContent =
        `${selectedPlaces.length} places selected`;

}


/* =========================================
   UPDATE MAP
========================================= */

function updateMap() {

    const selectedData =
        touristPlaces.filter(
            place =>
                selectedPlaces.includes(
                    place.id
                )
        );


    mapMarkers.innerHTML = "";


    if (
        selectedData.length === 0
    ) {

        mapMarkers.innerHTML = `

            <p class="map-placeholder">

                Select places to see
                their locations here.

            </p>

        `;


        mapFrame.src =
            "about:blank";

        return;

    }


    /* PLACE LIST */

    selectedData.forEach(place => {

        const marker =
            document.createElement(
                "div"
            );


        marker.className =
            "map-place";


        marker.innerHTML = `

            <div class="map-number">
                📍
            </div>

            <div>

                <strong>
                    ${place.name}
                </strong>

                <span>
                    ${place.latitude.toFixed(4)},
                    ${place.longitude.toFixed(4)}
                </span>

            </div>

        `;


        mapMarkers.appendChild(
            marker
        );

    });


    /* CENTER MAP ON FIRST SELECTED PLACE */

    const first =
        selectedData[0];


    const latitude =
        first.latitude;

    const longitude =
        first.longitude;


    /*
       OpenStreetMap embed URL.

       This is a development-friendly
       map approach and does not require
       exposing a secret API key.
    */

    const delta = 0.08;


    mapFrame.src =
        `https://www.openstreetmap.org/export/embed.html?bbox=${
            longitude - delta
        }%2C${
            latitude - delta
        }%2C${
            longitude + delta
        }%2C${
            latitude + delta
        }&layer=mapnik&marker=${
            latitude
        }%2C${
            longitude
        }`;

}


/* =========================================
   SEARCH
========================================= */

document
    .getElementById("placeSearch")
    .addEventListener(
        "input",
        event => {

            searchText =
                event.target.value;

            displayPlaces();

        }
    );


/* =========================================
   CATEGORY FILTER
========================================= */

document
    .querySelectorAll(
        ".category-filter"
    )
    .forEach(checkbox => {

        checkbox.addEventListener(
            "change",
            () => {

                selectedCategories =
                    Array.from(
                        document.querySelectorAll(
                            ".category-filter:checked"
                        )
                    ).map(
                        checkbox =>
                            checkbox.value
                    );


                displayPlaces();

            }
        );

    });


/* =========================================
   SORT
========================================= */

document
    .getElementById("sortPlaces")
    .addEventListener(
        "change",
        event => {

            sortMode =
                event.target.value;

            displayPlaces();

        }
    );


/* =========================================
   CLEAR FILTERS
========================================= */

document
    .getElementById("clearFilters")
    .addEventListener(
        "click",
        () => {

            searchText = "";

            selectedCategories = [];


            document.getElementById(
                "placeSearch"
            ).value = "";


            document
                .querySelectorAll(
                    ".category-filter"
                )
                .forEach(
                    checkbox =>
                        checkbox.checked = false
                );


            displayPlaces();

        }
    );


/* =========================================
   CLEAR SELECTED PLACES
========================================= */

document
    .getElementById("clearPlaces")
    .addEventListener(
        "click",
        () => {

            selectedPlaces = [];

            updateSelection();

            displayPlaces();

            updateMap();

        }
    );


/* =========================================
   CONTINUE TO STAY
========================================= */

document
    .getElementById("continueStay")
    .addEventListener(
        "click",
        () => {

            if (
                selectedPlaces.length === 0
            ) {

                alert(
                    "Please select at least one tourist place."
                );

                return;

            }


            const selectedData =
                touristPlaces.filter(
                    place =>
                        selectedPlaces.includes(
                            place.id
                        )
                );


            localStorage.setItem(
                "selectedPlaces",
                JSON.stringify(
                    selectedData
                )
            );


            window.location.href =
                "stay.html";

        }
    );


/* =========================================
   INITIALIZE
========================================= */

showSelectedDestinations();

displayPlaces();

updateSelection();

updateMap();
