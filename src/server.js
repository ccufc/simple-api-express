import express from "express"
import router from "./router"

const app = express()

app.use("/", router)

app.listen(3000, () => {
  console.log("Server listening to port 3000.")
})
