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
