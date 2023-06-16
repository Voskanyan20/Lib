const axios = require("axios");

const checkPermission = (userName, permissionTitle, uuid) => {
    axios.post("http://localhost:8080/private/checkUserPermissions/", { userName: userName, permissionTitle: permissionTitle }, { headers: { "Authorization": uuid } }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = {checkPermission}