const sampleRestaurants = [
  //online
  {
    title: "Haldiram's",
    description:
      "North Indian, Chinese, Fast Food, South Indian, Street Food, Mithai",
    image:
      "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Lajpat Nagar 3, New Delhi",
    serviceType: "online",
  },

  {
    title: "Burger King",
    description: "Burger, Fast Food, Desserts, Shake",
    image:
      "https://images.pexels.com/photos/2267538/pexels-photo-2267538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Nehru Place, New Delhi",
    serviceType: "online",
  },

  {
    title: "Chai Point",
    description:
      "Tea, Coffee, Beverages, Shake, Fast Food, Rolls, Desserts, Cafe",
    image:
      "https://images.pexels.com/photos/12865880/pexels-photo-12865880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Gurgaon",
    serviceType: "online",
  },

  {
    title: "KFC",
    description: "Burger, Rolls, Fast Food",
    image:
      "https://images.pexels.com/photos/2232433/pexels-photo-2232433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Kalkaji, New Delhi",
    serviceType: "online",
  },

  {
    title: "McDonald's",
    description: "Burger, Wraps, Fast Food, Beverages",
    image:
      "https://images.pexels.com/photos/4021944/pexels-photo-4021944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Nehru Place, New Delhi",
    serviceType: "online",
  },

  {
    title: "Domino's Pizza",
    description: "Pizza, Beverages, Desserts",
    image:
      "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Noida",
    serviceType: "online",
  },

  //dine-in
  {
    title: "Dhaba",
    description: "North Indian, Desserts",
    image:
      "https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Nehru Place, New Delhi",
    serviceType: "dine-in",
  },

  {
    title: "I love chinese",
    description: "Chinese, Thai, Asian, Desserts",
    image:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Gurgaon",
    serviceType: "dine-in",
  },

  {
    title: "The Penthouse Bar",
    description: "Asian, Oriental, Italian, Mediterranean, North Indian",
    image:
      "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Nehru Place, New Delhi",
    serviceType: "dine-in",
  },

  {
    title: "Indian Accent",
    description: "Modern Indian, North Indian, Beverages",
    image:
      "https://images.pexels.com/photos/28674690/pexels-photo-28674690/free-photo-of-rich-indian-lamb-curry-in-traditional-metal-bowl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Noida",
    serviceType: "dine-in",
  },

  {
    title: "Hillside Cafe",
    description: "Italian, Continental, Fast Food, Salad, Desserts,",
    image:
      "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "New Delhi",
    serviceType: "dine-in",
  },

  {
    title: "Cocktail Garden",
    description: "Beverages, Shake, Cold Coffee",
    image:
      "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Nehru Place, New Delhi",
    serviceType: "dine-in",
  },

  //nightlife
  {
    title: "Asian Kitchen",
    description:
      "Asian, Japanese, Sushi, Oriental, Chinese, Seafood, Salad, Coffee",
    image:
      "https://images.pexels.com/photos/29019655/pexels-photo-29019655/free-photo-of-urban-scooter-delivery-at-night-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Nehru Place, New Delhi",
    serviceType: "nightlife",
  },

  {
    title: "Food & Bar",
    description: "Japanese, Asian, Thai, Chinese, Sushi, Salad",
    image:
      "https://images.pexels.com/photos/2091013/pexels-photo-2091013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Lajpat Nagar 3, New Delhi",
    serviceType: "nightlife",
  },

  {
    title: "Asian Kitchen",
    description:
      "Asian, Japanese, Sushi, Oriental, Chinese, Seafood, Salad, Coffee",
    image:
      "https://images.pexels.com/photos/28988072/pexels-photo-28988072/free-photo-of-vibrant-night-scene-at-sake-ichi-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Nehru Place, New Delhi",
    serviceType: "nightlife",
  },

  {
    title: "American Brew",
    description:
      "Cafe, Coffee, Beverages, Healthy Food, Italian, Continental, Pancake, Desserts",
    image:
      "https://images.pexels.com/photos/941864/pexels-photo-941864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Lajpat Nagar 3, New Delhi",
    serviceType: "nightlife",
  },

  {
    title: "Big Bowl",
    description: "North Indian, Chinese, Momos",
    image:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Gurgaon",
    serviceType: "nightlife",
  },

  {
    title: "Chill Out",
    description:
      "Asian, Japanese, Sushi, Oriental, Chinese, Seafood, Salad, Coffee",
    image:
      "https://images.pexels.com/photos/4255484/pexels-photo-4255484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Gurgaon",
    serviceType: "nightlife",
  },
];

export default sampleRestaurants;
