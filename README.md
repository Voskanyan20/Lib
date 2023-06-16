# transition-element-property-helper
Simple plugin for test transition property for site styles. The test results appear in the console.

[![npm-version](https://img.shields.io/npm/v/transition-element-property-helper)](https://www.npmjs.com/package/transition-element-property-helper)
[![repo-size](https://img.shields.io/github/repo-size/AntonPluginsCreator/transition-element-property-helper)](https://github.com/AntonPluginsCreator/transition-element-property-helper)

## Table of contents
- [Installation](#installation)
- [Start plugin](#start-plugin)
- [Functions](#functions)
- [The result of the plugin](#result-plugin)



One file with all the functionality of the plugin
```html
<script src="./index.js"></script>
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
new TransitionElementPropertyHelper(document.getElementById('div1')).start();
```
<div id='functions'></div>

## Functions

Function that starts the transition test when the transition starts

```javascript
new TransitionElementPropertyHelper(document.getElementById('div1')).start();
```

Function that shows the transition value once

```javascript
new TransitionElementPropertyHelper(document.getElementById('div1')).showTransition();
```

Function that shows the transition-delay value once

```javascript
new TransitionElementPropertyHelper(document.getElementById('div1')).showDelay();
```

Function that shows the transition-duration value once

```javascript
new TransitionElementPropertyHelper(document.getElementById('div1')).showDuration();
```

Function that shows the transition-property value once

```javascript
new TransitionElementPropertyHelper(document.getElementById('div1')).showProperty();
```


Function that shows the transition-timing-function value once

```javascript
new TransitionElementPropertyHelper(document.getElementById('div1')).showTimingFunction();
```

Function that displays a table and/or array with transition-property,
transition-duration, transition-timing-function, and transition-delay values once

```javascript
new TransitionElementPropertyHelper(document.getElementById('div1')).showTransitionTable();
```

Function that shows the value of the transition properties in an array once

```javascript
new TransitionElementPropertyHelper(document.getElementById('div1')).showTransitionArray();
```

Function that shows the value of the transition properties in a JSON string once

```javascript
new TransitionElementPropertyHelper(document.getElementById('div1')).showTransitionJSON();
```

<div id='result-plugin'></div>

## The result of the plugin
### Console

#### Start
```
Transition: font-size 2s ease-in 0s, transform 3s ease 1s
Delay: 0s, 1s
Duration: 2s, 3s
Property: font-size, transform
Timing function: ease-in, ease
```

#### showProperty like functions or showTransition

```
Transition: font-size 2s ease-in 0s, transform 3s ease 1s
```
```
Delay: 0s, 1s
```
```
Duration: 2s, 3s
```
```
Property: font-size, transform
```
```
Timing function: ease-in, ease
```

#### showTransitionTable
| (index) | Delay | Duration | Property | TimingFunction |
| ------ | ------ | ------ | ------ | ------ |
| 0   |'0s'|'2s'|'font-size'|'ease-in'|
| 1   |'1s' |'3s'|'transform'|'ease'|

Array(2)

#### showTransitionArray
```
(2) [{…}, {…}]
  0: {Delay: '0s', Duration: '2s', Property: 'font-size', TimingFunction: 'ease-in'}
  1: {Delay: '1s', Duration: '3s', Property: 'transform', TimingFunction: 'ease'}
  length: 2
  [[Prototype]]: Array(0)
```

#### showTransitionJSON
```
[{"Delay":"0s","Duration":"2s","Property":"font-size","TimingFunction":"ease-in"},
{"Delay":"1s","Duration":"3s","Property":"transform","TimingFunction":"ease"}]
```
