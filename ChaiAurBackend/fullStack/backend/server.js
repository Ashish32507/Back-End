import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Sever is Ready");
});

// get The List of Five Jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      setup: "Why don't scientists trust atoms?",
      punchline: "Because they make up everything!",
    },
    {
      setup:
        "Did you hear about the mathematician who’s afraid of negative numbers?",
      punchline: "He’ll stop at nothing to avoid them!",
    },
    {
      setup: "Why did the scarecrow win an award?",
      punchline: "Because he was outstanding in his field!",
    },
    {
      setup: "Why did the bicycle fall over?",
      punchline: "Because it was two-tired!",
    },
    {
      setup: "Why did the tomato turn red?",
      punchline: "Because it saw the salad dressing!",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server Is Started At ${port}`);
});
