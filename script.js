const menuItems = document.querySelectorAll(".left-sidebar-items");
const notifyPopUp = document.querySelector(".notify_pop_up");
const notifyCount = document.querySelector(".notification-count");
const notifyCountMessage = document.querySelector(".notification-count-mes");
const MessageNotify = document.getElementById("message-notifications");
const mainContainer = document.getElementById("main-container");
const primaryButton = document.querySelectorAll(".btn");

const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

const theme = document.getElementById("theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
const root = document.querySelector(":root");
const colorPlatte = document.querySelectorAll(".choose-color span");

const bg0 = document.querySelector(".bg-0");
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");

let lightColorLightness;
let darkColorLightness;
let darkerColorLightness;

//===========================Functions==================================

// changing active menuItems
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

// Open Modal
const openModal = () => {
  themeModal.style.display = "grid";
};

// close modal
const closeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};

// remove active color
const changeActiveClass = () => {
  colorPlatte.forEach((colorPick) => {
    colorPick.classList.remove("active");
  });
};

// change bg
const changeBg = () => {
  root.style.setProperty("--white-color-lightness", lightColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
  root.style.setProperty("--darker-color-lightness", darkerColorLightness);
};

// changing active classes
const addActive = (bg) => {
  bg.classList.add("active");
};

const removeActive = (bg) => {
  bg.classList.remove("active");
};
// =========================FOR EACH AND ADDEVENLISTERNERS=================

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "notifications") {
      notifyPopUp.style.display = "none";
    } else {
      notifyPopUp.style.display = "block";
      notifyCount.style.display = "none";
    }
  });
});

// message Border Color
MessageNotify.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 0.8rem var( --light-purple)";
  messages.style.transition = "300ms ease-in";
  notifyCountMessage.style.display = "none";
  setTimeout(() => {
    messages.style.transition = "350ms ease-out";
    messages.style.boxShadow = "none";
  }, 2000);
});

// Theme Customization
themeModal.addEventListener("click", closeModal);
theme.addEventListener("click", openModal);

// Font sizes

const buttons = (pexels) => {
  primaryButton.forEach((btn) => {
    btn.style.fontSize = pexels;
  });
};
fontSizes.forEach((size) => {
  let fontSize;

  size.addEventListener("click", () => {
    if (size.classList.contains("font-size-1")) {
      fontSize = "12px";
      root.style.setProperty("--fixed-top-left", "5.4rem");
      root.style.setProperty("--fixed-top-right", "-18rem");
      mainContainer.style.gridTemplateColumns = "20vw 35vw auto";
      mainContainer.style.marginTop = "20px";
      buttons("12px");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("--fixed-top-left", "5.4rem");
      root.style.setProperty("--fixed-top-right", "-7rem");
      mainContainer.style.marginTop = "20px";
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("--fixed-top-left", "-2rem");
      root.style.setProperty("--fixed-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "17px";
      root.style.setProperty("--fixed-top-left", "-5rem");
      root.style.setProperty("--fixed-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "18px";
      root.style.setProperty("--fixed-top-left", "-12rem");
      root.style.setProperty("--fixed-top-right", "-35rem");
    }

    //   Chnage font size of root html element:

    document.querySelector("html").style.fontSize = fontSize;
  });
});

// changing Primary colours
colorPlatte.forEach((color) => {
  color.addEventListener("click", () => {
    let primaryHue;
    changeActiveClass();

    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 115;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 308;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 0;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 51;
    }
    color.classList.add("active");

    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

// ==========================background=============================

bg0.addEventListener("click", () => {
  darkerColorLightness = "75%";
  darkColorLightness = "95%";
  lightColorLightness = "100%";
  addActive(bg0);
  removeActive(bg1);
  removeActive(bg2);
  removeActive(bg3);
  changeBg();
  window.location.reload();
});

bg1.addEventListener("click", () => {
  darkerColorLightness = "75%";
  darkColorLightness = "95%";
  lightColorLightness = "100%";
  addActive(bg1);
  removeActive(bg0);
  removeActive(bg2);
  removeActive(bg3);
  changeBg();
});

bg2.addEventListener("click", () => {
  darkerColorLightness = "95%";
  darkColorLightness = "20%";
  lightColorLightness = "15%";
  addActive(bg2);
  removeActive(bg0);
  removeActive(bg1);
  removeActive(bg3);
  changeBg();
});

bg3.addEventListener("click", () => {
  darkerColorLightness = "95%";
  darkColorLightness = "10%";
  lightColorLightness = "0%";
  addActive(bg3);
  removeActive(bg0);
  removeActive(bg1);
  removeActive(bg2);
  changeBg();
});

// =====================================Error Codes====================================

// // ===================Messages=================
// // searches chats/
// const searchMessage = () => {
//   const val = messageSearch.value.toLowerCase();
//   console.log(val);
//   message.forEach((chat) => {
//     let name = chat.querySelectorAll("h5").textContent.toLowerCase();
//     console.log(name);
//     if (name.indexOf(val) != -1) {
//       chat.style.display = "flex";
//     } else {
//       chat.style.display = "none";
//     }
//   });
// };

//search chat
// messageSearch.addEventListener("keyup", searchMessage);

// highlight message box
