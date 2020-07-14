const request = require("request-promise");

const getDadJoke = async () => {
  try {
    const response = await request({
      uri: "https://icanhazdadjoke.com",
      headers: { Accept: "application/json" },
    });
    const dadJoke = JSON.parse(response);
    return dadJoke.joke;
  } catch (err) {
    console.log("Error: ", err);
  }
};

// 4.1
getDadJoke().then((data) => console.log(data));
