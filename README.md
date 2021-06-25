# Google Clone Using React

Note: Google Search API provides you a __Unique KEY__ which only gives you privilege to send 100 requests a day.
If you want to test or improve or bring changes into this clone, no worries. This project contains a dummy data file at path ***'src/TESLA_SEARCH_RESPONSE.js'*** which you can use while testing or for own respective uses.

## Links to follow for Google Search API:

STEP 1:
  https://developers.google.com/custom-search/v1/overview 
  Then click on "GET KEY", 
  sign in to your respective Google Account, 
  Choose your app, which you've created in your firebase account. 
  Copy your API_KEY. [KEY NO. 1]
  Use that API_KEY in your Google search API.

STEP 2:
 Go to https://cse.google.com/cse/create/new
 Then write, www.google.com, in Sites to search input field,(remember this is the field where you specify the search engine. You can choose whichever you want according to your needs.)
 This will create a CONTEXT_KEY, copy it and move to the STEP 3. [KEY NO. 2]
 
STEP 3: 
  Use this link: https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}
  where you put API_KEY and CONTEXT_KEY and the term which you wants to search.

  For this you can use any HTTP request API. 2 of the popular ones are:
  1_ Axios
  2_ Fetch API
  
## Topics Covered:

### React Hooks and building Custom Hooks
### Google Custom Search API
### React Router
### Custom CSS, Material UI, Styled Components
### Firebase to connect React App to Google
### Firebase Hosting 
### Prop-Types and default props


## Available Scripts

### `npm start`
### `npm test`
### `npm run build`
### `npm run build` fails to minify
### `npm run lint` To fix any linting errors.


# Here are notes that, I believe, are going to help you a fortune:

## ****** FIRST TIME INSTALLATION OF ESLINT ?? *******

### Step 0 => 
  npm install eslint-plugin-react --save-dev OR
  npm install eslint --save-dev
### Step 1 => 
  ./node_modules/.bin/eslint --init    (IN CASE YOU FORGET THIS, GO AT THE "Step NOT_RECOMMENDED but WORKING")
  Execute this command from root directory of your project!

### Step 2 => Create .eslintsrc file (if doesn't exist AFTER Step 0) in root directory of project
  And add this line
  { "extends": ["eslint:recommended", "plugin:react/recommended"] }

### Step 3 =>
  If "import" Error occurs in .js files, add (in .eslintrc.js):

  "parser": "babel-eslint"   (with)
  npm i babel-eslint --save-dev

### Step 4 =>
  If any error occurs for "document" in index.js, add the following line:
  Add 1st line (before import statements):  /* eslint-env browser */
  For further reference, refer to following link: https://stackoverflow.com/questions/41858052/solving-linter-error-no-undef-for-document

### Step 5 =>
  fix errors: (in package.json)
  "scripts": {
      "lint": "eslint --fix --ext .js,.jsx ."
  }

  Run ==> "npm run lint"

### Step 6 => To remove "React components" import and --unused-vars errors. (in .eslintrc.js)
  'extends': [
      'plugin:react/recommended'
  ]

### Step 7 => If async arrow function gives error of "eslint Parsing error: Unexpected token function with async"
  Do this, Go to .eslintrc.js file,
  add this (if parseOptions already exist, just add the line "ecmaVersion": 8):
  "parserOptions": {
    "ecmaVersion": 8
  }


### Step NOT_RECOMMENDED but WORKING:
(-------------------- HERE------------------)  Save as ( .eslintrc.js ) in root directory
  module.exports = {
      "env": {
          "browser": true,
          "es6": true
      },
      "extends": [
          "eslint:recommended",
          'plugin:react/recommended'
      ],
      "parserOptions": {
          "ecmaFeatures": {
              "experimentalObjectRestSpread": true,
              "jsx": true
          },
          "sourceType": "module"
      },
      "plugins": [
          "react"
      ],
      "rules": {
          "indent": [
              "error",
              "tab"
          ],
          "linebreak-style": [
              "error",
              "unix"
          ],
          "quotes": [
              "error",
              "single"
          ],
          "semi": [
              "error",
              "always"
          ]
      }
  };

If you get a error while building, stating

Failed to compile.
./src/index.css
Module build failed: BrowserslistError: Unknown browser query `dead`
    at Array.forEach (<anonymous>)

__Remove not dead in package.json file or browserslist(if at older version)__


**not dead**: Exclude browsers without official support in the last 24 months. not ie <= 11: Exclude IE 11 and older versions.