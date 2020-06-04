"use strict";

const { green, red } = require("chalk");
const db = require("../server/db");
const Product = require("../server/db/models/product");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const [
    mangoSmoothie,
    peachSmoothie,
    pistachioSmoothie,
    strawberrySmoothie,
    oreoSmoothie,
    yogurtSmoothie,
    watermelonSlush,
    milkTeaSlush,
    taroSlush,
    coffeeFrappe,
    matchaFrappe,
    milkTea,
    jasmineTea,
    thaiTea,
    taroTea,
    mangoTea,
    strawberryTea,
    peachTea,
    greenTea,
    blackTea
  ] = await Promise.all([
    Product.create({
      name: "Mango Smoothie",
      category: "blends",
      description:
        "Delicious and refreshing blend with fresh mangoes. It's mango-nificent!",
      imgUrl:
        "https://i1.wp.com/www.thegourmetgourmand.com/wp-content/uploads/2016/06/mangosmoothie1.jpg?resize=630%2C1021",
    }),
    Product.create({
      name: "Peach Smoothie",
      category: "blends",
      description:
        "This perfectly refreshing smoothie will leave you feeling just peachy!",
      imgUrl:
        "https://i1.wp.com/www.thegourmetgourmand.com/wp-content/uploads/2016/06/mangosmoothie1.jpg?resize=630%2C1021",
    }),
    Product.create({
      name: "Pistachio Smoothie",
      category: "blends",
      description: "Go nuts over this nutty yet creamy and energizing blend!",
      imgUrl:
        "https://i1.wp.com/www.thegourmetgourmand.com/wp-content/uploads/2016/06/mangosmoothie1.jpg?resize=630%2C1021",
    }),
    Product.create({
      name: "Pistachio Smoothie",
      category: "blends",
      description: "Go nuts over this nutty yet creamy and energizing blend!",
      imgUrl:
        "https://i1.wp.com/www.thegourmetgourmand.com/wp-content/uploads/2016/06/mangosmoothie1.jpg?resize=630%2C1021",
    }),
    Product.create({
      name: "Strawberry Smoothie",
      category: "blends",
      description: "This strawberry smoothie is berry delicious!",
      imgUrl:
        "https://i1.wp.com/www.thegourmetgourmand.com/wp-content/uploads/2016/06/mangosmoothie1.jpg?resize=630%2C1021",
    }),
    Product.create({
      name: "Oreo Smoothie",
      category: "blends",
      description:
        "Ore-OMG! Look no further for the perfect blend of chocolate and creamy goodness.",
      imgUrl:
        "https://i1.wp.com/www.thegourmetgourmand.com/wp-content/uploads/2016/06/mangosmoothie1.jpg?resize=630%2C1021",
    }),
    Product.create({
      name: "Yogurt Smoothie",
      category: "blends",
      description: "Yogurta be kidding me to not try this yogurt smoothie.",
      imgUrl:
        "https://i1.wp.com/www.thegourmetgourmand.com/wp-content/uploads/2016/06/mangosmoothie1.jpg?resize=630%2C1021",
    }),
    Product.create({
      name: "Watermelon Slush",
      category: "blends",
      description:
        "This one-in-a-melon slush is exactly what you need to cool you down on a hot day!",
      imgUrl:
        "https://i1.wp.com/www.thegourmetgourmand.com/wp-content/uploads/2016/06/mangosmoothie1.jpg?resize=630%2C1021",
    }),
    Product.create({
      name: "Milk Tea Slush",
      category: "blends",
      description: "Our favorite milk tea, elevated!",
      imgUrl:
        "https://i1.wp.com/www.thegourmetgourmand.com/wp-content/uploads/2016/06/mangosmoothie1.jpg?resize=630%2C1021",
    }),
    Product.create({
      name: "Taro Slush",
      category: "blends",
      description: "Beautiful and simply taro-fic!",
      imgUrl:
        "https://i1.wp.com/www.thegourmetgourmand.com/wp-content/uploads/2016/06/mangosmoothie1.jpg?resize=630%2C1021",
    }),
    Product.create({
      name: "Coffee Frappe",
      category: "blends",
      description: "Words cannot espresso how amazing this blend is!",
      imgUrl:
        "https://i1.wp.com/www.thegourmetgourmand.com/wp-content/uploads/2016/06/mangosmoothie1.jpg?resize=630%2C1021",
    }),
    Product.create({
      name: "Matcha Frappe",
      category: "blends",
      description: "Words cannot espresso how amazing this blend is!",
      imgUrl:
        "https://i1.wp.com/www.thegourmetgourmand.com/wp-content/uploads/2016/06/mangosmoothie1.jpg?resize=630%2C1021",
    }),
    Product.create({
      name: "Classic Milk Tea",
      category: "teas",
      description: "It's a classic and forever fav for a reason!",
      imgUrl:
        "https://i1.wp.com/www.thegourmetgourmand.com/wp-content/uploads/2016/06/mangosmoothie1.jpg?resize=630%2C1021",
    }),
    Product.create({
      name: "Jasmine Milk Tea",
      category: "teas",
      description: "Will you be jas-mine?",
      imgUrl:
        "https://i1.wp.com/www.thegourmetgourmand.com/wp-content/uploads/2016/06/mangosmoothie1.jpg?resize=630%2C1021",
    }),
    Product.create({
      name: "Thai Tea",
      category: "teas",
      description: "So good it'll make you tongue thai-ed!",
      imgUrl:
        "https://i1.wp.com/www.thegourmetgourmand.com/wp-content/uploads/2016/06/mangosmoothie1.jpg?resize=630%2C1021",
    }),
    Product.create({
      name: "Taro Milk Tea",
      category: "teas",
      description: "Taro-bly delicious!",
      imgUrl:
        "https://i1.wp.com/www.thegourmetgourmand.com/wp-content/uploads/2016/06/mangosmoothie1.jpg?resize=630%2C1021",
    }),
    Product.create({
      name: "Mango Green Tea",
      category: "teas",
      description: "It takes two to mango: you and tea!",
      imgUrl:
        "https://i1.wp.com/www.thegourmetgourmand.com/wp-content/uploads/2016/06/mangosmoothie1.jpg?resize=630%2C1021",
    }),
    Product.create({
      name: "Strawberry Green Tea",
      category: "teas",
      description: "Your friends will be straw-berry green with jealousy at how yummy this drink is!",
      imgUrl:
        "https://i1.wp.com/www.thegourmetgourmand.com/wp-content/uploads/2016/06/mangosmoothie1.jpg?resize=630%2C1021",
    }),
    Product.create({
      name: "Peach Green Tea",
      category: "teas",
      description: "Mmmmm mmmmm, just peachy!",
      imgUrl:
        "https://i1.wp.com/www.thegourmetgourmand.com/wp-content/uploads/2016/06/mangosmoothie1.jpg?resize=630%2C1021",
    }),
    Product.create({
      name: "Green Tea",
      category: "teas",
      description: "Simple and refreshing, tea-riffic!",
      imgUrl:
        "https://i1.wp.com/www.thegourmetgourmand.com/wp-content/uploads/2016/06/mangosmoothie1.jpg?resize=630%2C1021",
    }),
    Product.create({
      name: "Black Tea",
      category: "teas",
      description: "Simple and energizing, you'll be ready to par-tea!",
      imgUrl:
        "https://i1.wp.com/www.thegourmetgourmand.com/wp-content/uploads/2016/06/mangosmoothie1.jpg?resize=630%2C1021",
    })
  ]);

  return [
    mangoSmoothie,
    peachSmoothie,
    pistachioSmoothie,
    strawberrySmoothie,
    oreoSmoothie,
    yogurtSmoothie,
    watermelonSlush,
    milkTeaSlush,
    taroSlush,
    coffeeFrappe,
    matchaFrappe,
    milkTea,
    jasmineTea,
    thaiTea,
    taroTea,
    mangoTea,
    strawberryTea,
    peachTea,
    greenTea,
    blackTea
  ];
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

module.exports = seed;

if (require.main === module) {
  runSeed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch((err) => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
