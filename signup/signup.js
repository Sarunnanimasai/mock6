function signup() {
  let registerName = document.getElementById("registerName").value;
  let registerEmail = document.getElementById("registerEmail").value;
  let registerPassword1 = document.getElementById("registerPassword1").value;

  if (registerName == "" || registerEmail == "" || registerPassword1 == "") {
    alert("Please fill all the fields");
  } else {
    let userData = {
      email: registerEmail,
      password: registerPassword1,
      name: registerName,
    };
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Registered Successfully");
        window.location.href = "../signin/signin.html ";
      });
  }
}
