const toggle = document.getElementById("toggle-sidebar-btn");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("toggle-sidebar");
  });
}

const userProfile = document.getElementById("userProfile");
const userProfileShow = document.getElementById("userProfileShow");
if (userProfile) {
  userProfile.addEventListener("click", () => {
    if (userProfileShow.classList.contains("show")) {
      userProfileShow.classList.remove("show");
      userProfileShow.classList.remove("extraShow");
    } else {
      userProfileShow.classList.add("show");
      userProfileShow.classList.add("extraShow");
    }
  });
}

window.onclick = function (event) {
  if (!event.target.matches(".nav-profile")) {
    var sharedowns = document.getElementsByClassName("profile");
    var i;
    for (i = 0; i < sharedowns.length; i++) {
      var openSharedown = sharedowns[i];
      if (openSharedown.classList.contains("show")) {
        openSharedown.classList.remove("show");
      }
    }
  }
};

if (userProfile) {
  userProfile.addEventListener("click", function (event) {
    event.stopPropagation();
  });
}
