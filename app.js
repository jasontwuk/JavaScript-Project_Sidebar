// set variables
const sidebarToggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

// set sidebar toggle button event
sidebarToggleBtn.addEventListener('click', function(){
    // method 1:
    // if(sidebar.classList.contains('show-sidebar')){
    //     sidebar.classList.remove('show-sidebar');
    // } else {
    //     sidebar.classList.add('show-sidebar');
    // }

    // method 2:
    sidebar.classList.toggle('show-sidebar');
});

// set sidebar close button event
closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
});

// click elsewhere other than sidebarToggleBtn and sidebar area, then the sidebar will be closed
window.addEventListener('click', function(e){
    if(e.target.parentNode != sidebarToggleBtn && e.target.parentNode != sidebar && e.target != sidebar){
        // console.log(e.target);
        if(sidebar.classList.contains('show-sidebar')){
            sidebar.classList.remove('show-sidebar');
        }
    }
});
