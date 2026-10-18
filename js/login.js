document.addEventListener("DOMContentLoaded", function () {
    const formLogin = document.getElementById("form-login");
    const formRegister = document.getElementById("form-register");

    if (formLogin) {
        formLogin.addEventListener("submit", function (event) {
            event.preventDefault();
            const passwordLogin = document.getElementById("login-password").value;

            if (passwordLogin.length < 6) {
                alert("Mật khẩu phải có ít nhất 6 ký tự!");
                return false;
            }

            window.location.href = "index.html";
            return true;
        });
    }

    if (formRegister) {
        formRegister.addEventListener("submit", function (event) {
            event.preventDefault();
            const password = document.getElementById("reg-password").value;
            const confirmPassword = document.getElementById("reg-confirm").value;

            if (password.length < 6) {
                alert("Mật khẩu phải có ít nhất 6 ký tự!");
                return false;
            }

            if (password !== confirmPassword) {
                alert("Sai mật khẩu! Mật khẩu xác nhận không trùng khớp.");
                return false;
            }

            window.location.href = "index.html";
            return true;
        });
    }
});
