const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

const img = document.getElementById("person-img");
const name = document.getElementById("name");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prev_Btn = document.getElementById("prev");
const nxt_Btn = document.getElementById("nxt");
const rand_Btn = document.getElementById("random");

currentItem=0

window.addEventListener("DOMContentLoaded",()=>{
    const item = reviews[currentItem];
    img.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
})

function navigation(number){
    const item = reviews[number];
    img.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;

}

prev_Btn.addEventListener("click",()=>{
    currentItem --;
    if (currentItem<0) {

        currentItem=reviews.length-1

    }
    navigation(currentItem);
})

nxt_Btn.addEventListener("click",()=>{
    currentItem ++;
    if(currentItem>reviews.length-1){
        currentItem=0;
    }
    navigation(currentItem);
})

rand_Btn.addEventListener("click",()=>{
    currentItem=Math.floor(Math.random() * reviews.length);
    navigation(currentItem);
})