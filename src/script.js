let colorIndex = 0;

// A function that changes the color of a string. 
// Rotates through different colors.
// Works on multiple dom elements at the same time, separately.
function colorMe(event) {
    const colors = ["text-yellow-500", "text-orange-500", "text-red-500", "text-pink-500", "text-purple-600", "text-teal-500", "text-emerald-500"];
    
    const element = event.target;

    colors.forEach(color => element.classList.remove(color));
    element.classList.add(colors[colorIndex]);

    colorIndex = (colorIndex + 1) % colors.length;
}

window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".ColorMe").forEach(element => {
        element.addEventListener("mouseover", colorMe);
    });
});
