const express = require("express");
const cors = require("cors");
const http = require("http");
const socketIo = require("socket.io");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://mongodb:27017/voting_app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Vote = mongoose.model("Vote", {
  option: String,
  count: Number,
});

const voteCount = {};

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("vote", async (option) => {
    console.log("Received vote:", option);
    if (!voteCount[option]) {
        voteCount[option] = 1;
      } else {
        voteCount[option]++;
      }
  
    try {
      await Vote.updateOne(
        { option },
        { $inc: { count: 1 } },
        { upsert: true }
      );
      console.log("Vote saved to database");
    } catch (error) {
      console.error("Error updating vote:", error);
    }

    io.emit("newVote", option);
    io.emit("voteCountUpdate", voteCount);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
