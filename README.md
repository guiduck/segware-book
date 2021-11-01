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

Install dependencies:

```sh
yarn (or npm i)
```

Done! Start the service:

```sh
yarn start
```

## Project Structure

* `src/` code base;
* `src/hooks` config and custom hook for data fetch, used to get the token and messages in this project;
* `src/components` components isolated with its styling (if any);
* `src/context` the AuthContext used for global state control of user Authentication related data;
* `src/Pages/` first level router components;

## Comandos

```sh
# run the app
yarn start

# build static assets
yarn build 
```
## Screenshots
![feedDark](https://github.com/guiduck/segware-book/blob/main/public/images/feedDark.jpeg)
![feedLight](https://github.com/guiduck/segware-book/blob/main/public/images/feedLight.jpeg)
![forgot](https://github.com/guiduck/segware-book/blob/main/public/images/forgot.jpeg)
![loginDark](https://github.com/guiduck/segware-book/blob/main/public/images/loginDark.jpeg)
![loginLight](https://github.com/guiduck/segware-book/blob/main/public/images/loginLight.jpeg)
![toast](https://github.com/guiduck/segware-book/blob/main/public/images/toast.jpeg)
![tokenCookie](https://github.com/guiduck/segware-book/blob/main/public/images/tokenCookie.jpeg)
