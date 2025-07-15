import express from "express";
import dotenv from "dotenv";
import { MongoClient, ObjectId } from "mongodb";


const user = {
    isLoggedIn: true, //로그인 여부
    role: "admin",   //유저 역할  'user', 'guest'
};

//admin페이지에 접근할수 있는지 여부
const isAccessAdminPage = user.isLoggedIn && user.role === 'admin';
if (isAccessAdminPage) {
  console.log("관리자페이지 접근")

} else {

 console.log("관리자페이지 접근할수 없음")

}

//로그인 된 사용자 "이거나 " 롤이 admin인 사용자이면 true
const isAccessAdminPage = user.isLoggedIn || user.role === 'admin';  // true


console.log("🚀 ~ isAccessAdminPage:", isAccessAdminPage);