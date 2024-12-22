// Sample doctor data
const doctors = [
    { name: "Dr. Smith", specialty: "Cardiologist" },
    { name: "Dr. Lee", specialty: "Dermatologist" },
    { name: "Dr. Patel", specialty: "Pediatrician" }
];

// Display doctors
const doctorList = document.getElementById("doctor-list");
doctors.forEach(doctor => {
    const div = document.createElement("div");
    div.textContent = ${doctor.name} - ${doctor.specialty};
    doctorList.appendChild(div);
});

// Appointment form
document.getElementById("appointment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Appointment booked successfully!");
});

// Health tips
const healthTips = [
    "Drink plenty of water.",
    "Exercise regularly.",
    "Get enough sleep."
];

const tipsDiv = document.getElementById("health-tips");
healthTips.forEach(tip => {
    const p = document.createElement("p");
    p.textContent = tip;
    tipsDiv.appendChild(p);
});