/*
• Word matching
REGEX PATTERN: /[\w]+/gi
• Match only english words
REGEX PATTERN: /([^\u0000-\u007F]|\w)+/gi
• Match english or non-english words
*/

// Define variables
const textarea = document.getElementById("textarea")
const words_element = document.getElementById("word_counter")
const characters_element = document.getElementById("character_counter")
const lines_element = document.getElementById("line_counter")
const clear_button_element = document.getElementById("clear_button")

// Word counter function
function word_counter() {
    const regex_pattern = /([^\u0000-\u007F]|\w)+/gi
    const word_checker = textarea.value.match(regex_pattern)
    if (word_checker !== null) {
        const total_words = word_checker.length;
        if (total_words > 1) {
            words_element.innerHTML = "Words: " + total_words
        } else {
            words_element.innerHTML = "Word: " + total_words
        }
    } else {
        words_element.innerHTML = "Word: 0"
    }
}

// Character counter function
function character_counter() {
    const total_characters = textarea.value.length
    if (total_characters > 1) {
        characters_element.innerHTML = "Characters: " + total_characters
    } else {
        characters_element.innerHTML = "Character: " + total_characters
    }
}

// Line counter function
function line_counter() {
    const regex_pattern = /\r?\n|\r/g
    const line_checker = textarea.value.match(regex_pattern)
    if (line_checker !== null) {
        const total_lines = line_checker.length + 1;
        if (total_lines > 1) {
            lines_element.innerHTML = "Lines: " + total_lines
        } else {
            lines_element.innerHTML = "Line: " + total_lines
        }
    } else {
        lines_element.innerHTML = "Line: 1"
    }
}

// Clear textarea function
function clear_textarea() {
    // Empty the textarea element value
    textarea.value = ""
    words_element.innerHTML = "Word: 0"
    characters_element.innerHTML = "Character: 0"
    lines_element.innerHTML = "Line: 1"
}


// When the input data changed
textarea.oninput = function () {
    word_counter()
    character_counter()
    line_counter()
}


// When the clear button clicked
clear_button_element.onclick = function () {
    clear_textarea()
}