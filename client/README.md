This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `Stripe Testing`

To test the Stripe button use:<br />
card#: 4242 4242 4242 4242
cvc: any 3 digits
date: any future data

For more information go to [stripe documentation](https://stripe.com/docs/testing#regulatory-cards)

### `Cloning the project`

### `Firebase config object`

Replace the firebase config object in your firebase.utils.js with your own config object from the firebase dashboard.

For more information go to [firebase documentation](https://firebase.google.com/docs/web/setup)

### `Stripe publishable key`

Set the publishableKey in stripe-button.component.jsx to your own publishable_key value in your stripe dashboard.

For more information go to [stripe documentation - quick start](https://stripe.com/docs/development/quickstart)

### `Heroku deployment`

To deploy to Heroku [Heroku Buildpack for create-react-app](https://github.com/mars/create-react-app-buildpack)

Replace $APP_NAME with the name for your unique app.
<heroku create $app_name --buildpack https://github.com/mars/create-react-app>
