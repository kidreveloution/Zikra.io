var picker; // Global variable for the Pikaday instance
var showDate;
// Function to initialize or update Pikaday
function initializeOrUpdatePikaday(events) {
    // If picker already exists, destroy it
    if (picker) {
        picker.destroy();
    }

    // Initialize Pikaday with the new events
    picker = new Pikaday({
        field: document.getElementById('datepicker'),
        onSelect: function(date) {
            showDate = date.toISOString();
            console.log("Selected Date: ", date.toISOString());
            hideMarkers()
            //getMemoriesCalandar(showDate,map.getBounds())
            showAllMemories(showDate)

        },
        events: events
    });
}

// Function to get dates and update Pikaday
async function updatePikadayWithNewEvents() {
    var results = await getMemoriesForCalendar(); // Fetch new events
    initializeOrUpdatePikaday(results);
}

// Initial setup of Pikaday without events
picker = new Pikaday({
    field: document.getElementById('datepicker'),
    onSelect: function(date) {
        console.log("Selected Date: ", date.toISOString());
    },
    events: [] // Initialize with no events
});

// Update Pikaday with new events
updatePikadayWithNewEvents();


picker.setDate(new Date('7-Oct-2023'));
showAllMemories('2023-10-07T05:00:00.000Z');