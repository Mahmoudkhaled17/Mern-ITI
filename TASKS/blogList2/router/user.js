const router=require("express").Router()

const { error } = require("node:console")
const user=require("../model-sche/user")

const bcrypt = require('bcrypt')


router.get("/",(req,res)=>{

    console.log("all users send")

    user.find({}).then((users)=>{
        res.json(users)
    })

})

router.post("/",async(req,res)=>{

    const {username,password,name}=req.body  

    // validation of pass
    if(!username||!password){
        console.log("error there must be user and pass")
        return res.status(400).json({error:"there must be pass or user"})
    }
     if (username.length < 3 || password.length < 3) {
    return res.status(400).json({ error: 'username and password must be at least 3 characters' })
  }

//   bcrypt pass 

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

    const newUser=new user({
        username:username,
        password:passwordHash,
        name:name
    }

)


  newUser.save()
    .then((result) => {
      res.status(201).json(result)
    })
    .catch(error => res.status(400).json({ error: error.message }))



})


module.exports=router