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
  });

  populateSocialNetworks();
})();

function populateSocialNetworks() {
  const type = checkIconType();
  const container = document.querySelector(".icons-container .icons");
  container.innerHTML = "";

  socialNetworks.forEach(item => {
    let icon = document.createElement("img");
    if (type == "round") {
      icon.src = `./assets/icons/social-rounded/${item}.svg`;
    } else if (type == "circle") {
      icon.src = `./assets/icons/social-circle/${item}.svg`;
    }
    icon.dataset.name = item;
    icon.addEventListener("click", addSocialNetwork);

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

function removeActive(element) {
  element.forEach(item => item.classList.remove("-active"));
}

function createSocialNetwork(name) {
  let form = document.querySelector(`section[data-name='social'] form`);
  let container = document.createElement("div");
  let input = document.createElement("input");
  let label = document.createElement("label");
  let image = document.createElement("img");

  container.classList.add("inputs");

  input.id = name;
  input.name = name;
  input.placeholder = name;
  input.type = "text";

  label.setAttribute("for", name);
  label.innerText = name;

  if (checkIconType() == "round") {
    image.src = `./assets/icons/social-rounded/${name}.svg`;
  } else if (checkIconType() == "circle") {
    image.src = `./assets/icons/social-circle/${name}.svg`;
  }
  image.alt = `Icone do ${name}`;

  container.appendChild(input);
  container.appendChild(label);
  container.appendChild(image);

  form.appendChild(container);
}

function addSocialNetwork(e) {
  name = e.target.dataset.name;
  createSocialNetwork(name);
}

function checkIconType() {
  return document.querySelector('input[name="icon-type"]:checked').value;
}
