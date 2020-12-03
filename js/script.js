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

const displayIcons = (container, array) => {
  array.forEach((element,index) => {
    console.log(element.type);
    container.append(`
      <div class=" box "style = "color : ${element.color}">
      <i class="${element.family} ${element.prefix}${element.name}"> </i>
      <p>${element.name}</p>
      </div>
      `);
    });
}

const container = $("#icons");

// milestone-2
const colors = ["pink","blue","green"];
const types = ["vehicle","vegetable","animal"];

icons.forEach(icon => {
  if (icon.type === 'vehicle') {
    icon.color = colors[0];
  } else if (icon.type === 'vegetable') {
    icon.color = colors[1];
  } else if (icon.type === 'animal') {
    icon.color = colors[2];
  }
})

displayIcons(container, icons);



// milestone-1
/*
container.append(`
  <div class=" box ">
    <i class="${element.family} ${element.prefix}${element.name}"> </i>
    <p>${element.name}</p>
  </div>
`)
*/



/* milestone-2 ES5
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
*/
