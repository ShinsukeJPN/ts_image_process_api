# Image Processing API
## Description
This is an image processing API. You can resize width and height of your image.

## How to use
- Place your image in `assets/full` directory.
- Run Express server and open your browser `localhost:3000`.
- Put valid URI with valid query strings
- Your image will be resized and check your `assets/thumb` directory.

## Endpoint
`GET /api/images`

## Parameters
All parameters are required.

|Attribute|Example|Note|
|--|--|--|
|filename|fjord.jpg|An image name including extension |
|width|200|Width after your image procesed|
|height|400|Height after your image processed|

## Example
`localhost:3000/api/images?filename=fjord.jpg&width=200&height=400`

## Environment
- Node.js v14.15.1
- Typescript


## Criteria

|Criteria|Spec|○ or ✖︎|
|--|--|--|
|Set up a project structure that promotes scalability|Source code is kept separate from compiled code.|○|
|-|All tests should be contained in their own folder.|○|
|Set up a project structure that promotes scalability|Separate modules are created for any processing.|○|
|-|Package.json should contain both devDependencies, and dependencies.|○|
|-|Scripts should be created for testing, linting/prettier, starting the server, and compiling TS.|○|
|-|Build script should run without error.|○|
|Add and use Express to a node.js project|Start script should run without error|○|
|-|Provided endpoint should open in the browser with status 200|○|
|Folow middleware documentation to use middleware to create an API|Accessing the provided URL with image information should successfully resize an image and save it to disk on first access, then pull from disk on subsequent access attempts.|○|
|-|An error message should be provided to the user when an image has failed to process or does not exist.|○|
|Write relevant unit tests with Jasmine and SuperTest to improve code quality and refactoring|Test script runs and all tests created pass.|○|
|-|There is at least 1 test per endpoint and at least one test for image processing.|○|
|Utilize TypeScript to avoid errors and improve maintainability|ll code in the SRC folder should use the .ts filetype.|○|
|-|Functions should include typed parameters and return types and not use the any type.|○|
|-|Import and Export used for modules.|○|
|-|Build script should successfully compile TS to JS.|○|
|Write well-formatted linted code|Prettier and Lint scripts should run without producing any error messages.|○|
