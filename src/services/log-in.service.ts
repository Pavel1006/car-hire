const saveTokenInLocalStorage = (tokenDetails: any) => {
  localStorage.setItem("accessToken", JSON.stringify(tokenDetails));
};
const FetchData = (email: string, password: string) => {
  fetch("https://localhost:44359/api/User/login", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      accept: "*/*",
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((response) => saveTokenInLocalStorage(response))
    .catch((error) => {
      console.error("Error:", error);
    });
};

export { FetchData };
