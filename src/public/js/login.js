
function handleLoginBtn() {
    $("#loginBtn").on("click", function (event) {
        event.preventDefault();
        let email = $("#email").val();
        let password = $("#password").val();

        $.ajax({
            url: `${window.location.origin}/login`,
            method: "POST",
            data: { email: email, password: password },
            success: function (data) {
                if (data.role == "admin") {
                    window.location.href = "/admin";
                }
                else window.location.href = "/user";
            },
            error: function (err) {
                alert("Email hoặc password của bạn đã sai. Hãy thử lại!");
            }
        })
    });
}
$(document).ready(function () {
    handleLoginBtn();
});