// Function to show the corresponding GIF sections one by one
function showGIFs(sectionNumber) {
    // Hide the title and the first "Click Here" button
    document.getElementById("titleSection").style.display = "none";
    
    // Hide all sections before showing the next one
    document.getElementById("gifSection1").style.display = "none";
    document.getElementById("gifSection2").style.display = "none";
    document.getElementById("gifSection3").style.display = "none";
    document.getElementById("letter").style.display = "none";
    document.getElementById("valentineMessage").style.display = "none"; // Hide final message

    // Show the corresponding section based on sectionNumber
    if (sectionNumber === 1) {
        document.getElementById("gifSection1").style.display = "block"; // Show first GIF
    } else if (sectionNumber === 2) {
        document.getElementById("gifSection2").style.display = "block"; // Show second GIF
    } else if (sectionNumber === 3) {
        document.getElementById("gifSection3").style.display = "block"; // Show third GIF
    }
}

// Function to show the letter content after all GIFs
function showLetter() {
    // Hide all GIF sections
    document.getElementById("gifSection1").style.display = "none";
    document.getElementById("gifSection2").style.display = "none";
    document.getElementById("gifSection3").style.display = "none";

    // Show the letter section
    document.getElementById("letter").style.display = "block"; // Show the letter
}

// Function to show the Valentine's message after letter
function showValentineMessage() {
    // Hide the letter section
    document.getElementById("letter").style.display = "none";

    // Show the final Valentine's message
    document.getElementById("valentineMessage").style.display = "block";
}

