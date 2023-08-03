# send-tables-to-db-lib
Lib for send needed tables with his columns from one to another db and check userPermissions with Authorisation.

## Table of contents
- [Installation](#installation)
- [Start plugin](#start-plugin)
- [Functions](#functions)
- [The result of the plugin](#result-plugin)



One file with all the functionality of the plugin
```javascript
/index.js
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

1. Function that starts will send a few tables with his columns to another db

```javascript
 You have to write destionation db config in the function
 createTable('userName', 'Host', 'DataBase', 'Password', 'port');
```

2. When written true userName and password in that function will response user Permissions 

```javascript
    You have to write userName and password in the function
    CheckUserPermissions("userName", "password");
```


<div id='result-plugin'></div>

## The result of the plugin
### Console

#### Start
```
1. Send tables response

Success response (Table created successfully in the destination database.)
Bad response (Error)

2. Check User Permissions

Succes request:
    data: {
        message: 'Succes Request',
        permissions: [
            ...
        ]
    }


Bad Request: 

Message: 400 Bad Request
```