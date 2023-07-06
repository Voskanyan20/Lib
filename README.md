# check-permission-lib
Lib for send needed tables from one to another db.

## Table of contents
- [Installation](#installation)
- [Start plugin](#start-plugin)
- [Functions](#functions)
- [The result of the plugin](#result-plugin)



One file with all the functionality of the plugin
```javascript
index.js
```
<div id='installation'></div>

## Installation

```bash
npm i check-permission-lib
```

<div id='start-plugin'></div>

## Start Plugin

```Terminal
npm run dev or node indexjs
```
<div id='functions'></div>

## Functions

Function that starts the user permission test when the checkPermission function starts

```javascript
createTable(tableName);
```
<div id='result-plugin'></div>

## The result of the plugin
### Console

#### Start
```
Success response (Table created successfully in the destination database.)

Bad response (Error)

```