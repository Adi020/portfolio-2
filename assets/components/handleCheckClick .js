export function handleCheckClick(check) {
    let id = check.checked;
    if (id === true) {
      location.href = "en/index.html";
    } else {
      location.href = "../index.html";
    }
  }