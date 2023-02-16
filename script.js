cursor = document.getElementById("cursor");
window.addEventListener("load", (event) => {
  document.addEventListener("mousemove", (e) => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
    console.log(cursor.style.top);
  });
});
