# transition-element-property-helper
Simple plugin for test transition property for site styles. The test results appear in the console.

[![npm-version](https://img.shields.io/npm/v/transition-element-property-helper)](https://www.npmjs.com/package/role-base-control-lib)
[![repo-size](https://img.shields.io/github/repo-size/AntonPluginsCreator/transition-element-property-helper)](https://github.com/AntonPluginsCreator/transition-element-property-helper)

## Table of contents
- [Installation](#installation)
- [Start plugin](#start-plugin)
- [Functions](#functions)
- [The result of the plugin](#result-plugin)



One file with all the functionality of the plugin
```javascript
./index.js
```

One minified file with all the functionality of the plugin
```html
<script src="src/transition-element-property-helper.min.js"></script>
```
<div id='installation'></div>

## Installation

```bash
npm i role-base-control-lib
```

<div id='start-plugin'></div>

## Start Plugin

```javascript
new checkPermission("userName" , "permissionTitle").start();
```
<div id='functions'></div>

## Functions

Function that starts the user permission test when the checkPermission function starts

```javascript
new checkPermission("userName" , "permissionTitle").start();
```
<div id='result-plugin'></div>

## The result of the plugin
### Console

#### Start
```
Success response : permission checked : permission title,

Bad response : You have not that permission

```