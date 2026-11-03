/* =========================================
   GET SELECTED ZONE
========================================= */

const selectedZone =
    JSON.parse(
        localStorage.getItem("selectedZone")
    );


const zoneName =
    document.getElementById("zoneName");


if (!selectedZone) {

    zoneName.textContent =
        "No zone selected";

} else {

    zoneName.textContent =
        selectedZone.name;

}


/* =========================================
   VARIABLES
========================================= */

let selectedRegions = [];

let currentFilter = "all";

let searchText = "";


/* =========================================
   DOM ELEMENTS
========================================= */

const regionsContainer =
    document.getElementById(
        "regionsContainer"
    );

const selectedCount =
    document.getElementById(
        "selectedCount"
    );

const resultCount =
    document.getElementById(
        "resultCount"
    );

const searchInput =
    document.getElementById(
        "regionSearch"
    );


/* =========================================
   GET REGIONS FOR ZONE
========================================= */

function getZoneRegions() {

    if (!selectedZone) {
        return [];
    }

    return regions.filter(
        region =>
            region.zone === selectedZone.id
    );

}


/* =========================================
   DISPLAY REGIONS
========================================= */

function displayRegions() {

    const zoneRegions =
        getZoneRegions();


    const filteredRegions =
        zoneRegions.filter(region => {

            const matchesSearch =
                region.name
                    .toLowerCase()
                    .includes(
                        searchText.toLowerCase()
                    );


            const matchesFilter =
                currentFilter === "all" ||
                region.type === currentFilter;


            return (
                matchesSearch &&
                matchesFilter
            );

        });


    regionsContainer.innerHTML = "";


    resultCount.textContent =
        `${filteredRegions.length} Regions`;


    if (filteredRegions.length === 0) {

        regionsContainer.innerHTML = `

            <div class="empty-state">

                <div>
                    🔍
                </div>

                <h3>
                    No region found
                </h3>

                <p>
                    Try another state or region name.
                </p>

            </div>

        `;

        return;

    }


    filteredRegions.forEach(
        region => {

            const isSelected =
                selectedRegions.includes(
                    region.id
                );


            const card =
                document.createElement("div");


            card.className =
                `region-card ${
                    isSelected
                        ? "selected"
                        : ""
                }`;


            card.innerHTML = `

                <div class="region-image">

                    <img
                        src="${region.image}"
                        alt="${region.name}"
                    >

                    <div class="region-check">

                        ${
                            isSelected
                                ? "✓"
                                : ""
                        }

                    </div>

                </div>


                <div class="region-info">

                    <span class="region-type">
                        ${region.type}
                    </span>

                    <h3>
                        ${region.name}
                    </h3>

                    <div class="select-label">

                        ${
                            isSelected
                                ? "Selected ✓"
                                : "Select Region"
                        }

                    </div>

                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    toggleRegion(
                        region.id
                    );

                }
            );


            regionsContainer.appendChild(
                card
            );

        }
    );

}


/* =========================================
   SELECT / UNSELECT REGION
========================================= */

function toggleRegion(regionId) {

    const index =
        selectedRegions.indexOf(
            regionId
        );


    if (index === -1) {

        selectedRegions.push(
            regionId
        );

    } else {

        selectedRegions.splice(
            index,
            1
        );

    }


    updateSelection();

    displayRegions();

}


/* =========================================
   UPDATE SELECTION
========================================= */

function updateSelection() {

    selectedCount.textContent =
        selectedRegions.length;

}


/* =========================================
   SEARCH
========================================= */

searchInput.addEventListener(
    "input",
    event => {

        searchText =
            event.target.value;

        displayRegions();

    }
);


/* =========================================
   FILTER BUTTONS
========================================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );


filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(
                btn =>
                    btn.classList.remove(
                        "active"
                    )
            );


            button.classList.add(
                "active"
            );


            currentFilter =
                button.dataset.filter;


            displayRegions();

        }
    );

});


/* =========================================
   CLEAR SELECTION
========================================= */

document
    .getElementById("clearSelection")
    .addEventListener(
        "click",
        () => {

            selectedRegions = [];

            updateSelection();

            displayRegions();

        }
    );


/* =========================================
   CONTINUE
========================================= */

document
    .getElementById("continueBtn")
    .addEventListener(
        "click",
        () => {

            if (
                selectedRegions.length === 0
            ) {

                alert(
                    "Please select at least one state or region."
                );

                return;

            }


            const selectedData =
                regions.filter(
                    region =>
                        selectedRegions.includes(
                            region.id
                        )
                );


            localStorage.setItem(
                "selectedRegions",
                JSON.stringify(
                    selectedData
                )
            );


            window.location.href =
                "destinations.html";

        }
    );


/* =========================================
   INITIAL LOAD
========================================= */

displayRegions();