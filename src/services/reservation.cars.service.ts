type ReservationProps = {
  carId: number;
  startDate: any;
  endDate: any;
};

const ReservationService = (reservation: ReservationProps) => {
  fetch("https://localhost:44359/api/Reservations", {
    method: "POST",
    body: JSON.stringify(reservation),
    headers: {
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("accessToken") || "{}").accessToken
      }`,
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
export { ReservationService };
