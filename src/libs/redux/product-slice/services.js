import { IMAGES } from "../../../assets/images";


export const productServices = {
  getProducts: () => {
    const data = [
      {
        name: "Apple",
        id: 52,
        img: IMAGES.redapple,
        price: "430",
        family: "Ebenaceae",
        order: "Rosales",
        genus: "Diospyros",
        nutritions: {
          calories: 81,
          fat: 0.0,
          sugar: 18.0,
          carbohydrates: 18.0,
          protein: 0.0
        }
      },
      {
        name: "Kiwi",
        id: 3,
        img: IMAGES.kiwi,
        price: "580",
        family: "Rosaceae",
        order: "Rosales",
        genus: "Fragaria",
        nutritions: {
          calories: 29,
          fat: 0.4,
          sugar: 5.4,
          carbohydrates: 5.5,
          protein: 0.8
        }
      },
      {
        name: "Banana",
        id: 1,
        img: IMAGES.banana,
        price: "520",
        family: "Musaceae",
        order: "Zingiberales",
        genus: "Musa",
        nutritions: {
          calories: 96,
          fat: 0.2,
          sugar: 17.2,
          carbohydrates: 22.0,
          protein: 1.0
        }
      },
      {
        name: "Tomato",
        id: 5,
        img: IMAGES.tomato,
        price: "500",
        family: "Solanaceae",
        order: "Solanales",
        genus: "Solanum",
        nutritions: {
          calories: 74,
          fat: 0.2,
          sugar: 2.6,
          carbohydrates: 3.9,
          protein: 0.9
        }
      },
      {
        name: "Spices",
        id: 4,
        img: IMAGES.spices,
        price: "200",
        family: "Rosaceae",
        order: "Rosales",
        genus: "Pyrus",
        nutritions: {
          calories: 57,
          fat: 0.1,
          sugar: 10.0,
          carbohydrates: 15.0,
          protein: 0.4
        }
      },
      {
        name: "Milk",
        id: 60,
        img: IMAGES.newmilk,
        price: "700",
        family: "Malvaceae",
        order: "Malvales",
        genus: "Durio",
        nutritions: {
          calories: 147,
          fat: 5.3,
          sugar: 6.75,
          carbohydrates: 27.1,
          protein: 1.5
        }
      },
      {
        name: "Cheese",
        id: 64,
        img: IMAGES.newcheese,
        price: "1200",
        family: "Rosaceae",
        order: "Rosales",
        genus: "Rubus",
        nutritions: {
          calories: 40,
          fat: 0.4,
          sugar: 4.5,
          carbohydrates: 9.0,
          protein: 1.3
        }
      },
      {
        name: "Water",
        id: 66,
        img: IMAGES.water,
        price: "85",
        family: "Actinidiaceae",
        order: "Struthioniformes",
        genus: "Apteryx",
        nutritions: {
          calories: 61,
          fat: 0.5,
          sugar: 9.0,
          carbohydrates: 15.0,
          protein: 1.1
        }
      },
    ];

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 100);
    });
  }
};