# FOODPEDIA

**USER**
-----

**Register**
----
  Registers new user

* **URL**

  /users/register

* **Method:**

  `POST`
  
*  **URL Params**
    None

* **Body/Form Params**<br>
  `{ "email" : "john_doe@sample.com", "password" : "johndoe1" }`<br>
  **Required**
  - `email` : string
  - `password` : string


* **Success Response:**

  * **Code:** 201 <br />
    **Content:**<br>
    `{
        "id": 3,
        "email": "user2@mail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJ1c2VyMkBtYWlsLmNvbSIsImlhdCI6MTU4NTg4MTU3Nn0.fL6k_00qcQySGlSZgSXHqFjdfvUjhOjyDgk4rESZXtU"
    }`
     

* **Error Responses:**

  * **Code:** 400 VALIDATION ERROR<br />
    **Content:**<br>
    `{
    "errors": [
            {
                "message": "email must unique"
            }
        ]
    }`
    <br>
    **OR**
   `{
    "errors": [
            {
                "message": "your email format is wrong"
            }
        ]
    }`

<br>
<hr>
<br>

**Login**
----
  Login user

* **URL**

  /users/login

* **Method:**

  `POST`
  
*  **URL Params**
    None

* **Data Params**
`{ "email" : "john_doe@sample.com", "password" : "johndoe1" }`<br>
  **Required**
  - `email` : string
  - `password` : string


* **Success Response:**

  * **Code:** 200 <br />
    **Content:**<br>
    `{
        "id": 3,
        "email": "user2@mail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJ1c2VyMkBtYWlsLmNvbSIsImlhdCI6MTU4NTg4MTcxOX0.RTCqgbmUUeG7McQKcmww9plCP6XnV_DV6PLNmU6zuQM"
    }`
    

* **Error Responses:**

  * **Code:**400 VALIDATION ERROR<br />
    **Content:**<br>
    `{
        "errors": [
            {
                "message": "Invalid email/password"
            }
        ]
    }`
  <br>

  * **Code:** 500 INTERNAL SERVER ERROR<br />
    **Content:**<br>
    `{
        "errors": [
            {
                "message": "Internal server error"
            }
        ]
    }`

<br>
<hr>
<br>

**Google Login**
----
  Login user using Google OAuth

* **URL**

  /users/googleLogin

* **Method:**

  `POST`
  
*  **URL Params**
    None

* **Body/Form Params**<br>
  **Required**
  - GMail Username
  - GMail Passord


* **Success Response:**

  * **Code:** 200 <br />
    **Content:**<br>
    `{
        "id": 3,
        "email": "user2@gmail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJ1c2VyMkBtYWlsLmNvbSIsImlhdCI6MTU4NTg4MTcxOX0.RTCqgbmUUeG7McQKcmww9plCP6XnV_DV6PLNmU6zuQM"
    }`

* **Error Responses:**

  * **Code:**400 VALIDATION ERROR<br />
    **Content:**<br>
    `{
        "errors": [
            {
                "message": "Invalid email/password"
            }
        ]
    }`
  <br>

  * **Code:** 500 INTERNAL SERVER ERROR<br />
    **Content:**<br>
    `{
        "errors": [
            {
                "message": "Internal server error"
            }
        ]
    }`
     
<br>
<hr>
<br>


**Read**
----
  Fetch all users

* **URL**

  /users/

* **Method:**

  `GET`
  
*  **URL Params**
    None

* **Header Params**<br>
    **Required**
    - `token`: string

* **Body/Form Params**<br>
    None


* **Success Response:**

  * **Code:** 200 <br />
    **Content:**<br>
    `{
    "Users": [
        {
            "id": 1,
            "email": "user@mail.com",
            "password": "$2a$10$L0.JtPUyh3OqqE9QheuR4eQCP8tCUSvP44bWotiaihu7pQLU5OJbu",
            "createdAt": "2020-04-02T16:58:53.571Z",
            "updatedAt": "2020-04-02T16:58:53.571Z"
        },
        {
            "id": 2,
            "email": "mail@user.com",
            "password": "$2a$10$hADIdNRD1VfMtXLygfTyKe/V6iAkMopW7PtqNkS/.dyxHLDiv.sDG",
            "createdAt": "2020-04-03T02:32:05.151Z",
            "updatedAt": "2020-04-03T02:32:05.151Z"
        },
        {
            "id": 3,
            "email": "user2@mail.com",
            "password": "$2a$10$zFLHnEPyGkg.rOCsK5LSXeXu28fmnZYesYetTPzMLzasitb0Ds5yO",
            "createdAt": "2020-04-03T02:39:35.874Z",
            "updatedAt": "2020-04-03T02:39:35.874Z"
        }
    ]
}`

* **Error Responses:**
  * **Code:** 500 INTERNAL SERVER ERROR<br />
    **Content:**<br>
    `{
        "errors": [
            {
                "message": "Internal server error"
            }
        ]
    }`
     
<br>
<hr>
<br>

<hr>

**FEATURE**
-----

**Read**
----
  Fetch top 20 food recommendations & current local weather based on geolocation

* **URL**

  /feature/

* **Method:**

  `GET`
  
*  **URL Params**
    None

* **Header Params**<br>
    **Required**
    - `token`: string

* **Body/Form Params**<br>
    None


* **Success Response:**

  * **Code:** 200 <br />
    **Content:**<br>
   `{
    "restaurants": [
        {
            "id": "7426032",
            "url": "https://www.zomato.com/jakarta/shabu-hachi-cilandak?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "thumb": "https://b.zmtcdn.com/data/pictures/2/7426032/3469a73d4a073c2e6ae8fb549a68664f.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "name": "Shabu Hachi",
            "address": "Jl. Ampera Raya No. 127, Cilandak, Jakarta",
            "cuisines": "Japanese",
            "timings": "10 AM to 10 PM",
            "avg_cost_for_two": "IDR.350000"
        },
        {
            "id": "18567253",
            "url": "https://www.zomato.com/jakarta/sushi-hiro-senopati?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "thumb": "https://b.zmtcdn.com/data/pictures/3/18567253/234c8d74022f82e43556504198cbb885.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "name": "Sushi Hiro",
            "address": "Jl. Suryo No. 24, Senopati, Jakarta",
            "cuisines": "Japanese",
            "timings": "11 AM to 9:30 PM",
            "avg_cost_for_two": "IDR.400000"
        },
        {
            "id": "18266425",
            "url": "https://www.zomato.com/jakarta/gyu-kaku-japanese-bbq-sudirman?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "thumb": "https://b.zmtcdn.com/data/pictures/5/18266425/5bdee9f92897a61a1f6acb4eee023771.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "name": "Gyu - Kaku Japanese BBQ",
            "address": "Citywalk Sudirman, Lantai 1, Jl. KH Mas Mansyur, Sudirman, Jakarta",
            "cuisines": "Japanese, BBQ",
            "timings": "10 AM to 10 PM",
            "avg_cost_for_two": "IDR.550000"
        },
        {
            "id": "18335207",
            "url": "https://www.zomato.com/jakarta/sushi-hiro-pantai-indah-kapuk?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "thumb": "https://b.zmtcdn.com/data/pictures/3/18567253/234c8d74022f82e43556504198cbb885.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "name": "Sushi Hiro",
            "address": "Rukan Garden House, Blok B No. 18D, Bukit Golf Mediterania, Jl. Raya Pantai Indah Kapuk, Pantai Indah Kapuk, Jakarta Utara",
            "cuisines": "Japanese",
            "timings": "11 AM to 2 PM, 5:30 PM to 9:30 PM (Mon-Fri), 11 AM to 2:30 PM, 5:30 PM to 9:30 PM (Sat-Sun)",
            "avg_cost_for_two": "IDR.400000"
        },
        {
            "id": "7413472",
            "url": "https://www.zomato.com/jakarta/bandar-djakarta-ancol?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "thumb": "https://b.zmtcdn.com/data/pictures/chains/4/7411044/4c3c2fb7efdb5b1c3a565360e158c8ec.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "name": "Bandar Djakarta",
            "address": "Taman Impian Jaya Ancol, Jl. Lodan Timur, Ancol, Jakarta 14430",
            "cuisines": "Seafood",
            "timings": "11h – 23h 30m (Mon-Fri),10h – 23h 45m (Sat),10h – 23h 30m (Sun)",
            "avg_cost_for_two": "IDR.250000"
        },
        {
            "id": "18744154",
            "url": "https://www.zomato.com/jakarta/sushi-hiro-senayan?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "thumb": "https://b.zmtcdn.com/data/pictures/3/18567253/234c8d74022f82e43556504198cbb885.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "name": "Sushi Hiro",
            "address": "Senayan City, Lantai 5, Jl. Asia Afrika, Senayan, Jakarta Pusat",
            "cuisines": "Japanese",
            "timings": "10 AM to 10 PM",
            "avg_cost_for_two": "IDR.400000"
        },
        {
            "id": "18886798",
            "url": "https://www.zomato.com/jakarta/amausaan-uji-matcha-thamrin?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "thumb": "https://b.zmtcdn.com/data/reviews_photos/79a/e32b81a3190171d2d7554770dfebe79a_1561524424.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "name": "Amausaan Uji Matcha",
            "address": "Grand Indonesia Mall, West Mall, Lantai Lower Ground, Jl. M.H. Thamrin No. 1, Thamrin, Jakarta",
            "cuisines": "Desserts",
            "timings": "10 AM to 10 PM",
            "avg_cost_for_two": "IDR.100000"
        },
        {
            "id": "18436154",
            "url": "https://www.zomato.com/jakarta/momo-paradise-pantai-indah-kapuk?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "thumb": "https://b.zmtcdn.com/data/pictures/chains/4/18436154/efb830896a4f95dcc106eb6c2341d8e3.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "name": "Momo Paradise",
            "address": "Ruko Crown Golf, Blok D No. 18-19, Bukit Golf Mediterania, Jl. Marina Indah Raya, Pantai Indah Kapuk, Jakarta",
            "cuisines": "Japanese",
            "timings": "",
            "avg_cost_for_two": "IDR.400000"
        },
        {
            "id": "18589077",
            "url": "https://www.zomato.com/jakarta/sushi-hiro-tanjung-duren?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "thumb": "https://b.zmtcdn.com/data/pictures/3/18567253/234c8d74022f82e43556504198cbb885.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "name": "Sushi Hiro",
            "address": "Neo SOHO Mall, Lantai Upper Ground, Jl. Letjen S. Parman, Tanjung Duren, Jakarta",
            "cuisines": "Japanese",
            "timings": "10 AM to 10 PM",
            "avg_cost_for_two": "IDR.400000"
        },
        {
            "id": "18885812",
            "url": "https://www.zomato.com/jakarta/sushi-go-kelapa-gading?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "thumb": "https://b.zmtcdn.com/data/reviews_photos/7d7/5bdde06e7a7719f6f89cf3cc6f9117d7_1548768766.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "name": "Sushi Go!",
            "address": "Mall Kelapa Gading 1&2, Lantai 2, Jl. Kelapa Gading Boulevard, Kelapa Gading, Jakarta",
            "cuisines": "Japanese, Sushi",
            "timings": "10 AM to 10 PM",
            "avg_cost_for_two": "IDR.100000"
        },
        {
            "id": "18464311",
            "url": "https://www.zomato.com/jakarta/sushi-hiro-kelapa-gading?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "thumb": "https://b.zmtcdn.com/data/pictures/3/18567253/234c8d74022f82e43556504198cbb885.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "name": "Sushi Hiro",
            "address": "Ruko Graha Boulevard Sport Club, Jl. Bulevar Utara Kelapa Gading, Kelapa Gading, Jakarta",
            "cuisines": "Japanese",
            "timings": "11 AM to 2 PM, 5:30 PM to 9:30 PM (Mon-Fri), 11 AM to 2:30 PM, 5:30 PM to 9:30 PM (Sat-Sun)",
            "avg_cost_for_two": "IDR.400000"
        },
        {
            "id": "18585840",
            "url": "https://www.zomato.com/jakarta/amausaan-uji-matcha-tanjung-duren?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "thumb": "https://b.zmtcdn.com/data/reviews_photos/4b6/ace535ccb20bcdef4f77ac616cef74b6_1577540883.jpg?impolicy=newcropandfit&cropw=3024&croph=3024&cropoffsetx=391&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
            "name": "Amausaan Uji Matcha",
            "address": "Central Park, Lantai Lower Ground, Jl. Letjen S. Parman, Tanjung Duren, Jakarta",
            "cuisines": "Desserts",
            "timings": "10 AM to 10 PM",
            "avg_cost_for_two": "IDR.100000"
        },
        {
            "id": "18657719",
            "url": "https://www.zomato.com/jakarta/gyu-kaku-japanese-bbq-karet?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "thumb": "https://b.zmtcdn.com/data/pictures/5/18266425/5bdee9f92897a61a1f6acb4eee023771.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "name": "Gyu - Kaku Japanese BBQ",
            "address": "Ciputra World, Lotte Shopping Avenue, Lantai 3, Jl. Prof Dr Satrio, Karet, Jakarta",
            "cuisines": "Japanese, BBQ",
            "timings": "10 AM to 10 PM",
            "avg_cost_for_two": "IDR.550000"
        },
        {
            "id": "18481565",
            "url": "https://www.zomato.com/jakarta/shabu-hachi-2-bogor-timur-bogor?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "thumb": "https://b.zmtcdn.com/data/reviews_photos/874/ae8827936d09f245d4bff9740b3e9874_1569011553.jpg?impolicy=newcropandfit&cropw=2730&croph=2730&cropoffsetx=567&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore",
            "name": "Shabu Hachi",
            "address": "Jl. Raya Pajajaran No. 75, Bogor Timur, Bogor",
            "cuisines": "Japanese",
            "timings": "10 AM to 10 PM",
            "avg_cost_for_two": "IDR.350000"
        },
        {
            "id": "18880385",
            "url": "https://www.zomato.com/jakarta/gyu-kaku-japanese-bbq-gajah-mada?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "thumb": "https://b.zmtcdn.com/data/pictures/5/18266425/5bdee9f92897a61a1f6acb4eee023771.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "name": "Gyu - Kaku Japanese BBQ",
            "address": "Citywalk Gajah Mada, Lantai 1, Jl. Gajah Mada No.211, Gajah Mada, Jakarta",
            "cuisines": "Japanese, BBQ",
            "timings": "10 AM – 10 PM",
            "avg_cost_for_two": "IDR.550000"
        },
        {
            "id": "18615392",
            "url": "https://www.zomato.com/jakarta/waki-japanese-bbq-dining-thamrin?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "thumb": "https://b.zmtcdn.com/data/pictures/chains/2/18615392/0a873501ec5f81b17a7cb6cd6249a938.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "name": "WAKI Japanese BBQ Dining",
            "address": "Lantai 1, Jl. Tanjung Karang No. 5, Thamrin, Jakarta",
            "cuisines": "Japanese, BBQ",
            "timings": "11 AM to 10 PM",
            "avg_cost_for_two": "IDR.300000"
        },
        {
            "id": "18498251",
            "url": "https://www.zomato.com/jakarta/ab-steak-by-chef-akira-back-setiabudi?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "thumb": "https://b.zmtcdn.com/data/reviews_photos/e2c/2a94c6a8877d214f7e801cbaee68ee2c_1494143954.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "name": "AB Steak by Chef Akira Back",
            "address": "MD Place Building, Lantai Mezanine, Jl. Setiabudi Selatan No. 7, Kuningan, Jakarta",
            "cuisines": "Steak, Korean",
            "timings": "5:30 PM to 10:30 PM",
            "avg_cost_for_two": "IDR.1500000"
        },
        {
            "id": "18875696",
            "url": "https://www.zomato.com/jakarta/kintaro-sushi-1-senopati?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "thumb": "https://b.zmtcdn.com/data/pictures/chains/5/18530405/0feeddcbe877a8e27526a8cf5b501edf.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "name": "Kintaro Sushi",
            "address": "Jl. Suryo No. 20, Senopati, Jakarta",
            "cuisines": "Sushi, Japanese",
            "timings": "11 AM to 10 PM",
            "avg_cost_for_two": "IDR.200000"
        },
        {
            "id": "18687890",
            "url": "https://www.zomato.com/jakarta/momo-paradise-senopati?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "thumb": "https://b.zmtcdn.com/data/pictures/chains/4/18436154/efb830896a4f95dcc106eb6c2341d8e3.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "name": "Momo Paradise",
            "address": "Jl. Senopati Raya No. 92, Senopati, Jakarta",
            "cuisines": "Japanese",
            "timings": "11h to 22h (Mon-Thu),11h to 23h (Fri-Sun)",
            "avg_cost_for_two": "IDR.400000"
        },
        {
            "id": "18918778",
            "url": "https://www.zomato.com/jakarta/hachi-grill-gatot-subroto?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "thumb": "https://b.zmtcdn.com/data/reviews_photos/6ba/c05ab500c1da99eeaca22111fe2c66ba_1557561244.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "name": "Hachi Grill",
            "address": "Synthesis Square, Tower 2, Lantai Ground, Jl. Gatot Subroto No. 177 A, Gatot Subroto, Jakarta",
            "cuisines": "Grill, Japanese",
            "timings": "10 AM to 10 PM",
            "avg_cost_for_two": "IDR.400000"
        }
    ]
}`

* **Error Responses:**
  * **Code:** 500 INTERNAL SERVER ERROR<br />
    **Content:**<br>
    `{
        "errors": [
            {
                "message": "Internal server error"
            }
        ]
    }`
     
<br>
<hr>
<br>



