document.addEventListener("DOMContentLoaded", () => {
    const name = localStorage.getItem("fName");
    const usernameDisplay = document.getElementById("username");
  
    if (name && usernameDisplay) {
      usernameDisplay.textContent = `Thank you for joining, ${name}!. We are checking your request`;
    }
    else{
        alert("Name not detected");
    }
  });
  