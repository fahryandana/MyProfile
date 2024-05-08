// Toogle class active
const navbarNav = document.querySelector('.navbar-nav');

// ketika garis tiga di klik
document.querySelector('#garis-tiga').onclick =()=>{
    navbarNav.classList.toggle('active');
};
// klik sembarang untuk menghilangkan menu
const titiktiga = document.querySelector('#garis-tiga');

document.addEventListener('click',function(e){
    if(!titiktiga.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});
// ini untuk klik suka
var sukaIcon = document.getElementById("suka");

var jumlahKlikSpan = document.getElementById("jumlah-klik");

var jumlahKlik = 0;

sukaIcon.addEventListener("click", function() {

    jumlahKlik++;
    
    jumlahKlikSpan.textContent = jumlahKlik;
    if (jumlahKlik === 1)
    alert("Thank You! :3 ");
});



