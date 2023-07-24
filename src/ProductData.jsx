const ProductData = [
    {
      id: 1,
      title: "Nike Shoes",
      price: 18999,
      desc:"Low By You, Custom Men's Shoes",
      img:"https://secure-render.nike.com/is/image/nikeid/?layer=0&src=ir(nikeidrender/dunk365SP22_v1?obj=/s/g17&color=f1f5ff&show&obj=/s/g16&color=4f417b&show&obj=/s/g6&color=504573&show&obj=/s/g7&color=504573&show&obj=/s/g15&color=958092&show&obj=/s/g14&color=958092&show&obj=/s/g8&color=64262E&show&obj=/s/g9&color=fafcff&show&obj=/s/g2/leather&color=504573&show&obj=/s/g3/leather&color=504573&show&obj=/s/g4/leather&color=504573&show&obj=/s/g5/satin&color=632834&show&obj=/s/g10/gum&show&obj=/s/g1&color=504573&show&obj=/s/g12&color=95748c&show&obj=/s&req=object&wid=300)undefined&fmt=png8-alpha&posN=0,-0.1&icc=AdobeRGB"
  },
  {
      id:2,
      title:"Pomelo Handbag",
      price:8999,
      desc:"",
      img:"https://m.media-amazon.com/images/I/71nNiiL8fHL._UY500_.jpg"
  },
  {
      id:3,
      title:"Puma Hoodie",
      price:11900,
      img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTZ4LnxZAQ0RYtkZYJ1yU1_b-mLjeLYmztJM6qZ37euUusFBHU5zaySR2sKcrveSxMZHvX8PuGKvSTMENY0es6lYJ60eaTKeNE5Puk-zHNs&usqp=CAE"
  },
  {
      id:4,
      title:"RedWolf Hoodie",
      price:13290,
      img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRKXzHqrmRagZxj5T7gN54urM3vhu-tLZtJAqb4q8tZTLKWwN4w108H6RysIut4BuJW4syGay081jwxx4yGdRVBOiZirWipbQarR5kDYLkIuYTBd0folo0n&usqp=CAE"
  },
  {
      id:5,
      title:"Khankudi Holi",
      price:15490,
      img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRRbe6UMaJnWyt0btV-4OOU_vJWkaB05e-D-zWyzXOqLdDECQJtD1zvUl-Bax7eB1w6pjEjRNsZ2KWNBtthIGfuA7Oq7igUMu_8F06c5nm1V2ZKvebE8icO&usqp=CAE"
  },
  {
      id:6,
      title:"Unique wrist watch",
      price:15499,
      desc:"Segment Best 16.21 centimeters (6.4-inch) Super AMOLED - Infinity U-cut display, FHD+ resolution with 90Hz Refresh rate, 800 Nits High Brightness Mode, protected by Gorilla Glass 5 Versatile 64MP+8MP+2MP+2MP Quad camera setup-64MP (F 1.8) main camera + 8MP (F2.2) Ultra wide camera+ 2MP (F2.4) depth camera + 2MP (2.4) Macro Camera| 20MP (F2.2) front camera Monster 6000 mAh Battery| Memory, Storage & SIM: 6GB RAM | 128GB internal memory",
      img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQVf3p1xWQ5BKhSfceqQbgOuQoCQ6v4Ei74mUUA7qmMkLFcFYJEyHKnuwHjgjAzVcttxcWOzR0vd2_QfljM7omf2T51nvbfb2fv0qXNB5Zo&usqp=CAE"
  },
  {
      id:7,
      title:"Titan",
      price:19999,
      img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS6gNYuYPdHBybiyxXyrEQ5t8pLQWwn4AUkUqotiowMNV6FUp_xeqm0qiJwfUB9ePTf9yCR7RO_ZRqliU8jigVWZnCVNxnnVFQazgpsn0s&usqp=CAE"
  },
  {
      id:8,
      title:"Puma One Track Suits",
      price:24999,
      img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSA7dcGPWqx4A0WHZ8mWkj89JNnoJVN6hmmqMP7RMqnUJQr9hk8NEK-W7d7LcrMYFMW3SM5_EdTQC_dOsvHzY18pihOgoBf_3Cw1wOzgzh4eZaebdMOnqE-&usqp=CAE"
  },
  {
      id:9,
      title:"Lois Philippe",
      price:53999,
      img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQq0TyKJ9iNCQ89wASEwxDekF4d-0RJBJUQhtM48iNVVQsUnobHHj1sNMnNICiVm3ecnAUSi5K366PSIZPkwqpdw2rmZAndFX6dZ8kPmj6d9yLM1dwsbIkg&usqp=CAE"
  },
  {
      id:10,
      title:"Lois Phillippe Khaki Shirt",
      price:54999,
      img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSI8L5NVZxF133npfyiJ1-bjurq0RuCAJpr73EwYK9BNyUg5ALZiB6oMD0DeBfKCYr4b1BVV8N0a0Qsts8kMf_SJdVwU0tylTFFATdHK7M7&usqp=CAE"
  },
  {
      id:11,
      title:"Levi's Grey",
      price:44999,
      img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT3DcFoRrpySxTLb2PdzTi2LK05nYYZ2mAeMM-CJD8RgzDTVQ5wrQdrKOj0onGkl6FXArTZ6pSkcKKNUmp1cbYHPOohsL8NkfFFHockhMY&usqp=CAE"
  },
  {
      id:13,
      title:"Levi's White",
      price:15999,
      img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQqbW1hwL6OmmDlKz3qryk1n9LqsmD3r4EimvV2f0iWyD2fZUW0ReT8r4F2v9VI53Wk86tQzitV1CM8ncQsgpIxrbOY33r66Tc7RbUsK948Q7Qb9SxexfQcSQ&usqp=CAE"
  },
  {
      id:14,
      title:"Adidas",
      price:11499,
      desc:"MediaTek Helio G85 Octa-core Processor 4 GB RAM | 128 GB ROM | Expandable Upto 256 GB 16.51 cm (6.5 inch) HD+ Display 50MP+2MP+2MP Primary Camera | 8MP Front Camera 6000 mAh Battery",
      img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQLabL3ZVDWn7Mxvx8OfrxwGPo_uLIIHVg39bKEd_vJu08SNFiLzKhWlMxH-OLJ6BsNQ1PuS_ZskOZqEvZOtQDP9ftquwEu4W1d0ZUkDz4DLVM8vDcf02po4g&usqp=CAE"
  },
  {
      id:15,
      title:"Adidas",
      price:9499,
      img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ3SgqBilfoz70Whl4Fi8Zq5pMGMaxkVcwHjWMk3aVHfLny0Mil-o0KJ6p1QzrU_ehNiSb81E0MUNC7yl2YxA4E3kGe0RuxX3sEGqfZPewBTGYmOuS-WmcrLA&usqp=CAE"
  },
    ];
  export default ProductData;
  