const request = require("request-promise");

const getGeekJoke = async () => {
  try {
    const response = await request({
      uri: "https://geek-jokes.sameerkumar.website/api?format=json",
      headers: { Accept: "application/json" },
    });
    const geekJoke = JSON.parse(response);
    return geekJoke.joke;
  } catch (err) {
    console.log("Error: ", err);
  }
};
getGeekJoke().then((data) => console.log(data));
