function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

link1.addEventListener('click', () => {
    scrollToElement('.header', -150); // Example: Adjusts scroll position by -50px
});

function scrollToElement(selector, offset = 0) {
    const element = document.querySelector(selector);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: elementPosition + offset, // Apply the offset
            behavior: 'smooth'
        });
    }
}

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.sub-header');
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

link4.addEventListener('click', () => {
    scrollToElement('.header', -150); // Example: Adjusts scroll position by -50px
});

document.addEventListener('DOMContentLoaded', () => {
    const themeToggles = document.querySelectorAll('#theme-toggle, #theme-toggle2');
    
    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
        });
    });

    // Create the glowing cursor element
    const glowingCursor = document.createElement('div');
    glowingCursor.classList.add('glowing-cursor');
    document.body.appendChild(glowingCursor);

    // Function to update the position of the glowing cursor
    const updateCursorPosition = (e) => {
        glowingCursor.style.left = `${e.clientX}px`;
        glowingCursor.style.top = `${e.clientY + window.scrollY}px`;
        glowingCursor.style.opacity = 1; // Show the glow
    };

    // Update the position of the glowing cursor on mousemove
    document.addEventListener('mousemove', updateCursorPosition);

    // Update the position of the glowing cursor on scroll
    document.addEventListener('scroll', () => {
        const event = new MouseEvent('mousemove', {
            clientX: glowingCursor.style.left.replace('px', ''),
            clientY: glowingCursor.style.top.replace('px', '') - window.scrollY
        });
        updateCursorPosition(event);
    });

    // Hide the glowing cursor when the mouse leaves the window
    document.addEventListener('mouseleave', () => {
        glowingCursor.style.opacity = 0; // Hide the glow
    });

    // Increase the size of the glowing cursor when hovering over li, button, and a elements
    const elements = document.querySelectorAll('li, button, a, label');
    elements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            glowingCursor.style.width = '200px';
            glowingCursor.style.height = '200px';
        });
        element.addEventListener('mouseleave', () => {
            glowingCursor.style.width = '10px';
            glowingCursor.style.height = '10px';
        });
    });
});

let allImages = document.querySelectorAll("img");
allImages.forEach((value)=>{
    value.oncontextmenu = (e)=>{
        e.preventDefault();
    }
})

document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".container");
    
    function checkBoxes() {
        const triggerBottom = window.innerHeight * 0.8;
        
        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                box.classList.add("show");
            } else {
                box.classList.remove("show");
            }
        });
    }
    
    window.addEventListener("scroll", checkBoxes);
    checkBoxes();
});

document.addEventListener('DOMContentLoaded', function () {
    const modalToggles = document.querySelectorAll('.modal-toggle');
    const body = document.body;

    modalToggles.forEach((toggle) => {
        toggle.addEventListener('change', function () {
            if (this.checked) {
                // Lock scroll
                body.style.overflow = 'hidden';
            } else {
                // Unlock scroll
                body.style.overflow = 'auto';
            }
        });
    });
});