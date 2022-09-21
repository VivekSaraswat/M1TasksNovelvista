function toValidate(){
    var grossWeight=parseInt(document.getElementById("cargoGrossWeight").value);
    var netWeight=parseInt(document.getElementById("cargoNetWeight").value);
    var source=document.getElementById("sourceSelect").value;
    var destination=document.getElementById("destinationSelect").value;
    if(grossWeight<netWeight && source==destination){
        document.getElementById("output").innerHTML="gross weight cannot be less than net weight <br> source and destination cannot be the same";
    }
    else if(grossWeight<netWeight || source==destination){
        if(grossWeight<netWeight){
            document.getElementById("output").innerHTML="gross weight cannot be less than net weight";
        }
        if(source==destination){
            document.getElementById("output").innerHTML="source and destination cannot be the same";
        }
    }
    else{
        document.getElementById("output").innerHTML="Form submitted successfully!";
    }
}