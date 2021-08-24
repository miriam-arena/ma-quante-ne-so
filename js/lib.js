function getCookie(cname)
{
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

/* delete a cookie - as reference
  document.cookie = "loginToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
*/

/* user logged in or already started the quiz or unknown */
function evaluateUser(data)
{
    data = JSON.parse(data);

    if (data.unknown)
    {
      data.forward = true;
      data.location = "log-in.html";
    }
    // TODO: finire implementazione per altri casi in cui devo mandare all'ultima risposta data o non devo rimandare da nessuna parte.
    // TODO: e poi usare questo pattern in tutte le pagine per il controllo del login. [come usato in section.html]
    /*
    $.post( "https://artathlon.arternative-lab.eu/api/quizVisitorLogged",{c : getCookie('loginToken'), su : 2}, function( data )
    {
      const nextLocation = evaluateUser(data)
      if (nextLocation.forward)
         window.location = nextLocation.location;
    });
    */
}
