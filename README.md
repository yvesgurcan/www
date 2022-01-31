Written from scratch in HTML, CSS/SASS, and a dash of JavaScript.

### Development

    npm i
    npm start

This will run a webpack server with hot reload enabled.

### Deployment

The HTML and JavaScript do not need to be compiled. Pushing updates to the `master` branch will publish the new version via GitHub Pages.

However, the stylesheets must be compiled from SASS to CSS. You can watch changes on the stylesheet files to compile them dynamically.

    npm compile:sass
