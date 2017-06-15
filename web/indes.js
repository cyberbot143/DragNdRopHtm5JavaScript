/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




var drag_images = document.getElementsByClassName('drag_img');
var drop_cntr = document.getElementById('drop_here');
var img_len = drag_images.length;

for (var i = 0; i < img_len; i++) {

    drag_images[i].addEventListener('dragstart', function (event) {
        event.dataTransfer.setData('cntrId', this.getAttribute('id'))

    });
}
drop_cntr.addEventListener('dragover', function (event) {
    event.preventDefault();
    return false;

});
drop_cntr.addEventListener('drop', function (event) {
    var remove_src = '<img src ="http://www.clker.com/cliparts/e/0/f/4/12428125621652493290X_mark_18x18_02.svg.med.png" style = "width:10px" id ="remove_id" >';
    var cntrId = event.dataTransfer.getData('cntrId');
    imgSrc = document.getElementById(cntrId + '_img').getAttribute('src');
    caption = document.getElementById(cntrId + '_txt').innerHTML,
    html = '<div id = "' + cntrId + 'Container" ><img src=" ' + imgSrc + ' " style = "width:50px;"  />';
    html += "<label>" + caption + " </label>";
    html += remove_src + "</div>";
    //checking whether the container has duplicate id
    if (document.getElementById(cntrId + 'Container') === null) {
        //if no any unique image insert into it
        document.getElementById('drop_here').insertAdjacentHTML('afterbegin', html);
    } else {
        alert('Image alreadyExists');
    }
    document.getElementById('remove_id').addEventListener('click', function () {

        var elementToBeRemove = document.getElementById('remove_id');
        elementToBeRemove.parentNode.remove(elementToBeRemove);

        //var childDiv = document.getElementById('removeId');



    });


});





      