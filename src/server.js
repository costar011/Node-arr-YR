import express from "express";

// 3000 이라는 PORT를 담음
const PORT = 3000;

// express를 app에 담음
const app = express();

// 배열 array을 초기화
const array = new Array();

// 초기화 된 배열 arr을 출력
console.log(array);

// arr에 데이터를 추가
array.push("라이언");

// 데이터가 추가 된 arr을 출력한다.
console.log(array);

// arr에 데이터를 추가
array.push("어피치");
array.push("무지");
array.push("콘");
array.push("제이지");
array.push("프로도");
array.push("네오");

// 데이터가 추가 된 arr을 출력한다. .
console.log(array);

// 2번 인덱스를 출력해 본다.
console.log(array[2]);

// 배열의 갯수를 출력한다.
console.log(array.length);

for (let i = 0; i < array.length; i++) {
  console.log(`${array[i]} .`);
}

// 설정 끝난 후 Server Start
app.listen(PORT, () => {
  console.log(`✅ Server Start localhost: ${PORT}`);
});
