const board = document.querySelector("#board");
// const text = document.querySelector(".text");
const box = document.querySelectorAll(".box");
const one = document.querySelector(".one");
const two = document.querySelector(".two");

// one.addEventListener("click", () => {
//   text.style.display = "none";
//   text.style.display = "block";
// });

// two.addEventListener("click", () => {
//   text.style.display = "none";
// });
box.forEach((el) => {
  el.addEventListener("click", () => {
    box.forEach((el1) => {
      el1.style.background = "#777474";
    });
    el.style.background = "red";
  });
});



























// const header = document.createElement("div");
// header.setAttribute("class", "hero");
// console.log(header);

// const headerTitle = document.createElement("h1");
// headerTitle.innerHTML = "Product";
// headerTitle.setAttribute("class", "text");

// const img = document.createElement("img");
// img.src = "./d1.svg";
// console.log(img);
// console.log(headerTitle);

// const ai1 = document.createElement("div");
// const ai = document.createElement("a");
// ai.setAttribute("class", "aitek");
// ai.innerHTML = ["Product", "Customers", "Pricing", "Resources"];
// // console.log(
// //   ai.reduce((acc, el) => {
// //     return acc + " " + el;
// //   })
// // );
// // ai.setAttribute("class", "aitek1");
// // ai.innerHTML = "Customers";
// // ai.setAttribute("class", "aitek2");
// // ai.innerHTML = "Pricing";
// // ai.setAttribute("class", "aitek3");
// // ai.innerHTML = "Resources";
// // ai.setAttribute("class", "aitek4");

// const btn = document.createElement("button");
// btn.setAttribute("class", "btn");
// btn.innerHTML = "Sign In";

// const btn1 = document.createElement("button");
// const blockImg = document.createElement("div");
// const blockbtn = document.createElement("div");

// btn1.setAttribute("class", "btn1");
// btn1.innerHTML = "Sign Up";
// console.log(btn1);
// blockImg.style.display = "flex";

// const img1 = document.createElement("img");
// img.src = "./img/dom10.svg";
// img1.setAttribute("class", "img1");
// console.log(img1);
// // console.log(headerTitle);

// blockImg.append(img);
// header.append(img1);
// blockImg.append(headerTitle);
// header.append(blockImg);
// // ai1.append(ai);
// // header.append(ai1);
// header.append(ai);
// blockbtn.append(btn);
// blockbtn.append(btn1);
// header.append(blockbtn);
// document.body.append(header);

/////////////////////////////////////////////////////////////////////////////
// Create header container
// const headerContainer = document.createElement("div");
// headerContainer.style.backgroundColor = "#333";
// headerContainer.style.color = "#fff";
// headerContainer.style.padding = "10px";
// headerContainer.style.display = "flex";
// headerContainer.style.alignItems = "center";
// headerContainer.style.justifyContent = "space-between";

// // Create header title
// const headerTitle = document.createElement("h1");
// headerTitle.innerHTML = "Product";
// headerTitle.style.margin = "0";

// // Create navigation
// const nav = document.createElement("nav");
// const ul = document.createElement("ul");
// ul.style.listStyleType = "none";
// ul.style.marginleft = "100px";
// ul.style.padding = "0";

// // Define navigation links
// const links = ["Product", "Customers", "Pricing", "Resources"];

// // Append navigation links to the list
// links.forEach((linkText) => {
//   const li = document.createElement("li");
//   const a = document.createElement("a");
//   a.href = "#";
//   a.textContent = linkText;
//   a.style.color = "#fff";
//   a.style.textDecoration = "none";
//   a.style.padding = "0 10px";
//   li.append(a);
//   ul.append(li);
// });

// // Append elements to the header container
// headerContainer.appendChild(headerTitle);
// headerContainer.appendChild(nav);
// nav.appendChild(ul);

// // Append header container to the body
// document.body.append(headerContainer);

/////////////////////////////////////////////////////////////////////////

// const board = document.querySelector("#board");
// const one = document.querySelector(".one");
// const two = document.querySelector(".two");

// const colorNames = [
//   "AliceBlue",
//   "AntiqueWhite",
//   "Aqua",
//   "Aquamarine",
//   "Azure",
//   "Beige",
//   "Bisque",
//   "Black",
//   "BlanchedAlmond",
//   "Blue",
//   "BlueViolet",
//   "Brown",
//   "BurlyWood",
//   "CadetBlue",
//   "Chartreuse",
//   "Chocolate",
//   "Coral",
//   "CornflowerBlue",
//   "Cornsilk",
//   "Crimson",
//   "Cyan",
//   "DarkBlue",
//   "DarkCyan",
//   "DarkGoldenRod",
//   "DarkGray",
//   "DarkGrey",
//   "DarkGreen",
//   "DarkKhaki",
//   "DarkMagenta",
//   "DarkOliveGreen",
//   "DarkOrange",
//   "DarkOrchid",
//   "DarkRed",
//   "DarkSalmon",
//   "DarkSeaGreen",
//   "DarkSlateBlue",
//   "DarkSlateGray",
//   "DarkSlateGrey",
//   "DarkTurquoise",
//   "DarkViolet",
//   "DeepPink",
//   "DeepSkyBlue",
//   "DimGray",
//   "DimGrey",
//   "DodgerBlue",
//   "FireBrick",
//   "FloralWhite",
//   "ForestGreen",
//   "Fuchsia",
//   "Gainsboro",
//   "GhostWhite",
//   "Gold",
//   "GoldenRod",
//   "Gray",
//   "Grey",
//   "Green",
//   "GreenYellow",
//   "HoneyDew",
//   "HotPink",
//   "IndianRed",
//   "Indigo",
//   "Ivory",
//   "Khaki",
//   "Lavender",
//   "LavenderBlush",
//   "LawnGreen",
//   "LemonChiffon",
//   "LightBlue",
//   "LightCoral",
//   "LightCyan",
//   "LightGoldenRodYellow",
//   "LightGray",
//   "LightGrey",
//   "LightGreen",
//   "LightPink",
//   "LightSalmon",
//   "LightSeaGreen",
//   "LightSkyBlue",
//   "LightSlateGray",
//   "LightSlateGrey",
//   "LightSteelBlue",
//   "LightYellow",
//   "Lime",
//   "LimeGreen",
//   "Linen",
//   "Magenta",
//   "Maroon",
//   "MediumAquaMarine",
//   "MediumBlue",
//   "MediumOrchid",
//   "MediumPurple",
//   "MediumSeaGreen",
//   "MediumSlateBlue",
//   "MediumSpringGreen",
//   "MediumTurquoise",
//   "MediumVioletRed",
//   "MidnightBlue",
//   "MintCream",
//   "MistyRose",
//   "Moccasin",
//   "NavajoWhite",
//   "Navy",
//   "OldLace",
//   "Olive",
//   "OliveDrab",
//   "Orange",
//   "OrangeRed",
//   "Orchid",
//   "PaleGoldenRod",
//   "PaleGreen",
//   "PaleTurquoise",
//   "PaleVioletRed",
//   "PapayaWhip",
//   "PeachPuff",
//   "Peru",
//   "Pink",
//   "Plum",
//   "PowderBlue",
//   "Purple",
//   "RebeccaPurple",
//   "Red",
//   "RosyBrown",
//   "RoyalBlue",
//   "SaddleBrown",
//   "Salmon",
//   "SandyBrown",
//   "SeaGreen",
//   "SeaShell",
//   "Sienna",
//   "Silver",
//   "SkyBlue",
//   "SlateBlue",
//   "SlateGray",
//   "SlateGrey",
//   "Snow",
//   "SpringGreen",
//   "SteelBlue",
//   "Tan",
//   "Teal",
//   "Thistle",
//   "Tomato",
//   "Turquoise",
//   "Violet",
//   "Wheat",
//   "White",
//   "WhiteSmoke",
//   "Yellow",
//   "YellowGreen",
// ];

// for (let i = 0; i < 304; i++) {
//   let box = document.createElement("div");
//   box.setAttribute("class", "box");

//   board.append(box);
//   console.log(i);
//   box.addEventListener("mouseover", () => setBackground(box));
//   box.addEventListener("mouseout", () => removeBackground(box));
//   one.addEventListener("click", () => setBackground(box));
//   two.addEventListener("click", () => removeBackground(box));
// }

// function randomColor() {
//   let random = Math.floor(Math.random() * colorNames.length);
//   return colorNames[random];
// }
// randomColor();

// function setBackground(el) {
//   let color = randomColor();
//   el.style.background = color;
//   el.style.boxShadow = `0 0 20px ${color}`;
// }

// function removeBackground(el) {
//   el.style.background = "#777474";
//   el.style.boxShadow = "none";
// }

// const userName = [
//   "Asan",
//   "uson",
//   "Askat",
//   "Doni",
//   "Bob",
//   "Bill",
//   "Erbol",
//   "Erlan",
//   "Aibek",
//   "Daniel",
//   "Nurbek",
//   "Bilal",
//   "Taalaibek",
//   "Askar",
//   "Ulan",
//   "Kylych",
//   "Osmon",
// ];
