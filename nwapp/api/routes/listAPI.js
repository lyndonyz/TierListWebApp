var express = require("express");
var router = express.Router();
var HTMLParser = require("node-html-parser");

try{
    fetch("https://www.prydwen.gg/star-rail/characters")
        .then(function (response) {
            return response.text();
         })
        .then(function (data) {
            var root = HTMLParser.parse(data);

            const charArray = [];
            const rootChild = root.querySelector(".employees-container");
            const avatarRootList = rootChild.querySelectorAll(".avatar-card.card");

            const charList = avatarRootList.map((x) => x.querySelector(".emp-name"));

            charList.map((x) => charArray.push(x.textContent));

            router.get("/", function (req, resList, next) {
                resList.send(charArray);
              });
        });
}
catch(error){
    alert("Failed to fetch Prydwen.gg");
}
module.exports = router;