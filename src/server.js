import express from "express";

// 3000 이라는 PORT를 담음
const PORT = 3000;

// express를 app에 담음
const app = express();

// 설정 끝난 후 Server Start
app.listen(PORT, () => {
  console.log(`✅ Server Start localhost: ${PORT}`);
});
