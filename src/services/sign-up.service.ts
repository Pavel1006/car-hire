const SignUpService = (
  lastName: string,
  firstName: string,
  email: string,
  password: string
) => {
  fetch("https://localhost:44359/api/User/register", {
    method: "POST",
    body: JSON.stringify({
      lastName: lastName,
      firstName: firstName,
      email: email,
      password: password,
    }),
    headers: {
      accept: "*/*",
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => {
      console.error("Error:", error);
    });
};
export { SignUpService };
