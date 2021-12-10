function switch_theme(event) {
  bodyClassList = document.querySelector("body").classList;
  bodyClassList.toggle("light-theme");
  bodyClassList.toggle("dark-theme");
}

let toggleButton = document.querySelector(".toggle");

toggleButton.addEventListener("click", switch_theme);

document.querySelector("#frm-btn").addEventListener("click", (evt) => {
  evt.preventDefault();
  let obj = {};

  obj.name = document.querySelector("#name").value;
  obj.email = document.querySelector("#email").value;
  obj.message = document.querySelector("#msg").value;

  console.log(obj);
});
