# Elektroniczny Rejestr Członków 2 (Frontend)

The frontend is written in TypeScript + React and uses the [Mantine UI](https://mantine.dev) components library.

This is a version of [Mantine's `vite-min-template`](https://github.com/mantinedev/vite-min-template),
modified mostly just to avoid using Yarn.

## Development

As is usual in Javascript projects, this one uses a shit ton of tooling as well.
Try not to think too much about it, you don't *need* to understand *all* the boilerplate.

First of all, install [NVM](https://github.com/nvm-sh/nvm). This is a tool for managing Node.js versions.
Then clone and `cd` into this repository and run `nvm use`. This will install the Node.js version
specified in the `.nvmrc` file.

For dependency management, the project uses NPM. It comes installed with Node.js, so no extra step
is needed there. To install the project's dependencies run `npm install`.

### VS Code Setup

Install the following extensions:
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

The provided `.vscode/settings.json` file tells VS Code to use the Prettier formatter for
JS and TS files and enables formatting on save. Unless you have a good reason, keep those two settings.

### Other editors

You're on your own. Try and get your IDE to use the Prettier formatter and ESLint though.

### Running the Project

To run Vite's development server: (with live reload)
```
npm run dev
```
This will print the URL for you to open in your browser.

