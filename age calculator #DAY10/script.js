let form = document.getElementById("form");
let input = document.querySelectorAll("form input");
let inputField = document.querySelectorAll("form input");
let btn = document.getElementById("btn");
let error = document.querySelectorAll("form div span");
let results = document.querySelectorAll(".results p span");

function submit(e) {
  e.preventDefault();
}
form.addEventListener("submit", submit);

input.forEach((e) => {
  e.oninput = function () {
    if (Number(input[0].value) > 31) {
      input[0].classList.add("error");
      error[0].classList.add("not-hidden");
    } else {
      input[0].classList.remove("error");
      error[0].classList.remove("not-hidden");
    }
    if (Number(input[1].value) > 12) {
      input[1].classList.add("error");
      error[1].classList.add("not-hidden");
    } else {
      input[1].classList.remove("error");
      error[1].classList.remove("not-hidden");
    }
    if (Number(input[2].value) > 2023) {
      input[2].classList.add("error");
      error[2].classList.add("not-hidden");
    } else {
      input[2].classList.remove("error");
      error[2].classList.remove("not-hidden");
    }
  };
});

btn.onclick = function () {
  let days = Number(input[0].value);
  let months = Number(input[1].value);
  let years = Number(input[2].value);
  if (
    (months === 4) | (months === 6) | (months === 9) | (months === 11) &&
    days > 30
  ) {
    input[0].classList.add("error");
    error[0].classList.add("not-hidden");
    input[1].classList.add("error");
    input[2].classList.add("error");
  }
  if (input[0].value === "") {
    input[0].classList.add("error");
    error[0].classList.add("not-hidden");
  }
  if (input[1].value === "") {
    input[1].classList.add("error");
    error[1].classList.add("not-hidden");
  }
  if (input[2].value === "") {
    input[2].classList.add("error");
    error[2].classList.add("not-hidden");
  }
  if (months === 2 && days > 29) {
    input[0].classList.add("error");
    error[0].classList.add("not-hidden");
  }

  let month = new Date();
  let day = new Date();
  let year = new Date();

  if (months < month.getMonth(1 - 11) + 1) {
    results[0].innerHTML = year.getFullYear() - years;
  } else {
    results[0].innerHTML = year.getFullYear() - (years + 1);
  }
  if(day.getDate(1-31) > days && (month.getMonth(1-11) + 1) === months) {
    results[0].innerHTML = year.getFullYear() - years;
  }
  if ((month.getMonth(1 - 11) + 1) > months) {
    results[1].innerHTML = month.getMonth(1 - 11) - months;
  }
  if (month.getMonth(1 - 11) + 1 < months) {
    results[1].innerHTML = month.getMonth(1 - 11) + (12 - months);
  }
  if (month.getMonth(1 - 11) + 1 === months) {
    results[1].innerHTML = "00";
  }
  if (days < day.getDate(1 - 31) && month.getMonth(1 - 11) + 1 !== months) {
    results[1].innerHTML = Number(results[1].innerHTML) + 1;
  }
  if (days > day.getDate(1 - 31) && month.getMonth(1 - 11) + 1 === months) {
    results[1].innerHTML = month.getMonth(1 - 11) + (12 - months);
  }
  if (days > day.getDate(1 - 31)) {
    results[2].innerHTML = 31 - (days - day.getDate(1 - 31));
  }
  if (days < day.getDate(1 - 31)) {
    results[2].innerHTML = day.getDate(1 - 31) - days;
  }
  if (input[0].classList.contains("error")) {
    results[0].innerHTML = "--";
    results[1].innerHTML = "--";
    results[2].innerHTML = "--";
  }
  if (input[1].classList.contains("error")) {
    results[0].innerHTML = "--";
    results[1].innerHTML = "--";
    results[2].innerHTML = "--";
  }
  if (input[2].classList.contains("error")) {
    results[0].innerHTML = "--";
    results[1].innerHTML = "--";
    results[2].innerHTML = "--";
  }
};
