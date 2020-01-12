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

const buttons = document.querySelectorAll(".tab");
const containers = document.querySelectorAll(".container");

function handleTabs(e) {
  const button = e.target;
  const buttonName = e.target.innerHTML;
  const buttonActive = e.target.classList.contains("-active");
  const container = document.querySelector(`section[data-name='${buttonName}']`);

  if (!buttonActive) {
    removeActive(buttons);
    removeActive(containers);
    button.classList.add("-active");
    container.classList.add("-active");
  }
}

buttons.forEach(button => {
  button.addEventListener("click", handleTabs);
});

function removeActive(element) {
  element.forEach(item => item.classList.remove("-active"));
}
