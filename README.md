# Word Counter

An optimized text analysis tool for real-time word, character, and line counting, implemented using vanilla HTML, CSS, and JavaScript.

## Project Structure

- **index.html**: Defines the DOM structure, with Bootstrap integration for responsive layout.
- **style.css**: Customizes UI elements with a focus on transitions, accessibility, and typography (JetBrains Mono).
- **app.js**: Implements core functionality with optimized regex patterns for multi-language word detection and efficient event handling.

## Key Features

- **Dynamic Word Matching**: Uses `/([^\u0000-\u007F]|\w)+/gi` regex for accurate multilingual word parsing.
- **Character & Line Counter**: Provides real-time character count and line break handling with `/\r?\n|\r/g` matching.
- **Interactive UI**: Custom clear button for quick reset, leveraging CSS transitions for seamless UX.

## Performance
- **Event Throttling**: Inline event listeners are bound to oninput, optimizing for real-time user input.
Regex Optimization: Pattern matching is carefully selected for both performance and accuracy with large inputs.

## Customization
- **Styling**: Modify color schemes or add themes via style.css. Background image and font adjustments are straightforward.
Functional Extensions: To extend parsing logic, modify regex patterns in app.js to accommodate additional languages or exclude specific patterns.

## Dependencies
- **Bootstrap v5.1.3**: For streamlined styling and responsive design.
- **Google Fonts (JetBrains Mono)**: Monospaced font for improved readability
