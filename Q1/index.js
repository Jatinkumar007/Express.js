const http=require('node:http');
const HOSTNAME="localhost";
const PORT=4001;

const server=http.createServer((req,res)=>{
   if(req.url === '/'){
     res.statusCode=200;
     res.setHeader=('Content-Type','text/plain');
     res.end('Welcome to Men & Women Dummy Data')
   }
   
   else if(req.url === '/men'){
    res.statusCode=200;
    res.setHeader=('Content-Type','text/json');
    res.end(JSON.stringify([{
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14367572/2021/7/13/5530fba3-1eb1-4046-a953-a99472e6289e1626182682397-US-Polo-Assn-Men-Sports-Shoes-1541626182681917-1.jpg ",
        "title": "Mast & Harbour",
        "description": "Men LEBRON 2.0 Walking Shoes ",
        "price": 2399,
        "category": "Casual Shoes",
        "type": "men",
        "id": "639dc32as13"
      },
      {
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14406186/2021/7/13/89fe5eaf-6a09-4695-ab3a-651478bc0e6f1626156204788-US-Polo-Assn-Men-Casual-Shoes-1211626156204359-1.jpg ",
        "title": "HRX by Hrithik Roshan",
        "description": "Men Textured Loafers ",
        "price": 2159,
        "category": "Casual Shoes",
        "type": "men",
        "id": "639dc32as20"
      },
      {
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13855576/2021/4/12/3fd86278-f3c7-44e3-8e2a-0a7c99fc45171618217750272-US-Polo-Assn-Men-Casual-Shoes-1131618217749743-3.jpg ",
        "title": "Flying Machine",
        "description": "Men Solid Sneakers ",
        "price": 2099,
        "category": "Casual Shoes",
        "type": "men",
        "id": "639dc32as25"
      },
      {
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14406196/2021/7/13/15632f28-0e28-4925-bd85-c35f192ee95f1626156262374-U-S-Polo-Assn-Men-Black-PU-Sneakers-5531626156261907-1.jpg ",
        "title": "Roadster",
        "description": "Men Colourblocked Sneakers",
        "price": 2099,
        "category": "Casual Shoes",
        "type": "men",
        "id": "639dc32as27"
      },
      {
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15246010/2021/10/13/006a88c9-920e-4ca3-b9e2-96d6410cd2ad1634123262816-US-Polo-Assn-Men-Casual-Shoes-5701634123262500-1.jpg ",
        "title": "Flying Machine",
        "description": "Men Solid Sneakers ",
        "price": 2039,
        "category": "Casual Shoes",
        "type": "men",
        "id": "639dc32as24"
      },
      {
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14367616/2021/8/12/07269c5b-cd27-4716-9709-583e7eac513d1628768262239-US-Polo-Assn-Men-White-LEBRON-20-Walking-Shoes-3021628768261-1.jpg ",
        "title": "Roadster",
        "description": "Men LEBRON 2.0 Walking Shoes ",
        "price": 1999,
        "category": "Casual Shoes",
        "type": "men",
        "id": "639dc32as8"
      },
      {
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11581054/2020/3/9/97289e69-d7a4-43f8-90a6-e5ff6eb3ba1f1583733923260FormalShoesArrowMenFormalShoesArrowMenCasualShoesArrowMenCas1.jpg ",
        "title": "PUMA",
        "description": "Men Slip-On Sneakers ",
        "price": 1999,
        "category": "Casual Shoes",
        "type": "men",
        "id": "639dc32as14"
      },
      {
        "id": "639dc322276037ae90ae3fcc",
        "title": "BOSS BY HUGO BOSS",
        "image": "https://cdna.lystit.com/200/250/tr/photos/saksoff5th/055af948/calvin-klein-Black-Coleman-Wool-Blend-Coat.jpeg",
        "description": "Slim-fit Coat In Responsible Cashmere - Blue",
        "price": 1979,
        "category": "coats",
        "type": "men"
      },
      {
        "id": "639dc322276037ae90ae3fd5",
        "title": "BOSS BY HUGO BOSS",
        "image": "https://cdna.lystit.com/200/250/tr/photos/hugo_boss/7bcf8516/boss-by-hugo-boss-Grey-Relaxed-fit-Coat-In-A-Melange-Wool-Blend.jpeg",
        "description": "Slim-fit Coat In Responsible Cashmere With Signature Lining - Metallic",
        "price": 1979,
        "category": "coats",
        "type": "men"
      },
      {
        "image": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10339033/2019/8/6/df9a712b-a5fc-4a65-870a-0854fb50ea221565093150139-US-Polo-Assn-Men-Casual-Shoes-7391565093148433-1.jpg ",
        "title": "U.S. Polo Assn.",
        "description": "Men Sneakers",
        "price": 1949,
        "category": "Casual Shoes",
        "type": "men",
        "id": "639dc32as3"
      }]))
  }
  else if(req.url === '/women'){
    res.statusCode=200;
    res.setHeader=('Content-Type','text/json');
    res.end(JSON.stringify([
        {
          "image": "https://bit.ly/3iNMWwx",
          "title": "Chevron",
          "description": "Black & Grey Chevron Geometric Printed Wrap Dress",
          "price": 1199,
          "category": "kurta",
          "type": "women",
          "id": "6037ae90ae3"
        },
        {
          "image": "https://bit.ly/3wWha8K",
          "title": "MFB",
          "description": "Women Beige Printed Shirt Dress",
          "price": 1049,
          "category": "kurta",
          "type": "women",
          "id": "6037ae90ae30"
        },
        {
          "image": "https://bit.ly/3wYoUqM",
          "title": "Anouk",
          "description": "Women Black Pure Cotton Ethnic Motifs Printed Kurta with Palazzos & Dupatta",
          "price": 1035,
          "category": "kurta",
          "type": "women",
          "id": "6037ae90ae6"
        },
        {
          "image": "https://bit.ly/3IQuE8v",
          "title": "Anouk",
          "description": "Women Olive Green Ethnic Motifs Yoke Design Kurta with Palazzos & With Dupatta",
          "price": 879,
          "category": "kurta",
          "type": "women",
          "id": "6037ae90ae4"
        },
        {
          "image": "https://bit.ly/37aGnRW",
          "title": "Yash gallery",
          "description": "Women Blue & White Printed A-Line Kurta",
          "price": 805,
          "category": "kurta",
          "type": "women",
          "id": "6037ae90ae8"
        },
        {
          "image": "https://bit.ly/3uMmnxi",
          "title": "Sngria",
          "description": "Black& Mustard Yellow Pure Cotton Ethnic Motifs Printed A-Line Dress",
          "price": 799,
          "category": "kurta",
          "type": "women",
          "id": "6037ae90ae10"
        },
        {
          "image": "https://bit.ly/3uHGEnN",
          "title": "Anouk",
          "description": "Women Pink Self Design Kurta with Trousers & Dupatta",
          "price": 791,
          "category": "kurta",
          "type": "women",
          "id": "6037ae90ae0"
        },
        {
          "image": "https://bit.ly/3uLGTyi",
          "title": "Anouk",
          "description": "Women yellow Self Design Kurta with Trousers & Dupatta",
          "price": 758,
          "category": "kurta",
          "type": "women",
          "id": "6037ae90ae1"
        },
        {
          "image": "https://bit.ly/3Dldqit",
          "title": "Anouk",
          "description": "Green Ethnic Motifs Pure Cotton Printed Fit and Flare Dress",
          "price": 749,
          "category": "kurta",
          "type": "women",
          "id": "6037ae90ae2"
        },
        {
          "image": "https://bit.ly/3uGJsBy",
          "title": "MFB",
          "description": "Black Embroidered Ethnic Motifs A-Line Dress",
          "price": 159,
          "category": "kurta",
          "type": "women",
          "id": "6037ae90ae28"
        }
      ]))
  }
  else if(req.url === '/other'){
    res.statusCode=500;
    res.setHeader=('Content-Type','text/html');
    res.end(`<h2>404 Page Not Found!</h2>`)
  }
})
server.listen(PORT,()=>{
    console.log(`The HTTP server is running on ${HOSTNAME}:${PORT}`);
})