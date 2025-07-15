//require("express")  대신 옛날방식
import express from "express"  //이렇게

const app = express();

app.listen(8080, () => {
    console.log("server running at");
    console.log("추가 추가!");
    console.log("추가 추가 추가!!");
});