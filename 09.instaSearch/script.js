const people = document.querySelector(".people");
const search = document.querySelector("input");
var data = [
    {name : "harsh", src : "https://images.unsplash.com/photo-1615868167768-6fe2e8eaacd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym95fGVufDB8fDB8fHww"},
    {name : "harshik", src : "https://images.unsplash.com/photo-1678557856807-7ae6ff6893d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJveXxlbnwwfHwwfHx8MA%3D%3D"},
    {name : "harshika", src : "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"},
    {name : "harket", src : "https://yt3.googleusercontent.com/MeY_fGNrjVLV0PVOBN7dRWzMBS0y41YGm55LOaJ02cXV82a7Np9pYxxhHFqdYdncEy1I2cYR=s160-c-k-c0x00ffffff-no-rj"},
    {name : "hitesh", src : "https://yt3.googleusercontent.com/VLOvpKYxd_ZTrjrorHo5VkqaO0lM1Zs2Zbe-Nrfx7UkWnUGKNbpgEcDxhSjDWS4UONdtyKddLQ=s160-c-k-c0x00ffffff-no-rj"},
    {name : "hira", src : "https://yt3.googleusercontent.com/XSPqKcaOt70kluNcSoav9wQvb1lTqXAtI08vhueveeOSPKZWPQaQsfQ9wyeLpAsxx1LdUslYM4E=s160-c-k-c0x00ffffff-no-rj"},
    {name : "arun", src : "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym95fGVufDB8fDB8fHww"},
    {name : "Rakesh", src : "https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJveXxlbnwwfHwwfHx8MA%3D%3D"},
    {name : "Arunita", src : "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"},
    {name : "amrita", src : "https://images.unsplash.com/photo-1628015081036-0747ec8f077a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"},
    {name : "himal", src : "https://images.unsplash.com/photo-1623170909888-4e97ff277186?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJveXxlbnwwfHwwfHx8MA%3D%3D"}
]



var person = "";

data.forEach(function(elem){
    person += `<div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h3>${elem.name}</h3>
                </div>`



})

people.innerHTML = person;


search.addEventListener("input", function(){
    var inputValue = search.value;

    var matching = data.filter(function(elem){
        // return elem.name.toLowerCase().includes(inputValue.toLowerCase()) 
        // if you are using space in name string like amria annu then use includes;
        return elem.name.toLowerCase().startsWith(inputValue.toLowerCase());
        // return elem.name.startsWith(inputValue);
    });

    person = "";
    matching.forEach(function(elem){
        person += `<div class="person">
                        <div class="img">
                            <img src="${elem.src}" alt="">
                        </div>
                        <h3>${elem.name}</h3>
                    </div>`
    
    
    
    })
    
    people.innerHTML = person;

})
