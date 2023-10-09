var express = require("express");
var router = express.Router();
var HTMLParser = require("node-html-parser");

try {
  fetch("https://genshin.gg/star-rail/tier-list/")
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      var root = HTMLParser.parse(data);

      const rootList = root.querySelector(".tierlist-dropzone");
      const rootFin = rootList.querySelectorAll(".dropzone-row");
      const rootChart = rootFin.map((x) =>
        x.querySelectorAll(".dropzone-characters.d-none.d-md-flex")
      );

      // S Data
      const sA = [];
      const sList = rootChart[0].map((x) => x.querySelectorAll(".tierlist-portrait.lg"));
      const sFin = sList[0].map((x) => x.querySelector(".tierlist-name"));
      sA.push(sFin.map((x) => x.textContent));

      // A Data
      const aA = [];
      const aList = rootChart[1].map((x) => x.querySelectorAll(".tierlist-portrait.lg"));
      const aFin = aList[0].map((x) => x.querySelector(".tierlist-name"));
      aA.push(aFin.map((x) => x.textContent));


      // B Data
      const bA = [];
      const bList = rootChart[2].map((x) => x.querySelectorAll(".tierlist-portrait.lg"));
      const bFin = bList[0].map((x) => x.querySelector(".tierlist-name"));
      bA.push(bFin.map((x) => x.textContent));

      // C Data
      const cA = [];
      const cList = rootChart[3].map((x) => x.querySelectorAll(".tierlist-portrait.lg"));
      const cFin = cList[0].map((x) => x.querySelector(".tierlist-name"));
      cA.push(cFin.map((x) => x.textContent));

      // D Data
      const dA = [];
      const dList = rootChart[4].map((x) => x.querySelectorAll(".tierlist-portrait.lg"));
      const dFin = dList[0].map((x) => x.querySelector(".tierlist-name"));
      dA.push(dFin.map((x) => x.textContent));

      router.get("/", function (req, res2, next) {
        res2.send("S: "+ sA +"A: " + aA +" B: " + bA +" C: " + cA +" D: " + dA);
      });
    });
} catch (error) {
  alert("Error fetching Prydwen.gg webpage");
}

module.exports = router;