# revealjs-boilerplate

A boilerplate for reveal.js presentations provided with EJS as an HTML
templating engine and Gulp for easier packaging.

## Usage

All of the runtime dependencies are bundled with this project, and all of the
development dependencies are fetched using NPM.

```sh
npm install
```

### npm start

This command starts the development Web server on port `8080` and listens for
file changes in the `src` folder.

### npm run build

This command will simply do a build of the project in the `dist/` folder.

### npm run clean

This command will unlink the `dist/` folder.

## Structure

### src/

This folder and its subfolders should contain all your HTML files with EJS
extensions.

### src/assets/

This folder is a special case, as anything that is inside of it will be copied
verbatim to the `dist/assets` folder.

Best used to store assets.

### vendor/

This folder is copied verbatim to the `dist/vendor` folder.  Files in this
folder are not watched.  Any modification to these files require restarting the
`npm start` command.
