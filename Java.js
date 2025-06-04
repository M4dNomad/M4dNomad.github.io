const hoverButton = document.getElementById('button');  
hoverButton.addEventListener('mouseover', function() {  
    hoverButton.style.backgroundColor = '#EDEDE2';  
});  
hoverButton.addEventListener('mouseout', function() {  
    hoverButton.style.backgroundColor = '';  
});
hoverButton.addEventListener('mouseover', function() {
    hoverButton.style.color = '#202020';
});
hoverButton.addEventListener('mouseout', function() {  
    hoverButton.style.color = '';  
});