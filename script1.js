/*Sticky NavBar*/ 
window.addEventListener('scroll',function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);  
  });


  /* Responsive NavBar */
  function toggleMenu(){
      const toggleMenu = document.querySelector('.toggleMenu');
      const nav = document.querySelector('.nav');
      toggleMenu.classList.toggle('active');
      nav.classList.toggle('active');
  }

  /* Scrolling Aniamtion Effects */
  window.addEventListener('scroll',function(){
      var anime = document.querySelectorAll('.animeX');

      for(var s = 0; s < anime.length; s++){
          var windowheight = window.innerHeight;
          var animetop = anime[s].getBoundingClientRect().top;
          var animepoint = 150;

          if(animetop < windowheight - animepoint){
              anime[s].classList.add('active');
          }
          else{
              anime[s].classList.remove('active');
          }
      }
  })


/* Read more games */
const parentContainer = document.querySelector('.aboutg');
parentContainer.addEventListener('click', _event=>{
    const current = _event.target;
    const isReadMoreBtn = current.className.includes('read-more-b');
    if(!isReadMoreBtn) return;
    const currentText = _event.target.parentNode.querySelector('.read-more-t');
    currentText.classList.toggle('read-more-t--show');
    current.textContent = current.textContent.includes('Read More') ? "Read Less" : "Read More";
})


/* Close Win*/
function closeMe(){
    window.opener = self;
    window.close();
}



/* Search */ 
const txt1 = document.getElementById('tser');
const btn1 = document.getElementById('btn');

function fun(){
    if(txt1.value === 'Defense of the Ancients'){
        location.replace("Dota.html");
    }
    else if(txt1.value === 'Valorant'){
        location.replace("Val.html");
    }
    else if(txt1.value === 'Mobile Legend Bang Bang'){
        location.replace("ML.html");
    }
    else if(txt1.value === 'Horizon Zero Dawn'){
        location.replace("HZD.html");
    }
    else if(txt1.value === 'Call of Duty Mobile'){
        location.replace("COD.html");
    }
    else if(txt1.value === 'God of War Ragnarok'){
        location.replace("GOW.html");
    }
    else if(txt1.value === 'Halo Infinite'){
        location.replace("HI.html");
    }
    else if(txt1.value === 'Red Dead Redemption II'){
        location.replace("RDD.html");
    }
    else if(txt1.value === 'Elden Ring'){
        location.replace("ER.html");
    }
    else if(txt1.value === 'Clash of Clans'){
        location.replace("COC.html");
    }
    else if(txt1.value === 'Phasmophobia'){
        location.replace("P.html");
    }
    else if(txt1.value === 'Apex Legends Mobile'){
        location.replace("ALM.html");
    }
    else if(txt1.value === 'Angry Birds'){
        location.replace("AB.html");
    }
    else{
        alert("INPUT IS NOT FIND OR INVALID");
    }
}
btn1.addEventListener('click',fun);


const search = document.querySelector(".searchBx");
const inputBox = search.querySelector("input");
const suggBox = search.querySelector(".autocom-box");
inputBox.onkeyup = (e)=>{
let userData = e.target.value;
let emptyArray = [];
if(userData){
    emptyArray = suggestions.filter((data)=>{
        return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data)=>{
        return data = `<li>${data}</li>`;
    });
    search.classList.add("active");
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
        allList[i].setAttribute("onclick", "select(this)");
    }
}else{
    search.classList.remove("active");
}
}



function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    search.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}


let suggestions = [
        "Defense of the Ancients",
        "Valorant",
        "Mobile Legend Bang Bang",
        "Horizon Zero Dawn",
        "Call of Duty Mobile",
       "God of War Ragnarok",
        "Halo Infinite",
        "Red Dead Redemption II",
        "Elden Ring",
        "Clash of Clans",
       "Phasmophobia",
        "Apex Legends Mobile",
        "Angry Birds",
     
];




/* Scroll top */
const goTopBtn = document.querySelector('.go-top-btn');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
  if(window.scrollY > 200) {
    goTopBtn.style.display = "flex"
  } else {
    goTopBtn.style.display = "none"
  }
}
goTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})