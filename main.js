function chkcontrol(j) {
    let sum=0;
        for(let i=0; i < document.form1.ckb.length; i++){
            if(document.form1.ckb[i].checked){
                sum = sum + parseInt(document.form1.ckb[i].value);
            }
            document.getElementById("msg").innerHTML="Pizza price :"+ sum + "€";
        }
    }

    function selectvalue() {
        document.getElementById('eat').innerHTML=
        ("" +
        formid.ddlselect[formid.ddlselect.selectedIndex].text+'</b>')
    }

    function nameinput() {
var x = document.getElementById("myText").value;
document.getElementById("name").innerHTML ='Customer name:' + '' + x;
}
document.getElementById("large").checked = true;
document.getElementById("meat").checked = true;