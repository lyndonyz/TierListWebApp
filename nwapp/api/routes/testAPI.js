var express = require("express");
var router = express.Router();
var HTMLParser = require("node-html-parser");

try {
  fetch("https://www.prydwen.gg/star-rail/tier-list/")
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      var root = HTMLParser.parse(data);

      // S+ Data
      const sPlusA = [];
      const sPlusAA = [];
      const sPlus = root.querySelector(".tier-rating.s-plus").nextSibling;
      const sPlusChar = sPlus.querySelectorAll(".custom-tier-burst");
      const sPlusList = sPlusChar.map((x) =>
        x.querySelectorAll(".avatar-card")
      );

      for (y = 0; y < sPlusList.length; y++) {
        const sPlusFin = sPlusList[y].map((x) => x.querySelector('noscript'));
        sPlusA.push(sPlusFin.map((x) => x.textContent.substring(x.textContent.indexOf('alt="')+5, x.textContent.indexOf('"/></picture>'))));
      }

      // S Data
      const sA = [];
      const s = root.querySelector(".tier-rating.s").nextSibling;
      const sChar = s.querySelectorAll(".custom-tier-burst");
      const sList = sChar.map((x) => x.querySelectorAll(".avatar-card"));

      for (y = 0; y < sList.length; y++) {
        const sFin = sList[y].map((x) => x.querySelector('noscript'));
        sA.push(sFin.map((x) => x.textContent.substring(x.textContent.indexOf('alt="')+5, x.textContent.indexOf('"/></picture>'))));
      }

      // A Data
      const aA = [];
      const a = root.querySelector(".tier-rating.a").nextSibling;
      const aChar = a.querySelectorAll(".custom-tier-burst");
      const aList = aChar.map((x) => x.querySelectorAll(".avatar-card"));
    
      for(y = 0; y < aList.length; y++){
        const aFin = aList[y].map((x) => x.querySelector('noscript'))
        aA.push(aFin.map((x) => x.textContent.substring(x.textContent.indexOf('alt="')+5, x.textContent.indexOf('"/></picture>'))));
      }
    
      // B Data
      const bA = [];
      const b = root.querySelector(".tier-rating.b").nextSibling;
      const bChar = b.querySelectorAll(".custom-tier-burst");
      const bList = bChar.map((x) => x.querySelectorAll(".avatar-card"));
    
      for(y = 0; y < bList.length; y++){
        const bFin = bList[y].map((x) => x.querySelector('noscript'))
        bA.push(bFin.map((x) => x.textContent.substring(x.textContent.indexOf('alt="')+5, x.textContent.indexOf('"/></picture>'))));
      }
    
      // C Data
      const cA = [];
      const c = root.querySelector(".tier-rating.c").nextSibling;
      const cChar = c.querySelectorAll(".custom-tier-burst");
      const cList = cChar.map((x) => x.querySelectorAll(".avatar-card"));
    
      for(y = 0; y < cList.length; y++){
        const cFin = cList[y].map((x) => x.querySelector('noscript'))
        cA.push(cFin.map((x) => x.textContent.substring(x.textContent.indexOf('alt="')+5, x.textContent.indexOf('"/></picture>'))));
      }

        // D Data
        const dA = [];
        const d = root.querySelector(".tier-rating.d").nextSibling;
        const dChar = d.querySelectorAll(".custom-tier-burst");
        const dList = dChar.map((x) => x.querySelectorAll(".avatar-card"));
      
        for(y = 0; y < cList.length; y++){
          const dFin = dList[y].map((x) => x.querySelector('noscript'))
          dA.push(dFin.map((x) => x.textContent.substring(x.textContent.indexOf('alt="')+5, x.textContent.indexOf('"/></picture>'))));
        }

      router.get("/", function (req, res, next) {
        res.send("S+: "+ sPlusA +"\n S: " + sA +" A: " + aA+" B: " + bA+" C: " + cA+" D: " + dA);
      });
    });
} catch (error) {
  alert("Error fetching Prydwen.gg webpage");
}

module.exports = router;
