const path = require("path");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");

// const swaggerJsDoc=require("swagger-jsdoc")
// const swaggerUi=require("swagger-ui-express")


const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const cors = require("cors");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");


// Load env vars
// const conifgPath="./config/config.env"

// const swaggerOptions={
//   swaggerDefinition:{
//     info:{
//       title:"University API",
//       description:"University API Information",
//       concat:{
//         name:"Amazing Developer"
//       },
//       servers:["http://localhost:8000"]
//     }
//   },
//   apis:["routes/university.js","routes/index.js"]
// }



// const swaggerDocs=swaggerJsDoc(swaggerOptions)
// app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocs))

const conifgPath="./config/configTest.env"

dotenv.config({
  path: conifgPath,
  // debug: true,
});
// Connect to database...
connectDB();

// Route files
const university = require("./routes");


// Body parser
app.use(express.json({ limit: "250mb" }));

// Cookie parser
// app.use(cookieParser());
// app.use(checkLimitationSpot);

if (process.env.NODE_ENV === "production") {
  app.use(morgan("dev"));
}

// File uploading
// app.use(
//   fileUpload({
//     createParentPath: true,
//     abortOnLimit: true,
//     fileSize: 90000000,
//   })
// );
// Sanitize data
app.use(mongoSanitize());
// Set security headers
app.use(helmet());
// Prevent XSS attacks
app.use(xss());
// Prevent http param pollution
app.use(hpp());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// Set static folder
var public = path.join(__dirname, "public");
app.use(express.static(public));

// Mount routers
app.use("/api/v1",university);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;

const expressServer = app.listen(
  PORT,
  console.log(`Server running on port ${PORT}`.yellow.bold)
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close expressServer & exit process
  // expressServer.close(() => process.exit(1));
});

module.exports = {
  app,
};
