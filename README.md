# AngularPythonPi  [![Node.js CI](https://github.com/usiiasirrush/angular-python-pi/actions/workflows/node.js.yml/badge.svg)](https://github.com/usiiasirrush/angular-python-pi/actions/workflows/node.js.yml) [![Docker Image CI](https://github.com/usiiasirrush/angular-python-pi/actions/workflows/docker-image.yml/badge.svg)](https://github.com/usiiasirrush/angular-python-pi/actions/workflows/docker-image.yml)

Example Repository of a node server using express to deliver an Angular application. The Angular application is then able to call an endpoint in controller.py via get with a button called "Run Script" that is availab le at the application. This will run the script in gunicorn.

## Docker with Build of Angular Application Directly on Device

Run the following to create the docker image
`npm run-script dockerBuild`
And then run the image with docker.
`npm run-script dockerRun`

## Development server

Run `npm run-script start-dev` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run in another shell
`webdriver-manager start`

Then run `npm run-script e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

You will need to have protractor installed globlally for this to work `npm -g install protractor`

You will also need the image running on port 8080.

## Running Gunicorn
Assuming you have python and gunicorn installed this will start the python API locally
```npm run-script runAPI```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
