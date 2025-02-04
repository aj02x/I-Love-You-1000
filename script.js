// Function to display the first GIF and hide title, button, and other sections
function showGIFs(gifNumber) {
    // Hide the title and button when the first GIF is shown
    document.querySelector('.title').style.display = 'none';  // Hide title
    document.querySelector('.cute-button').style.display = 'none';  // Hide the "Click Here" button

    // Hide all sections
    document.getElementById("gifSection1").style.display = "none";
    document.getElementById("gifSection2").style.display = "none";
    document.getElementById("gifSection3").style.display = "none";
    document.getElementById("letter").style.display = "none";

    // Show the correct section based on gifNumber
    if (gifNumber === 1) {
        document.getElementById("gifSection1").style.display = "block"; // Show first GIF
    } else if (gifNumber === 2) {
        document.getElementById("gifSection2").style.display = "block"; // Show second GIF
    } else if (gifNumber === 3) {
        document.getElementById("gifSection3").style.display = "block"; // Show third GIF
    }
}

// Function to display the letter content after all GIFs
function showLetter() {
    // Hide all sections
    document.getElementById("gifSection1").style.display = "none"; 
    document.getElementById("gifSection2").style.display = "none"; 
    document.getElementById("gifSection3").style.display = "none"; 

    // Show the letter section
    document.getElementById("letter").style.display = "block"; // Show the letter
}
