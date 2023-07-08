# send-tables-to-db-lib
Lib for send needed tables with his columns from one to another db.

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
npm i send-tables-to-db-lib
```

<div id='start-plugin'></div>

## Start Plugin

```Terminal
npm run dev or node index.js
```
<div id='functions'></div>

## Functions

Function that starts will send a few tables with his columns to another db

```javascript
 You have to write destionation db config in the function
 createTable('userName', 'Host', 'DataBase', 'Password', 'port');
```
<div id='result-plugin'></div>

## The result of the plugin
### Console

#### Start
```
Success response (Table created successfully in the destination database.)

Bad response (Error)

```