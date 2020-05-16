# cameo-interview-starterpack

Full stack starter kit for take-home internship interviews

## Overview

Your mission, should you choose to accept it, is to carve out 2 hours and create a a full-stack application to search and view Cameo talent.
We have set up a boilerplate Express backend and a React front-end for you to use.
This is what we use here at Cameo.
If you are more comfortable with another framework or tool, feel free to leverage it.

### Backend

Implement a new endpoint `HTTP GET /search` that accepts a query, and returns a filtered list of talent based on that query. A user should be able to search by `username`, `name`, or `category`.

**Note** A list of Cameo talent is provided in `TALENT_DATA.json`

### Frontend

Implement a search bar where a user can type a query.
It should call your `/search` endpoint when the user presses `Enter` or a `Submit` button.

Render the results of the query in a table.

Implement sorting of the results on the client-side.
A user should be able to sort by `price`, `score`, and `lastActiveAt`.

Implement filtering of the results on the client-side.
A user should be able to filter by `isAvailableForDirectMessage` and `isAvailableForBusinessRequests`.

### Bonus

**If you have time**, implement **ONE** of the following:

- Filter by a range of `price` values.
- Paginate the results of `/search` so it returns 5 results max. Let the client navigate through pages of results.
- Update `/search` to sort results server-side.
- Or anything else that sounds fun to you!

**Hey this is important!**
We hope you can spend about two hours on this project. If you can finish faster — great! If not, limit yourself and don't spend much longer than 2 hours MAX.

## Submission

When you have completed your application, complete the following:

- Briefly write up an explanation of your application, including any bonus features attempted in `SUBMISSION.md`.
- Delete `backend/node_modules` and `frontend/node_modules`
- Zip up `cameo-interview-starterpack`
- Rename to `LastName_FirstName_Cameo_Takehome.zip`
- Email to `tj@cameo.com` with the subject line `LastName_FirstName_Cameo_Takehome`

## Initial setup

### Mac

- Install [Homebrew](https://brew.sh/), an open-source package manager for macOS.
  - If you already have Homebrew installed, run `brew update` and `brew upgrade` to make sure things are up-to-date.
- Install Node by running `brew install node`.

### Windows

- Install Node from [nodejs.org](https://nodejs.org/en/download/), you may need to restart your terminal.

### Linux

- Install Node via your distribution's package manager.

## /frontend

### Setup

```
$ cd frontend
$ npm i
$ npm run start
// visit localhost:8080 in your browser
```

## /backend

### Setup

```
$ cd backend
$ npm i
$ npm run dev
// web server listening on local port 9090
```
