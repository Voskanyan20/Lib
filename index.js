const axios = require("axios");

const checkPermission = (userName) => {
    axios.post("http://localhost:8080/private/checkUserPermissions/", { userName: userName }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = {
    checkPermission
}