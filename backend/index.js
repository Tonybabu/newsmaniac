const express=require('express')
const app=express()
require('dotenv').config();
const cors=require('cors')
const userRouter=require('./routers/authRouter')



app.use(cors())
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use('/',userRouter)



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

