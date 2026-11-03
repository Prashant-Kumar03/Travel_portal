/* =========================================
   VOYARA - DATES PAGE
========================================= */


/* =========================================
   GET PREVIOUS DATA
========================================= */

const selectedDestinations =
    JSON.parse(
        localStorage.getItem(
            "selectedDestinations"
        )
    ) || [];


const selectedStay =
    JSON.parse(
        localStorage.getItem(
            "selectedStay"
        )
    ) || null;


/* =========================================
   TRIP DATA
========================================= */

let adults = 1;

let children = 0;

let rooms = 1;


/* =========================================
   DOM
========================================= */

const checkIn =
    document.getElementById(
        "checkIn"
    );


const checkOut =
    document.getElementById(
        "checkOut"
    );


const dateError =
    document.getElementById(
        "dateError"
    );


const adultCount =
    document.getElementById(
        "adultCount"
    );


const childCount =
    document.getElementById(
        "childCount"
    );


const roomCount =
    document.getElementById(
        "roomCount"
    );


const destinationPreview =
    document.getElementById(
        "destinationPreview"
    );


const stayPreview =
    document.getElementById(
        "stayPreview"
    );


const datePreview =
    document.getElementById(
        "datePreview"
    );


const travellerPreview =
    document.getElementById(
        "travellerPreview"
    );


const estimatedCost =
    document.getElementById(
        "estimatedCost"
    );


/* =========================================
   MINIMUM DATE
========================================= */

const today =
    new Date();


const todayString =
    today.toISOString()
        .split("T")[0];


checkIn.min =
    todayString;


checkOut.min =
    todayString;


/* =========================================
   DESTINATION
========================================= */

function showDestination() {

    if (
        selectedDestinations.length
        > 0
    ) {

        destinationPreview.textContent =
            selectedDestinations
                .map(
                    destination =>
                        destination.name
                )
                .join(", ");

    } else {

        destinationPreview.textContent =
            "Your Destination";

    }

}


/* =========================================
   STAY
========================================= */

function showStay() {

    if (selectedStay) {

        stayPreview.textContent =
            selectedStay.name;

    } else {

        stayPreview.textContent =
            "No stay selected";

    }

}


/* =========================================
   UPDATE GUEST COUNTS
========================================= */

function updateGuestDisplay() {

    adultCount.textContent =
        adults;


    childCount.textContent =
        children;


    roomCount.textContent =
        rooms;


    let travellerText =
        `${adults} Adult`;


    if (adults !== 1) {

        travellerText =
            `${adults} Adults`;

    }


    if (children > 0) {

        travellerText +=
            `, ${children} ${
                children === 1
                    ? "Child"
                    : "Children"
            }`;

    }


    travellerPreview.textContent =
        travellerText;


    calculateCost();

}


/* =========================================
   COUNTERS
========================================= */

document
    .querySelectorAll(
        ".counter-btn"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const type =
                        button.dataset.type;


                    const action =
                        button.dataset.action;


                    changeGuestCount(
                        type,
                        action
                    );

                }
            );

        }
    );


/* =========================================
   CHANGE COUNT
========================================= */

function changeGuestCount(
    type,
    action
) {

    let value;


    if (type === "adults") {

        value = adults;

    } else if (
        type === "children"
    ) {

        value = children;

    } else {

        value = rooms;

    }


    if (action === "increase") {

        value++;

    } else {

        value--;

    }


    /* LIMITS */

    if (type === "adults") {

        if (value < 1) {

            value = 1;

        }


        if (value > 20) {

            value = 20;

        }


        adults = value;

    }


    if (
        type === "children"
    ) {

        if (value < 0) {

            value = 0;

        }


        if (value > 10) {

            value = 10;

        }


        children = value;

    }


    if (type === "rooms") {

        if (value < 1) {

            value = 1;

        }


        if (value > 10) {

            value = 10;

        }


        rooms = value;

    }


    updateGuestDisplay();

}


/* =========================================
   CHECK-IN
========================================= */

checkIn.addEventListener(
    "change",
    () => {

        dateError.textContent =
            "";


        if (checkIn.value) {

            checkOut.min =
                checkIn.value;

        }


        if (
            checkOut.value
            &&
            checkOut.value
            <= checkIn.value
        ) {

            checkOut.value =
                "";

        }


        updateDatePreview();

    }
);


/* =========================================
   CHECK-OUT
========================================= */

checkOut.addEventListener(
    "change",
    () => {

        validateDates();

        updateDatePreview();

    }
);


/* =========================================
   VALIDATE DATES
========================================= */

function validateDates() {

    dateError.textContent =
        "";


    if (
        !checkIn.value
        ||
        !checkOut.value
    ) {

        return false;

    }


    const start =
        new Date(
            checkIn.value
        );


    const end =
        new Date(
            checkOut.value
        );


    if (end <= start) {

        dateError.textContent =
            "Check-out must be after check-in.";

        return false;

    }


    return true;

}


/* =========================================
   CALCULATE NIGHTS
========================================= */

function calculateNights() {

    if (
        !checkIn.value
        ||
        !checkOut.value
    ) {

        return 0;

    }


    const start =
        new Date(
            checkIn.value
        );


    const end =
        new Date(
            checkOut.value
        );


    const difference =
        end - start;


    return Math.ceil(
        difference
        /
        (
            1000 *
            60 *
            60 *
            24
        )
    );

}


/* =========================================
   DATE PREVIEW
========================================= */

function updateDatePreview() {

    if (
        !checkIn.value
        ||
        !checkOut.value
    ) {

        datePreview.textContent =
            "Select dates";

        calculateCost();

        return;

    }


    const nights =
        calculateNights();


    if (nights <= 0) {

        datePreview.textContent =
            "Invalid dates";

        return;

    }


    datePreview.textContent =
        `${formatDate(
            checkIn.value
        )} → ${formatDate(
            checkOut.value
        )} (${nights} ${
            nights === 1
                ? "night"
                : "nights"
        })`;


    calculateCost();

}


/* =========================================
   FORMAT DATE
========================================= */

function formatDate(dateString) {

    const date =
        new Date(
            dateString
        );


    return date.toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "short",
            year: "numeric"
        }
    );

}


/* =========================================
   CALCULATE ESTIMATED COST
========================================= */

function calculateCost() {

    if (
        !selectedStay
        ||
        !checkIn.value
        ||
        !checkOut.value
    ) {

        estimatedCost.textContent =
            "₹0";

        return;

    }


    const nights =
        calculateNights();


    if (nights <= 0) {

        estimatedCost.textContent =
            "₹0";

        return;

    }


    const total =
        selectedStay.price
        *
        rooms
        *
        nights;


    estimatedCost.textContent =
        `₹${total.toLocaleString(
            "en-IN"
        )}`;

}


/* =========================================
   BACK TO STAY
========================================= */

document
    .getElementById(
        "backToStay"
    )
    .addEventListener(
        "click",
        () => {

            window.location.href =
                "stay.html";

        }
    );


/* =========================================
   CONTINUE REVIEW
========================================= */

document
    .getElementById(
        "continueReview"
    )
    .addEventListener(
        "click",
        () => {

            /* Validate stay */

            if (!selectedStay) {

                alert(
                    "Please select a stay first."
                );

                window.location.href =
                    "stay.html";

                return;

            }


            /* Validate dates */

            if (!validateDates()) {

                if (
                    !checkIn.value
                    ||
                    !checkOut.value
                ) {

                    dateError.textContent =
                        "Please select both check-in and check-out dates.";

                }

                return;

            }


            /* Build trip dates object */

            const tripDates = {

                checkIn:
                    checkIn.value,

                checkOut:
                    checkOut.value,

                nights:
                    calculateNights(),

                adults:
                    adults,

                children:
                    children,

                rooms:
                    rooms,

                specialRequest:
                    document
                        .getElementById(
                            "specialRequest"
                        )
                        .value.trim(),

                estimatedStayCost:
                    selectedStay.price
                    *
                    rooms
                    *
                    calculateNights()

            };


            /* Save */

            localStorage.setItem(
                "tripDates",
                JSON.stringify(
                    tripDates
                )
            );


            /* Continue */

            window.location.href =
                "review.html";

        }
    );


/* =========================================
   INITIALIZE
========================================= */

showDestination();

showStay();

updateGuestDisplay();

updateDatePreview();
