const radioNuclides = ['89Sr', '90Sr', '134Cs', '137Cs', '110mAg', '3H', '54Mn', '58Co', '60Co', '65Zn', '106Ru'];
const radioNuclidesNormal = [0.15, 0.25, 0.7, 1, 6, 387, 44,20, 8, 1, 38];
const rirr = [33.33, 20, 7.14, 5, 8.33, 1, 11.36, 0.25, 0.63, 5, 13.16];
const kbot = [265, 265, 600, 600, 600, 1, 300, 410, 410, 425, 425];
let masNorm=[];
let countR=1;
let z = 1;
let couea;


// append option to <select> tag
    function addOption(){
        for(let i in radioNuclides){
            let RN = document.querySelector("#sel");
            let opt = document.createElement("option");
            opt.text = radioNuclides[i];
            RN.add(opt)
            }     
    }
    addOption();


//Copy and delete <select> 

    function appendRadio(){
        let selectRadio = document.querySelector('#select_item');
       let clone = selectRadio.cloneNode(true);
       selectRadio.parentElement.appendChild(clone);
       clone.id = "select_item" + countR++;
    }

    function deleteRadio(){
        let del = document.querySelector('#select_block');
        if(del.childElementCount > 1){
            del.removeChild(del.lastChild)
        }
        else{
            del = false;
        }
    }


    //Normal index 0f RadioNucleos
/*
    for(let i=0;i<radioNuclides.length;i++){
        $("#radn"+countR).append("<option>"+RN[i]+"</option>");
       }
       countR++;
       } );
       
       
       $(document.body).change(function() {
       couea=0;
         $("select").each(function() {
       //  alert(this.value);
         let znach=RN.indexOf(this.value);
       console.log(znach);
       //alert(couea);
       $("#RadN"+couea).text(" Норма: "+RNNorma[znach]);
       masNorm[couea]=RNNorma[znach];
       couea++;
       });});
        // Your code here.
           //alert("qqqqq");
        
       });*/