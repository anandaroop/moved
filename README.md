# Moved

A change-of-address announcement that allowed me to experiment with:

- Mapbox GL JS
- keyframe animations 
  - in pure CSS
  - and with [react-keyframes](https://github.com/zeit/react-keyframes)
- await/async

## Development

### 0. Get a token

In order to hack on this you will need a [Mapbox access token](https://www.mapbox.com/help/how-access-tokens-work/)

### 1. Clone the repo 

```sh
git clone https://github.com/anandaroop/moved.git
cd moved
```

### 2. Configure the app with some secrets

Such as the Mapbox access token you obtained in Step 0.

```sh
cp src/config.example.js src/config.js 
# replace settings as necessary
```

### 3. Install dependencies

```sh
yarn install # or npm install
```

### 4. Start the create-react-app server

```sh
yarn start
open http://localhost:3000/
```

### 5. Run the Cypress spec


```sh
yarn run cypress open
# then click on simple_spec.js
```

### 6. Start the Storybook server

```sh
yarn run storybook
open http://localhost:9009/
```

Storybook is probably the easiest place to develop
