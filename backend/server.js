const expresss = require("express")
const app= expresss()
const db=require("./models")
const adminRoutes = require("./router/admin-router")
const bussinessRoutes = require("./router/bussiness")
const reviewRoutes = require("./router/review-router")

app.use(expresss.json())
app.use(expresss.urlencoded({extended:true}))
app.use("/admin",adminRoutes)
app.use("/admin",bussinessRoutes)
app.use("/admin",reviewRoutes)


 app.listen(3000,()=>console.log("server listend"))
