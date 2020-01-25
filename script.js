let socialNetworks = [
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
  const container = document.querySelector(".icons-container .icons");
  container.innerHTML = "";

  createIcon(container);
}

function createIcon(container) {
  const type = checkIconType();
  const inputs = document.querySelectorAll(".inputs img");

  socialNetworks.forEach(item => {
    let icon = document.createElement("img");
    icon.src = changeIconType(type, item);
    icon.dataset.name = item;
    icon.addEventListener("click", createSocialNetwork);

    container.appendChild(icon);
  });

  inputs.forEach(icon => {
    itemName = icon.dataset.name;
    icon.src = changeIconType(type, itemName);
  });
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

function removeItem(item) {
  item.remove();
}

function createSocialNetwork(e) {
  const name = e.target.dataset.name;
  let form = document.querySelector(`section[data-name='social'] form`);
  let container = document.createElement("div");
  let input = document.createElement("input");
  let span = document.createElement("span");
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
  image.dataset.name = name;

  span.innerText = "x";

  container.appendChild(input);
  container.appendChild(label);
  container.appendChild(image);
  container.appendChild(span);

  form.appendChild(container);
  addRemoveEvent(span, container);
  socialNetworks = socialNetworks.filter(item => {
    if (item != name) {
      return true;
    }
  });
  populateSocialNetworks();
}

function checkIconType() {
  return document.querySelector('input[name="icon-type"]:checked').value;
}

function changeIconType(type, item) {
  if (type == "round") {
    return `./assets/icons/social-rounded/${item}.svg`;
  } else if (type == "circle") {
    return `./assets/icons/social-circle/${item}.svg`;
  }
}

function addRemoveEvent(element, container) {
  element.addEventListener("click", () => {
    const name = container.querySelector("img").dataset.name;
    socialNetworks.push(name)
    populateSocialNetworks()
    removeItem(container);
  });
}
