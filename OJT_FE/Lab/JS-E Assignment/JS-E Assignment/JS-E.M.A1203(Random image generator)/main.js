var theImages = [
  {
    src: "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ",
    width: "300",
    height: "300",
  },
  {
    src: "https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE",
    width: "300",
    height: "300",
  },
  {
    src: "https://i.picsum.photos/id/1010/5184/3456.jpg?hmac=7SE0MNAloXpJXDxio2nvoshUx9roGIJ_5pZej6qdxXs",
    width: "300",
    height: "300",
  },
  {
    src: "https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY",
    width: "300",
    height: "300",
  },
  {
    src: "https://i.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w",
    width: "300",
    height: "300",
  },
  {
    src: "https://i.picsum.photos/id/102/4320/3240.jpg?hmac=ico2KysoswVG8E8r550V_afIWN963F6ygTVrqHeHeRc",
    width: "300",
    height: "300",
  },
];
// function getRandom3 (list ){
//     const res = [];
//     for( let i = 0; i < 3; i++){
//         const random = Math.floor(Map.random()* list.length);
//         res.push(list[random]);
// }
//     return res;
// }
function getRandomItem(list, theImages = 3) {
  return [...list]
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
    .slice(0, theImages);
}

let threeItems;
let btn = document.querySelector("button");
let img;
let item;

btn.addEventListener("click", () => {
  imgElement = document.querySelector(".item");
  imgElement.textContent = "";
  threeItems = getRandomItem(theImages, 3);
  for (let i = 0; i < threeItems.length; i++) {
    img = document.createElement("img");
    img.setAttribute("src", threeItems[i].src);
    img.style.width = threeItems[i].width + "px";
    img.style.height = threeItems[i].height + "px";
    item = document.querySelector(".item");
    item.appendChild(img);
  }
});
