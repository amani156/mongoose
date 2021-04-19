const mongoose = require('mongoose');
const person = require('./PersonSchema');
mongoose.connect('mongodb+srv://amani156:callme@cluster0.nqgqx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true })


//Create a person  prototype:
var user = new person({
    name: "amira",
    age: 14,
    favoriteFoods: ['candy', 'almond',"chocolate"]
  });

  //Create and Save a Record of a Model:

 user.save()
.then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })
   //Create Many Records with model.create()
   person.create([{name:"amani",age:"27",favoriteFoods:['ice cream']}], (err, data) => {
    if (err) console.log(err);
    
  });
  person.create([{name:"amani2",age:"22",favoriteFoods:['chocolate']}], (err, data) => {
      if (err) console.log(err);
      
    });
    //Use model.find() to Search Your Database

 person.find({name:"amani"},(err,data)=>{
          if(err)
          console.log(err)
          else console.log(data)
      })
      //Use model.findOne() 

      person.findOne({name:"amani"},(err,data)=>{
        if(err)
        console.log(err)
        else console.log(data)
    })
//Perform Classic Updates by Running Find, Edit, then Save
person.findOneAndUpdate({name:"amani2",age:"22",favoriteFoods:['ice cream','chocolate']},(err, data)=>{
    if(err)
    console.log(err);
    else
    console.log(data);
// findByIdAndRemove
person.findByIdAndRemove({name:"amani2"},(err, data)=>{
    if(err)
    console.log(err);
    else
    console.log(data);
})
   // remove
   person.remove({name:"client1"},(err, data)=>{
    if(err)
    console.log(err);
    else
    console.log(data);
})

var queryChain = function(done) { var foodToSearch = "pizza"; Person 
.find({favoriteFoods:foodToSearch}) 
.sort({name : "asc"}) 
.limit(2) 
.select("-age") 
.exec((err, data) => { if(err) done(err); done(null, data); }) }}) 
