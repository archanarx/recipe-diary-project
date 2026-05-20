const recipes = [
  {
    id: 1,
    title: "Palak Paneer",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&h=600",
    author: "Chef Arjun",
    time: "35 mins",
    level: "Medium",
    views: 310,
    ingredients: ["Spinach", "Paneer", "Garlic", "Cream"],
    steps: ["Blanch spinach", "Sauté garlic & spices", "Add puree", "Mix paneer"]
  },
  {
    id: 2,
    title: "Lamb Rogan Josh",
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=1200&h=600",
    author: "Chef Sameer",
    time: "90 mins",
    level: "Hard",
    views: 450,
    ingredients: ["Lamb", "Yogurt", "Kashmiri Chili", "Cardamom"],
    steps: ["Sear lamb", "Make yogurt gravy", "Slow cook", "Garnish"]
  },
  {
    id: 3,
    title: "Dal Makhani",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&h=600",
    author: "Chef Preeti",
    time: "120 mins",
    level: "Medium",
    views: 520,
    ingredients: ["Black Lentils", "Kidney Beans", "Butter", "Cream"],
    steps: ["Boil lentils", "Simmer with tomato & butter", "Add cream", "Serve"]
  },
  {
    id: 4,
    title: "Hyderabadi Dum Biryani",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&h=600",
    author: "Chef Zafar",
    time: "60 mins",
    level: "Hard",
    views: 890,
    ingredients: ["Basmati Rice", "Meat", "Saffron", "Fried Onions"],
    steps: ["Marinate meat", "Layer with rice", "Steam (Dum)", "Serve"]
  },
  {
    id: 5,
    title: "Aloo Gobi",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&h=600",
    author: "Chef Meera",
    time: "25 mins",
    level: "Easy",
    views: 215,
    ingredients: ["Potatoes", "Cauliflower", "Turmeric", "Ginger"],
    steps: ["Sauté veggies", "Add spices", "Cook covered", "Garnish"]
  },
  {
    id: 6,
    title: "Butter Chicken",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=1200&h=600",
    author: "Chef Vikram",
    time: "45 mins",
    level: "Medium",
    views: 1200,
    ingredients: ["Chicken", "Butter", "Tomato", "Cream"],
    steps: ["Grill chicken", "Make makhani sauce", "Combine", "Add cream"]
  },
  {
    id: 7,
    title: "Chana Masala",
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=1200&h=600",
    author: "Chef Ananya",
    time: "30 mins",
    level: "Easy",
    views: 340,
    ingredients: ["Chickpeas", "Onions", "Mango Powder", "Chilies"],
    steps: ["Boil chickpeas", "Fry masala base", "Simmer together", "Serve"]
  },
  {
    id: 8,
    title: "Pani Puri",
    image: "https://images.unsplash.com/photo-1505253668822-42074d58a7c6?auto=format&fit=crop&w=1200&h=600",
    author: "Chef Rahul",
    time: "40 mins",
    level: "Medium",
    views: 950,
    ingredients: ["Puris", "Tamarind Water", "Potato filling"],
    steps: ["Prep mint water", "Make potato mash", "Assemble and dip"]
  },
  {
    id: 9,
    title: "Malai Kofta",
    image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?auto=format&fit=crop&w=1200&h=600",
    author: "Chef Kavita",
    time: "50 mins",
    level: "Hard",
    views: 280,
    ingredients: ["Paneer", "Potato", "Cashews", "Tomato Gravy"],
    steps: ["Make kofta balls", "Fry until golden", "Cook gravy", "Combine"]
  },
  {
    id: 10,
    title: "Gulab Jamun",
    image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&w=1200&h=600",
    author: "Chef Surbhi",
    time: "40 mins",
    level: "Medium",
    views: 670,
    ingredients: ["Khoya", "Flour", "Sugar Syrup", "Cardamom"],
    steps: ["Shape balls", "Fry on low heat", "Soak in syrup", "Serve warm"]
  }
];

[
  {
    "id": 11,
    "title": "Masala Dosa",
    "image": "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Lakshmi",
    "time": "40 mins",
    "level": "Medium",
    "views": 1540,
    "ingredients": ["Rice Batter", "Potatoes", "Mustard Seeds", "Curry Leaves"],
    "steps": [
      "Boil the potatoes and mash them roughly before seting them aside.",
      "Heat oil in a pan and temper it with mustard seeds, urad dal, and fresh curry leaves.",
      "Sauté sliced onions and green chilies until they become translucent.",
      "Add the mashed potatoes with turmeric and salt, mixing well to create the filling.",
      "Heat a flat tawa and spread a ladle of fermented batter in a thin circular motion.",
      "Drizzle oil around the edges and cook until the bottom is golden brown and crispy.",
      "Place a portion of the potato filling in the center and fold the dosa over it."
    ]
  },
  {
    "id": 12,
    "title": "Medu Vada",
    "image": "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Raman",
    "time": "30 mins",
    "level": "Hard",
    "views": 820,
    "ingredients": ["Urad Dal", "Black Pepper", "Green Chilies", "Ginger"],
    "steps": [
      "Soak the urad dal in water for at least four hours before grinding.",
      "Grind the dal into a very thick, fluffy paste using as little water as possible.",
      "Whisk the batter vigorously by hand to incorporate air for a light texture.",
      "Mix in chopped green chilies, ginger, peppercorns, and salt into the batter.",
      "Wet your palms and take a small amount of batter to form a ball.",
      "Make a small hole in the center with your thumb to create the classic donut shape.",
      "Carefully slide the vada into hot oil and deep fry until it turns dark golden brown."
    ]
  },
  {
    "id": 13,
    "title": "Kerala Prawn Curry",
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Thomas",
    "time": "35 mins",
    "level": "Medium",
    "views": 610,
    "ingredients": ["Prawns", "Coconut Milk", "Kudampuli", "Ginger"],
    "steps": [
      "Clean the prawns thoroughly and soak the kudampuli (pot tamarind) in warm water.",
      "Heat coconut oil in a clay pot and sauté shallots, ginger, and garlic.",
      "Add chili powder, turmeric, and coriander powder, roasting them on low heat.",
      "Pour in the tamarind water and bring the mixture to a gentle boil.",
      "Add the prawns and cook them until they turn opaque and curl up.",
      "Pour in thick coconut milk and simmer the curry for two minutes without boiling.",
      "Finish by tempering with mustard seeds and curry leaves fried in coconut oil."
    ]
  },
  {
    "id": 14,
    "title": "Chicken Chettinad",
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Muthu",
    "time": "50 mins",
    "level": "Hard",
    "views": 980,
    "ingredients": ["Chicken", "Kalpasi", "Poppy Seeds", "Dry Chilies"],
    "steps": [
      "Dry roast cinnamon, cloves, cardamom, poppy seeds, and fennel seeds in a pan.",
      "Add dry red chilies and kalpasi (stone flower) to the roast for an authentic aroma.",
      "Grind these roasted spices with fresh coconut into a smooth, thick masala paste.",
      "Heat oil and sauté onions until they are deeply browned.",
      "Add the chicken pieces and the prepared masala paste, coating the meat well.",
      "Pour in a little water and let the chicken slow-cook until the gravy thickens.",
      "Garnish with a generous amount of fresh coriander and curry leaves."
    ]
  },
  {
    "id": 15,
    "title": "Rava Upma",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Priya",
    "time": "20 mins",
    "level": "Easy",
    "views": 430,
    "ingredients": ["Semolina", "Onions", "Green Peas", "Ghee"],
    "steps": [
      "Roast the semolina (rava) in a pan until it smells nutty but remains white.",
      "Heat oil or ghee and temper with mustard seeds, chana dal, and urad dal.",
      "Add chopped onions, green chilies, and ginger, sautéing until they are soft.",
      "Pour three cups of water for every cup of rava and bring it to a rolling boil.",
      "Add salt and a teaspoon of ghee to the boiling water.",
      "Slowly pour the rava into the water while stirring constantly to avoid lumps.",
      "Cover and cook on low heat for two minutes until all the water is absorbed."
    ]
  },
  {
    "id": 16,
    "title": "Bisibelebath",
    "image": "https://images.unsplash.com/photo-1645177623570-ad448acbf52d?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Shankar",
    "time": "45 mins",
    "level": "Medium",
    "views": 560,
    "ingredients": ["Rice", "Toor Dal", "Mixed Veggies", "BBB Masala"],
    "steps": [
      "Pressure cook the rice and toor dal together until they are very soft and mushy.",
      "Boil carrots, beans, and peas separately until they are tender.",
      "Mix the Bisibelebath masala powder with a little water to make a paste.",
      "Combine the cooked rice, dal, and vegetables in a large pot.",
      "Add the masala paste and tamarind extract, then simmer the mixture on low heat.",
      "Heat ghee in a small pan and fry cashews, mustard seeds, and curry leaves.",
      "Pour this tempering over the rice and mix well before serving hot."
    ]
  },
  {
    "id": 17,
    "title": "Appam with Vegetable Stew",
    "image": "https://images.unsplash.com/photo-1626509653291-382586714088?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Mariam",
    "time": "30 mins",
    "level": "Medium",
    "views": 740,
    "ingredients": ["Rice Flour", "Coconut", "Yeast", "Potato"],
    "steps": [
      "Ferment a batter made of rice and coconut milk for at least eight hours.",
      "For the stew, sauté ginger, garlic, and whole spices in coconut oil.",
      "Add cubed potatoes, carrots, and beans with thin coconut milk and simmer.",
      "Once the veggies are cooked, add thick coconut milk and remove from heat.",
      "Heat an appam pan and pour a ladle of batter into the center.",
      "Swirl the pan to coat the sides, leaving a thick layer of batter in the middle.",
      "Cover and steam until the edges are crispy and the center is soft and fluffy."
    ]
  },
  {
    "id": 18,
    "title": "Lemon Rice",
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Ravi",
    "time": "15 mins",
    "level": "Easy",
    "views": 1100,
    "ingredients": ["Cooked Rice", "Lemon Juice", "Peanuts", "Turmeric"],
    "steps": [
      "Cook the rice beforehand and spread it out on a plate to cool completely.",
      "Heat oil and fry peanuts until they are crunchy and golden.",
      "Add mustard seeds, urad dal, dried red chilies, and curry leaves to the oil.",
      "Stir in turmeric powder and a pinch of asafoetida for color and aroma.",
      "Turn off the heat and squeeze fresh lemon juice into the spice mixture.",
      "Pour this tempering over the cooled rice and add salt to taste.",
      "Mix everything gently with a spoon so the rice grains do not break."
    ]
  },
  {
    "id": 19,
    "title": "Fish Moilee",
    "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Antony",
    "time": "30 mins",
    "level": "Medium",
    "views": 490,
    "ingredients": ["Kingfish", "Thin Coconut Milk", "Green Chilies", "Turmeric"],
    "steps": [
      "Marinate the fish slices with turmeric, lemon juice, and salt for 15 minutes.",
      "Lightly fry the fish in coconut oil for two minutes on each side without browning.",
      "In the same oil, sauté sliced onions, green chilies, and ginger juliennes.",
      "Pour in thin coconut milk and bring it to a very gentle simmer.",
      "Place the partially fried fish into the milk and cook on low heat.",
      "Add thick coconut milk and tomato slices, then heat through without boiling.",
      "Finish with a drizzle of fresh coconut oil and a few curry leaves."
    ]
  },
  {
    "id": 20,
    "title": "Paniyaram",
    "image": "https://images.unsplash.com/photo-1644837519103-68d71629864d?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Meena",
    "time": "25 mins",
    "level": "Easy",
    "views": 320,
    "ingredients": ["Idli Batter", "Onions", "Carrot", "Spices"],
    "steps": [
      "Take fermented idli or dosa batter in a large mixing bowl.",
      "Sauté chopped onions, green chilies, and grated carrots in a little oil.",
      "Mix these sautéed vegetables into the batter along with fresh coriander.",
      "Heat a paniyaram pan and add a few drops of oil into each cavity.",
      "Pour the batter into the holes until they are three-quarters full.",
      "Cook on medium heat until the bottom is crispy and golden.",
      "Flip each paniyaram using a wooden skewer and cook the other side."
    ]
  },
  {
    "id": 21,
    "title": "Mutton Chukka",
    "image": "https://images.unsplash.com/photo-1633964913295-ceb4c8248819?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Selvam",
    "time": "55 mins",
    "level": "Hard",
    "views": 870,
    "ingredients": ["Mutton", "Small Onions", "Black Pepper", "Curry Leaves"],
    "steps": [
      "Pressure cook the mutton with turmeric, ginger-garlic paste, and salt until tender.",
      "Heat oil in a heavy-bottomed pan and sauté a large quantity of small shallots.",
      "Add curry leaves and the cooked mutton pieces along with their remaining broth.",
      "Stir in a freshly ground spice mix of cumin, fennel, and lots of black pepper.",
      "Cook on medium-high heat while stirring continuously to evaporate the liquid.",
      "Continue roasting until the spices coat the meat in a dark, dry layer.",
      "Add a final garnish of fried curry leaves and serve with rice or parotta."
    ]
  },
  {
    "id": 22,
    "title": "Kerala Avial",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Nair",
    "time": "35 mins",
    "level": "Medium",
    "views": 410,
    "ingredients": ["Drumstick", "Yam", "Coconut Paste", "Curd"],
    "steps": [
      "Cut various vegetables like carrots, beans, yam, and drumsticks into long strips.",
      "Cook the vegetables with turmeric and salt using very little water.",
      "Grind fresh coconut, green chilies, and cumin seeds into a coarse paste.",
      "Add the coconut paste to the cooked vegetables and mix gently.",
      "Cook for five minutes until the raw smell of the coconut disappears.",
      "Beat fresh curd until smooth and stir it into the vegetables on low heat.",
      "Turn off the heat and drizzle two tablespoons of raw coconut oil on top."
    ]
  },
  {
    "id": 23,
    "title": "Idiyappam",
    "image": "https://images.unsplash.com/photo-1625231334168-35067f8853ed?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Bindu",
    "time": "30 mins",
    "level": "Medium",
    "views": 620,
    "ingredients": ["Rice Flour", "Grated Coconut", "Hot Water"],
    "steps": [
      "Boil water with a pinch of salt and a teaspoon of oil in a saucepan.",
      "Gradually add the hot water to roasted rice flour while stirring with a spoon.",
      "Knead the mixture into a soft, non-sticky dough once it cools slightly.",
      "Place a portion of the dough into an idiyappam press with fine holes.",
      "Press the dough into circular mounds onto greased steamer plates.",
      "Sprinkle some freshly grated coconut on top of each mound for extra flavor.",
      "Steam the idiyappam for about 10 minutes until they are firm but soft."
    ]
  },
  {
    "id": 24,
    "title": "Mysore Pak",
    "image": "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Krishna",
    "time": "40 mins",
    "level": "Hard",
    "views": 750,
    "ingredients": ["Besan", "Ghee", "Sugar"],
    "steps": [
      "Sieve the gram flour (besan) to ensure there are no lumps in the mixture.",
      "Prepare a sugar syrup by boiling sugar and water until it reaches a one-string consistency.",
      "Keep a separate pot of ghee hot on a very low flame throughout the process.",
      "Slowly add the besan to the sugar syrup while whisking constantly.",
      "Pour a ladle of hot ghee into the mixture, which will cause it to froth up.",
      "Repeat the ghee process until the mixture becomes porous and leaves the sides.",
      "Quickly pour the mixture into a greased tray and slice into pieces once set."
    ]
  },
  {
    "id": 25,
    "title": "Andhra Chilli Chicken",
    "image": "https://images.unsplash.com/photo-1599481238640-4c1288750d7a?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Reddy",
    "time": "35 mins",
    "level": "Medium",
    "views": 1050,
    "ingredients": ["Chicken", "Green Chilli Paste", "Soy Sauce", "Ginger"],
    "steps": [
      "Marinate the chicken pieces with salt, turmeric, and ginger-garlic paste.",
      "Grind a large handful of green chilies into a coarse, spicy paste.",
      "Heat oil in a wok and sauté the marinated chicken until it is half-cooked.",
      "Add the green chili paste and stir-fry on high heat for several minutes.",
      "Pour in a small amount of soy sauce and vinegar to balance the spice.",
      "Add a splash of water and cook covered until the chicken is fully tender.",
      "Finish by tossing in fresh curry leaves and sliced green chilies for extra heat."
    ]
  },
  {
    "id": 26,
    "title": "Curd Rice",
    "image": "https://images.unsplash.com/photo-1645177623570-ad448acbf52d?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Venkat",
    "time": "15 mins",
    "level": "Easy",
    "views": 580,
    "ingredients": ["Soft Rice", "Yogurt", "Pomegranate", "Ginger"],
    "steps": [
      "Cook the rice with extra water so that it becomes very soft and mashable.",
      "Mash the hot rice thoroughly with a ladle and let it cool down to room temperature.",
      "Stir in fresh, thick yogurt and a splash of milk to keep it creamy.",
      "Prepare a tempering by heating oil with mustard seeds, ginger, and curry leaves.",
      "Add a pinch of asafoetida and dried red chilies to the tempering oil.",
      "Pour the hot oil mixture over the rice and mix everything together with salt.",
      "Garnish with pomegranate seeds or grated carrots before serving chilled."
    ]
  },
  {
    "id": 27,
    "title": "Tomato Pappu",
    "image": "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Srilatha",
    "time": "25 mins",
    "level": "Easy",
    "views": 390,
    "ingredients": ["Toor Dal", "Tomatoes", "Garlic", "Tamarind"],
    "steps": [
      "Pressure cook the toor dal with chopped tomatoes, turmeric, and green chilies.",
      "Mash the cooked dal and tomatoes together until you achieve a smooth consistency.",
      "Add a small amount of tamarind extract and salt, then simmer for five minutes.",
      "Heat oil in a small pan and add mustard seeds, cumin seeds, and dry red chilies.",
      "Add crushed garlic cloves and fry them until they are golden and aromatic.",
      "Pour this garlic tempering into the dal and cover the pot immediately to trap the aroma.",
      "Serve the pappu with steaming hot rice and a dollop of ghee."
    ]
  },
  {
    "id": 28,
    "title": "Puttu",
    "image": "https://images.unsplash.com/photo-1560611580-b9f0d94728c5?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Rahul",
    "time": "20 mins",
    "level": "Medium",
    "views": 440,
    "ingredients": ["Rice Flour", "Coconut", "Water"],
    "steps": [
      "Take roasted rice flour in a bowl and add a pinch of salt.",
      "Slowly sprinkle water onto the flour while mixing with your fingers.",
      "Keep adding water until the flour is moist enough to hold its shape when pressed.",
      "Ensure there are no large lumps in the flour by breaking them with your hands.",
      "In a puttu maker, add a layer of grated coconut followed by the rice flour mixture.",
      "Continue layering until the cylindrical tube is full, ending with coconut on top.",
      "Steam the puttu for about 5 to 8 minutes until steam escapes from the top."
    ]
  },
  {
    "id": 29,
    "title": "Kozhi Karuvattu (Chicken Dry Fry)",
    "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Pandian",
    "time": "45 mins",
    "level": "Medium",
    "views": 210,
    "ingredients": ["Chicken", "Dry Red Chilies", "Shallots", "Oil"],
    "steps": [
      "Cut the chicken into very small bite-sized pieces for better spice absorption.",
      "Heat oil and sauté a generous amount of sliced shallots and curry leaves.",
      "Add a paste made from soaked dry red chilies and garlic to the pan.",
      "Toss the chicken pieces into the masala and cook on a high flame to seal the juices.",
      "Lower the heat and continue to cook while stirring frequently without adding water.",
      "The chicken will release its own fat and roast in the chili-onion mixture.",
      "Cook until the chicken is tender and the exterior is dark and slightly charred."
    ]
  },
  {
    "id": 30,
    "title": "Unniyappam",
    "image": "https://images.unsplash.com/photo-1605028452755-9c3f58e99864?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Shanti",
    "time": "30 mins",
    "level": "Medium",
    "views": 530,
    "ingredients": ["Rice Flour", "Jaggery", "Banana", "Coconut Bits"],
    "steps": [
      "Melt jaggery in a little water and strain it to remove any impurities.",
      "Mash ripe bananas into a smooth paste and mix them with rice flour.",
      "Combine the jaggery syrup with the flour and banana to form a thick batter.",
      "Add small fried pieces of coconut and sesame seeds into the batter.",
      "Heat an appe pan (unniyappam chatti) and fill each hole half-way with oil.",
      "Pour the batter into the hot oil and cook until the edges become golden.",
      "Flip the appams and cook until they are dark brown and crispy on the outside."
    ]
  },
  {
    "id": 31,
    "title": "Vatha Kuzhambu",
    "image": "https://images.unsplash.com/photo-1512058560366-cd2429bb5c5c?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Mani",
    "time": "30 mins",
    "level": "Medium",
    "views": 480,
    "ingredients": ["Sundakkai", "Tamarind", "Sambar Powder", "Sesame Oil"],
    "steps": [
      "Heat sesame oil in a pan and fry sundakkai (turkey berries) until they turn black.",
      "Remove the berries and in the same oil, add mustard seeds and fenugreek seeds.",
      "Add a thick extract of tamarind water along with turmeric and sambar powder.",
      "Let the gravy boil until the raw smell of the tamarind completely disappears.",
      "Add a small piece of jaggery to balance the sourness and bitterness.",
      "Stir in the fried berries and simmer until the oil starts to float on top.",
      "Serve this intense gravy with rice and a side of roasted papad."
    ]
  },
  {
    "id": 32,
    "title": "Ven Pongal",
    "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Balu",
    "time": "25 mins",
    "level": "Easy",
    "views": 900,
    "ingredients": ["Rice", "Moong Dal", "Ginger", "Pepper"],
    "steps": [
      "Pressure cook rice and yellow moong dal together with plenty of water.",
      "Mash the cooked mixture while it is still hot until it is soft and creamy.",
      "Heat ghee in a pan and fry cashews until they turn golden brown.",
      "Add whole black peppercorns, cumin seeds, and finely chopped ginger.",
      "Toss in a few curry leaves and a pinch of asafoetida into the hot ghee.",
      "Pour this aromatic tempering over the mashed rice and dal mixture.",
      "Mix well with salt and serve hot with coconut chutney and sambar."
    ]
  },
  {
    "id": 33,
    "title": "Gongura Pachadi",
    "image": "https://images.unsplash.com/photo-1610134444585-783226393433?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Rao",
    "time": "20 mins",
    "level": "Medium",
    "views": 310,
    "ingredients": ["Sorrel Leaves", "Dry Chilies", "Garlic", "Oil"],
    "steps": [
      "Wash the gongura (sorrel) leaves thoroughly and dry them completely.",
      "Heat oil and fry dry red chilies, coriander seeds, and fenugreek seeds.",
      "In the same pan, sauté the gongura leaves until they wilt and turn dark green.",
      "Grind the roasted spices first, then add the sautéed leaves and salt.",
      "Pulse the mixture into a coarse paste without adding any water.",
      "Heat more oil and temper it with mustard seeds, garlic, and red chilies.",
      "Mix the tempering into the chutney and store it in a glass jar."
    ]
  },
  {
    "id": 34,
    "title": "Neer Dosa",
    "image": "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Shetty",
    "time": "20 mins",
    "level": "Medium",
    "views": 670,
    "ingredients": ["Rice", "Coconut", "Salt"],
    "steps": [
      "Soak raw rice for at least five hours before grinding it with fresh coconut.",
      "Add water to the ground paste to achieve a very thin, watery consistency.",
      "Heat a non-stick tawa and grease it lightly with a few drops of oil.",
      "Pour a ladle of batter from the outer edge toward the center of the tawa.",
      "Do not spread the batter like a regular dosa; let it form lace-like holes.",
      "Cover with a lid and steam-cook for one minute on a medium flame.",
      "Fold the dosa into a triangle and serve immediately without flipping it."
    ]
  },
  {
    "id": 35,
    "title": "Cabbage Poriyal",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Devi",
    "time": "15 mins",
    "level": "Easy",
    "views": 290,
    "ingredients": ["Cabbage", "Coconut", "Chana Dal", "Turmeric"],
    "steps": [
      "Finely shred the cabbage and wash it in cold water before draining.",
      "Heat oil in a pan and add mustard seeds, urad dal, and chana dal.",
      "Once the dals are golden, add green chilies and curry leaves.",
      "Add the shredded cabbage along with turmeric powder and a pinch of salt.",
      "Cover and cook on low heat for five minutes so the cabbage stays crunchy.",
      "Open the lid and stir-fry for a minute to remove any excess moisture.",
      "Turn off the heat and stir in plenty of freshly grated coconut."
    ]
  },
  {
    "id": 36,
    "title": "Beef Ularthiyathu",
    "image": "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Kurian",
    "time": "60 mins",
    "level": "Hard",
    "views": 1150,
    "ingredients": ["Beef", "Coconut Slices", "Black Pepper", "Garlic"],
    "steps": [
      "Cook the beef in a pressure cooker with chili powder, coriander, and turmeric.",
      "Heat coconut oil in a heavy pan and fry small slices of fresh coconut (thenga kothu).",
      "Sauté plenty of shallots, crushed garlic, and ginger until they are brown.",
      "Add the cooked beef pieces along with any broth left in the cooker.",
      "Stir in a generous amount of freshly crushed black pepper and garam masala.",
      "Slow-roast the beef on low heat, stirring every few minutes to prevent burning.",
      "Continue roasting until the meat turns dark brown and almost black."
    ]
  },
  {
    "id": 37,
    "title": "Pesarattu (Moong Dal Dosa)",
    "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Naidu",
    "time": "30 mins",
    "level": "Medium",
    "views": 420,
    "ingredients": ["Green Gram", "Ginger", "Green Chili", "Onions"],
    "steps": [
      "Soak whole green moong dal for six hours or overnight.",
      "Grind the soaked dal with green chilies, ginger, and salt into a smooth batter.",
      "Heat a tawa and spread the batter in a circular motion like a regular dosa.",
      "Sprinkle finely chopped onions and ginger on the surface of the wet batter.",
      "Drizzle oil or ghee around the edges and press the onions down with a spatula.",
      "Cook until the bottom is crispy and then flip it over for a few seconds.",
      "Serve the hot pesarattu with ginger chutney (Allam Pachadi)."
    ]
  },
  {
    "id": 38,
    "title": "Mangalorean Chicken Sukka",
    "image": "https://images.unsplash.com/photo-1606491956689-2ea8c5119c85?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Alva",
    "time": "45 mins",
    "level": "Medium",
    "views": 890,
    "ingredients": ["Chicken", "Roasted Coconut", "Byadgi Chili", "Tamarind"],
    "steps": [
      "Roast dry red chilies, coriander seeds, and cumin before grinding them into a paste.",
      "Cook the chicken with turmeric, salt, and half of the ground masala paste.",
      "In a separate pan, dry roast grated coconut with garlic until it is golden brown.",
      "Pulse the roasted coconut coarsely so it retains some texture.",
      "Add the remaining masala and the coarse coconut to the cooked chicken.",
      "Mix well and cook on high heat to ensure the spices stick to the chicken.",
      "Finish with a tempering of curry leaves and onions fried in ghee."
    ]
  },
  {
    "id": 39,
    "title": "Vermicelli Payasam",
    "image": "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Uma",
    "time": "30 mins",
    "level": "Easy",
    "views": 610,
    "ingredients": ["Vermicelli", "Milk", "Sugar", "Cashews"],
    "steps": [
      "Roast the vermicelli in ghee until it becomes light golden in color.",
      "Bring full-fat milk to a boil in a thick-bottomed pot.",
      "Add the roasted vermicelli to the milk and cook until it becomes soft.",
      "Stir in sugar and cardamom powder, letting it simmer for five minutes.",
      "Fry cashews and raisins in ghee until the raisins puff up.",
      "Pour the fried nuts and the remaining ghee into the payasam.",
      "Serve the payasam either warm or chilled as a dessert."
    ]
  },
  {
    "id": 40,
    "title": "Vegetable Sambar",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&h=600",
    "author": "Chef Iyengar",
    "time": "30 mins",
    "level": "Medium",
    "views": 2500,
    "ingredients": ["Toor Dal", "Tamarind", "Sambar Powder", "Vegetables"],
    "steps": [
      "Pressure cook the toor dal until it is completely soft and then whisk it.",
      "Boil drumsticks, pumpkin, and shallots in tamarind water with turmeric.",
      "Add sambar powder and salt to the boiling vegetables and cook until tender.",
      "Pour the mashed dal into the vegetable mixture and stir well.",
      "Simmer the sambar for ten minutes on low heat to develop the flavors.",
      "Heat oil and temper with mustard seeds, fenugreek, and a pinch of asafoetida.",
      "Add the tempering and fresh coriander leaves to the sambar before serving."
    ]
  }
]






















































export default recipes;


// const recipes = [
//   {
//     id: 1,
//     title: "Palak Paneer",
//     image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&h=600",
//     author: "Chef Arjun",
//     time: "35 mins",
//     level: "Medium",
//     views: 310,
//     ingredients: ["Spinach", "Paneer", "Garlic", "Cream"],
//     steps: ["Blanch spinach", "Sauté garlic & spices", "Add puree", "Mix paneer"]
//   },
//   {
//     id: 2,
//     title: "Lamb Rogan Josh",
//     image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=1200&h=600",
//     author: "Chef Sameer",
//     time: "90 mins",
//     level: "Hard",
//     views: 450,
//     ingredients: ["Lamb", "Yogurt", "Kashmiri Chili", "Cardamom"],
//     steps: ["Sear lamb", "Make yogurt gravy", "Slow cook", "Garnish"]
//   },
//   {
//     id: 3,
//     title: "Dal Makhani",
//     image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&h=600",
//     author: "Chef Preeti",
//     time: "120 mins",
//     level: "Medium",
//     views: 520,
//     ingredients: ["Black Lentils", "Kidney Beans", "Butter", "Cream"],
//     steps: ["Boil lentils", "Simmer with tomato & butter", "Add cream", "Serve"]
//   },
//   {
//     id: 4,
//     title: "Hyderabadi Dum Biryani",
//     image: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&w=1200&h=600",
//     author: "Chef Zafar",
//     time: "60 mins",
//     level: "Hard",
//     views: 890,
//     ingredients: ["Basmati Rice", "Meat", "Saffron", "Fried Onions"],
//     steps: ["Marinate meat", "Layer with rice", "Steam (Dum)", "Serve"]
//   },
//   {
//     id: 5,
//     title: "Aloo Gobi",
//     image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&h=600",
//     author: "Chef Meera",
//     time: "25 mins",
//     level: "Easy",
//     views: 215,
//     ingredients: ["Potatoes", "Cauliflower", "Turmeric", "Ginger"],
//     steps: ["Sauté veggies", "Add spices", "Cook covered", "Garnish"]
//   },
//   {
//     id: 6,
//     title: "Butter Chicken",
//     image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&h=600",
//     author: "Chef Vikram",
//     time: "45 mins",
//     level: "Medium",
//     views: 1200,
//     ingredients: ["Chicken", "Butter", "Tomato", "Cream"],
//     steps: ["Grill chicken", "Make makhani sauce", "Combine", "Add cream"]
//   },
//   {
//     id: 7,
//     title: "Chana Masala",
//     image: "https://images.unsplash.com/photo-1585937421612-70a0f29500bf?auto=format&fit=crop&w=1200&h=600",
//     author: "Chef Ananya",
//     time: "30 mins",
//     level: "Easy",
//     views: 340,
//     ingredients: ["Chickpeas", "Onions", "Mango Powder", "Chilies"],
//     steps: ["Boil chickpeas", "Fry masala base", "Simmer together", "Serve"]
//   },
//   {
//     id: 8,
//     title: "Pani Puri",
//     image: "https://images.unsplash.com/photo-1601050690597-df056fb01793?auto=format&fit=crop&w=1200&h=600",
//     author: "Chef Rahul",
//     time: "40 mins",
//     level: "Medium",
//     views: 950,
//     ingredients: ["Puris", "Tamarind Water", "Potato filling"],
//     steps: ["Prep mint water", "Make potato mash", "Assemble and dip"]
//   },
//   {
//     id: 9,
//     title: "Malai Kofta",
//     image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?auto=format&fit=crop&w=1200&h=600",
//     author: "Chef Kavita",
//     time: "50 mins",
//     level: "Hard",
//     views: 280,
//     ingredients: ["Paneer", "Potato", "Cashews", "Tomato Gravy"],
//     steps: ["Make kofta balls", "Fry until golden", "Cook gravy", "Combine"]
//   },
//   {
//     id: 10,
//     title: "Gulab Jamun",
//     image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&w=1200&h=600",
//     author: "Chef Surbhi",
//     time: "40 mins",
//     level: "Medium",
//     views: 670,
//     ingredients: ["Khoya", "Flour", "Sugar Syrup", "Cardamom"],
//     steps: ["Shape balls", "Fry on low heat", "Soak in syrup", "Serve warm"]
//   }
// ];

// export default recipes;




// const recipes = [
//   {
//     id: 1,
//     title: "Palak Paneer",
//     image: "https://source.unsplash.com/1200x600/?palak-paneer",
//     author: "Chef Arjun",
//     time: "35 mins",
//     level: "Medium",
//     views: 310,
//     ingredients: ["Spinach", "Paneer cubes", "Garlic", "Garam Masala", "Cream"],
//     steps: [
//       "Blanch spinach and blend into a smooth puree.",
//       "Sauté garlic, onions, and spices in a pan.",
//       "Add spinach puree and simmer.",
//       "Toss in paneer cubes and finish with a dash of cream."
//     ]
//   },
//   {
//     id: 2,
//     title: "Lamb Rogan Josh",
//     image: "https://source.unsplash.com/1200x600/?lamb-curry",
//     author: "Chef Sameer",
//     time: "90 mins",
//     level: "Hard",
//     views: 450,
//     ingredients: ["Lamb shoulder", "Yogurt", "Kashmiri Red Chili", "Ginger", "Cardamom"],
//     steps: [
//       "Sear lamb pieces until browned.",
//       "Prepare a yogurt-based gravy with aromatic spices.",
//       "Slow-cook the lamb in the gravy until tender.",
//       "Garnish with fresh coriander."
//     ]
//   },
//   {
//     id: 3,
//     title: "Dal Makhani",
//     image: "https://source.unsplash.com/1200x600/?dal",
//     author: "Chef Preeti",
//     time: "120 mins",
//     level: "Medium",
//     views: 520,
//     ingredients: ["Black Lentils", "Kidney Beans", "Butter", "Tomato Puree", "Cream"],
//     steps: [
//       "Soak lentils overnight and pressure cook until soft.",
//       "Simmer with tomato puree and butter for a long duration.",
//       "Add cream and 'tempering' (tadka) of cumin and garlic.",
//       "Serve with butter naan."
//     ]
//   },
//   {
//     id: 4,
//     title: "Hyderabadi Dum Biryani",
//     image: "https://source.unsplash.com/1200x600/?hyderabadi-biryani",
//     author: "Chef Zafar",
//     time: "60 mins",
//     level: "Hard",
//     views: 890,
//     ingredients: ["Basmati Rice", "Marinated Meat", "Saffron", "Fried Onions", "Mint"],
//     steps: [
//       "Layer partially cooked rice over marinated meat.",
//       "Seal the pot with dough (Dum) to trap steam.",
//       "Cook on low heat for 40 minutes.",
//       "Fluff the rice and serve with raita."
//     ]
//   },
//   {
//     id: 5,
//     title: "Aloo Gobi",
//     image: "https://source.unsplash.com/1200x600/?aloo-gobi",
//     author: "Chef Meera",
//     time: "25 mins",
//     level: "Easy",
//     views: 215,
//     ingredients: ["Potatoes", "Cauliflower", "Turmeric", "Green Chilies", "Ginger"],
//     steps: [
//       "Sauté potatoes and cauliflower florets with spices.",
//       "Cover and cook until vegetables are tender.",
//       "Garnish with ginger juliennes and cilantro."
//     ]
//   },
//   {
//     id: 6,
//     title: "Butter Chicken (Murgh Makhani)",
//     image: "https://source.unsplash.com/1200x600/?butter-chicken",
//     author: "Chef Vikram",
//     time: "45 mins",
//     level: "Medium",
//     views: 1200,
//     ingredients: ["Tandoori Chicken", "Butter", "Tomato Paste", "Kasuari Methi", "Cream"],
//     steps: [
//       "Prepare a silky tomato and butter sauce.",
//       "Add roasted chicken pieces to the gravy.",
//       "Season with dried fenugreek leaves (kasuri methi).",
//       "Finish with a heavy pour of cream."
//     ]
//   },
//   {
//     id: 7,
//     title: "Chana Masala",
//     image: "https://source.unsplash.com/1200x600/?chana-masala",
//     author: "Chef Ananya",
//     time: "30 mins",
//     level: "Easy",
//     views: 340,
//     ingredients: ["Chickpeas", "Onions", "Amchur (Mango Powder)", "Green Chilies"],
//     steps: [
//       "Boil chickpeas until soft.",
//       "Make a spicy onion-tomato base.",
//       "Toss chickpeas and amchur for a tangy flavor.",
//       "Serve hot with bhature or rice."
//     ]
//   },
//   {
//     id: 8,
//     title: "Pani Puri (Golgappa)",
//     image: "https://source.unsplash.com/1200x600/?panipuri",
//     author: "Chef Rahul",
//     time: "40 mins",
//     level: "Medium",
//     views: 950,
//     ingredients: ["Semolina Puris", "Tamarind Water", "Spiced Potatoes", "Mint Water"],
//     steps: [
//       "Prepare spicy and tangy mint/tamarind water.",
//       "Make a filling of mashed potatoes and chickpeas.",
//       "Poke a hole in the puri, add filling, and dip in water.",
//       "Eat immediately in one bite!"
//     ]
//   },
//   {
//     id: 9,
//     title: "Malai Kofta",
//     image: "https://source.unsplash.com/1200x600/?kofta",
//     author: "Chef Kavita",
//     time: "50 mins",
//     level: "Hard",
//     views: 280,
//     ingredients: ["Potato", "Paneer", "Cashews", "Tomato Gravy", "Raisins"],
//     steps: [
//       "Mash potato and paneer to form balls (koftas).",
//       "Deep fry the koftas until golden brown.",
//       "Prepare a rich, creamy cashew and tomato gravy.",
//       "Pour gravy over koftas just before serving."
//     ]
//   },
//   {
//     id: 10,
//     title: "Gulab Jamun",
//     image: "https://source.unsplash.com/1200x600/?gulab-jamun",
//     author: "Chef Surbhi",
//     time: "40 mins",
//     level: "Medium",
//     views: 670,
//     ingredients: ["Khoya (Milk Solids)", "Flour", "Sugar Syrup", "Cardamom", "Rose Water"],
//     steps: [
//       "Knead khoya and flour into smooth balls.",
//       "Deep fry on very low heat until dark golden.",
//       "Soak in warm sugar syrup infused with rose water.",
//       "Serve warm or chilled."
//     ]
//   }
// ];

// export default recipes;




// const recipes = [
//   {
//     id: 1,
//     title: "Chicken Biryani",
//     image: "https://source.unsplash.com/1200x600/?biryani",
//     author: "Chef Aisha",
//     time: "45 mins",
//     level: "Medium",
//     views: 210,
//     ingredients: ["Rice", "Chicken", "Spices", "Onion"],
//     steps: [
//       "Wash rice",
//       "Cook chicken",
//       "Mix together",
//       "Serve hot"
//     ]
//   },
//   {
//     id: 2,
//     title: "Masala Dosa",
//     image: "https://source.unsplash.com/1200x600/?dosa",
//     author: "Chef Ravi",
//     time: "30 mins",
//     level: "Easy",
//     views: 180,
//     ingredients: ["Dosa batter", "Potato", "Spices"],
//     steps: [
//       "Prepare batter",
//       "Cook potato filling",
//       "Make dosa",
//       "Add filling"
//     ]
//   },
//   {
//     id: 3,
//     title: "Paneer Butter Masala",
//     image: "https://source.unsplash.com/1200x600/?paneer",
//     author: "Chef Neha",
//     time: "35 mins",
//     level: "Medium",
//     views: 250,
//     ingredients: ["Paneer", "Tomato", "Cream"],
//     steps: [
//       "Cook gravy",
//       "Add paneer",
//       "Simmer",
//       "Serve"
//     ]
//   },
//   {
//     id: 4,
//     title: "Veg Fried Rice",
//     image: "https://source.unsplash.com/1200x600/?fried-rice",
//     author: "Chef Lee",
//     time: "20 mins",
//     level: "Easy",
//     views: 140,
//     ingredients: ["Rice", "Vegetables", "Soy sauce"],
//     steps: [
//       "Cook rice",
//       "Stir fry veggies",
//       "Mix together"
//     ]
//   },
//   {
//     id: 5,
//     title: "Chocolate Cake",
//     image: "https://source.unsplash.com/1200x600/?chocolate-cake",
//     author: "Chef Maria",
//     time: "50 mins",
//     level: "Hard",
//     views: 300,
//     ingredients: ["Flour", "Cocoa", "Sugar"],
//     steps: [
//       "Mix ingredients",
//       "Bake",
//       "Cool",
//       "Serve"
//     ]
//   },
//   {
//     id: 6,
//     title: "Pasta Alfredo",
//     image: "https://source.unsplash.com/1200x600/?pasta",
//     author: "Chef John",
//     time: "25 mins",
//     level: "Easy",
//     views: 160,
//     ingredients: ["Pasta", "Cream", "Cheese"],
//     steps: [
//       "Boil pasta",
//       "Prepare sauce",
//       "Mix"
//     ]
//   },
//   {
//     id: 7,
//     title: "Burger",
//     image: "https://source.unsplash.com/1200x600/?burger",
//     author: "Chef Alex",
//     time: "15 mins",
//     level: "Easy",
//     views: 120,
//     ingredients: ["Bun", "Patty", "Veggies"],
//     steps: [
//       "Cook patty",
//       "Assemble burger"
//     ]
//   },
//   {
//     id: 8,
//     title: "Pizza",
//     image: "https://source.unsplash.com/1200x600/?pizza",
//     author: "Chef Luigi",
//     time: "40 mins",
//     level: "Medium",
//     views: 270,
//     ingredients: ["Dough", "Cheese", "Sauce"],
//     steps: [
//       "Prepare base",
//       "Add toppings",
//       "Bake"
//     ]
//   },
//   {
//     id: 9,
//     title: "Samosa",
//     image: "https://source.unsplash.com/1200x600/?samosa",
//     author: "Chef Priya",
//     time: "25 mins",
//     level: "Medium",
//     views: 190,
//     ingredients: ["Flour", "Potato", "Spices"],
//     steps: [
//       "Prepare filling",
//       "Shape samosa",
//       "Fry"
//     ]
//   },
//   {
//     id: 10,
//     title: "Ice Cream",
//     image: "https://source.unsplash.com/1200x600/?ice-cream",
//     author: "Chef Emma",
//     time: "10 mins",
//     level: "Easy",
//     views: 220,
//     ingredients: ["Milk", "Sugar", "Flavor"],
//     steps: [
//       "Mix ingredients",
//       "Freeze",
//       "Serve"
//     ]
//   }
// ];

// export default recipes;