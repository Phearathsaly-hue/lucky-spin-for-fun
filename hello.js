let container = document.querySelector(".container");
let btn = document.getElementById("spin");

btn.onclick = function () {
  let number = Math.ceil(Math.random() * 10000);
  container.style.transform = "rotate(" + number + "deg)";

  // Wait for the rotation animation to complete
  setTimeout(() => {
    Swal.fire({
      title: "Congratulations",
      html: "You won ",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff ",
      backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
                  `,
    });
  }, 3000); // Adjust the timeout according to your animation duration
};
