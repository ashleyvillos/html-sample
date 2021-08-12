// get elements from HTML
let container = document.getElementById('container')
let up = document.getElementById('up')
let down = document.getElementById('down')
let left = document.getElementById('left')
let right = document.getElementById('right')

// add event listeners to the buttons
up.onclick = move_up
down.onclick = move_down
left.onclick = move_left
right.onclick = move_right
document.addEventListener('keydown', key_event_listeners, false)


function key_event_listeners(event) {
    let name = event.key;

    if (name == 'ArrowUp') {
        move_up()
    }

    else if (name == 'ArrowDown') {
        move_down()
    }

    else if (name == 'ArrowRight') {
        move_right()
    }

    else if (name == "ArrowLeft") {
        move_left()
    }
}


// TYPES OF FUNCTIONS
// 1. Function with no parameter and no return value
// 2. Function with parameters and a return value
// 3. Function with no parameter but has a return value
// 4. Function with parameter and no return value

// This is an example of a function with parameter
function addition(num1, num2) {
    let sum = num1 + num2
    return sum
}

// const addition = (num1, num2) => {
//     let sum = num1 + num2
//     return sum
// }

function subtraction() {
    return "This is a subtraction function"
}

function multiplication(num1, num2) {
    console.log(num1 * num2)
}









// event listeners functions
function move_up() {
    // get the CSS styles of the container element
    let styles = getComputedStyle(container)

    let current_top = parseInt(styles.top)

    // html_element.style.css_attribute_that_you_want_to_change
    container.style.top = (current_top - 100) + 'px'
}

function move_down() {
    // get the CSS styles of the container element
    let styles = getComputedStyle(container)

    let current_top = parseInt(styles.top)

    // html_element.style.css_attribute_that_you_want_to_change
    container.style.top = (current_top + 100) + 'px'
}

function move_left() {
    // get the CSS styles of the container element
    let styles = getComputedStyle(container)

    let current_left = parseInt(styles.left)

    container.style.left = (current_left - 100) + 'px'
}

function move_right() {
    // get the CSS styles of the container element
    let styles = getComputedStyle(container)

    let current_left = parseInt(styles.left)

    container.style.left = (current_left + 100) + 'px'
}






