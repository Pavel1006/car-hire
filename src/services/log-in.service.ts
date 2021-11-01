const LogInService = (email: string, password: string) => {
  return fetch("https://localhost:44359/api/User/login", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      accept: "*/*",
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};

export { LogInService };
