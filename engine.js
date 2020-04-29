i=0
var total=0;
function  ajouterAuPanier(idb,idi,ide,prix){

   var x=document.getElementById(idi).value;
    x=parseInt(x);
    console.log(x);
    console.log(idb);
    document.getElementById(idi).value=x+1;
    document.getElementById(idb).innerHTML=x+1;
    console.log(document.getElementById(idb).text);
    console.log(document.getElementById(idi).value);
    i=i+1;
    
    console.log(ide);
    document.getElementById(ide).disabled = false;
    total+=prix;
    document.getElementById('elements').innerHTML=(i+' elements'+'    total'+':'+total+'DH');
}
function supprimerDuPanier(idb,idi,ide,prix){
    i=i-1;
    var x=document.getElementById(idi).value;
    x=parseInt(x);
    console.log(x);
    document.getElementById(idi).value=x-1;
    document.getElementById(idb).innerHTML=x-1;
    if(document.getElementById(idi).value>0){
    
      console.log("cous avez supprimer "+prix);
      if(prix<=total){
      total-=prix;
      document.getElementById('elements').innerHTML=(i+' elements '+'    total '+total+'DH');
      }
    }else{
        console.log("cous avez supprimer "+prix);
      if(prix<=total){
      total-=prix;
      document.getElementById('elements').innerHTML=(i+' elements '+'    total '+total+'DH');
      document.getElementById(ide).disabled = true;
    }
}
}