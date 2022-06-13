# Yondu_backend

## Installation
Use the package manager [npm]([https://pip.pypa.io/en/stable/](https://docs.npmjs.com/cli/v8/commands/npm-link)) to install npm package manager.

```bash
npm install
```
## Install globaly to run azure function local to you device
```bash
npm i -g azure-functions-core-tools 
```
## Starting the application
```bash
npm start
```
## Important

Please remove the extra element, DataSoruce object in src/utilities/database.ts file if your database config does not have a mysql socket

## Config

Please refer to src/config/index.ts for the env variables
