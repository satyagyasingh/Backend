import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server is runnign");
});

const port = process.env.PORT || 3000;

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "skeleton",
      content:
        "why don't skeletons fight each other? because they don't have the guts.",
    },
    {
      id: 2,
      title: "scarecrow",
      content:
        "why did the scarecrow win an award? because he was outstanding in his field!",
    },
    {
      id: 3,
      title: "gym",
      content:
        "why don't some couples go to the gym? because some relationships don't work out!",
    },
    {
      id: 4,
      title: "math book",
      content: "why was the math book sad? because it had too many problems.",
    },
    {
      id: 5,
      title: "elsa",
      content: "why can’t you give elsa a balloon? because she will let it go!",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`at port ${port}`);
});
