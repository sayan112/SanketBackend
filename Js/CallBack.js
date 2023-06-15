// function greeting(name) {
//   console.log(`Hello sexyyyyyyyyy, ${name}`);
// }

// function processUserInput(callback) {
//   const name = "sayan";
//   // callback ko mereko jab man karga tab chalayega mein 

//   callback(name);
// }

// processUserInput(greeting); // calling a function that inside have antoher function which we can call whereever we want




/////////////////////// all callbacks //////////////////////



// write a function to dowload data from a Url with callback function

// function dowload (url , callback) {
//     //dowload content from given URL and print , passed the given conenet in a callback 

//     console.log("starting the download data from a URL: " , url);
//     setTimeout(function down() {
//       console.log("download complete ");
//           const content = "hello buddy , its call back secyyyyyyyyy";
//              callback(content);
//     }, 4000);

// }

// // write a funcation to write a file with callback function

//  function writeFile(content,callback)
//  {
//    //writing the file and give back the content to call back
//     console.log("writing the file.....");
//      setTimeout(function filecreate(){
     
//       const filename ="file.txt";
//        console.log("writing file complete :) ");
//  callback(filename);
//      },3000);
     

//  }

//  // write a funcation to upoad the file with callback function

//   function uploadFile(site,callback)
//   {
//      console.log("uploading the file....");
//       setTimeout(function uploading()
//       {
//          const response= "success";
//          console.log("uploading", response);
//           callback(response);
          
//       },9000);

//   }
//  dowload("www.sexy.com",function process(content) {
//     console.log(content);
//      writeFile(content,function process(filename){
//        console.log(filename);
//        uploadFile("www.google.com",function process(response){
//          console.log("uploading file is ",response);
//        })
//      } )
//  })



 // main drawback is readabilty problem , callback hell 



/////////////////////// all promise //////////////////////

 // using promise :) 

  function download(url)
  {
     return new Promise(function exec(resolve,reject) {
      console.log("starting download , it will take some time pls sit tight");
       setTimeout(function downloaddata()
       {
console.log("Downloading complete");
 const contant="lawra the lawsun";
resolve(contant);
       },9000)
     });
  }


   function writeFile(content)
   {
     return new Promise( function exec(resolve,reject) 
      {
      console.log("writing a file");
       setTimeout(function writingaFile(){

 const file="file.js";
console.log("creating a file complete ",file);
resolve(file);
       },5000);
     })

   }

   download("www.sexyfy.com").then(function processdownload(value)
   {
    console.log("dowladed data is ",value);
     return writeFile(value);
   })
   .then(function precesswritefile(file)
   {
    console.log("file is ready",file);
   });




