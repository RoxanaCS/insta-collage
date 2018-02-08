$(document).ready(function() {
  $('#collage').hide();
  $('#photo-booth').hide();
  $('#photos').hide();
  $('.bannerTop').hide();
  images();
});
 
$('#button').click(function() {
  if ($('#email').val() === '' || $('#password').val() === '' || $('#password').val() === '123456' || $('#password').val().length <= 5) {
    alert('Ingrese un usuario/contraseña valida');
  } else {
    $('#collage').show();
    $('#photo-booth').show();
    $('#photos').show();
    $('.bannerTop').show();
    $('#init').hide();
    $('.footerReg').hide();
  }
});

function drag(ev) {
  console.log(ev.target.src);
  console.log(ev.target.getAttribute('data-img'));
  ev.dataTransfer.setData('text', ev.target.id);
}
function permitirDrop(ev) {
  ev.preventDefault();
}
function drop(ev) {
  ev.preventDefault();
  var photoId = ev.dataTransfer.getData('text');
  var photo = document.getElementById(photoId);
  var photoSrc = photo.getAttribute('data-img');
  ev.target.style.backgroundImage = "url('" + photoSrc + "')";
}
function images() {
  var images = $('.imageDiv');
  images.each(function() {
    $(this).css('background-image', 'url(' + $(this).attr('data-img') + ')');
  });
}
