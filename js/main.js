/**
 *
 * Display Icons
 *
 */

$(document).ready(function () {
  // Icon set
  const icons = [
      {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
      },
      {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
      },
      {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
      },
      {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
      },
      {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
      },
      {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
      },
      {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
      },
      {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
      },
  ];

const colors = [
  'blue',
  'orange',
  'purple'
]

// Icon container
  const container = $('.icons');

// Print icons on screen
  printIcons(icons, container);

// Print with colors (Blue-Orange-Purple)
  const coloredIcons = colorIcons(icons, colors);
  console.log(coloredIcons);
  printIcons(coloredIcons, container);

// Filter icon by type (Animal-Vegetable-User)
  const select = $('#type');
  const types = getType(icons);
// Generate options
  genOption(types, select);
// Change Event
  select.change(()=>{
    const selected = select.val();
   //console.log(selected);
// Filter icon
    const filter = filterIcon(coloredIcons, selected);
    printIcons(filter, container);
  });
  
}); // <-- END doc ready


/**
 * Functions
 */

// Function to print icons on screen
function printIcons(icons, container){
// to clean container
  container.html('');

  icons.forEach((icon) => {
    const{family, prefix, name, color} = icon;

    const html =
    `<div class="icon">
      <i class="${family} ${prefix}${name}"
       style= "color: ${color}"></i>
      <div class="name">${name}</div>
    </div>`;

    container.append(html);
  });
}
// Function to print with colors (Blue-Orange-Purple)
function colorIcons(icons, colors){
  // get type
  const types = getType(icons);
  console.log(types);
  // assign color by type
  const coloredIcons = icons.map((icon)=>{
    const indexType = types.indexOf(icon.type);

    return{
      ...icon,
      color: colors[indexType]
      };
  });
  return coloredIcons;
}

// Function get types
function getType(icons){
  const types = [];

  icons.forEach((icon) => {
    if(! types.includes(icon.type)){
      types.push(icon.type);
    }
  });
return types;
}

// Function to generate options by type
function genOption(types, select){
  types.forEach((opt) => {
    select.append(`<option value="${opt}">${opt}</option`)
  });
}

// Function filter icons
function filterIcon(coloredIcons, selected){

  if (selected === 'all') {
    return coloredIcons;
  }

  const filteredIcon = coloredIcons.filter((icon)=>{
    return icon.type === selected;
  });
return filteredIcon;
}
