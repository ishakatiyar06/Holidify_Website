import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { LocationSvg } from "../../assats/Svg";
import clock from "../../assats/clock.png";
import wallet from "../../assats/wallet.png";
import badge from "../../assats/badge.png";
import { useParams } from "react-router-dom";

const Food = () => {
  const { cityname } = useParams();
  const [cityFoodData, setCityFoodData] = useState([]);
  const [aboutFood, setAboutFood] = useState();
  const FootData = [
    {
      cityname: "dalhousie",
      aboutCityFood: `Dalhousie offers options for food that differ in style, elements and
      genre. You can indulge in global cuisines at a number of restaurants as
      well as eateries attached to hotels and resorts.
      <br />
      One can relish Italian, Tibetan, Mughlai, South Indian platters here as
      well as a few instances of local Himachali food. While you can enjoy
      typical North-Indian food as well as some Continental and Chinese snacks
      at their freshest, the most lip-smacking dishes come at minimal prices
      in the local Dhabas. Himachali cuisine is very simple as it mainly
      centres around Chapati, dals, vegetable gravy and curd and their many
      versions. Pickles are typically served along with a meal in most of the
      eating joints here. Known for fruits, most towns in Himachal Pradesh
      offer varied, juicy & fresh fruits throughout the year.`,
      restaurant: [
        {
          restaurantName: "Moti Mahal Deluxe",
          location: "Mall Road, Dalhousie, Himachal Pradesh, India ",
          time: "10AM - 10PM",
          price: "INR 200-250",
          type: "North-Indian",
          pic: "https://media.istockphoto.com/id/1214464511/photo/rajma-chawal-indian-vegan-food-directly-above-stock-photo.jpg?s=612x612&w=0&k=20&c=HbW81gCaNmrhLPgeG54jJr8aGThC9D9ymdFdKMpL1KI=",
        },
        {
          restaurantName: "Cafe Dalhousie ",
          location: "MDR 49, Dalhousie",
          time: "9:30AM - 9:30PM",
          price: "INR 100",
          type: "South-Indian, Chinese, Indian",
          pic: "https://media.istockphoto.com/id/1024558722/photo/group-of-south-indian-food-like-masala-dosa-uttapam-idli-idly-wada-vada-sambar-appam-semolina.jpg?s=612x612&w=0&k=20&c=cbuPAUzlnqlnXhZAa2NbLoSHLUi6OEaVFayHKRAYO7E=",
        },
        {
          restaurantName: "Kwality Restaurant",
          location: "MDR49 Moti Tiba Gandhi Chowk, Dalhousie",
          time: "9:30AM - 9:30PM",
          price: "INR 300",
          type: "Italian, Chinese",
          pic: "https://media.istockphoto.com/id/1220017909/photo/top-view-table-full-of-food.jpg?s=612x612&w=0&k=20&c=UzzJrIttGJbjHoXHRrKNVimV-cBzZmKdvUpJel3g7Ns=",
        },
      ],
    },
    {
      cityname: "nainital",
      aboutCityFood: `Nainital being a popular tourist spot, houses a flattering variety of cuisines from North Indian, Chinese, Continental, Italian to Thai, Tibetan and the local cuisines of Uttarakhand. Hence, you can enjoy popular Indian delicacies like Dal Makhani, Tandoori Roti, Naan, Paneer dishes as well as savour a number of continental delicacies. The local cuisine can be equally mouth-watering with preparations like Ras (a dish made with several dals), Baadi, Bhatt ki Churkani, Aloo ke Gutke (a spicy preparation of boiled potatoes, Arsa (a sweet dish), Gulgula (a sweet snack) and lots more.`,
      restaurant: [
        {
          restaurantName: "The lazy Leapord",
          location: "At the Palace Belvedere, Awagarh Compound, Mallital, Nainital 263001, India  ",
          time: "10AM - 10PM",
          price: "INR 200-250",
          type: "Bakery, Cafe",
          pic: "https://10619-2.s.cdn12.com/rests/small/w550/h367/316_508294619.jpg",
        },
        {
          restaurantName: "Machan Restaurent ",
          location: "The Mall Road, Mallital, Nainital  ",
          time: "9:30AM - 9:30PM",
          price: "INR 100",
          type: " Indian, Italian, Thai",
          pic: "https://content.jdmagicbox.com/comp/bhimtal/c2/9999p5942.5942.170321192113.s9c2/catalogue/machan-restaurant-bhimtal-bhimtal-restaurants-g2bpjojvg5.jpg",
        },
        {
          restaurantName: "Embassy",
          location: " Mallital, Mall Road, Nainital ",
          time: "9:30AM - 9:30PM",
          price: "INR 300",
          type: "North Indian",
          pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQimNGcY6HMIQgUJi3ppbyjVgThXJGT-tgVnA&usqp=CAU",
        },
      ],
    },
    {
      cityname: "delhi",
      aboutCityFood: `Delhi is a centre of heritage, architecture, history and power and what runs through its lifelines is the food here. Like in case of almost every other thing, in cuisine too, there is nothing that does not find a second home in the capital.
      Delhi's food borrows flavors and elements from the past as well as from the various cultures, religions and livelihoods it sustains. You can try out the finest dining options here with countless choices in terms of cuisine, from Chinese, Continental, Thai, Mexican, Mughal to South Indian and a subtle dominance of North Indian and Punjabi preparations.
      Another equally fine, mouth-watering and vibrant option that begins to define the food culture here is the street food. Delhi remains unseen until you have experienced the street food here. It'd be a futile effort to try and name the items, since there are countless colourful options out their all with simple legacies behind them. Walk through Old Delhi lanes to have some of the richest street foods you might ever find`,
      restaurant: [
        {
          restaurantName: "Chicken Inn",
          location: "13-15, Pandara Road Market, New Delhi  ",
          time: "12Noon to 1AM (Mon-Sun)",
          price: "INR 200-250",
          type: "North Indian, Mughlai, Kebab",
          pic: "https://www.holidify.com/images/cmsuploads/compressed/flickr_restaurant_163.jpg",
        },
        {
          restaurantName: "Al-Jawahar",
          location: "8, Jama Masjid, Matia Mahal Road, Jama Masjid, New Delhi, India",
          time: "7 AM to 12 Midnight",
          price: "INR 100",
          type: "Mughlai, North-Indian",
          pic: "https://www.kolhapurtourism.org/wp-content/uploads/2021/09/non-veg-thali-kolhapur.jpg",
        },
        {
          restaurantName: "Hotel sarwana bhavan",
          location: "P-13, Connaught Circus, Connaught Place, New Delhi  ",
          time: "9:30AM - 9:30PM",
          price: "INR 300",
          type: "South Indian, Mithai, Beverages",
          pic: "https://www.holidify.com/images/cmsuploads/compressed/Paneer-Masala-Dosa-South-Indian-Cuisine-v2_20200624211228.jpg",
        },
      ],
    },
    {
      cityname: "mumbai",
      aboutCityFood: `Mumbai shows remarkable diversity in all its spheres and food is no exception. You can fill your stomach by spending INR 20 on two spicy, delicious vada pavs or a plate of steaming, hot idlis; or you can savour an excellent Japanese meal at Wasabi, Taj for INR 6000. Mumbai boasts of restaurants serving a large range of international cuisines - more than any other city in India. It also has a good balance of the north Indian and south Indian cuisines. It has happening pubs like Hard Rock Café (Worli / Andheri), The Little Door (Andheri) and Social (multiple locations) for those who like to party, and cheap places like Gokul (Colaba), Janta (Bandra) and Laxmi (Powai) for those who want to grab (more than) a few drinks with their friends.

      From street food in gallis to food trucks & canteens, easily accessible food has always been Mumbai's promise. The financial capital of India, Mumbai also has some of the best cafes. Keep your search for hidden gems going in the city that is the Queen of Food.`,
      restaurant: [
        {
          restaurantName: "Indigo Delicasteen",
          location: "4, Mandlik Road, Colaba, Mumbai, India  ",
          time: "12 Noon to 3:30 PM, 6 PM to 1:30 AM",
          price: "INR 200-250",
          type: "European, Continental",
          pic: "https://www.holidify.com/images/cmsuploads/compressed/Paella_de_marisco_01_20200624211830.jpg",
        },
        {
          restaurantName: "Kailash parbat",
          location: " 7A, Crystal Plaza, New Link Road, Andheri Lokhandwala, Andheri West, Mumbai, India  ",
          time: " 10 AM to 11:30 PM",
          price: " INR 600 For Two",
          type: " Snacks, North-Indian, Chinese",
          pic: "https://vegacitymall.com/wp-content/uploads/2021/04/Kailash-2-1024x640.jpg",
        },
        {
          restaurantName: "Cafe churchill",
          location: "  East West Court Building, Opposite Cusrow Baug,Colaba, Mumbai, India  ",
          time: "11 AM to 11:30 PM",
          price: "INR 300",
          type: "Cafe",
          pic: "https://www.holidify.com/images/cmsuploads/compressed/Macaroons_in_Korea_20200624211904.jpg",
        },
      ],
    },
    {
      cityname: "darjeeling",
      aboutCityFood: `There are lots of options for foodies as well in Darjeeling ? from traditional Tibetan and Sikkimese cuisine to Thai delicacies to good old North Indian dishes, Darjeeling has plenty of options to cater to the taste buds of food lovers, spoiling them with scrumptious food and lip-smacking delicacies amidst the ambience of gorgeous views. Essentially the food here has distinct traces of Bengali, Nepali and Tibetan elements, styles and dishes, all together.

      In spite of such wide choices, one of the first items on the cuisine here includes the finest and freshest qualities of tea found in the area which you must try. The popular items that you must indulge in include Momos, Thukpa, Aloo Dum, Sael Roti, Naga Platter, Nepali thali, Tongba, Channg and many more. Not to mention, tea is a popular beverage consumed by all.`,
      restaurant: [
        {
          restaurantName: "Keventers",
          location: "Clubside, Nehru road, Darjeeling  ",
          time: "8AM-6:30PM",
          price: "INR 200-250",
          type: "Continental",
          pic: "https://1001things.org/wp-content/uploads/2019/04/keventers-3-1200x900.jpg",
        },
        {
          restaurantName: "Mamta pizza ",
          location: "HD Lama Road, Darjeeling Municipality, Darjeeling  ",
          time: "9 AM to 7 PM",
          price: "INR 100",
          type: " Fast Food",
          pic: "https://www.moulinex-me.com/medias/?context=bWFzdGVyfHJvb3R8MTQzNTExfGltYWdlL2pwZWd8aGNlL2hmZC8xNTk2ODYyNTc4NjkxMC5qcGd8MmYwYzQ4YTg0MTgzNmVjYTZkMWZkZWZmMDdlMWFlMjRhOGIxMTQ2MTZkNDk4ZDU3ZjlkNDk2MzMzNDA5OWY3OA=",
        },
        {
          restaurantName: "Shangri-La",
          location: " Nehru Road, Chauk Bazaar, Darjeeling  ",
          time: "9:30AM - 9:30PM",
          price: "INR 600",
          type: "Tibetan, North Indian, Chinese",
          pic: "https://static.toiimg.com/photo/47722168.cms",
        },
      ],
    },
    {
      cityname: "gangtok",
      aboutCityFood: `Gangtok is home to almost everything that the cuisine of this area has to offer in its most rich, splendid, authentic form with a flattering variety of options. What is impossible to miss in Gangtok includes Momos, Thukpa, Wonton, Gyathuk, Thenthuk and more, along with a Sikkim style meat patty called Shah-Phaley.
      Along with this you get to choose from a huge variety of authentic soups almost unique to the area. Chang is a locally made alcoholic beverage and is a must try while here. Authentic Tibetan and Indo-Chinese cuisines are also available in the restaurants and must also be tried.`,
      restaurant: [
        {
          restaurantName: "OSM",
          location: "Second Floor, Norbula Complex, MG Marg, Vishal Gaon, Gangtok",
          time: "12:30 PM to 10:30 PM",
          price: "INR 200-250",
          type: "North Indian, Continental, Chinese",
          pic: "https://media-cdn.tripadvisor.com/media/photo-s/12/25/15/d6/tandoori-delicacies.jpg",
        },
        {
          restaurantName: "Nimtho ",
          location: "New Market, M.G Marg  ",
          time: "11:30 AM to 12 Midnight",
          price: "INR 400",
          type: " Tibetan, Nepalese",
          pic: "https://www.holidify.com/images/cmsuploads/compressed/Sate_Ponorogo_20200624211323.jpg",
        },
        {
          restaurantName: "Baker's Cafe",
          location: "MG Road, Gangtok, Sikkim  ",
          time: "9:30AM - 9:30PM",
          price: "INR 50-100",
          type: " Bakery, Cafe",
          pic: "https://www.holidify.com/images/cmsuploads/compressed/coffee-sausage-food-morning_20200624123132.jpg",
        },
      ],
    },
    {
      cityname: "mountabu",
      aboutCityFood: `This popular and simple hill station has a cuisine of the same nature. Being a popular Jain pilgrim site, there are a large number of pure-veg restaurants, and you should expect little in the way of non-vegetarian food. There are a number of restaurants serving everything from local Rajasthani food to Punjabi and Chinese cuisines. You would find most of these restaurants clustered around the city center. We would recommend you go with the local food flavors and skip the chinese/punjabi options, if possible.`,
      restaurant: [
        {
          restaurantName: "Arbuda",
          location: " Arbuda Circle, Mount Abu, India   ",
          time: "7 AM - 10.30 PM",
          price: "INR 200-250",
          type: "Multi-cuisine",
          pic: "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content6079.jpg",
        },
        {
          restaurantName: "King's Food ",
          location: "Near Nakki Lake, Mount Abu, India   ",
          time: "8 AM - 10 PM",
          price: "INR 200",
          type: " Multi-cuisine",
          pic: "https://www.holidify.com/images/cmsuploads/compressed/breakfast-poached-eggs-bacon-tomato_20200624141342.jpg",
        },
        {
          restaurantName: "Chacha Cafe",
          location: " Polo Ground Road, Mount Abu, India  ",
          time: "12:00 am to 11:59 pm",
          price: "INR 300",
          type: "Multi-cuisine",
          pic: "https://images.squarespace-cdn.com/content/v1/5d7ba62fcfb49e055d1def2e/1569345089805-EWMYG5836JJ5EPQT84MX/IMG_2437.jpg?format=2500w",
        },
      ],
    },
    {
      cityname: "jaipur",
      aboutCityFood: `Jaipur is undoubtedly one of the most popular destinations for foodies. The local preparations are influenced by the Maharajas and Maharanis each element in a traditional Rajasthani thali has a story of its own.

      A trip to Jaipur is thereby incomplete without digging into grand dishes like the Dal Bati Churma, desserts like Imarti and Ghevar and of course the famous chaat. Jaipuri cuisine itself symbolizes the beauty, dignity, and richness of Rajasthan. Some of the dishes that you can't miss in Jaipur include Dal Bati Churma, Missi Roti, Bajre ki Roti, Mirchi Bada, Gatte ki Sabji and Kadhi. The desserts here are very popular and it is almost imperative that you let your taste buds experience these unique dishes. These include Ghevar, Imarti, Halwa, Choorma, Gajak, Moong Thal and more.
      
      Though Jaipur has a number of options for fine dining, one must not miss the street food available. Lanes of Johri Bazaar would be best for the exquisite and local street food ornamenting the cuisine here with an old-world charm that it carries. Or just visit Masala Chowk to get the best of local street food together at one place.`,
      restaurant: [
        {
          restaurantName: "Four Seasons",
          location: " D- 43, A2, Subhash Marg, C Scheme, Jaipur, India  ",
          time: "11 AM to 10:45 PM",
          price: "INR 600-1250",
          type: "North-Indian, Chinese, South-Indian, Continental",
          pic: "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content6079.jpg",
        },
        {
          restaurantName: "Bake Hut ",
          location: " Arvind Marg, MI Road, Jaipur, India  ",
          time: "9 AM to 10:30 PM",
          price: "INR 100",
          type: " Bakery, Cafe",
          pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHodHJnLN7TXGdrEF1yQ3Bt-zuq6P2LN1wig&usqp=CAU",
        },
        {
          restaurantName: "Copper Chimney",
          location: " Maya Mansion, Opposite GPO, MI Road, Jaipur, India ",
          time: "12:30 PM to 3:30 PM, 6:30 PM to 11 PM",
          price: "INR 1000",
          type: "North-Indian, Chinese, Continental, Mughlai",
          pic: "https://www.holidify.com/images/cmsuploads/compressed/wpf_restaurant_85.jpg",
        },
      ],
    },
    {
      cityname: "chennai",
      aboutCityFood: `Chennai?s local cuisine consists of traditional South Indian food such as sambar, dosas and idlis. Ranging from street side stalls to upscale restaurants, you can enjoy a complete gourmet experience in Chennai.

      Chennai like any sparkling city that is constantly growing and expanding in all its spheres, fosters a cuisine that provides countless options. The city has a vibrant street food culture as well as well laid out and flattering fine dining experiences. While you can try a number of cuisines and foods here, one must not miss what Chennai is known for- traditional and authentic South-Indian cuisine. Hence do not miss the filter coffee as well as items like Idli, Dosa, Appam, Vada, Upma, Sambhar, Parotha, Chettinad Chicken, Pepper Chicken, Chicken Stew, Sweet Pongal, Kesari, Payasam and much more. Read more about Street Food in Chennai.`,
      restaurant: [
        {
          restaurantName: "Murugan Idli Shop",
          location: "No. 46/13, North Usman Road, T. Nagar, Postal Colony, Tamil Nadu 600017    ",
          time: "10AM - 10PM",
          price: "INR 200-250",
          type: " South-Indian",
          pic: "https://www.holidify.com/images/cmsuploads/compressed/flickr_restaurant_125.jpg",
        },
        {
          restaurantName: "Junior Kupanna",
          location: " W122, W Block, 3rd Avenue, Anna Nagar East, Chennai  ",
          time: "12 Noon to 4 PM, 7 PM to 11 PM",
          price: "INR 500",
          type: "South Indian,Fast Food, North Indian",
          pic: "https://www.holidify.com/images/cmsuploads/compressed/flickr_restaurant_120.jpg",
        },
        {
          restaurantName: "Nair Mess",
          location: " 22, Mohammed Abdullah, 2nd Street, Opposite Chepauk Stadium, Chennai  ",
          time: "11 AM to 12 PM,",
          price: "INR 400",
          type: "South Indian, Biryani",
          pic: "https://www.holidify.com/images/cmsuploads/compressed/food-salad-breakfast-dinner_20200624122234.jpg",
        },
      ],
    },
    {
      cityname: "udaipur",
      aboutCityFood: `Udaipur is where much of Rajasthan's grandeur resides, traces of which can be seen in the rich cuisine available here. A visit to Udaipur will not be complete without you indulging in its grand cuisine. One simply cannot miss out on the authentic deliciousness of Dal Baat Churma and Gatte ki Sabji served at Hotel Natraj. They've mastered the art of making only the best of Rajasthani food. Shiv Shakti Chaat is quite famous for the different types of Kachori Chaat that they offer which, happens to be one of the specialities of this city. Neelam Restaurant offers a Rajasthani Thali which is full of sweet, tangy and spicy, home-made flavours and is definitely a must-have! Udaipur also tends to your sweet-tooth with its traditional, orange Jalebis which are made in pure, desi ghee at Bhole Misthan. We assure you, you will not be able to stop at just one!
      So,  enrich your stay further by pampering your taste buds with the mouthwatering cuisine of this vibrant city.`,
      restaurant: [
        {
          restaurantName: "Mayur Rooftop cafe",
          location: "155, opp.Jagdish Temple, Jagdish Chowk, Udaipur313001, India   ",
          time: "10AM - 10PM",
          price: "INR 200-250",
          type: " Indian",
          pic: "https://housing.com/news/wp-content/uploads/2023/08/Best-rooftop-restaurants-in-Pune-f.jpg",
        },
        {
          restaurantName: "Chandani ",
          location: "Udaivilas Hotel, Civil Lines, Hari Dasji Ki Magri, Udaipur, Rajasthan - 313001, India   ",
          time: "9:30AM - 9:30PM",
          price: " INR 800-1950 For Two",
          type: " Indian",
          pic: "https://content3.jdmagicbox.com/comp/udaipur-rajasthan/s1/9999px294.x294.110514151657.e1s1/catalogue/chandni-the-oberoi-udaivilas--udaipur-ho-udaipur-rajasthan-continental-restaurants-yk46d.jpg?clr=",
        },
        {
          restaurantName: "Ambrai",
          location: "Amet Haveli, Outside Chandpole, Naga Nagri, Pichola, Udaipur  ",
          time: "7:30am - 11:30am,",
          price: "INR 1700",
          type: "North Indian, Mughlai, Continental",
          pic: "https://static.wixstatic.com/media/794597_1759f3fd506a4c5ba19fb45553fd1aa6~mv2.jpg/v1/fit/w_2500,h_1330,al_c/794597_1759f3fd506a4c5ba19fb45553fd1aa6~mv2.jpg",
        },
      ],
    },
    {
      cityname: "manali",
      aboutCityFood: `Manali is a hill station glittering with amazing restaurants, cafes and bars, that an take care of any need, desires or cravings that its visitors may have. You will find countless restaurants with a rich variety and some of the most delicious food on their menus. You can find Italian, Chinese, Korean, Continental, Indian, Japanese, Thai, Vietnamese cuisines here along with the popular Tibetan Momos
      The cafes with a parallel culture of their own, cater to younger crowds. These cafes serve pizzas, momos, banana pancakes and apple pies throughout the day and you can also try Yak's cheese here. Along with these do relish the street food there with Samosas, Aloo tikki, Bread Pakoras, Paav Bhaji, Gulab Jamun and more filling the streets with colors and fragrances. Other than these, the city has an equally rich platter of local Himachal food.`,
      restaurant: [
        {
          restaurantName: "Manali Sweets",
          location: "  Siali Mahadev market, Manali    ",
          time: "10AM - 10PM",
          price: "INR 200-250",
          type: "Desserts, Snacks",
          pic: "https://lh3.googleusercontent.com/p/AF1QipMqoyh9wIPvoCXXFakSdw8mWwRHQdlmnTRAOB_J=w1080-h608-p-no-v0",
        },
        {
          restaurantName: "World Peace Cafe",
          location: "Manali Sub-District, India   ",
          time: "9:30AM - 9:30PM",
          price: "INR 200-300 For Two",
          type: " Indian, Continental, Chinese",
          pic: "https://assets.traveltriangle.com/blog/wp-content/uploads/2017/09/apple-bud-rooftopf1.jpg",
        },
        {
          restaurantName: "Cafe 1947",
          location: "  BPO Bahang, Leh- Manali Highway, Nehru Kund, Tibetan Colony, Manali  ",
          time: " 12 Noon to 11 PM ",
          price: "INR 300",
          type: "Cafe",
          pic: "https://static2.tripoto.com/media/filter/tst/img/703259/TripDocument/1532530745_1532530743504.jpg",
        },
      ],
    },
    {
      cityname: "goa",
      aboutCityFood: `Goa is home to everything refreshing, zesty, exotic and colourful. And this includes Goan food. The food here is a blend of Konkani, Hindu, Portuguese and Catholic cuisines, providing wide and vibrant choices. Seafood, coconut milk, rice and local spices are the main elements of Goan cuisine and fish, curry and rice form the staple food. Goan food with its unique combination of coconut, rice, and spices form a rich Portuguese as well as South Indian cuisine. 

      Traditional Goan dishes are xacuti (spicy chicken or meat cooked in red sauce), vindaloo (spicy dish marinated with vinegar and garlic), cafreal (fried chicken cooked in green masala and toddy vinegar), and bebinca (Goan dessert layered with coconut). Also, do try the Goan alcohol - feni made with cashew or palm toddy.`,
      restaurant: [
        {
          restaurantName: "Zeebob by the sea",
          location: " Opposite Kenilworth Beach Resort, Utorda Beach, Majorda, Goa, India ",
          time: "11 AM to 4 PM, 6 PM to 11 PM",
          price: "INR 500",
          type: "Seafood, Goan, North-Indian",
          pic: "https://media-cdn.tripadvisor.com/media/photo-s/03/dd/fd/c0/shower.jpg",
        },
        {
          restaurantName: "A Reverie",
          location: "Holiday Street, Gaura Waddo, Calangute, Goa, India   ",
          time: "9:30AM - 9:30PM",
          price: "INR 500",
          type: " Continental",
          pic: "https://b.zmtcdn.com/data/pictures/9/16519269/179ebbbf98a728209909960f303c7bbf.jpg",
        },
        {
          restaurantName: "Souza lobo bar and restaurent",
          location: "Calangute Beach, Calangute, Goa, India  ",
          time: "9:30AM - 9:30PM",
          price: "INR 300",
          type: "North-Indian, Continental, Goan",
          pic: "https://media-cdn.tripadvisor.com/media/photo-s/1c/8e/53/13/pomfret-hariyali.jpg",
        },
      ],
    },
    {
      cityname: "lehladakh",
      aboutCityFood: `Leh is a multicuisine city serving Indian, Tibetan, Chinese and even Korean. The cuisine here exhibits tints of these foreign influences. Visitors must try out the local dishes which almost define the cuisine here such as Thukpa (noodle soup) Tsampa, known in Ladakhi as Ngamphe (roasted barley flour), and Skyu which is a heavy pasta dish with plenty of veggies as well as the very popular and delicious Momos which are steamed dumplings stuffed with vegetables or meat.`,
      restaurant: [
        {
          restaurantName: "Sheldon Garden Restaurent",
          location: " Changspa Lane, Ladakh, India  ",
          time: "10AM - 10PM",
          price: "INR 80-250",
          type: " Multi-cuisine",
          pic: "https://content.jdmagicbox.com/comp/leh-ladakh/m6/9999p1985.1985.130416105513.z3m6/catalogue/sheldon-garden-restaurant-leh-ho-leh-ladakh-restaurants-1h3qhpg.jpg",
        },
        {
          restaurantName: "Old Town Cafe ",
          location: "Lonpo House, Palace Area, Leh    ",
          time: "9:30AM - 9:30PM",
          price: "INR 40-100",
          type: " Tibetan",
          pic: "https://unwindoutdoor.com/wp-content/uploads/2020/06/grand-dragon-2-2-711x400.jpg",
        },
        {
          restaurantName: "Local Food Restaurent",
          location: "Women's Alliance of Ladakh, Leh, India  ",
          time: "9:30AM - 9:30PM",
          price: "INR 30-400",
          type: "Tibetan",
          pic: "https://www.statesman.com/gcdn/presto/2022/07/05/NAAS/ef79f1a3-4274-46f5-bc66-087aee399f16-FM7CInNQ.jpeg",
        },
      ],
    },
    {
      cityname: "srinagar",
      aboutCityFood: `The Kashmiri cuisine prevalent in Srinagar is a smorgasbord of dishes that are rich, unique and significant enough to create a food culture around themselves. The traditional Kashmiri wazwan is a feast often prepared on the festivals and for welcoming the guests and can have dozens of courses.

      Kashmiri food is mild in taste and rich in flavour with the high use of hot spices like cardamom, fennel, ginger, cinnamon, cloves and saffron. Influenced by Mughals, Kashmiri cuisine is predominantly non-vegetarian, with mutton, chicken or fish used as prime ingredients, though the vegetarian dishes are equally palatable.
      
      The local cuisine include tabak maz, or flat pieces of meat cut from the ribs and fried till they acquire a crisp crackling texture, Gushtaba, which are meatballs moulded from pounded mutton like large-sized Rista (meat balls) but cooked in thick gravy of fresh curd base, Yakhni, a cream colored preparation of delicate flavor, is made with curd as a base, seekh kababs, Roganjosh, chaman- fried paneer (cottage cheese), in a thick sauce, dum-aloo - roasted potatoes in curd-based gravy.
      
      The Kashmiri Kahwa is a speciality of the region. It is a golden-tea flavoured with cinnamon, saffron and crushed almonds served piping hot to beat the chilling cold.`,
      restaurant: [
        {
          restaurantName: "Mughal Darbar",
          location: " Main Residency Road, Srinagar, Lal Chowk, Srinagar ",
          time: "10AM - 10PM",
          price: "INR 80-250",
          type: " Bakery",
          pic: "https://www.holidify.com/images/cmsuploads/compressed/donuts-bakery-dessert-icing_20200624143459.jpg",
        },
        {
          restaurantName: "New Krishna Vaishno Bhojnalaya",
          location: "Durganag Rd  ",
          time: "9:30AM - 9:30PM",
          price: "INR 40-100",
          type: " Indian",
          pic: "https://b.zmtcdn.com/data/pictures/chains/9/18716339/ad3926de422053744a825b57c1cd9b56.jpg?fit=around|960:500&crop=960:500;*,*",
        },
        {
          restaurantName: "14th Avenue Cafe and Grill",
          location: " Lal Mandi, Rajbagh, Near Foot Bridge, Srinagar, Srinagar ",
          time: "9:30AM - 9:30PM",
          price: "INR 30-400",
          type: " Cafe, Bakery",
          pic: "https://www.holidify.com/images/cmsuploads/compressed/wpf_restaurant_179.jpg",
        },
      ],
    },
    {
      cityname: "varanasi",
      aboutCityFood: `Varanasi has a distinct tint to its cuisine with a certain influence of dishes and styles of Bihar added to its platter. The popular delicacies of the area are Dum Aloo, Bati Chokha, Aloo-Tikki, Pani Puri, Kachori, Tamatar chaat as well as sweets such as Jalebis, Rabri and Banarasi Kalakand. Another essential relish of the town is its Paan, a delicacy of betel leaf. Other than these, do try out the Butter Toast with hot milk, typically almond flavoured. Also, try out the local drinks like Lassi and Badam Sharbat. Varanasi is also famous for its Thandai, which is a milk based drink with Bhang added in it, which is a form of cannabis legal in India. Apart from the traditional and local flavors here, one will find numerous options for Continental and typical Indian food. When in Varanasi, you can explore the variety of food from the delicious street food to the numerous cafes at Assi. The city really has it all!`,
      restaurant: [
        {
          restaurantName: "Canton Royale",
          location: " S.20/51 A-5 The Mall Road ",
          time: "10AM - 10PM",
          price: "INR 80-250",
          type: "North Indian, Continental, Mediterranean",
          pic: "https://b.zmtcdn.com/data/pictures/3/3900023/b76b5daa1f116957169e7806342dfe7a.jpg",
        },
        {
          restaurantName: "Open Hand",
          location: "B1/128-3, Dumraun Bagh Colony, Assi Ghat, Varanasi ",
          time: "8 AM to 10 PM (Mon-Sun)",
          price: "INR 450",
          type: " cafe",
          pic: "https://content3.jdmagicbox.com/comp/varanasi/dc/0542px542.x542.1235043455l4i4p6.dc/catalogue/open-hands-assi-varanasi-moderate-restaurants-rs-500-to-rs-1000-4i4avlx.jpg?clr=",
        },
        {
          restaurantName: "Eden Restaurent",
          location: " Hotel Pradeep, Kabir Chaura Road, Lahurabir, Jaitpura, Varanasi, India ",
          time: "9:30AM - 9:30PM",
          price: "INR 400",
          type: "North-Indian, Chinese, Continental",
          pic: "https://www.holidify.com/images/cmsuploads/compressed/pxhere_restaurant_163.jpg",
        },
      ],
    },
    {
      cityname: "rishikesh",
      aboutCityFood: `Non vegetarian food and alocohol are strictly prohibited in Rishikesh. You would mostly find North Indian cuisine here. However, South Indian, Italian, Nepali, Thai and Chinese cuisine are also available at some of the places. The city fosters a parallel vibrant culture that revolves around authentic Continental cuisine and some cafes.

      Another standout in Rishikesh is the Ayurvedic food. Many outlets offer a variety of food items and teas as well as a complete ambience with elements of Yoga and Ayurveda. Other than these, the street food of Rishikesh comprises lip-smacking treasure such as Jalebi, Imarti, Samosas, Popcorn as well as fresh and seasonal local fruits. Also, order a 'Thali' for enjoying the best of what the city offers, all in one place.
      
      Cafes in Rishikesh
      The best part about Rishikesh is that the cafes that it is home to reflect the very culture that it stands for. Overlooking the beautiful temples and the river Ganga, there are some cafes in Rishikesh which prove to be true to the culture of this place, with some sadhus also thronging these places and telling their stories. The food served in these cafes is mostly vegetarian. A number of them have become extremely popular like
      The 'Devraj Coffee Corner', also known as 'The German Bakery' (known for it being situated near the Lakshmana Jhula, overlooking the beautiful river Ganga, and beautiful decor)
      Oasis Cafe (situated near 'The German Bakery', this place offers a luxurious eating experience)
      Ramana's Organic Cafe (the name and the view of Ganga, along with the warmth offered by this place, is a great crowd puller)
      The 'Little Buddha Cafe' (a beautiful treehouse-style cafe, it happens to be one of the most popular cafes near the Lakshmana Jhula, because of its view and amazing flavors)
      Cafe Karma (if the name does not interest you, probably the relaxing atmosphere will).`,
      restaurant: [
        {
          restaurantName: "Prem's Namaste Cafe",
          location: " Laxman Jhula Road Rishikesh 249201 India  ",
          time: "10AM - 10PM",
          price: " INR 250- 300 For Two",
          type: " Cafe",
          pic: "https://www.holidify.com/images/cmsuploads/compressed/chocolate-cake-chocolate-cake-sweet-delicious-coffee-party-dessert-ornament-sweet-dish_20200624143058.jpg",
        },
        {
          restaurantName: "Chotiwala ",
          location: "Swargashram, Swargashram, Swarg Ashram, Rishikesh ",
          time: "9:30AM - 9:30PM",
          price: " INR 200-250 For Two",
          type: " Indian, Desserts",
          pic: "https://www.nehascookbook.com/wp-content/uploads/2022/09/Gujarati-thali-WS-1-500x500.jpg",
        },
        {
          restaurantName: "Madras cafe",
          location: "Near Ramjhula Parking, Muni Ki Reti, Narendra Nagar, Tapovan, Rishikesh    ",
          time: "9:30AM - 9:30PM",
          price: "INR 500",
          type: " Continental, North Indian",
          pic: "https://img.restaurantguru.com/cdd6-Madras-Cafe-Rishikesh-food.jpg",
        },
      ],
    },
    {
      cityname: "shimla",
      aboutCityFood: `With tourism at the heart of this hill-station, Shimla is no less than brimming with option for food. There are a number of eateries here from Dhabas, Bakeries, Local eating joints, Restaurants as well as fine dining restaurants. Shimla has a range of restaurants which serve different cuisines like North Indian, South Indian, Chinese, Continental etc. Surprisingly one may not find a lot of places in Shimla which serve the local Pahari food, since the cuisine has somewhat shifted to meet he needs of the town's countless visitors.`,
      restaurant: [
        {
          restaurantName: "Ashiana",
          location: " Ridge, The Mall, Longwood  ",
          time: "10AM - 10PM",
          price: "INR 2000",
          type: " Continental",
          pic: "https://media-cdn.tripadvisor.com/media/photo-s/1a/c6/fd/2a/photo3jpg.jpg",
        },
        {
          restaurantName: "Cafe Sol ",
          location: "The Mall, Next to the Tourist Lift, Next to the Tourist Lift, Shimla  ",
          time: "9:30AM - 9:30PM",
          price: " INR 250- 300 For Two",
          type: " Italian, Mexican, Mediterranean",
          pic: "https://b.zmtcdn.com/data/pictures/6/18703946/b61f5123af12a3ef24e922909bf8a193.jpg",
        },
        {
          restaurantName: "Wake and bake",
          location: "34/2, The Mall Shimla, Teh. & Amp Distt, Summer Hill, Shimla   ",
          time: "9:30 AM to 10 PM",
          price: "INR 300",
          type: "Cafe",
          pic: "https://www.holidify.com/images/cmsuploads/compressed/coffee-latte-cup-drink-espresso-cafe_20200624143318.jpg",
        },
      ],
    },
    {
      cityname: "bangalore",
      aboutCityFood: `Like any modern and growing city, Bangalore's cuisine is not identified with a single platter but a blend of cuisines derived from the diversity of cultures and livelihoods that the city sustains.


      There is a subtle dominance of South-Indian and Udupi cuisine, other than which the city's menu has countless options. One can relish local cuisines like a variety of dosas, Idli, Bisi Bele Bath, Pongal, Uppittu and lots more. Other than this, one can also indulge in the rich Mughlai cuisine with mouth-watering dishes like Tandoori chicken, Sheek Kebabs, Bangalorean Biryani, Chicken Kebabs and more. Also, find here, North-Indian, Muslim, Arabian, Chinese, Thai, Burmese, Lebanese, Vietnamese and Japanese cuisines to enjoy.
      One can indulge in the lip-smacking local street food as well as flatter themselves with fine dining experiences with cuisines from around the world.
      
      Rich in a variety of cuisines, Bangalore also offers pocket-friendly restaurants which are of great help to the backpackers. Here is a list of few restaurants which without emptying your pockets offer delicious food at minimal prices possible.
      Famous budget restaurants in Bangalore:
      
      South Indian: Darshini (serves delicious vegetarian food within INR 100), TaazaThindi (INR 200 for 2), Shri Sagar(INR 100 for 2) and Indian Coffee House (INR 200 for 2)
      
      Continental: Papi Chulo (INR 200 for 2), My Cinnamon Box (INR 250 for 2), Chaiywaala (INR 150 for 2), Fork and Food (INR 200 for 2), and The Breakfast (INR 200 for 2)
      
      Do try these low budget restaurants while keeping in mind your health and hygiene. Guide the person in services about the spices and things you are allergic to so that you can have a happy meal.`,
      restaurant: [
        {
          restaurantName: "Sue's Food Place",
          location: " 4, Subadar Garden, Sri Krishna Temple Road, Bangalore, India",
          time: " 12 Noon to 10pm",
          price: "INR 2000",
          type: " American",
          pic: "https://www.holidify.com/images/cmsuploads/compressed/RedDot_Burger_20200624210958.jpg",
        },
        {
          restaurantName: "Ullas Refreshment",
          location: "1st Floor, Public Utility Building, MG Road,Bangalore, India-560001  ",
          time: "9:30AM - 9:30PM",
          price: " INR 500",
          type: "  South-Indian, Chinese",
          pic: "https://images.happycow.net/venues/1024/95/51/hcmp95514_1087159.jpeg",
        },
        {
          restaurantName: "Mavalli Tifin Rooms",
          location: "#14, Lalbagh Main Road, Sudhama Nagar Bengaluru, Karnataka 560027  ",
          time: "6:30 AM to 11PM",
          price: "INR 300",
          type: "South-Indian",
          pic: "https://www.holidify.com/images/cmsuploads/compressed/800px-Dosa_and_ghee_20200811172355.jpg",
        },
      ],
    },
    {
      cityname: "agra",
      aboutCityFood: `Whether you love the spicy chaats or you have a sweet tooth, Agra never ceases to fascinate. Petha, a soft candy made from ash gourd is almost synonymous with Agra's cuisine and is a speciality which you just cannot miss. There are various new flavours and innovative presentations of this ever popular sweet dish from Agra. Panchi petha is the most popular shop in Agra, and there are so many of these that you won't even have to think where to get it from.

      Another equally delicious item is the Chaat here. Agra has varieties of Chaat available including Aloo Tikki, Pani Puri, Papri Chaat, Samosa, Kachori etc all over the city. Another popular snack here is Dalmoth, which is a spicy lentil mix. The cuisine of the town also offers countless North-Indian and Punjabi relishes with a distinct influence of Mughlai cuisine.`,
      restaurant: [
        {
          restaurantName: "Esphan",
          location: " The Oberoi Amarvilas, Taj East Gate Road, Tajganj, Agra  ",
          time: "6:30 PM to 9 PM, 9 PM to 10:45 PM",
          price: "INR 200",
          type: " North-Indian",
          pic: "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-amarvilas-agra/dining/detail/esphahan.jpg?w=724&hash=7a01e6a41d6eb3c544a5a590ebc0e51b",
        },
        {
          restaurantName: "Brijwasi",
          location: "D 2, Shopping Arcade, Sadar Bazaar, Agra Cantt, Agra, India   ",
          time: "9:30AM - 10:30PM",
          price: " INR 250- 300 For Two",
          type: "  Desserts, North-Indian, South-Indian",
          pic: "https://img.veenaworld.com/wp-content/uploads/2022/07/Indian-Sweets.jpg",
        },
        {
          restaurantName: "Bellevue",
          location: "The Oberoi Amarvilas, Taj East Gate Road, Fatehabad Road, Tajganj, Agra, India   ",
          time: "9:30 AM to 10 PM",
          price: "INR 300",
          type: " North-Indian, Chinese, Continental",
          pic: "https://www.journeyera.com/wp-content/uploads/2020/05/best-hotels-in-agra-near-taj-mahal-with-view-47406152.jpg",
        },
      ],
    },
    {
      cityname: "amritsar",
      aboutCityFood: `Amritsar houses some of the finest, richest and most finger-licious food in the country. The food here is as popular and essential as any of the other tourist spots in the area. Amritsari Kulcha, Lassi, Amritsari Fish, Chicken Tikka, Tandoori Chicken and a hot Gulab Jamun are some of Amritsar's delectable choices. You might also find spicier versions of food from other areas garnished with a generous helping of Ghee . At the same time, the city which is known for its food, provides countless options and variety for authentic cuisines.
      The city is home to the finest restaurants as well as the most colorful Dhabas that will keep you coming back. Other local Punjabi cuisine includes Channa Batura, Chhole Batura, Parathe, Dal Makhani, Rajama Chawal, various varieties of Paneer, Rajma, Sarson Da Saag with Makai ki Roti (Bread made from corn with mustard gravy) and much more. For non-vegetarians, Punjabi cuisine is a delight with various varieties of chicken.`,
      restaurant: [
        {
          restaurantName: "Bharavan Da Dhaba",
          location: "  Near Amritsar Municipal Corporation, Town Hall, Amritsar   ",
          time: "10AM - 10PM",
          price: "INR 200",
          type: "North Indian, South Indian, Fast Food, ",
          pic: "https://media-cdn.tripadvisor.com/media/photo-s/1c/45/0c/cf/img-20201102-152559-largejpg.jpg",
        },
        {
          restaurantName: "Gurdas Ram ",
          location: "Katra Ahluwalia, Near Golden Temple, Town Hall, Amritsar ",
          time: "9:30AM - 9:30PM",
          price: " INR 250",
          type: " Mithai",
          pic: "https://www.holidify.com/images/cmsuploads/compressed/Sweets_Mithai_in_Shops_for_Diwali_and_other_Festivals_of_India_20200624121057.jpg",
        },
        {
          restaurantName: "Kesar Da Dhaba",
          location: "Near Telephone Exchange,, NearTown Hall, Amritsar, India    ",
          time: "9:30 AM to 11 PM",
          price: "INR 300",
          type: "North-Indian",
          pic: "https://lh3.googleusercontent.com/t4GkDw36pHEq3DnFe1YkkFz7xS8uVhWcTEtjJcp1XLoZrdgCOKD-7vHV1GNS_CHGy36bqKI8hWBy5zRDH415TaJfwFeK=w1200-rw",
        },
      ],
    },
    {
      cityname: "andaman",
      aboutCityFood: `The cuisine Of Andaman is like the island itself-tropical, exotic and refreshing. The sea that is all around has a defining effect on the island's culture, livelihood and cuisine. There is little here, in which you will not find traces of the sea. The food here, hence, is dominated by seafood preparations and you don't want to miss the fish delicacies here. Other than seafood too, the staple diet is essentially non-vegetarian.
      However, as the island is becoming an increasingly popular tourist spot, the resorts and other eating places will give you options of Indian, Chinese and a few more cuisines.
      Also, the fruits here are popular and refreshing. You can find Mangoes, Bananas, Pineapples, Guava and more. One can also sip in the truly refreshing and tropical coconut water here.`,
      restaurant: [
        {
          restaurantName: "Bayview",
          location: "Hotel Sinclairs Bay View, Corbyns Cove Rd, South Point, Port Blair, South Andaman Island - 744106, India    ",
          time: "10AM - 10PM",
          price: "INR 200",
          type: " Continental",
          pic: "https://www.sinclairshotels.com/assets/images/portblair/terrace.jpg",
        },
        {
          restaurantName: "New Indian cafe",
          location: "MA Road, Port Blair - 744101, India   ",
          time: "9:30AM - 9:30PM",
          price: " INR 250",
          type: " Multi cuisine",
          pic: "https://www.holidify.com/images/cmsuploads/compressed/Se27i_Babi_3_20200624210928.JPG",
        },
        {
          restaurantName: "Excel Restaurent",
          location: " R P Road, Dignabad, Port Blair, South Andaman Island - 744101, India  ",
          time: "9:30 AM to 10 PM",
          price: "INR 300",
          type: "Multi-cuisine",
          pic: "https://www.andamanisland.in/assets/site1/theme3/images/best-restaurants-at-port-blair/6.jpg",
        },
      ],
    },
    
  ];

  useEffect(() => {
    FootData.map((item) => {
      if (item.cityname == cityname) {
        console.log(item.cityname, cityname);

        setCityFoodData(item.restaurant);
        setAboutFood(item.aboutCityFood);
      }
    });
  }, [cityname]);

  const capitalizedString =
    cityname.charAt(0).toUpperCase() + cityname.slice(1);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "60px",
        gap: "10px",
      }}
    >
      <h3
        style={{
          fontFamily: "nunito",
          fontSize: "24px",
          fontWeight: "700",
        }}
      >
        {`Food of ${capitalizedString}`}
      </h3>
      <p style={{ fontSize: "16px", fontFamily: "nunito", fontWeight: "500" }}>
        {aboutFood}
      </p>
      <h1
        style={{
          fontSize: "32px",
          fontFamily: "sans-serif",
          marginTop: "20px",
        }}
      >
        {`
       Here are the top 3 restaurants in ${capitalizedString} :
       `}
      </h1>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {cityFoodData.map((data, i) => (
          <Card
            key={i}
            style={{
              width: "21rem",
              textAlign: "",
              height: "426px",
            }}
          >
            <Card.Title style={{ padding: "2px 6px" }}>
              {i + 1}. {data.restaurantName}
            </Card.Title>
            <Card.Img
              variant="top"
              src={data.pic}
              style={{ width: "100%", height: "210px" }}
            />
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                // justifyContent: "",
                gap: "16px",
              }}
            >
              <Card.Text
                style={{
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "600",
                  gap: "8px",
                  color: "#696969",
                }}
              >
                {LocationSvg}
                {data.location}
              </Card.Text>
              <Card.Text
                style={{
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "600",
                  gap: "8px",
                  color: "#696969",
                }}
              >
                <img
                  style={{ height: "20px", width: "20px" }}
                  src={badge}
                  alt="clock"
                />
                {data.type}
              </Card.Text>
              <Card.Text
                style={{
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "600",
                  gap: "8px",
                  color: "#696969",
                }}
              >
                <img
                  style={{ height: "20px", width: "20px" }}
                  src={clock}
                  alt="clock"
                />
                {data.time}
              </Card.Text>

              <Card.Text
                style={{
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontWeight: "600",
                  color: "#696969",
                }}
              >
                <img
                  style={{ height: "20px", width: "20px" }}
                  src={wallet}
                  alt="clock"
                />
                {data.price}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Food;
