
var home = new Vue({
    el: "#home",
    data:{
        name : "teun",
    },

});

 var about = new Vue({
     el:"#arr",
     data:{
        todos:[
            {text : 'learn script'},
        ],
         name : "MD.HAKIMUL HOQUE",
         email: "hakiimulhoque@gmail.com",
         address:"64/9 D-type Colony,Mirpur-1,Dhaka-1216.",
         mobile: "01670191780",
     },
 });

 var project =new Vue({
    el:"#project",
    data:{
        hdr:"Simple School Managemet System",
        hdr1:"Blog Site",
        hdr2:"E-Commerce Web Based",
        imgage:"public/project/school.jpg",
        imgage1:"public/project/blog.jpg",
        imgage2:"public/project/shop.jpg",
        des1 :"A simple School management System ",
        des2 :" User can see different category of blog post",
        des3 :"Simple online shope.Customer can see products details ",
        urL:"https://github.com/teun311/school_management_system/tree/main/school%20management",
        urL1:"https://github.com/teun311/Blog_Site/tree/main/Blogg",
        urL2:"https://github.com/teun311/E_Shop/tree/main/E-Com",
    }
 });
 var img = new Vue({
     el:"#img",
     data:{
         image : "public/img/img.jpg"
     }
 })
var obj = new Vue({
    el:"#obj",
    data:{
        message:"I'm looking for a good opportunity to enhance my knowledge in this profile and build my carrier.",
        message1:"and i am learning",
    }
})

 var skills = new Vue({
    el:"#skill",
    data:{
        tiTle:"The purpose of education is to make good human beings with skill and expertise.Enlightened human beings can be created by teachers.",
        skill:[
            {text: 'Language: Assemble ,C,C++,Java,PHP with Laravel framework '},
            {text: 'Database: Oracle, MySQL'},
            {text: 'IDE     : Netbeans,Codeblocks,PhpStrom,VSCode'},
            {text: 'Mark Ups:HTML, CSS'},

        ],
    }
 });

 var contact =new Vue({
    el:"#contac",
    data:{
        location: {
            Location : "klklk",
        },
        email: {
            Email : "hjjj",
        }
    }
 });


