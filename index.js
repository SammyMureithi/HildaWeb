const menu = document.querySelector( ".menu" );
const nav = document.querySelector( ".nav" );
const largerNav = document.querySelectorAll( ".largerNav > li > a" );
const projects = document.querySelectorAll( ".project" );
const projectDecriptions=document.querySelectorAll(".project-description")
let clickState = 0;
menu.addEventListener( "click", () => {
    if ( clickState == 0 ) {
        clickState = clickState + 1;
        menu.src = "images/x.png";
        nav.style="display:block"
    }
    else {
        clickState =clickState- 1;
        menu.src = "images/menu-regular-24.png";
         nav.style="display:none"   
    }
   
} )
largerNav.forEach( element => {
    element.addEventListener( "mouseover", () => {
        element.className = "hover";
    } )
    element.addEventListener( "mouseleave", function () {
        element.className = "";
    })
} )
projects.forEach( project => {
    project.addEventListener( "mouseover", () => {
        projectDecriptions.forEach(projectDecription => {
            projectDecription.className= "visibleProject";
        })
        
    } )
    project.addEventListener( "mouseleave", function () {
        projectDecriptions.forEach(projectDecription => {
            projectDecription.className = "invisibleProject";
        })
    })
})
