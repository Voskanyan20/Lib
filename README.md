# check-permission-lib
Lib for check User Permissions.

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

```javascript
checkPermission("userName");
```
<div id='functions'></div>

## Functions

Function that starts the user permission test when the checkPermission function starts

```javascript
checkPermission("userName");
```
<div id='result-plugin'></div>

## The result of the plugin
### Console

#### Start
```
Success response (200 : Permissions object)

Bad response (400 bad Request)

```