const zonesContainer =
    document.getElementById("zonesContainer");


/* =========================================
   LOAD ZONES
========================================= */

function loadZones() {

    zonesContainer.innerHTML = "";

    zones.forEach(zone => {

        const card = document.createElement("div");

        card.className = "zone-card";

        card.innerHTML = `

            <img
                src="${zone.image}"
                alt="${zone.name}"
            >

            <div class="zone-overlay"></div>

            <div class="zone-content">

                <div class="zone-icon">
                    ${zone.icon}
                </div>

                <h3>
                    ${zone.name}
                </h3>

                <p>
                    ${zone.description}
                </p>

                <button
                    class="explore-zone"
                    onclick="selectZone('${zone.id}')"
                >
                    Explore →
                </button>

            </div>

        `;

        zonesContainer.appendChild(card);

    });

}


/* =========================================
   SELECT ZONE
========================================= */

function selectZone(zoneId) {

    const selectedZone =
        zones.find(zone => zone.id === zoneId);

    if (!selectedZone) {
        return;
    }

    localStorage.setItem(
        "selectedZone",
        JSON.stringify(selectedZone)
    );

    console.log(
        "Selected Zone:",
        selectedZone
    );

    /*
       NEXT STEP:

       zones.html

       will open here.

       For now we display a message.
    */

window.location.href = "zones.html";
}
/* =========================================
   SEARCH
========================================= */

const searchInput =
    document.getElementById("destinationSearch");

const searchButton =
    document.getElementById("searchBtn");


searchButton.addEventListener("click", () => {

    const query =
        searchInput.value.trim();

    if (!query) {

        alert(
            "Please enter a destination."
        );

        return;
    }

    console.log(
        "Searching for:",
        query
    );

    alert(
        `Searching for "${query}"...\n\nReal location search will be connected in a later step.`
    );

});


/* =========================================
   POPULAR SEARCH BUTTONS
========================================= */

const popularButtons =
    document.querySelectorAll(
        ".popular-searches button"
    );


popularButtons.forEach(button => {

    button.addEventListener("click", () => {

        searchInput.value =
            button.textContent;

        searchButton.click();

    });

});


/* =========================================
   INITIALIZE
========================================= */

loadZones();