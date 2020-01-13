const socialNetworks = [
  "Behance",
  "Blogger",
  "Codepen",
  "Email",
  "Facebook",
  "GitHub",
  "Linkedin",
  "Messenger",
  "Reddit",
  "Skype",
  "StackOverflow",
  "Twitter",
  "Whatsapp",
  "Youtube"
];

const buttons = document.querySelectorAll(".tab");
const containers = document.querySelectorAll(".container");
const iconTypes = document.querySelectorAll(".icon-type");

(init => {
  buttons.forEach(button => {
    button.addEventListener("click", handleTabs);
  });

  iconTypes.forEach(type => {
    type.addEventListener("click", populateSocialNetworks);
  })

  populateSocialNetworks();
})();

function populateSocialNetworks() {
  const type = document.querySelector('input[name="icon-type"]:checked').value;
  const container = document.querySelector(".icons-container .icons");
  container.innerHTML = "";

  socialNetworks.forEach(item => {
    let icon = document.createElement("img");
    if (type == "round") {
      icon.src = `./assets/icons/social-rounded/${item}.svg`;
    } else if (type == "circle") {
      icon.src = `./assets/icons/social-circle/${item}.svg`;
    }
    container.appendChild(icon);
  });
}

function teste() {
  let valores = {};
  let meuForm = document.querySelectorAll("form input");

  meuForm.forEach(item => {
    if (item.value) {
      valores[item.name] = item.value;
    }
  });

  console.log(valores);
}

function handleTabs(e) {
  const button = e.target;
  const buttonName = e.target.innerHTML;
  const buttonActive = e.target.classList.contains("-active");
  const container = document.querySelector(
    `section[data-name='${buttonName}']`
  );

  if (!buttonActive) {
    removeActive(buttons);
    removeActive(containers);
    button.classList.add("-active");
    container.classList.add("-active");
  }
}

removeActive = element => {
  element.forEach(item => item.classList.remove("-active"));
};
