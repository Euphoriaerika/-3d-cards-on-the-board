# JavaScript Image Slider

This project is a website featuring animated cards with minimalist design, implemented using HTML, CSS, JS, and SASS. Please note that the site is currently not optimized for mobile devices.

## Functionality

The web application includes the following features:

- 3D animation for flipping cards.
- Randomization of cards predicting your ✨ fate ✨.
- A page refresh button to update the card content.

## Usage

To replace the default images with your own, download SVG images into the image/cards/ directory. In the data.js file, specify your data in the following format: "image name": "card description". All elements are generated in this file. To increase the number of cards, modify the 'num' parameter in the createAndAppendCards function.
Additionally, a mixin for resizing the cards is implemented. If the cards appear too large, you can adjust their size in the styles.css file using the sizeCard mixin.

## Screenshots

Initial page:
![Image Initial-page](./image/screenshots/s-all-close.jpg)

Single open card:
![Image Initial-page](./image/screenshots/s-one-open.jpg)

All cards open:
![Image Initial-page](./image/screenshots/s-all-open.jpg)

## Contact

For any questions or suggestions regarding this project, feel free to contact me via [LinkedIn](https://www.linkedin.com/in/your-linkedin-profile/).
