<script type="application/javascript">
  function getIP(json) {
    if (json.ip = "73.181.79.140") {
     alert("You are banned from this site, go play with google.");
        window.location = "https://www.google.com";
    }
  }
</script>

<script type="application/javascript" src="https://api.ipify.org?format=jsonp&callback=getIP"></script>
