
for(var i =0;i<6;i++){
    document.querySelectorAll(".BikeM")[i].addEventListener("click",function(e){
        var curr=e.target.innerHTML.split(' ').join('');
        changeImage(curr);
    })
}           

function changeImage(ev){
 document.querySelector(".myImg").src="images/"+ev+".png";
   
}

for(var j=0;j<6;j++){
    document.querySelectorAll(".BikeM")[j].addEventListener("click",function(event){
        var activeButton=event.target.innerText.split(' ').join('');
        console.log(activeButton);
            if(activeButton==="OLAS1") {
                document.querySelector(".bikePrice").innerText="75";
                document.querySelector(".bikeName").innerText="Ola S1 (EV)";
                document.querySelector(".bikeEngine").innerText="8.5kW Motors";
                document.querySelector(".bikeFuelType").innerText="Range 80km";
                document.querySelector(".bikeTopSpeed").innerText="Top Speed 90km/hr";
                
            }
          else  if(activeButton=="Activa5G") {
                document.querySelector(".bikePrice").innerText="100";
                document.querySelector(".bikeName").innerText="Activa 5G 2022";
                document.querySelector(".bikeEngine").innerText="110cc Engine";
                document.querySelector(".bikeFuelType").innerText="Fuel type Petrol";
                document.querySelector(".bikeTopSpeed").innerText="Top Speed 100km/hr";
                
            }
        
        else if(activeButton=="Ather") {
                document.querySelector(".bikePrice").innerText="60";
                document.querySelector(".bikeName").innerText="Ather (EV)";
                document.querySelector(".bikeEngine").innerText="8kW Motors";
                document.querySelector(".bikeFuelType").innerText="Range 75km";
                document.querySelector(".bikeTopSpeed").innerText="Top Speed 80km/hr";
        
            }
           else if(activeButton=="REClassic350") {
                document.querySelector(".bikePrice").innerText="250";
                document.querySelector(".bikeName").innerText="Royal Enfield Bullet";
                document.querySelector(".bikeEngine").innerText="350cc Engine";
                document.querySelector(".bikeFuelType").innerText="Fuel Type Petrol";
                document.querySelector(".bikeTopSpeed").innerText="Top Speed 120km/hr";
        
            }
           else if(activeButton=="ContinentelGT") {
                document.querySelector(".bikePrice").innerText="500";
                document.querySelector(".bikeName").innerText="Continentel GT650";
                document.querySelector(".bikeEngine").innerText="650cc Engine";
                document.querySelector(".bikeFuelType").innerText="Fuel Type Petrol";
                document.querySelector(".bikeTopSpeed").innerText="Top Speed 120km/hr";
        
            }
           else if(activeButton=="BMWS1000r") {
                document.querySelector(".bikePrice").innerText="2000";
                document.querySelector(".bikeName").innerText="BMW S1000RR";
                document.querySelector(".bikeEngine").innerText="1000cc Engine";
                document.querySelector(".bikeFuelType").innerText="Fuel Type Petrol";
                document.querySelector(".bikeTopSpeed").innerText="Top Speed 200km/hr";
        
            }
    })

}``


const faq=document.querySelectorAll(".faqs");
faq.forEach(faq => {
    faq.addEventListener("click",()=>{
        faq.classList.toggle("active");
    })
});

const nav=document.querySelector(".navBarOptions");
const navButtons=document.querySelector(".navBarButtons");
function toggleHandler(e){
    e.classList.toggle("fa-xmark")
    navButtons.classList.toggle("hidden")
    nav.classList.toggle("hidden")
}

