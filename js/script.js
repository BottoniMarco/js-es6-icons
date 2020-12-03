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


icons.forEach((element) => {
  // console.log( element.family, element.prefix , element.name);
  console.log(
    container.append(`
      <div>
        <i class="${element.family} ${element.prefix}${element.name}"> </i>
      </div>
    `)
  );
});
