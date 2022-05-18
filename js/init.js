document.addEventListener('DOMContentLoaded', function(){
    const menu =document.querySelector('.sidenav');
    M.Sidenav.init(menu,{edge:'right'});
    const modal=document.querySelectorAll('.modal');
    M.Modal.init(modal);
})