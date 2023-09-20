const btDownload = document.getElementById('bt1');
const catImage = document.getElementById("cat-image");


 function fetchImg() {
  let image = document.getElementById("cat-image");
  return fetch("https://api.thecatapi.com/v1/images/search")
    .then(resp => resp.json())
    .then(json => catImage.src = json[0].url)
    .catch(error => console.error("Error fetching cat image:", error));
}

function btnClick() {
  let button = document.getElementById("bt");
  button.addEventListener("click",fetchImg);
}


//for downloading 
btDownload.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = catImage.src;
  console.log(link);
  link.download = "cat_image.jpg";
  link.click();
  link.remove();
});

document.addEventListener("DOMContentLoaded", () => {
   fetchImg().then(()=>{
    btnClick();
  })
});