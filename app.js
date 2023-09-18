function fetchImg() {
    let image = document.getElementById("cat-image");
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(resp => resp.json())
      .then(json => image.src = json[0].url)
      .catch(error => console.error("Error fetching cat image:", error));
  }
  
  function btnClick() {
    let button = document.getElementById("bt");
    button.addEventListener("click", fetchImg);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    fetchImg();
    btnClick();
  });
  