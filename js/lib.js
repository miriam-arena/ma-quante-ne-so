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
function evaluateUser(dataObj)
{
    if (dataObj.unknown) // unknown user -> send back to login
    {
      dataObj.location = "log-in.html";
    }
    else if (dataObj.forward && dataObj.hasOwnProperty("s") && dataObj.hasOwnProperty("q")) // known user that started the quiz -> send to latest question
    {
      dataObj.location = "question.html?s="+dataObj.s+"&q="+dataObj.q;
    }
    else // known user but did not start the quiz -> send to first section
    {
      dataObj.location = "section.html?s=1";
    }

    return dataObj;
}
