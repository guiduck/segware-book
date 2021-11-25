# segware-book

### Overview

This is an Authentication system made consuming data from segware-book-api using NextJS, ReactJS, Typescript, eslint, prettier, Jest, Enzyme, Chakra-ui, Nookies and Axios. The app consists of a basic login flow, with a Feed page where the ser can post messages and react with likes or loves when authenticated.

This project was bootstrapped with [Create Next App](https://nextjs.org/docs/api-reference/create-next-app).

## Tech Stack
### Devlopment
* UI: [React](https://reactjs.org/)
* State Control: [Context](https://pt-br.reactjs.org/docs/context.html) for global state e [React Hooks](https://reactjs.org/docs/hooks-intro.html) for local state
* Styling: [Chakra-ui](https://chakra-ui.com) 
* HTTP Client: [Axios](https://github.com/axios/axios)
* Form Control: [React-hook-form](https://react-hook-form.com)
* Icons: [Chakra-ui](https://chakra-ui.com/docs/media-and-icons/icon)

### API
* [Segware-book-api](https://segware-book-api.segware.io/api/docs/)

### Tests
* [Jest](https://jestjs.io/)
* [Enzyme](https://airbnb.io/enzyme/)

### Linter
* [Prettier](https://github.com/prettier/prettier)
* [ESLint](https://github.com/eslint/eslint)

## Usage
### Comands

Install dependencies:

```sh
yarn (or npm i)
```

Done! Start the service:

```sh
yarn dev
```

#Development mode

```sh
# run the app in development mode
yarn dev
# next dev starts the application in development mode with hot-code reloading, error reporting, and more.
```
#Production mode

```sh
# When building the Next.js app for production, you'll want to use next build:
next build
# next build creates an optimized production build of your application. The output displays information about each route.

Size – The number of assets downloaded when navigating to the page client-side. The size for each route only includes its dependencies.
First Load JS – The number of assets downloaded when visiting the page from the server. The amount of JS shared by all is shown as a separate metric.

# Followed by either next start, when you want to start the production server:
next start
# next start starts the application in production mode. The application should be compiled with next build first.

# Or next export, when exporting the app as static HTML:
next export
# next export allows you to export your app to static HTML, which can be run standalone without the need of a Node.js server.

# For more information refer to  docs.

For more information refer to * [Next.js CLI](https://nextjs.org/docs/api-reference/cli) docs.
```

or, in this case as in packege.json with yarn or npm:

![commands](https://github.com/guiduck/segware-book/blob/main/public/images/comands.jpeg)

If you don't do these steps, you might see this message: 

![nextstartproblem](https://github.com/guiduck/segware-book/blob/main/public/images/nextstartproblem.jpeg)


## Project Structure

* `src/` code base;
* `src/hooks` config and custom hook for data fetch, used to get the token and messages in this project;
* `src/components` components isolated with its styling (if any);
* `src/context` the AuthContext used for global state control of user Authentication related data;
* `src/Pages/` first level router components;

## Screenshots
![feedDark](https://github.com/guiduck/segware-book/blob/main/public/images/feedDark.jpeg)
![feedLight](https://github.com/guiduck/segware-book/blob/main/public/images/feedLight.jpeg)
![forgot](https://github.com/guiduck/segware-book/blob/main/public/images/forgot.jpeg)
![loginDark](https://github.com/guiduck/segware-book/blob/main/public/images/loginDark.jpeg)
![loginLight](https://github.com/guiduck/segware-book/blob/main/public/images/loginLight.jpeg)
![toast](https://github.com/guiduck/segware-book/blob/main/public/images/toast.jpeg)
![tokenCookie](https://github.com/guiduck/segware-book/blob/main/public/images/tokenCookie.jpeg)
