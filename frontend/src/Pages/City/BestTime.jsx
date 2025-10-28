import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

const BestTime = () => {
  const { cityname } = useParams();
  const [cityMonthlyData, setCityMonthlydata] = useState([]);
  const [aboutCity, setAboutCity] = useState();

  const MonthlyData = [
    {
      cityname: "nainital",
      aboutCity: `The best time to visit Nainital is May-June which is also the peak season. Nainital has a pleasant climate throughout the year, making it a year-round destination. The average temperature from April to July ranges around 23 degrees Celcius.

      July to September is the monsoon season in Nainital, with heavy rainfall. There are chances of landslides during this time. October to February is the winter season in  Nainital. The average temperature ranges around 15 degrees Celcius. To experience snow, visit Nainital in January.`,
      data: [
        { month: "January", degree: "11°/ 1°", rain: "3 days" },
        { month: "February", degree: "14°/ 3°", rain: "4 days" },
        { month: "March", degree: "18°/ 6°", rain: "9 days" },
        { month: "April", degree: "22°/ 11°", rain: "6 days" },
        { month: "May", degree: "28°/ 14°", rain: "2 days" },
        { month: "June", degree: "28°/ 16°°", rain: "9 days" },
        { month: "July", degree: "22°/ 16°", rain: "26 days" },
        { month: "August", degree: "22°/ 16°", rain: "29 days" },
        { month: "September", degree: "21°/ 14°", rain: "26 days" },
        { month: "October	", degree: "20°/ 10°", rain: "3 days" },
        { month: "November", degree: "19°/ 8°", rain: "1 days" },
        { month: "December", degree: "13°/ 2°", rain: "0 days" },
      ],
    },
    {
      cityname: "dalhousie",
      aboutCity: `The best time to visit Dalhousie is during the summer months from March to June. During this period, the weather is pleasantly cool, with temperatures ranging from 15 to 25 degrees Celsius, providing a perfect escape from the scorching heat prevalent in other parts of the country. The clear skies and blooming flora enhance the scenic beauty of this picturesque destination. Summer is also the ideal time for outdoor activities such as trekking, nature walks, and exploring the surrounding landscapes. While Dalhousie experiences snowfall in the winter, making it a magical winter wonderland, the summer months offer a more comfortable and versatile environment for travelers to fully enjoy the natural beauty and outdoor adventures that Dalhousie has to offer.`,
      data: [
        { month: "January", degree: "9°/ 0°", rain: "3 days" },
        { month: "February", degree: "12°/ 3°", rain: "3 days" },
        { month: "March", degree: "14°/ 4°", rain: "11 days" },
        { month: "April", degree: "18°/ 7°", rain: "10 days" },
        { month: "May", degree: "	24°/ 12°", rain: "5 days" },
        { month: "June", degree: "27°/ 15°°", rain: "3 days" },
        { month: "July", degree: "23°/ 16°", rain: "27 days" },
        { month: "August", degree: "22°/ 15°", rain: "28 days" },
        { month: "September", degree: "22°/ 14°", rain: "22 days" },
        { month: "October	", degree: "21°/ 11°", rain: "3 days" },
        { month: "November", degree: "16°/ 7°", rain: "12 days" },
        { month: "December", degree: "11°/ 2°", rain: "1 days" },
      ],
    },
    
    {
      cityname: "delhi",
      aboutCity: `While October to March is the best time to visit Delhi because of cool weather. However, some weeks in late November to January should be avoided because of heavy smog cover. February and March have great weather and relatively clean air to travel outside. Delhi experiences extreme temperatures in summer and winter seasons. The summer months (April to July) are scorching hot in Delhi as the temperature might rise to 45 degree Celsius. Temperatures fall a little during the monsoon season (August to September) and certain days can be good for roaming around.
      
      Weather in Delhi
      
      Today
      16 - 27°C
      
      Upcoming Delhi Weather
      
      Monday
      19 - 29°C
      
      
      Tuesday
      19 - 29°C
      
      
      Wednesday
      18 - 29°C.`,
    
data: [
        { month: "January", degree: "19°/ 9°", rain: "5 days" },
        { month: "February", degree: "24°/ 12°", rain: "2 days" },
        { month: "March", degree: "28°/ 16°", rain: "7 days" },
        { month: "April", degree: "35°/ 22°", rain: "2 days" },
        { month: "May", degree: "	40°/ 26°", rain: "1 days" },
        { month: "June", degree: "42°/ 29°°", rain: "1 days" },
        { month: "July", degree: "36°/ 27°", rain: "22 days" },
        { month: "August", degree: "34°/ 26°", rain: "21 days" },
        { month: "September", degree: "34°/ 25°", rain: "15 days" },
        { month: "October	", degree: "33°/ 21°", rain: "2 days" },
        { month: "November", degree: "29°/ 17°", rain: "3 days" },
        { month: "December", degree: "21°/ 9°", rain: "2 days" },
      ],
    },
    {
      cityname: "mumbai",
      aboutCity: `The best time to visit Mumbai is from October to February when the weather is pleasant and ideal for exploring and sightseeing. The temperature during this time ranges from 10 to 35 degrees Celcius. Mumbai receives copious rainfall during the monsoon from June to September. The temperature ranges from 20 to 30 degrees Celcius. Monsoon is the ideal time to visit Mumbai for taking a trek on the surrounding hills, because they look their greenest, with amazing waterfalls gushing down. Summer is not a good time to visit Mumbai because it is too hot and humid with temperatures between 25 to 38 degrees Celcius.`,
    
data: [
        { month: "January", degree: "29°/ 20°", rain: "0 days" },
        { month: "February", degree: "31°/ 2°", rain: "0 days" },
        { month: "March", degree: "31°/23 °", rain: "0 days" },
        { month: "April", degree: "33°/ 25°", rain: "0 days" },
        { month: "May", degree: "33°/ 26°", rain: "0 days" },
        { month: "June", degree: "32°/ 27°", rain: "17 days" },
        { month: "July", degree: "29°/ 26°", rain: "31 days" },
        { month: "August", degree: "29°/ 26°", rain: "26 days" },
        { month: "September", degree: "29°/ 25°", rain: "29 days" },
        { month: "October	", degree: "32°/ 25°", rain: "19 days" },
        { month: "November", degree: "32°/ 25°", rain: "2 days" },
        { month: "December", degree: "31°/ 23°", rain: "0 days" },
      ],
    },
    {
      cityname: "darjeeling",
      aboutCity: `The best time to visit Darjeeling is between April to June when the weather is pleasant. However, a lot of people also prefer visiting the place during the winter months from October to December. The months of July to August welcome the showers. With heavy rainfall, a lot of roadblocks are observed in the hill station and hence visiting Darjeeling during these months is not very advisable. 

      The months from October to March see a sudden change in the weather, as by the end of October a slight cold reigns in the area. Winter is at its peak from mid- November to January and the temperature ranges between 7 degrees to 5-degree Celcius. 
      
      April to June marks the offset of summers in the city. Darjeeling during these months is pleasant and not very hot. The temperature reaches 25 degrees at the max. The gushing bright sunlight makes it ideal for exploring the tourists' spots. 
      
      September again is an excellent time to visit as there is less rainfall and the greenery is at its best at this time of the year.`,
    
data: [
        { month: "January", degree: "13°/ 4°", rain: "11 days" },
        { month: "February", degree: "17°/ 7°", rain: "15 days" },
        { month: "March", degree: "19°/ 10°", rain: " days" },
        { month: "April", degree: "20°/ 12°", rain: "2 days" },
        { month: "May", degree: "22°/ 15°", rain: "1 days" },
        { month: "June", degree: "20°/ 14°", rain: " days" },
        { month: "July", degree: "23°/ 15°", rain: " days" },
        { month: "August", degree: "20°/ 14°", rain: " days" },
        { month: "September", degree: "20°/ 14°", rain: " days" },
        { month: "October	", degree: "19°/ 11°", rain: " days" },
        { month: "November", degree: "19°/ 9°", rain: " days" },
        { month: "December", degree: "14°/ 4°", rain: " days" },
      ],
    },
    {
      cityname: "gangtok",
      aboutCity: `The best time to visit Gangtok is during the months of late September to mid-December and from March to May. These autumn and spring-summer months experience a pleasant climate which is ideal for sightseeing. The period of late September to mid-December is when the days are sunny with unobstructed views of the Himalayas. Between March to May, the bloom of Rhododendron flowers is a sight worth its weight in gold. It is best to avoid a visit t Gangtok and the state of Sikkim during the monsoon months of July to early September since the heavy rainfall leads to landslides which may cause a lot of inconveniences.`,
    
data: [
        { month: "January", degree: "16°/ 6°", rain: "14 days" },
        { month: "February", degree: "17°/ 7°", rain: "15 days" },
        { month: "March", degree: "20°/ 10°", rain: "20 days" },
        { month: "April", degree: "22°/ 12°", rain: "23 days" },
        { month: "May", degree: "	24°/ 16°", rain: "29 days" },
        { month: "June", degree: "26°/ 19°", rain: "26 days" },
        { month: "July", degree: "23°/ 18°", rain: "31 days" },
        { month: "August", degree: "25°/ 18°", rain: "30 days" },
        { month: "September", degree: "24°/ 18°", rain: "16 days" },
        { month: "October	", degree: "23°/ 14°", rain: "8 days" },
        { month: "November", degree: "22°/ 12°", rain: "7 days" },
        { month: "December", degree: "17°/ 7°", rain: "12 days" },
      ],
    },
    {
      cityname: "mount abu",
      aboutCity: `Although Mount Abu is a year round destination, the best time to visit Mount Abu is between November to March, which is the winter season. Mount Abu has a pleasant climate throughout the year.`,
    
data: [
        { month: "January", degree: "19°/ 6°", rain: "0 days" },
        { month: "February", degree: "24°/ 10°", rain: "0 days" },
        { month: "March", degree: "27°/ 13°", rain: "1 days" },
        { month: "April", degree: "33°/ 19°", rain: "0 days" },
        { month: "May", degree: "	35°/ 20°", rain: "2 days" },
        { month: "June", degree: "34°/ 22°", rain: "12 days" },
        { month: "July", degree: "29°/ 20°", rain: "17 days" },
        { month: "August", degree: "25°/ 19°", rain: "24 days" },
        { month: "September", degree: "25°/ 19°", rain: "26 days" },
        { month: "October	", degree: "28°/ 17°", rain: "5 days" },
        { month: "November", degree: "25°/ 14°", rain: "2 days" },
        { month: "December", degree: "21°/ 9°", rain: "1 days" },
      ],
    },
    {
      cityname: "jaipur",
      aboutCity: `November to March is the best time to visit Jaipur and other parts of Rajasthan as the weather ranges between 8-degree Celcius during nights to 32-degree Celcius in the day. Summers are extremely hot, and sightseeing isn't a very joyful experience. Monsoons, on the other hand, are quite hot and humid which isn't an ideal time to visit too. January is an excellent time to visit Jaipur because of the Kite Festival and also the Jaipur Literature Festival that's held around this time. Sometime in the month of March, Jaipur witnesses the Elephant festival, just a day before Holi.`,
    
data: [
        { month: "January", degree: "21°/ 8°", rain: "1 days" },
        { month: "February", degree: "27°/ 10°", rain: "1 days" },
        { month: "March", degree: "29°/ 15°", rain: "4 days" },
        { month: "April", degree: "35°/ 21°", rain: "1 days" },
        { month: "May", degree: "	39°/ 25°", rain: "0 days" },
        { month: "June", degree: "40°/ 28°", rain: "4 days" },
        { month: "July", degree: "34°/ 26°", rain: "14 days" },
        { month: "August", degree: "31°/ 24°", rain: "26 days" },
        { month: "September", degree: "32°/ 24°", rain: "17 days" },
        { month: "October	", degree: "32°/ 20°", rain: "1 days" },
        { month: "November", degree: "28°/ 18°", rain: "2 days" },
        { month: "December", degree: "22°/ 8°", rain: "2 days" },
      ],
    },
    {
      cityname: "chennai",
      aboutCity: `October to February during the winters and the pre-monsoons season is the best time to visit Chennai. This time of the year is considered as the best time to explore the metropolitan city as summers are scorching and monsoons bring torrential downpours and cyclones. Its geographical location on the beautiful coastline mostly keeps the city's weather hot and humid. `,
    
data: [
        { month: "January", degree: "30°/ 22°", rain: "3 days" },
        { month: "February", degree: "30°/ 23°", rain: "0 days" },
        { month: "March", degree: "32°/ 24°", rain: "0 days" },
        { month: "April", degree: "34°/ 25°", rain: "1 days" },
        { month: "May", degree: "	37°/ 27°", rain: "1 days" },
        { month: "June", degree: "37°/ 27°", rain: "10 days" },
        { month: "July", degree: "34°/ 26°", rain: "21 days" },
        { month: "August", degree: "34°/ 25°", rain: "18 days" },
        { month: "September", degree: "32°/ 25°", rain: "22 days" },
        { month: "October	", degree: "32°/ 25°", rain: "19 days" },
        { month: "November", degree: "31°/ 24°", rain: "15 days" },
        { month: "December", degree: "29°/ 23°", rain: "11 days" },
      ],
    },
    {
      cityname: "udaipur",
      aboutCity: `October to March offer is the best time to visit Udaipur. The winter season is pleasant making it an ideal time to explore the city at its best. Monsoons from July to September is another ideal time to visit Udaipur as it is pleasant and a relief from the torrid climate of Rajasthan. However, summer months must be avoided as the temperatures rise up to 42 degrees.`,
    
data: [
        { month: "January", degree: "23°/ 9°", rain: "0 days" },
        { month: "February", degree: "28°/ 12°", rain: "0 days" },
        { month: "March", degree: "30°/ 15°", rain: "3 days" },
        { month: "April", degree: "36°/ 21°", rain: "0 days" },
        { month: "May", degree: "	37°/ 24°", rain: "1 days" },
        { month: "June", degree: "36°/ 25°", rain: "16 days" },
        { month: "July", degree: "31°/ 23°", rain: "19 days" },
        { month: "August", degree: "27°/ 22°", rain: "27 days" },
        { month: "September", degree: "28°/ 22°", rain: "26 days" },
        { month: "October	", degree: "30°/ 19°", rain: "6 days" },
        { month: "November", degree: "28°/ 17°", rain: "4 days" },
        { month: "December", degree: "24°/ 10°", rain: "1 days" },
      ],
    },
    {
      cityname: "manali",
      aboutCity: `October to June is the best time to visit Manali. With bright, colourful flowers in full bloom and a pleasant climate with temperatures ranging between 10 degree Celsius and 25 degree Celsius. December to February is the best time to experience snowfall in Manali. With temperatures that hover around subzero, Manali becomes a paradise on earth with its snow-clad surroundings While tourists visit Manali throughout the year, monsoon season (July to August) is a bit low, due to landslides and land-blockages.`,
    
data: [
        { month: "January", degree: "3°/ 6°", rain: "17 days" },
        { month: "February", degree: "6°/ 5°", rain: "8 days" },
        { month: "March", degree: "7°/ 3°", rain: "18 days" },
        { month: "April", degree: "12°/ 1°", rain: "17 days" },
        { month: "May", degree: "13°/ 2°", rain: "14 days" },
        { month: "June", degree: "17°/ 7°", rain: "12 days" },
        { month: "July", degree: "19°/ 12°", rain: "26 days" },
        { month: "August", degree: "20°/ 13°", rain: "24 days" },
        { month: "September", degree: "20°/ 10°", rain: "8 days" },
        { month: "October	", degree: "14°/ 4°", rain: "5 days" },
        { month: "November", degree: "9°/ 0°", rain: "15 days" },
        { month: "December", degree: "6°/ 5°", rain: "8 days" },
      ],
    },
    {
      cityname: "goa",
      aboutCity: `The best time to visit Goa is from November to February when the weather is ideal for sightseeing and relaxing on the stunning beaches. The temperature during this time ranges around 20 to 30 degrees Celcius and it is also the peak tourist season in Goa. Monsoons from June to September are another great time to visit Goa if you love the beach during rains. Summer is not a good time to visit Goa. With the temperature fluctuating between 25 to 35 degrees Celcius, the weather from March to May is extremely hot and humid.`,
    
data: [
        { month: "January", degree: "31°/ 21°", rain: "0 days" },
        { month: "February", degree: "32°/ 21°", rain: "0 days" },
        { month: "March", degree: "32°/ 22°", rain: "1 days" },
        { month: "April", degree: "34°/ 25°", rain: "2 days" },
        { month: "May", degree: "	33°/ 26°", rain: "0 days" },
        { month: "June", degree: "30°/ 25°", rain: "22 days" },
        { month: "July", degree: "28°/ 25°", rain: "31 days" },
        { month: "August", degree: "28°/ 25°", rain: "30 days" },
        { month: "September", degree: "28°/ 24°", rain: "26 days" },
        { month: "October	", degree: "31°/ 24°", rain: "26 days" },
        { month: "November", degree: "32°/ 24°", rain: "4 days" },
        { month: "December", degree: "33°/ 23°", rain: "0 days" },
      ],
    },
    {
      cityname: "lehladakh",
      aboutCity: `The best time to visit Leh Ladakh is from May end to the middle of July as the roads to Ladakh are open both from Srinagar Leh highway and Leh-Manali highway during this time. Also, there is a good amount of snow, especially on the Leh Manali highway. Another good time to visit Leh Ladakh is from the middle of September to October, when Ladakh is at its most beautiful. It is also possible to get good discounts during this time due to the lesser number of tourists.

      It is advisable to avoid visiting Leh Ladakh during the monsoon from July end to August as the region is prone to landslides. Also, the Srinagar Leh highway and Leh Manali highway are full of sludge, making travel very risky. `,
    
data: [
        { month: "January", degree: "-15°/ -23°", rain: "1 days" },
        { month: "February", degree: "-14°/ -24°", rain: "0 days" },
        { month: "March", degree: "-9°/ -19°", rain: "3 days" },
        { month: "April", degree: "-4°/ -14°", rain: "3 days" },
        { month: "May", degree: "-1°/ -10°", rain: "3 days" },
        { month: "June", degree: "2°/ 6°", rain: "6 days" },
        { month: "July", degree: "7°/ 1°", rain: "4 days" },
        { month: "August", degree: "7°/ 1°", rain: "8 days" },
        { month: "September", degree: "4°/ -2°", rain: "3 days" },
        { month: "October	", degree: "°-4/ -10°", rain:"2 days" },
        { month: "November", degree: "-8°/ -15°", rain: "1 days" },
        { month: "December", degree: "-15°/ -23°", rain: "0 days" },
      ],
    },
    {
      cityname: "srinagar",
      aboutCity:` April to October is the best time to visit Srinagar when the weather is perfect for sightseeing. The minimum temperature during this time ranges between 10 to 20 degrees Celcius while the maximum temperature is around 20 to 30 degrees Celcius. Srinagar has two main seasons - summer and winter with 1-2 months of autumn. There is no proper monsoon season as Srinagar has very little rainfall. Overall, Srinagar has pleasant weather with a soothing temperature making it a go-to destination throughout the year.`,
    
data: [
        { month: "January", degree: "5°/ -1°", rain: "11 days" },
        { month: "February", degree: "°8/ 0°", rain: "6 days" },
        { month: "March", degree: "13°/ 4°", rain: "10 days" },
        { month: "April", degree: "20°/ 8°", rain: "14 days" },
        { month: "May", degree: "	°23/ 9°", rain: "7 days" },
        { month: "June", degree: "°26/ 12°", rain: "7 days" },
        { month: "July", degree: "30°/ 16°", rain: "19 days" },
        { month: "August", degree: "29°/ 16°", rain: "20 days" },
        { month: "September", degree: "30°/ 15°", rain: "6 days" },
        { month: "October	", degree: "23°/ 9°", rain:"8 days" },
        { month: "November", degree: "13°/ 4°", rain:"13 days" },
        { month: "December", degree: "9°/ -1°", rain: "3 days" },
      ],
    },
    {
      cityname: "varanasi",
      aboutCity: `The best time to visit Varanasi is Winter (November - February) since the temperature is low and there is a calm breeze throughout the day. Summers in Varanasi experience high and dry temperatures. It is best to avoid the summers since they are hot dry and sunny making outdoor sightseeing difficult. Monsoons are a pleasant change, with moderate to heavy rainfall, while the winters are the best time to visit Varanasi, owing to the marvellous weather conditions that elevate its beauty to a large extent.`,
    
data: [
        { month: "January", degree: "21°/ 10°", rain: "4 days" },
        { month: "February", degree: "25°/ 11°", rain: "4 days" },
        { month: "March", degree: "31°/ 18°", rain: "8 days" },
        { month: "April", degree: "37°/ 22°", rain: "3 days" },
        { month: "May", degree: "	42°/ 27°", rain: "1 days" },
        { month: "June", degree: "41°/ 29°", rain: "8 days" },
        { month: "July", degree: "34°/ 26°", rain: " 20days" },
        { month: "August", degree: "33°/ 25°", rain: "23 days" },
        { month: "September", degree: "31°/ 24°", rain: "23 days" },
        { month: "October	", degree: "30°/ 21°", rain: "4 days" },
        { month: "November", degree: "30°/ 17°", rain: "0 days" },
        { month: "December", degree: "22°/ 11°", rain: "4 days" },
      ],
    },
    {
      cityname: "rishikesh",
      aboutCity: `The best time to visit Rishikesh for white water rafting is September-June and November. Another good time to visit Rishikesh is from February to early May. The International Yoga Festival is organised in Rishikesh in the first week of March. It is not favourable to visit Rishikesh in summer (May-June) as the temperature during these months gets extremely high, making it unbearable for sightseeing.`,
    
data: [
        { month: "January", degree: "19°/ 9°", rain: "13 days" },
        { month: "February", degree: "23°/ 9°", rain: "3 days" },
        { month: "March", degree: "26°/ 13°", rain: "9 days" },
        { month: "April", degree: "32°/ 18°", rain: "5 days" },
        { month: "May", degree: "38°/ 21°", rain: "0 days" },
        { month: "June", degree: "39°/ 24°", rain: "5 days" },
        { month: "July", degree: "32°/ 24°", rain: "27 days" },
        { month: "August", degree: "31°/ 24°", rain: "24 days" },
        { month: "September", degree: "31°/ 22°", rain: "22 days" },
        { month: "October	", degree: "30°/ 18°", rain: "1 days" },
        { month: "November", degree: "27°/ 15°", rain: "1 days" },
        { month: "December", degree: "21°/ 9°", rain: "2 days" },
      ],
    },
    {
      cityname: "shimla",
      aboutCity: `The best time to visit Shimla is between March to June when the weather remains pleasant and the temperature ranges from 15°C to 30°C. The best time to experience Snowfall in Shimla is during winters months - November to January . This time is ideal for snow-activities like skiing and exploring the snow-covered surroundings. Tourism thrives in Shimla in all the seasons other than the monsoons which begin in July and last till September.`,
    
data: [
        { month: "January", degree: "9°/ -1°", rain: "3 days" },
        { month: "February", degree: "12°/ 2°", rain: "4 days" },
        { month: "March", degree: "15°/ 4°", rain: "9 days" },
        { month: "April", degree: "19°/ 8°", rain: "9 days" },
        { month: "May", degree: "25°/ 11°", rain: "6 days" },
        { month: "June", degree: "28°/ 14°", rain: "6 days" },
        { month: "July", degree: "22°/ 14°", rain: "27 days" },
        { month: "August", degree: "21°/ 15°", rain: "29 days" },
        { month: "September", degree: "21°/ 13°", rain: "25 days" },
        { month: "October	", degree: "20°/ 9°", rain: "2 days" },
        { month: "November", degree: "16°/ 6°", rain: "5 days" },
        { month: "December", degree: "12°/ 1°", rain: "1 days" },
      ],
    },
    {
      cityname: "banglore",
      aboutCity: `The best time to visit Bangalore is from the months of October to February which are the winter months here. Being a populous city and an IT hub of India, Bangalore is best known for its moderate climate that is very pleasing to everyone. While the temperature hovers between 27-35 degree Celsius in Summers; Winters could be freezing with the mercury dropping below 15-degree Celsius. Monsoons, on the other hand, are pleasant and chill making Bangalore suitable for a visit throughout the year.`,
    
data: [
        { month: "January", degree: "29°/ 16°", rain: "0 days" },
        { month: "February", degree: "31°/ 16°", rain: "0 days" },
        { month: "March", degree: "32°/ 19°", rain: "7 days" },
        { month: "April", degree: "33°/ 20°", rain: "8 days" },
        { month: "May", degree: "	33°/ 21°", rain: "23 days" },
        { month: "June", degree: "30°/ 20°", rain: "14 days" },
        { month: "July", degree: "28°/ 19°", rain: "14 days" },
        { month: "August", degree: "26°/ 19°", rain: "21 days" },
        { month: "September", degree: "27°/ 19°", rain: "21 days" },
        { month: "October	", degree: "26°/ 18°", rain: "28 days" },
        { month: "November", degree: "27°/ 18°", rain: "6 days" },
        { month: "December", degree: "26°/ 16°", rain: "2 days" },
      ],
    },
    {
      cityname: "agra",
      aboutCity: `The best time to visit Agra is in the winter season between November to March when the weather is perfect for sightseeing. Another good time to visit Agra is between August and October to witness the Taj Mahal at its best. April-June is the summer season in Agra which is scorching hot and not a good time to visit. July-September is the monsoon season in Agra when the weather can get humid at times.`,
    
data: [
        { month: "January", degree: "20°/ 9°", rain: "2 days" },
        { month: "February", degree: "26°/ 11°", rain: "1 days" },
        { month: "March", degree: "30°/ 16°", rain: "4 days" },
        { month: "April", degree: "37°/ 22°", rain: "3 days" },
        { month: "May", degree: "	42°/ 26°", rain: "0 days" },
        { month: "June", degree: "42°/ 29°", rain: "2 days" },
        { month: "July", degree: "36°/ 27°", rain: "17 days" },
        { month: "August", degree: "33°/ 25°", rain:"18 days" },
        { month: "September", degree: "32°/ 25°", rain: "17 days" },
        { month: "October	", degree: "32°/ 25°", rain: "2 days" },
        { month: "November", degree: "33°/ 21°", rain: "3 days" },
        { month: "December", degree: "29°/ 18°", rain: "1 days" },
      ],
    },
    {
      cityname: "amritsar",
      aboutCity: `September to December and February to March is the best time to visit Amritsar as the weather remains pleasant and suitable for sightseeing. The temperatures drop down in January and hover around 5°C while the peak summer months of May and June take the temperature to as high as 40°C.  July and August are peak monsoon months when most of the cityscape is covered by lush greenery. The temperature remains moderate/ warm but is quite humid. One can choose to avoid the monsoons as it could get a little inconvenient for sightseeing.`,
    
data: [
        { month: "January", degree: "17°/ 6°", rain: "4 days" },
        { month: "February", degree: "23 °/ 8°", rain: "3days" },
        { month: "March", degree: "25°/ 12°", rain: "10 days" },
        { month: "April", degree: "32°/ 17°", rain: "7 days" },
        { month: "May", degree: "	39°/ 22°", rain: "4 days" },
        { month: "June", degree: "42°/ 26°", rain: "1 days" },
        { month: "July", degree: "35°/ 26°", rain: "19 days" },
        { month: "August", degree: "34°/ 25°", rain: "13 days" },
        { month: "September", degree: "34°/ 24°", rain: "10 days" },
        { month: "October	", degree: "32°/ 18°", rain: "1 days" },
        { month: "November", degree: "26°/ 14°", rain: "3 days" },
        { month: "December", degree: "19°/ 7°", rain: "2 days" },
      ],
    },
    {
      cityname: "andaman",
      aboutCity: `The best time to visit Andaman & Nicobar Islands is between October and March as the weather stays dry on most days and it's not too hot. The days are bright and quite pleasant for a great vacation. It's the perfect time for diving and water sports or just lazying around on the gorgeous beaches.

      Monsoons (July to September) are not always recommended as the waves could be unpredictable and specific regions also receive heavy downpours. During the monsoon season or on days when it rains heavily, the ferry schedule gets disturbed with big delays and even cancellations. Water sports on beaches are also not available and if you're planning to dive or snorkel, visibility in the water diminishes during the rainy season.
      
      Summer months (April-June) could be hot and it rains sometimes as well. However, Andaman being a tropical destination, the temperature doesn't go beyond 37 degrees on most days. `,
    
data: [
        { month: "January", degree: "30°/ 23°", rain: "0 days" },
        { month: "February", degree: "30°/ 23°", rain: "0 days" },
        { month: "March", degree: "31°/ 24°", rain: "0 days" },
        { month: "April", degree: "32°/ 26°", rain: "9 days" },
        { month: "May", degree: "	32°/ 27°", rain: "26 days" },
        { month: "June", degree: "30°/ 26°", rain: "27 days" },
        { month: "July", degree: "31°/ 26°", rain: "23 days" },
        { month: "August", degree: "29°/ 25°", rain: "29 days" },
        { month: "September", degree: "29°/ 25°", rain: "25 days" },
        { month: "October	", degree: "31°/ 25°", rain: "22 days" },
        { month: "November", degree: "30°/ 25°", rain: "11 days" },
        { month: "December", degree: "30°/ 24°", rain: "0 days" },
      ],
    },
    
  ];

  useEffect(() => {
    MonthlyData.map((item) => {
      if (item.cityname == cityname) {
        console.log(item.cityname, cityname);

        setCityMonthlydata(item.data);
        setAboutCity(item.aboutCity);
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
        {`What is the best time to visit ${capitalizedString}?`}
      </h3>
      <p style={{ fontSize: "16px", fontFamily: "nunito", fontWeight: "500" }}>
        {aboutCity}
      </p>

      {/* table
       */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Month</th>
            <th>High/Low (°C)</th>
            <th>Rain</th>
          </tr>
        </thead>
        {cityMonthlyData.map((item, i) => (
          <tbody key={i}>
            <tr>
              <td>{item.month}</td>
              <td>{item.degree}</td>
              <td>{item.rain}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default BestTime;
