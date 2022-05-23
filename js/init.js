document.addEventListener('DOMContentLoaded', function(){
    const menu =document.querySelector('.sidenav');
    M.Sidenav.init(menu,{edge:'right'});
    const modal=document.querySelectorAll('.modal');
    M.Modal.init(modal);
    //select
    const select=document.querySelectorAll('select');
    M.FormSelect.init(select)
})
//setupUI for logged in and logged out users
const loggedinLink=document.querySelectorAll('.log-in')
const loggedoutLink=document.querySelectorAll('.log-out')

export const setupUI=(user)=>{
  if(user){
    loggedinLink.forEach(item=>item.style.display='block')
    loggedoutLink.forEach(item=>item.style.display='none')
  }else{
    loggedinLink.forEach(item=>item.style.display='none')
    loggedoutLink.forEach(item=>item.style.display='block')
  }
}