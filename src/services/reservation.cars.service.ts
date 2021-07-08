const ReservationFetch = (carId: number) => {
  fetch("https://localhost:44359/api/Reservations", {
    method: "POST",
    body: JSON.stringify({
      startDate: "2021-07-08T07:01:38.383Z",
      endDate: "2021-07-08T07:01:38.383Z",
      carId: carId,
    }),
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      accept: "text/plain",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => {
      console.error("Error:", error);
    });
};
export { ReservationFetch };
