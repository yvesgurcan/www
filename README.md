Written from scratch with HTML and CSS/SASS.

### Development

    npm i
    npm start

This will run a webpack server with hot reload enabled.

You can watch changes on the SASS stylesheet files to compile them dynamically:

    npm style:watch

### Deployment

Pushing updates to the `master` branch will publish the new version via GitHub Pages.

The stylesheets must be compiled from SASS to CSS.

    npm style:compile
