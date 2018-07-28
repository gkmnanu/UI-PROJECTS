// mobilenav -->
  const sidenav = document.querySelector('.sidenav');
  M.Sidenav.init(sidenav, {});
console.log('gjaiutam');
// nav scrollspy -->
    const ss = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(ss, {});
//tab content
    function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    // Get the element with id="defaultOpen" and click on it
      document.getElementById("defaultOpen").click();
// lightbox -->
    const mb = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(mb, {})
