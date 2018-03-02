# Change

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
git clone https://github.com/anandaroop/change.git
cd change
```

### 2. Configure the app with some secrets

Such as the Mapbox access token you obtained in Step 0.

```sh
cp config.example.js config.js 
vi config.js
```

### 3. Start the Storybook server

```sh
yarn run storybook
open http://localhost:9009/
```
