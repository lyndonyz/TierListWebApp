const got = require("got");
const { parse } = require('node-html-parser');

const f = async () => {
  
  const response = await got.get(
    "https://www.prydwen.gg/star-rail/tier-list/",
    {}
  );
  const root = parse(response.body);

  const sPlusA = [];
  const sPlus = root.querySelector(".tier-rating.s-plus").nextSibling;
  const sPlusChar = sPlus.querySelectorAll(".custom-tier-burst");
  const sPlusList = sPlusChar.map((x) => x.querySelectorAll(".avatar-card"));

  for(y = 0; y < sPlusList.length; y++){
    const sPlusFin = sPlusList[y].map((x) => x.querySelector(".emp-name"))
    sPlusA.push(sPlusFin.map((x) => x.textContent));
  }


  const sA = [];
  const s = root.querySelector(".tier-rating.s").nextSibling;
  const sChar = s.querySelectorAll(".custom-tier-burst");
  const sList = sChar.map((x) => x.querySelectorAll(".avatar-card"));

  for(y = 0; y < sList.length; y++){
    const sFin = sList[y].map((x) => x.querySelector(".emp-name"))
    sA.push(sFin.map((x) => x.textContent));
  }


  const aA = [];
  const a = root.querySelector(".tier-rating.a").nextSibling;
  const aChar = a.querySelectorAll(".custom-tier-burst");
  const aList = aChar.map((x) => x.querySelectorAll(".avatar-card"));

  for(y = 0; y < aList.length; y++){
    const aFin = aList[y].map((x) => x.querySelector(".emp-name"))
    aA.push(aFin.map((x) => x.textContent));
  }


  const bA = [];
  const b = root.querySelector(".tier-rating.b").nextSibling;
  const bChar = b.querySelectorAll(".custom-tier-burst");
  const bList = bChar.map((x) => x.querySelectorAll(".avatar-card"));

  for(y = 0; y < bList.length; y++){
    const bFin = bList[y].map((x) => x.querySelector(".emp-name"))
    bA.push(bFin.map((x) => x.textContent));
  }


  const cA = [];
  const c = root.querySelector(".tier-rating.c").nextSibling;
  const cChar = c.querySelectorAll(".custom-tier-burst");
  const cList = cChar.map((x) => x.querySelectorAll(".avatar-card"));

  for(y = 0; y < cList.length; y++){
    const cFin = cList[y].map((x) => x.querySelector(".emp-name"))
    cA.push(cFin.map((x) => x.textContent));
  }

  console.log("S+: " + sPlusA);
  console.log("S: " + sA);
  console.log("A: " + aA);
  console.log("B: " + bA);
  console.log("C: " + cA);
};

f();