function mainFunction() {
      setTimeout(loadApp, 2000); 
    }

    function loadApp() {
      document.getElementById("main-content").style.display = "block";
      document.getElementById("loader").style.display = "none";
    }