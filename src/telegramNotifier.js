import axios from "axios";

const botToken = "6577290862:AAHwavcJDMJmMLG_4JViPYKoLd8xEijaC0U";

const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

export const sendMesage = (id, message) => {
  axios
    .post(apiUrl, {
      chat_id: id,
      text: message,
    })
    .then((response) => {
      console.log("Notification sent successfully!");
      console.log("Response:", response.data);
    })
    .catch((error) => {
      console.error("Failed to send notification.", error.response.data);
    });
};
