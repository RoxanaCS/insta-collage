$(document).ready(function() {
  images();
});
function drag(ev) {
  console.log(ev.target.src);
  console.log(ev.target.getAttribute("data-img"))
  ev.dataTransfer.setData('text', ev.target.id);
}

function permitirDrop(ev){
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var photoId = ev.dataTransfer.getData('text'); 
  var photo = document.getElementById(photoId);
  var photoSrc = photo.getAttribute("data-img");
  ev.target.style.backgroundImage = "url('" + photoSrc + "')";
}


function images(){
  var images = $(".imageDiv")
  images.each(function(){
    $(this).css('background-image', 'url(' + $(this).attr('data-img') + ')');
  })
}
