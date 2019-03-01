# HRR36 SDC Team 3 - beaREI Reviews Service

This repo includes the Reviews service of Team 3's System Design Capstone project.

Source code from Team 4.

## Related Projects

  - https://github.com/bearei/
  - https://github.com/bearei/thomas-proxy

## Table of Contents

1. [Usage](#Usage)
2. [Endpoints](#Endpoints)
3. [Requirements](#requirements)
4. [Development](#development)

## Usage

1. Ensure that mariadb and cassandra are installed and running.
2. [Install the project's dependencies](#installing-dependencies).
3. Open three terminal tabs for each of these processes: `npm run dev:react`, and `npm start`.
4. Run tests with `npm test`.
5. Navigate to `http://localhost:3003` to view the service.

## Endpoints
GET '/reviews/:itemId'

GET '/items/:itemId'

PATCH '/reviews/helpful/:postId'

PATCH '/reviews/notHelpful/:postId'

PATCH '/reviews/flag/:postId'

POST '/reviews'

DELETE '/reviews:postId'

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

