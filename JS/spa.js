
import router from "./router.js";

//set a click event on each a tag 
document.addEventListener( "click", ( event ) =>
{
  event.preventDefault();
  if ( !event.target.className.includes( "nav-link" ) )
  {
    return false;
  }

  urlRoutes(event);

} )


function urlRoutes (event)
{
  window.history.pushState( {}, " ", event.target.href );
  locationHandler();
}


async function locationHandler ()
{
  const loc = window.location.pathname;
  const routeObjects = router[ loc ];
  const htmlDoc = await fetch( routeObjects.template ).then( ( response ) => response.text() );
  document.querySelector("#content").innerHTML = htmlDoc;
  document.title = routeObjects.title;
}

window.onpopstate = locationHandler;


