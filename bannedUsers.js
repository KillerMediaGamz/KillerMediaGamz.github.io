<script type="text/javascript">

// Block IP address script- By JavaScriptKit.com (http://www.javascriptkit.com)
// For this and over 400+ free scripts, visit JavaScript Kit- http://www.javascriptkit.com/
// This notice must stay intact for use.

//Enter list of banned ips, each separated with a comma:
var bannedips=["73.181.79.140", "11.11.11.11"]

var ip = '<!--#echo var="REMOTE_ADDR"-->'

var handleips=bannedips.join("|")
handleips=new RegExp(handleips, "i")

if (ip.search(handleips)!=-1){ 
alert("Your IP has been banned from this site. Redirecting...")
window.location.replace("http://www.google.com")
}

</script>
