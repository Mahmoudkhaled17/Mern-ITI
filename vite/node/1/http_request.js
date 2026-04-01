import http, { METHODS } from "http"
import { hostname } from "os"
import path from "path"

const option={
    hostname:"localhost",
    path:"/",
    method:"get",
    port:8080
}
const req=http.request(option,(res)=>{
    console.log("status",res.statusCode)
})

req.on("error",()=>{
    console.log("error")
})

