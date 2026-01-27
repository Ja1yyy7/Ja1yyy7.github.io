function changeTheme() {
  const body = document.body;

  if (body.style.background === "white") {
    body.style.background = "#0f172a";
    body.style.color = "#e5e7eb";
  } else {
    body.style.background = "white";
    body.style.color = "#111827";
  }
}
