const HomeData=[
    {
        id:1,
        title:"Nike",
        img:"data:image/png;base64,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",
    },
    {
        id:2,
        title:"PUMA",
        img:"https://i.pinimg.com/originals/ed/a8/2b/eda82bd79eac11f623695a6dd055d698.jpg",
    },
    {
        id:3,
        title:"H&M",
        img:"data:image/png;base64,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",
    },
    {
        id:4,
        title:"Zara",
        img:"https://logos-world.net/wp-content/uploads/2020/05/Zara-Logo.png"
    },
    {
        id:5,
        title:"WForWoman",
        img:"http://zsquaremall.com/application/uploads/stores/1145-w.jpg"
    },
    {
        id:6,
        title:"BIBA",
        img:"data:image/png;base64,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"
    },
    {
        id:7,
        title:"Madame",
        img:"http://www.retail4growth.com/public/uploads/editor/2020-10-09/1602220489.jpg"
    },
    {
        id:8,
        title:"Vero Moda",
        img:"https://play-lh.googleusercontent.com/mwpJXjHeC8jNp2LJo-9Pputcvu4Eo_jOrvni7pKbw6LDKJTCHk26GJOhaLqaepvW9j55"
    },

];
export default HomeData;