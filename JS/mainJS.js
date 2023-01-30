function randomColor() {
    var random = Math.floor(Math.random() * 300);
    return random;
}

function getRGBColor() {
    const elements = [];

    for (i = 0; i < 1000; i++) {
        // Create new element
        const element = document.createElement("div");
        element.style.background = getRGBColor();

        // Save a reference to the element
        elements.push(element);

        // Add element to the DOM
        document.body.appendChild(element);


        setInterval(function () {
            // Update the color of every element
            for (element of elements) {
                const rgbColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
                element.style.background = getRGBColor();

                return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
            };
        }, 3000); // Execute every 3000 milliseconds (3 seconds)
        
    }
}