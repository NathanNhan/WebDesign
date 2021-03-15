
// Mobile Menu
var hambuger = document.getElementById('hamburguer-icon').onclick = function(){
  document.querySelector('.sliding-header-menu-outer').style.right = "0";
};
var closeIcon = document.querySelector('.close-icon').onclick = function(){
  document.querySelector('.sliding-header-menu-outer').style.right = "-320px";
}



// About us Tab
var singleTab = document.querySelectorAll('.single-tab');
for(let i = 0; i < singleTab.length; i++){
  singleTab[i].onclick = function (){
    const perTab = this.textContent;
    document.getElementById('box-text').innerHTML = aboutUs[perTab];
    var singleTab = document.querySelectorAll('.single-tab');
    singleTab[i].style.backgroundColor = seletectedColor;
    singleTab[i].style.fontWeight = "bold";
  }
  singleTab[i].onmouseout = function(){
    singleTab[i].style.backgroundColor = unseletectedColor;
  }
}

var aboutUs = {
  "Mission": "Duis ac leo nisi. Mauris nec ex id lorem commodo rutrum rutrum a est. Cras facilisis sit amet lectus non posuere. Nullam non magna non enim blandit elementum.",
  "Vision": "Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",
  "Values": "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>"
};

var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";




// Service slider
var nextButton = document.getElementById('service-next');
var prevButton = document.getElementById('service-previous');
var currentValue = 0;
nextButton.addEventListener('click',function(){
   const item = ourServices[currentValue];
   title = item.title;
   text = item.text;
   document.getElementById('service-text').innerHTML = text;
   document.getElementById('service-title').innerHTML = title;
   currentValue++;
   if(currentValue > ourServices.length - 1){
     currentValue = 0;
   }
})
prevButton.addEventListener('click',function(){
  const item = ourServices[currentValue];
   title = item.title;
   text = item.text;
   document.getElementById('service-text').innerHTML = text;
   document.getElementById('service-title').innerHTML = title;
   currentValue--;
   if(currentValue < 0){
     currentValue = ourServices.length - 1;
   }
})


var ourServices = [
  {
    'title': 'Web design',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Digital Marketing',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];





// Footer

var year = document.getElementById('current_year');
years = new Date().getFullYear();
year.innerHTML = years;

  
   


