document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".study-form");
  
    if (form) {
      form.addEventListener("submit", (e) => {
        const nameInput = document.getElementById("fname");
        const fName = nameInput.value.trim();
  
        if (fName) {
          localStorage.setItem("fName", fName);
        }
      });
    }
  });
  