function loginAndNavigateToLiveView()
{
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
}
loginAndNavigateToLiveView();