function executeContentScript() {
  const loginForm = document.querySelector("#loginForm");
  if (loginForm) {
    const emailInput = loginForm.querySelector('input[name="email"]');
    const passwordInput = loginForm.querySelector('input[name="password"]');
    const yourEmail = "a1@ya.ru";
    const yourPassword = "12345678";
    emailInput.value = yourEmail;
    passwordInput.value = yourPassword;
    loginForm.dispatchEvent(new Event("submit"));
    setTimeout(() => {
      window.location.href = "/live-view";
    }, 2000);
  }
  console.log("Content script executed!");
}

chrome.runtime.onInstalled.addListener(function () {
  chrome.webNavigation.onCompleted.addListener(function (details) {
    if (details.url.startsWith("https://192.168.91.207:7443/")) {
      executeContentScript();
    }
  });
});
