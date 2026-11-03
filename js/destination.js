/* =========================================
   SELECTED REGIONS
========================================= */

const selectedRegions =
    JSON.parse(
        localStorage.getItem("selectedRegions")
    ) || [];


/* =========================================
   SELECTED DESTINATIONS
========================================= */

let selectedDestinations = [];


/* =========================================
   VARIABLES
========================================= */

let searchText = "";

let sortMode = "default";


/* =========================================
   DOM
========================================= */

const destinationContainer =
    document.getElementById(
        "destinationContainer"
    );

const destinationSearch =
    document.getElementById(
        "destinationSearch"
    );

const destinationCount =
    document.getElementById(
        "destinationCount"
    );

const selectedDestinationCount =
    document.getElementById(
        "selectedDestinationCount"
    );

const selectedRegionsList =
    document.getElementById(
        "selectedRegionsList"
    );


/* =========================================
   SHOW SELECTED REGIONS
========================================= */

function showSelectedRegions() {

    selectedRegionsList.innerHTML = "";

    selectedRegions.forEach(region => {

        const badge =
            document.createElement("span");

        badge.className =
            "region-badge";

        badge.textContent =
            region.name;

        selectedRegionsList.appendChild(
            badge
        );

    });

}


/* =========================================
   GET DESTINATIONS
========================================= */

function getAvailableDestinations() {

    if (selectedRegions.length === 0) {

        return destinations;

    }

    const regionIds =
        selectedRegions.map(
            region => region.id
        );

    return destinations.filter(
        destination =>
            regionIds.includes(
                destination.region
            )
    );

}


/* =========================================
   DISPLAY DESTINATIONS
========================================= */

function displayDestinations() {

    let results =
        getAvailableDestinations();


    /* SEARCH */

    if (searchText) {

        results =
            results.filter(destination =>
                destination.name
                    .toLowerCase()
                    .includes(
                        searchText.toLowerCase()
                    )
            );

    }


    /* SORT */

    if (sortMode === "az") {

        results.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );

    }

    else if (sortMode === "za") {

        results.sort(
            (a, b) =>
                b.name.localeCompare(a.name)
        );

    }


    destinationContainer.innerHTML = "";


    destinationCount.textContent =
        `${results.length} destinations`;


    /* EMPTY */

    if (results.length === 0) {

        destinationContainer.innerHTML = `

            <div class="destination-empty">

                <div class="empty-icon">
                    🔍
                </div>

                <h3>
                    No destination found
                </h3>

                <p>
                    Try searching for another city.
                </p>

            </div>

        `;

        return;

    }


    /* CARDS */

    results.forEach(destination => {

        const selected =
            selectedDestinations.includes(
                destination.id
            );


        const card =
            document.createElement("article");


        card.className =
            `destination-card-large ${
                selected
                    ? "selected"
                    : ""
            }`;


        card.innerHTML = `

            <div class="destination-image">

                <img
                    src="${destination.image}"
                    alt="${destination.name}"
                    loading="lazy"
                >

                <button
                    class="destination-select"
                >
                    ${
                        selected
                            ? "✓"
                            : "+"
                    }
                </button>

            </div>


            <div class="destination-content">

                <div class="destination-location">
                    ${getRegionName(destination.region)}
                </div>

                <h2>
                    ${destination.name}
                </h2>

                <p>
                    ${destination.description}
                </p>


                <div class="destination-footer">

                    <span>
                        📍 India
                    </span>

                    <span class="select-text">
                        ${
                            selected
                                ? "Selected"
                                : "Select"
                        }
                    </span>

                </div>

            </div>

        `;


        card.addEventListener(
            "click",
            () => {

                toggleDestination(
                    destination.id
                );

            }
        );


        destinationContainer.appendChild(
            card
        );

    });

}


/* =========================================
   GET REGION NAME
========================================= */

function getRegionName(regionId) {

    const region =
        regions.find(
            item => item.id === regionId
        );


    return region
        ? region.name
        : "India";

}


/* =========================================
   SELECT / UNSELECT
========================================= */

function toggleDestination(
    destinationId
) {

    const index =
        selectedDestinations.indexOf(
            destinationId
        );


    if (index === -1) {

        selectedDestinations.push(
            destinationId
        );

    } else {

        selectedDestinations.splice(
            index,
            1
        );

    }


    updateSelection();

    displayDestinations();

}


/* =========================================
   UPDATE COUNT
========================================= */

function updateSelection() {

    selectedDestinationCount.textContent =
        selectedDestinations.length;

}


/* =========================================
   SEARCH
========================================= */

destinationSearch.addEventListener(
    "input",
    event => {

        searchText =
            event.target.value.trim();

        displayDestinations();

    }
);


/* =========================================
   SORT
========================================= */

document
    .getElementById("sortDestination")
    .addEventListener(
        "change",
        event => {

            sortMode =
                event.target.value;

            displayDestinations();

        }
    );


/* =========================================
   CLEAR
========================================= */

document
    .getElementById("clearDestinations")
    .addEventListener(
        "click",
        () => {

            selectedDestinations = [];

            updateSelection();

            displayDestinations();

        }
    );


/* =========================================
   CONTINUE
========================================= */

document
    .getElementById("continuePlaces")
    .addEventListener(
        "click",
        () => {

            if (
                selectedDestinations.length === 0
            ) {

                alert(
                    "Please select at least one destination."
                );

                return;

            }


            const selectedData =
                destinations.filter(
                    destination =>
                        selectedDestinations.includes(
                            destination.id
                        )
                );


            localStorage.setItem(
                "selectedDestinations",
                JSON.stringify(
                    selectedData
                )
            );


            window.location.href =
                "places.html";

        }
    );


/* =========================================
   INITIALIZE
========================================= */

showSelectedRegions();

displayDestinations();

updateSelection();