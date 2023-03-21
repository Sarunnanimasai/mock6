async function login() {
  let loginEmail = document.getElementById("loginEmail").value;
  let loginPassword = document.getElementById("loginPassword").value;
  if (loginEmail == "" || loginPassword == "") {
    alert("Please fill all the fields");
  } else {
    await fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const user = data.find(
          (user) => user.email === loginEmail && user.password === loginPassword
        );
        if (user) {
          alert("Login Successful");
          console.log(user);
          localStorage.setItem("username", JSON.stringify(user.name));
          window.location.href = "../index.html";
        } else {
          alert("Login Failed");
        }
      })
      .catch((err) => console.log(err));
  }
}
