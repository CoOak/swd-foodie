import './style.scss';
import 'waypoints/lib/noframework.waypoints.min';

import * as bootstrap from 'bootstrap';



import Typed from 'typed.js';
import ScrollReveal from "scrollreveal";

let options = {
    strings: ['Food..', 'Drink..'],
    typeSpeed: 50,
    loop:true,
    backDelay:2000,
    backSpeed:50,
    cursorChar: '.',
};

let typed = new Typed('.element', options);




let slideUp = {
    distance: '150%',
    origin: 'top',
    duration:1500,
    interval:300
};

ScrollReveal().reveal('.to-down', slideUp);

let slideRight = {
    distance: '150%',
    origin: 'right',
    duration:1000,
    interval:200,
    delay:1000
};

ScrollReveal().reveal('.to-left', slideRight);

let slideRightTwo = {
    distance: '150%',
    origin: 'right',
    duration:1000,
    interval:200,

};

ScrollReveal().reveal('.to-left-2', slideRightTwo);




let waypointHome = new Waypoint({
    element: document.getElementById('home-content'),
    handler: function(direction) {
        let oldNavLink = document.querySelector(".nav-link.active");
        if (oldNavLink != null){
            oldNavLink.classList.remove("active");
        }

        let currentNavLink = document.querySelector(`[href="#home"]`);
        currentNavLink.classList.add("active");



    },
    offset: '10%'
})

new Waypoint({
    element: document.getElementById('contact'),
    handler: function(direction) {
            let oldNavLink = document.querySelector(".nav-link.active");
            if (oldNavLink != null){
                oldNavLink.classList.remove("active");
            }

            let currentNavLink = document.querySelector(`[href="#contact"]`);
            currentNavLink.classList.add("active");



    },
    offset: '50%'
})



let sections = ['about','services','menu','application'];
sections.forEach(function (section){
    new Waypoint({
        element: document.getElementById(section),
        handler: function(direction) {
            let oldNavLink = document.querySelector(".nav-link.active");
            if (oldNavLink != null){
                oldNavLink.classList.remove("active");
            }
            let currentNavLink = document.querySelector(`[href="#${section}"]`);
            currentNavLink.classList.add("active");
        },
        offset: '1%'
    })
})

let menuLists =[
    {
        id : 1,
        img: "public/img/plate1.png",
        title : "Barbecue Salad",
        description : "Special Delicious Food  Try it and Use it",
        currency : "$",
        price : 22.34
    },
    {
        id : 2,
        img: 'public/img/plate2.png',
        title : "Barbecue Fish Salad",
        description : "Special Delicious Food  Try it and Use it",
        currency : "$",
        price : 12.34
    },
    {
        id : 3,
        img: 'public/img/plate3.png',
        title : "Hambarca",
        description : "Special Delicious Food  Try it and Use it",
        currency : "$",
        price : 52.34
    },
    {
        id : 4,
        img: 'public/img/plate1.png',
        title : "Barbecue Salad Lite",
        description : "Special Delicious Food  Try it and Use it",
        currency : "$",
        price : 32.34
    },
]

let menuRow = document.querySelector('#menuList');

menuLists.forEach(function (menu){
    let div = document.createElement('div');
    div.classList.add("col-10", "col-md-6", "col-lg-2");
    div.innerHTML =`
                         <div class="card mt-5 mt-lg-0 ms-5 ms-lg-0 ">
                            <div class="text-center pt-5 pb-4">
                                <img src="${menu.img}" width="60%" alt="">
                            </div>
                            <div class="card-body">
                                <div class="text-center">
                                    <h6 class="">${menu.title}</h6>
                                    <p class="text-black-50 small mb-0 mt-3">${menu.description}
                                        </p>
                                    <div class="d-flex justify-content-between mt-4 mb-3">
                                        <p class="mb-0">${menu.currency} <span class="fw-bold ">${menu.price}</span></p>
                                        <a href="#" class="btn btn-primary btn-sm">
                                            <i class="bi bi-cart"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
`;

    menuRow.append(div);
})

