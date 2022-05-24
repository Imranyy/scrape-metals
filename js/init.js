document.addEventListener('DOMContentLoaded', function(){
    //select
    const select=document.querySelectorAll('select');
    M.FormSelect.init(select)
})

    //input logics
      const formOne =document.querySelector('#one')
      formOne.addEventListener('submit',(e)=>{
        e.preventDefault()
       
        const media=formOne.media.value
        const username=formOne.username.value
        localStorage.setItem('username',username);
        localStorage.setItem('media',media);
       
        window.location.href=`https://${localStorage.getItem('media')}.com/${localStorage.getItem('username')}`
        formOne.reset()

          /*if(localStorage.getItem('media') === 'instagram'||localStorage.getItem('media') ==='Instagram'||localStorage.getItem('media') ==='INSTAGRAM'){
          window.location.href=`https://instagram.com/${localStorage.getItem('username')}`
          formOne.reset()
      }else
      if(localStorage.getItem('media') === 'twitter'||localStorage.getItem('media') ==='Twitter'||localStorage.getItem('media') ==='TWITTER'){
        window.location.href=`https://twitter.com/${localStorage.getItem('username')}`
        formOne.reset()}
      else if(localStorage.getItem('media') === 'facebook'||localStorage.getItem('media') ==='Facebook'||localStorage.getItem('media') ==='FACEBOOK'){ window.location.href=`https://facebook.com/${localStorage.getItem('username')}`
      formOne.reset()
      }*/
     
      })
    
