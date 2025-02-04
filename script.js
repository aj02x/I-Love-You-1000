/* General Body Styling */
body {
    font-family: 'Open Sans', sans-serif; 
    background: linear-gradient(to bottom right, #ff8a9d, #ffe0f0); /* Soft pastel gradient */
    color: #333;
    text-align: center;
    padding: 20px;
    background-image: url('https://www.transparenttextures.com/patterns/pw-maze-2.png'); /* Add soft background pattern */
    background-repeat: repeat;
    position: relative; /* Ensure elements are positioned relative to this container */
}

/* Title Styling */
.title h1 {
    color: #ff66b2; 
    font-size: 50px;
    margin-bottom: 20px;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
    animation: fadeInTitle 1.5s ease-out;
}

/* Button Styling */
.cute-button {
    padding: 12px 30px;
    font-size: 18px;
    background-color: #ff66b2;
    color: white;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin-top: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative; /* Ensures it is clickable */
    z-index: 2; /* Ensures the button stays on top of other content */
}

/* Button Hover Effects */
.cute-button:hover {
    background-color: #ff3385;
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    animation: bounce 0.5s ease-in-out infinite alternate;
}

/* Content Styling */
.content-item {
    display: none;
    margin-top: 20px;
    font-size: 18px;
    line-height: 1.8;
    color: #333;
    position: relative; /* Position content relative to the body */
    z-index: 1; /* Ensure the content stays behind buttons */
}

/* Letter Section Styling */
#letter {
    text-align: left;
    max-width: 700px;
    margin: 0 auto;
    padding: 30px;
    background-color: #f1f8ff;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    animation: fadeIn 1.5s ease-in-out;
}

/* Valentine's Message Section Styling */
#valentineMessage {
    text-align: center;
    font-size: 20px;
    color: #ff66b2;
    display: none;
}

.valentine-image {
    margin-top: 20px;
}

/* GIF Section Styling */
.gif-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.gif-container img {
    width: 400px;
    height: 700px;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

/* Fade In Animation for Title */
@keyframes fadeInTitle {
    0% {
        opacity: 0;
        transform: translateY(-50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Fade In Animation for Content */
@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(-30px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Button Animation for Hover */
@keyframes bounce {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.1);
    }
}
