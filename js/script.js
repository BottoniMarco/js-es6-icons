const icons = [
  {
    name: "dog",
    prefix: "fa-",
    type: "animal",
    family: "fas"
  },
  {
    name: "fish",
    prefix: "fa-",
    type: "animal",
    family: "fas"
  },
  {
    name: "tractor",
    prefix: "fa-",
    type: "vehicle",
    family: "fas"
  },
  {
    name: "hippo",
    prefix: "fa-",
    type: "animal",
    family: "fas"
  },
  {
    name: "spider",
    prefix: "fa-",
    type: "animal",
    family: "fas"
  },
  {
    name: "apple-alt",
    prefix: "fa-",
    type: "vegetable",
    family: "fas"
  },
  {
    name: "carrot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas"
  },
  {
    name: "lemon",
    prefix: "fa-",
    type: "vegetable",
    family: "fas"
  },
  {
    name: "dragon",
    prefix: "fa-",
    type: "animal",
    family: "fas"
  },
  {
    name: "pepper-hot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas"
  },
  {
    name: "space-shuttle",
    prefix: "fa-",
    type: "vehicle",
    family: "fas"
  },
  {
    name: "truck-monster",
    prefix: "fa-",
    type: "vehicle",
    family: "fas"
  },
  {
    name: "wheelchair",
    prefix: "fa-",
    type: "vehicle",
    family: "fas"
  },
  {
    name: "tram",
    prefix: "fa-",
    type: "vehicle",
    family: "fas"
  },
  {
    name: "fighter-jet",
    prefix: "fa-",
    type: "vehicle",
    family: "fas"
  },
  {
    name: "helicopter",
    prefix: "fa-",
    type: "vehicle",
    family: "fas"
  },
];

const container = $("#icons");

icons.forEach((element,index) => {
  console.log(element.type);
  if (element.type == "vehicle") {
    container.append(`
      <div class=" box "  style = "color : pink" >
        <i class="${element.family} ${element.prefix}${element.name}"> </i>
        <p>${element.name}</p>
      </div>
    `)
  }else if (element.type == "vegetable"){
    container.append(`
      <div class=" box "  style = "color : green" >
        <i class="${element.family} ${element.prefix}${element.name}"> </i>
        <p>${element.name}</p>
      </div>
    `)
  }else if (element.type == "animal"){
    container.append(`
      <div class=" box "  style = "color : blue" >
        <i class="${element.family} ${element.prefix}${element.name}"> </i>
        <p>${element.name}</p>
      </div>
    `)
  }
});




// milestone-2
/*
const color = ["red","blue","green"];

const type = ["vehicle","vegetable","animal"];

icons.forEach((element,index) => {
  console.log(element.type);
  if (element.type == "vehicle") {
    container.append(`
      <div class=" box "  style = "color : pink" >
        <i class="${element.family} ${element.prefix}${element.name}"> </i>
        <p>${element.name}</p>
      </div>
    `)
  }else {
    console.log("non-v");
  }
});
*/


// milestone-1
/*
container.append(`
  <div class=" box ">
    <i class="${element.family} ${element.prefix}${element.name}"> </i>
    <p>${element.name}</p>
  </div>
`)
*/
