console.log("js/script.js") 

submitBtn.addEventListener("click",function(event){
event.preventDefault();
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
if (name===""||email===""){
alert("Please fill in all required fields.");
} else{
alert("Form submitted successfully!");
}
});

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click",function(){
document.body.classList.toggle("dark-mode");
});

const toggleSkills = document.getElementById("toggleSkills");
const skillsSection = document.getElementById("skillsSection");
toggleSkills.addEventListener("click",function(){
skillsSection.classList.toggle("hidden");
});

const toggleOtherSkills = document.getElementById("toggleOtherSkills");
const OtherskillsSection = document.getElementById("OtherskillsSection");
toggleOtherSkills.addEventListener("click",function(){
OtherskillsSection.classList.toggle("hidden");
});

const toggleEduc = document.getElementById("toggleEduc");
const EducSection = document.getElementById("EducSection");
toggleEduc.addEventListener("click",function(){
EducSection.classList.toggle("hidden");
});

const toggleContacts = document.getElementById("toggleContacts");
const ContactsSection = document.getElementById("ContactsSection");
toggleContacts.addEventListener("click",function(){
ContactsSection.classList.toggle("hidden");
});
