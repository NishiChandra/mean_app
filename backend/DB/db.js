var DB='mongodb://localhost/assignment';
mongoose.connect(DB).then(
    ()=>{console.log('Connected')},
    err => {console.log("err",err);}
);