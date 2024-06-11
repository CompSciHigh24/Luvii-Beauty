const mongoose = require("mongoose");
const ejs = require("ejs");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method}: ${req.path}`);
  next();
});

app.get("/home" , (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

app.get("/lipproducts", (req, res) => {
  const data = {
    title: "Lip Products",
    products: [
      {
        name: "Nena Fresa Lip Oil",
        price: "$6.99",
        ingredients: "Strawberry Scented, Avocado, Coconut, And Jojoba Oils",
        image:"oils.png"
      },
      {
        name: "Bonita Lip Balm",
        price: "$6.99",
        ingredients: "Pink Lemonade Scented, Avocado, Coconut, And Jojoba Oils",
        image: "balm.png"
      },
      {
        name: "Stargirl Lip Gloss",
        price: "$6.99",
        ingredients: "Pina Colanda Scented, And Coconut Oil",
        image:"gloss.png"
      }, 
      {
        name: "Celestial Roller Gloss",
        price: "$6.99",
        ingredients: "Vanilla cupcake scented, avacado, coconut, and jojoba oils",
        image: "roller.png"
      },
      {
        name: "Y2K Collection",
        price: "$38.00",
        ingredients: "coconut and jojoba oils",
        image: "y2k.png"
      },
      {
        name: "Lip Jelly Tints",
        price: "$17.00",
        ingredients: "coconut and jojoba oils",
        image: "jelly.png"
      }
    ]
  }
  {
    res.render("lipproducts.ejs", data);
  };
});

app.get("/bodyproducts", (req, res) => {
  const data = {
    title: "Body Products",
    products: [
      {
        name: "Angelique Perfume Oil",
        price: "$6.99",
        ingredients: "Berries, Vanilla, Caramel Scented Oils",
        image:"angel.png"
      },
      {
        name: "Softie Body Scrub",
        price: "$6.99",
        ingredients: "Vanilla And Coconut Scented Oils",
        image:"bscrub.png"
      },
      {
        name: "Body Glitter",
        price: "$6.99",
        ingredients: "Shea And Cocoa Butter",
        image:"shimmers.png"
      },   
      {
        name: "Body Butter",
        price: "$7.49",
        ingredients: " Mango And Shea butter. Infused With Coconut And Jojoba Oils",
        image:"butter.png"
    },   
      {
        name: "Mini Shimmer Lotion",
        price: "$5.55",
        ingredients: " Shea Butter, Shea oil, And Sunflower Seed Oil",
        image:"lotion.png"
      },
      {
        name: "Foaming Body Scrub",
        price: "$6.99",
        ingredients: "Floral Scented With Coconut Oil",
        image:"foaming.png"
      }
    ]
  }
  {
    res.render("bodyproducts.ejs", data);
  };
});


app.get("/jewelry", (req, res) => {
  const data = {
    title: "Jewelry",
    products: [
      {
        name: "Necklace",
        price: "$6.99", 
        image:"necklace.png"
      },
      {
        name: "Bracelet",
        price: "$5.99",
        image: "bracelet.png"
      },
      {
        name: "Rings",
        price: "$3.99",
        image: "ring.png"
      },
      {
        name: "Snow White Lashes",
        price: "$3.00",
        image: "snow.png"
      },
      {
        name: "Estrella Growth serum",
        price: "$7.00",
        image: "serum.png"
      },
      {
        name: "Icicle Lashes",
        price: "$3.00",
        image: "icicle.png"
      } 
    ]
  }
  {
    res.render("jewelry.ejs", data);
  };
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
