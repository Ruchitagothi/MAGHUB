let activeIndex = 0;

const groups = document.getElementsByClassName("card-group");

const handleLeftClick = () => {
  const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
  
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
        
  currentGroup.dataset.status = "after";
  
  nextGroup.dataset.status = "becoming-active-from-before";
  
  
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;

}

const handleRightClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;
  
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
  
  currentGroup.dataset.status = "before";
  
  nextGroup.dataset.status = "becoming-active-from-after";
  
  
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  
}

// change select button links
const linkchange= () =>{
  if(activeIndex==1){
    $('#prolink').attr('href', 'product _pages/vogue.html');
  } else if(activeIndex==2){
    $('#prolink').attr('href', 'product _pages/forbes.html');
  }
}

$('#left-button').click(function() {
  console.log(activeIndex);
    linkchange();
});

$('#right-button').click(function() {
    linkchange();
  console.log(activeIndex);

});

