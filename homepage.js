
// let btnMessage = document.getElementById("btnMessage");

// document.addEventListener("scroll" , () =>{
//     addActiveClass() });


// function addActiveClass() {
//     let scrolled = window.scrollY;

//     if(scrolled > 130) {
//         btnMessage.style.right="0px"; 
//         btnMessage.classList.add("pulseAnimation");
//     } else {
//         btnMessage.style.right="-100px";  
//         btnMessage.classList.remove("pulseAnimation");   
//     }
// }



let footer = document.querySelector(".footer");

let copyRight = document.querySelector(".copyRight");

let dropdowncontent = document.querySelector(".dropdown-content");

let replacePhone = document.querySelector(".navDesc .phoneNav");

replacePhone.innerHTML = `  <i class="fad fa-phone-volume"></i>
<div>
    0737 129 122<br>
  
</div>
`;

footer.innerHTML = `  <div class="dateContact">
<h1> Date de contact:</h1>
<p> <i class="fas fa-map-marker-alt"></i>  Str. Ștefan cel Mare nr 1-3 <br> <span style="padding-left: 18px;">  bl. Perla SC. 2 Et. 3 ap. 54 Interfon 054, Bucuresti, Sector 1 <br><span style="padding-left: 18px;">(Dorobanţi - Perla)</span>  </span> </p>
<br><br>
<p> <i class="fas fa-phone-alt"></i> 0737 129 122 <br> <span style="padding-left: 20px;"> </span></p>
<br><br>
<a  href="mailto:consultatie@psyhology.ro" class="emailBox">
<i class="far fa-envelope" > </i> consultatie@psyhology.ro
</a>
<br><br>
</div>



<div  class="text">

<h1> Informaţii utile:</h1>
<a  href="informatii-utlie.html#gdpr" >
     GDPR
</a>

<a  href="informatii-utlie.html#termenisiconditii" >
    Termeni Si Condiţii
</a>
<a  href="informatii-utlie.html#politicaconfidentialitate" >
    Politica de confidentialitate
</a>
<a  href="informatii-utlie.html#notainformare" >
    Nota de informare  
</a>
<a  href="informatii-utlie.html#cookies" >
    Politica de cookies 
</a>

</div>

<div" class="map">
<h1> Unde ne gasiţi? </h1>

<iframe id="map" style="border-radius: 10px;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1423.9992325938!2d26.09809957205988!3d44.45370269630567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f8ac3ea4e307%3A0x529ef55b99bbfb6a!2s%C8%98oseaua%20%C8%98tefan%20cel%20Mare%201-3%2C%20Bucure%C8%99ti%20011736!5e0!3m2!1sen!2sro!4v1642773019509!5m2!1sen!2sro" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
</div>`;


copyRight.innerHTML = ` <div class="logoFooter">
<img id="logo" style="width:165px; height:165px;" alt="aviz" title="aviz " src="Photos/LogoDorobantiPerla.png">
</div>
Copyright © 2022 
<br> <br>
<p style="font-weight: bold;font-size: 115%;"> Centrul De Evaluare Psihologica "Dorobanţi - Perla"  </p> 
<br>
BUCURESTI SECTOR 1 `;

dropdowncontent.innerHTML = `
  <a href="port-arma.html">AVIZ Psihologia Apărării </a>
  <a href="pshihologia-tranporturilor.html"> AVIZ Psihologia Transporturilor </a>
  <a href="obtinere-permis-conducere.html"> AVIZ OBȚINERE PERMIS CONDUCERE</a>
  <a href="pshihologia-muncii-medicina-muncii.html">AVIZ Psihologia Muncii  </a>
  <a href="evaluare-clinica.html"> EVALUARE
    CLINICA & PSIHIATRIE </a>
  <a href="cursuri-dezvoltare-personala.html">
  DEZVOLTARE PERSONALA
  & CURSURI</a>
  <a href="#">SUPERVIZARE PROFESIONALA ÎN PSIHOLOGIE</a>
  <a href="#">BATERIE DE TESTE
    ȘI PROFILE PSIHOLOGI </a>
  <a href="#">PSIHOLOGIA
    MUNCII ȘI ORGANIZAȚIONALĂ</a>
  <a href="#">PSIHOTERAPIE & CONSILIERE
    PSIHOLOGICA </a>
  <a href="consiliere-online.html">SERVICII DE
  CONSILIERE ONLINE </a>`;




  // let checkbox = document.getElementById("checkbox");


  // document.getElementById("sumbitBtn").addEventListener("click", function(event){
  //   if(checkbox.checked) {
   
  //   } else {
  //     event.preventDefault();
    
  //   }
    
  // });

 




// 


  if (window.matchMedia("(min-width: 700px)").matches) {
   
  } else {
 

document.body.innerHTML += `<a href ='tel:0737129122' class="phone-call"><img src="https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png" width="50" alt="Call Now" title="Call Now"></a>`;




  }





