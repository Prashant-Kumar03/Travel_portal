/* =========================================
   VOYARA ZONES
========================================= */

const zones = [

    {
        id: "north",
        name: "North India",
        icon: "🏔️",
        description: "Mountains, heritage & adventure",
        image:
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "west",
        name: "West India",
        icon: "🏜️",
        description: "Deserts, beaches & royal cities",
        image:
            "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "central",
        name: "Central India",
        icon: "🌄",
        description: "Wildlife, heritage & nature",
        image:
            "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "east",
        name: "East India",
        icon: "🌊",
        description: "Temples, beaches & culture",
        image:
            "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "south",
        name: "South India",
        icon: "🏝️",
        description: "Beaches, hills & backwaters",
        image:
            "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "northeast",
        name: "Northeast India",
        icon: "🌿",
        description: "Hills, forests & hidden gems",
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80"
    }

];


/* =========================================
   INDIA STATE / UT DATA
========================================= */

const regions = [

    /* ================= NORTH ================= */

    {
        id: "jammu-kashmir",
        name: "Jammu & Kashmir",
        type: "Union Territory",
        zone: "north",
        image:
            "https://images.unsplash.com/photo-1566837497312-7be1d65d953f?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "ladakh",
        name: "Ladakh",
        type: "Union Territory",
        zone: "north",
        image:
            "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "himachal-pradesh",
        name: "Himachal Pradesh",
        type: "State",
        zone: "north",
        image:
            "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "punjab",
        name: "Punjab",
        type: "State",
        zone: "north",
        image:
            "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "haryana",
        name: "Haryana",
        type: "State",
        zone: "north",
        image:
            "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "uttarakhand",
        name: "Uttarakhand",
        type: "State",
        zone: "north",
        image:
            "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "uttar-pradesh",
        name: "Uttar Pradesh",
        type: "State",
        zone: "north",
        image:
            "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "delhi",
        name: "Delhi",
        type: "Union Territory",
        zone: "north",
        image:
            "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "chandigarh",
        name: "Chandigarh",
        type: "Union Territory",
        zone: "north",
        image:
            "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=800&q=80"
    },


    /* ================= WEST ================= */

    {
        id: "rajasthan",
        name: "Rajasthan",
        type: "State",
        zone: "west",
        image:
            "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "gujarat",
        name: "Gujarat",
        type: "State",
        zone: "west",
        image:
            "https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "maharashtra",
        name: "Maharashtra",
        type: "State",
        zone: "west",
        image:
            "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "goa",
        name: "Goa",
        type: "State",
        zone: "west",
        image:
            "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "dadra-daman-diu",
        name: "Dadra and Nagar Haveli and Daman and Diu",
        type: "Union Territory",
        zone: "west",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    },


    /* ================= CENTRAL ================= */

    {
        id: "madhya-pradesh",
        name: "Madhya Pradesh",
        type: "State",
        zone: "central",
        image:
            "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "chhattisgarh",
        name: "Chhattisgarh",
        type: "State",
        zone: "central",
        image:
            "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80"
    },


    /* ================= EAST ================= */

    {
        id: "odisha",
        name: "Odisha",
        type: "State",
        zone: "east",
        image:
            "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "bihar",
        name: "Bihar",
        type: "State",
        zone: "east",
        image:
            "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "jharkhand",
        name: "Jharkhand",
        type: "State",
        zone: "east",
        image:
            "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "west-bengal",
        name: "West Bengal",
        type: "State",
        zone: "east",
        image:
            "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "andaman-nicobar",
        name: "Andaman and Nicobar Islands",
        type: "Union Territory",
        zone: "east",
        image:
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"
    },


    /* ================= SOUTH ================= */

    {
        id: "andhra-pradesh",
        name: "Andhra Pradesh",
        type: "State",
        zone: "south",
        image:
            "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "telangana",
        name: "Telangana",
        type: "State",
        zone: "south",
        image:
            "https://images.unsplash.com/photo-1600100397608-f010dbf2f7d6?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "karnataka",
        name: "Karnataka",
        type: "State",
        zone: "south",
        image:
            "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "kerala",
        name: "Kerala",
        type: "State",
        zone: "south",
        image:
            "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "tamil-nadu",
        name: "Tamil Nadu",
        type: "State",
        zone: "south",
        image:
            "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "puducherry",
        name: "Puducherry",
        type: "Union Territory",
        zone: "south",
        image:
            "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "lakshadweep",
        name: "Lakshadweep",
        type: "Union Territory",
        zone: "south",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    },


    /* ================= NORTHEAST ================= */

    {
        id: "assam",
        name: "Assam",
        type: "State",
        zone: "northeast",
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "arunachal-pradesh",
        name: "Arunachal Pradesh",
        type: "State",
        zone: "northeast",
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "manipur",
        name: "Manipur",
        type: "State",
        zone: "northeast",
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "meghalaya",
        name: "Meghalaya",
        type: "State",
        zone: "northeast",
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "mizoram",
        name: "Mizoram",
        type: "State",
        zone: "northeast",
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "nagaland",
        name: "Nagaland",
        type: "State",
        zone: "northeast",
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "sikkim",
        name: "Sikkim",
        type: "State",
        zone: "northeast",
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: "tripura",
        name: "Tripura",
        type: "State",
        zone: "northeast",
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
    }

];



/* =========================================
   CITY / DESTINATION DATA
========================================= */

const destinations = [

    /* ================= NORTH INDIA ================= */

    {
        id: "srinagar",
        name: "Srinagar",
        region: "jammu-kashmir",
        zone: "north",
        description: "Lakes, gardens and Himalayan landscapes",
        image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "gulmarg",
        name: "Gulmarg",
        region: "jammu-kashmir",
        zone: "north",
        description: "Mountain resort and winter destination",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "leh",
        name: "Leh",
        region: "ladakh",
        zone: "north",
        description: "High-altitude landscapes and monasteries",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "manali",
        name: "Manali",
        region: "himachal-pradesh",
        zone: "north",
        description: "Mountains, valleys and adventure",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "shimla",
        name: "Shimla",
        region: "himachal-pradesh",
        zone: "north",
        description: "Colonial charm and Himalayan views",
        image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "amritsar",
        name: "Amritsar",
        region: "punjab",
        zone: "north",
        description: "Heritage, culture and Golden Temple",
        image: "https://images.unsplash.com/photo-1588091383021-15ddea10925d?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "dehradun",
        name: "Dehradun",
        region: "uttarakhand",
        zone: "north",
        description: "Gateway to the Himalayan region",
        image: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "rishikesh",
        name: "Rishikesh",
        region: "uttarakhand",
        zone: "north",
        description: "Yoga, river rafting and spirituality",
        image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "agra",
        name: "Agra",
        region: "uttar-pradesh",
        zone: "north",
        description: "Home of the iconic Taj Mahal",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "varanasi",
        name: "Varanasi",
        region: "uttar-pradesh",
        zone: "north",
        description: "Ancient city on the Ganges",
        image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "new-delhi",
        name: "New Delhi",
        region: "delhi",
        zone: "north",
        description: "Capital city, monuments and museums",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=900&q=80"
    },


    /* ================= WEST INDIA ================= */

    {
        id: "jaipur",
        name: "Jaipur",
        region: "rajasthan",
        zone: "west",
        description: "Forts, palaces and royal heritage",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "udaipur",
        name: "Udaipur",
        region: "rajasthan",
        zone: "west",
        description: "Lakes, palaces and romantic escapes",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "jaisalmer",
        name: "Jaisalmer",
        region: "rajasthan",
        zone: "west",
        description: "Golden Fort and desert experiences",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "ahmedabad",
        name: "Ahmedabad",
        region: "gujarat",
        zone: "west",
        description: "Heritage, culture and food",
        image: "https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "dwarka",
        name: "Dwarka",
        region: "gujarat",
        zone: "west",
        description: "Sacred temples and coastal heritage",
        image: "https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "mumbai",
        name: "Mumbai",
        region: "maharashtra",
        zone: "west",
        description: "Coastal metropolis and entertainment capital",
        image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "pune",
        name: "Pune",
        region: "maharashtra",
        zone: "west",
        description: "Culture, history and modern city life",
        image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "goa",
        name: "Goa",
        region: "goa",
        zone: "west",
        description: "Beaches, nightlife and coastal experiences",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "panaji",
        name: "Panaji",
        region: "goa",
        zone: "west",
        description: "Portuguese heritage and riverfront culture",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80"
    },


    /* ================= CENTRAL INDIA ================= */

    {
        id: "bhopal",
        name: "Bhopal",
        region: "madhya-pradesh",
        zone: "central",
        description: "Lakes, museums and heritage",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "indore",
        name: "Indore",
        region: "madhya-pradesh",
        zone: "central",
        description: "Food, culture and urban attractions",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "khajuraho",
        name: "Khajuraho",
        region: "madhya-pradesh",
        zone: "central",
        description: "Historic temples and architecture",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "raipur",
        name: "Raipur",
        region: "chhattisgarh",
        zone: "central",
        description: "Gateway to central Indian attractions",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80"
    },


    /* ================= EAST INDIA ================= */

    {
        id: "bhubaneswar",
        name: "Bhubaneswar",
        region: "odisha",
        zone: "east",
        description: "Temples, heritage and modern Odisha",
        image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "puri",
        name: "Puri",
        region: "odisha",
        zone: "east",
        description: "Beach, Jagannath Temple and culture",
        image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "konark",
        name: "Konark",
        region: "odisha",
        zone: "east",
        description: "Sun Temple and coastal heritage",
        image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "gaya",
        name: "Gaya",
        region: "bihar",
        zone: "east",
        description: "Spiritual and historical destination",
        image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "patna",
        name: "Patna",
        region: "bihar",
        zone: "east",
        description: "Historic city and gateway to Bihar",
        image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "ranchi",
        name: "Ranchi",
        region: "jharkhand",
        zone: "east",
        description: "Waterfalls, forests and nature",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "kolkata",
        name: "Kolkata",
        region: "west-bengal",
        zone: "east",
        description: "Culture, architecture and food",
        image: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "darjeeling",
        name: "Darjeeling",
        region: "west-bengal",
        zone: "east",
        description: "Tea gardens and Himalayan views",
        image: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "port-blair",
        name: "Port Blair",
        region: "andaman-nicobar",
        zone: "east",
        description: "Island beaches and marine experiences",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80"
    },


    /* ================= SOUTH INDIA ================= */

    {
        id: "visakhapatnam",
        name: "Visakhapatnam",
        region: "andhra-pradesh",
        zone: "south",
        description: "Beaches, hills and coastal attractions",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "hyderabad",
        name: "Hyderabad",
        region: "telangana",
        zone: "south",
        description: "Heritage, food and modern attractions",
        image: "https://images.unsplash.com/photo-1600100397608-f010dbf2f7d6?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "bengaluru",
        name: "Bengaluru",
        region: "karnataka",
        zone: "south",
        description: "Technology, gardens and city experiences",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "mysuru",
        name: "Mysuru",
        region: "karnataka",
        zone: "south",
        description: "Palaces, culture and heritage",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "munnar",
        name: "Munnar",
        region: "kerala",
        zone: "south",
        description: "Tea plantations and mountain scenery",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "alleppey",
        name: "Alleppey",
        region: "kerala",
        zone: "south",
        description: "Backwaters and houseboat experiences",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "chennai",
        name: "Chennai",
        region: "tamil-nadu",
        zone: "south",
        description: "Temples, beaches and Tamil culture",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "ooty",
        name: "Ooty",
        region: "tamil-nadu",
        zone: "south",
        description: "Hill station and tea gardens",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "puducherry-city",
        name: "Puducherry",
        region: "puducherry",
        zone: "south",
        description: "French architecture and coastal charm",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80"
    },


    /* ================= NORTHEAST INDIA ================= */

    {
        id: "guwahati",
        name: "Guwahati",
        region: "assam",
        zone: "northeast",
        description: "Gateway to Northeast India",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "tawang",
        name: "Tawang",
        region: "arunachal-pradesh",
        zone: "northeast",
        description: "Mountain landscapes and monasteries",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "imphal",
        name: "Imphal",
        region: "manipur",
        zone: "northeast",
        description: "Culture, history and natural beauty",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "shillong",
        name: "Shillong",
        region: "meghalaya",
        zone: "northeast",
        description: "Waterfalls, hills and pleasant weather",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "aizawl",
        name: "Aizawl",
        region: "mizoram",
        zone: "northeast",
        description: "Hills, valleys and local culture",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "kohima",
        name: "Kohima",
        region: "nagaland",
        zone: "northeast",
        description: "Mountain city and Naga heritage",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "gangtok",
        name: "Gangtok",
        region: "sikkim",
        zone: "northeast",
        description: "Himalayan views and monasteries",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "agartala",
        name: "Agartala",
        region: "tripura",
        zone: "northeast",
        description: "Palaces, temples and local culture",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80"
    }

];
/* =========================================
   TOURIST PLACE DATA
   Development / fallback dataset
========================================= */

const touristPlaces = [

    /* ================= PURI ================= */

    {
        id: "puri-beach",
        destination: "puri",
        name: "Puri Beach",
        category: "beach",
        rating: 4.7,
        description:
            "A popular coastal destination known for its beach and beautiful sunrise views.",
        latitude: 19.7983,
        longitude: 85.8249,
        image:
            "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "jagannath-temple",
        destination: "puri",
        name: "Jagannath Temple",
        category: "temple",
        rating: 4.8,
        description:
            "One of India's important pilgrimage destinations and a major attraction of Puri.",
        latitude: 19.8049,
        longitude: 85.8179,
        image:
            "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "puri-swargadwar",
        destination: "puri",
        name: "Swargadwar Beach",
        category: "beach",
        rating: 4.5,
        description:
            "A lively beach area close to central Puri.",
        latitude: 19.7900,
        longitude: 85.8250,
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
    },


    /* ================= KONARK ================= */

    {
        id: "konark-sun-temple",
        destination: "konark",
        name: "Konark Sun Temple",
        category: "heritage",
        rating: 4.8,
        description:
            "Historic temple famous for its architecture and stone chariot design.",
        latitude: 19.8876,
        longitude: 86.0945,
        image:
            "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=900&q=80"
    },


    /* ================= JAIPUR ================= */

    {
        id: "amber-fort",
        destination: "jaipur",
        name: "Amber Fort",
        category: "heritage",
        rating: 4.8,
        description:
            "A historic hill fort known for its architecture and royal heritage.",
        latitude: 26.9855,
        longitude: 75.8513,
        image:
            "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "hawa-mahal",
        destination: "jaipur",
        name: "Hawa Mahal",
        category: "heritage",
        rating: 4.7,
        description:
            "One of Jaipur's most recognizable historic buildings.",
        latitude: 26.9239,
        longitude: 75.8267,
        image:
            "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "city-palace-jaipur",
        destination: "jaipur",
        name: "City Palace",
        category: "heritage",
        rating: 4.6,
        description:
            "A large palace complex reflecting Jaipur's royal history.",
        latitude: 26.9258,
        longitude: 75.8237,
        image:
            "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=80"
    },


    /* ================= UDAIPUR ================= */

    {
        id: "city-palace-udaipur",
        destination: "udaipur",
        name: "City Palace Udaipur",
        category: "heritage",
        rating: 4.8,
        description:
            "A magnificent palace complex overlooking Lake Pichola.",
        latitude: 24.5760,
        longitude: 73.6835,
        image:
            "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "lake-pichola",
        destination: "udaipur",
        name: "Lake Pichola",
        category: "nature",
        rating: 4.7,
        description:
            "A scenic artificial lake surrounded by palaces and hills.",
        latitude: 24.5726,
        longitude: 73.6786,
        image:
            "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80"
    },


    /* ================= AHMEDABAD ================= */

    {
        id: "sabarmati-ashram",
        destination: "ahmedabad",
        name: "Sabarmati Ashram",
        category: "heritage",
        rating: 4.7,
        description:
            "A historically important site located beside the Sabarmati River.",
        latitude: 23.0607,
        longitude: 72.5800,
        image:
            "https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=900&q=80"
    },


    /* ================= GOA ================= */

    {
        id: "baga-beach",
        destination: "goa",
        name: "Baga Beach",
        category: "beach",
        rating: 4.5,
        description:
            "Popular North Goa beach with restaurants and water activities.",
        latitude: 15.5557,
        longitude: 73.7517,
        image:
            "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "calangute-beach",
        destination: "goa",
        name: "Calangute Beach",
        category: "beach",
        rating: 4.4,
        description:
            "One of Goa's best-known beaches.",
        latitude: 15.5449,
        longitude: 73.7553,
        image:
            "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80"
    },


    /* ================= MUMBAI ================= */

    {
        id: "gateway-india",
        destination: "mumbai",
        name: "Gateway of India",
        category: "heritage",
        rating: 4.7,
        description:
            "Historic waterfront monument overlooking the Arabian Sea.",
        latitude: 18.9220,
        longitude: 72.8347,
        image:
            "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=900&q=80"
    },


    /* ================= VARANASI ================= */

    {
        id: "dashashwamedh-ghat",
        destination: "varanasi",
        name: "Dashashwamedh Ghat",
        category: "heritage",
        rating: 4.8,
        description:
            "One of the most famous ghats along the Ganges.",
        latitude: 25.3060,
        longitude: 83.0107,
        image:
            "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=900&q=80"
    },


    /* ================= AGRA ================= */

    {
        id: "taj-mahal",
        destination: "agra",
        name: "Taj Mahal",
        category: "heritage",
        rating: 4.9,
        description:
            "One of India's most famous architectural landmarks.",
        latitude: 27.1751,
        longitude: 78.0421,
        image:
            "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80"
    },


    /* ================= DELHI ================= */

    {
        id: "india-gate",
        destination: "new-delhi",
        name: "India Gate",
        category: "heritage",
        rating: 4.7,
        description:
            "Iconic war memorial and major landmark in New Delhi.",
        latitude: 28.6129,
        longitude: 77.2295,
        image:
            "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=900&q=80"
    },


    /* ================= BENGALURU ================= */

    {
        id: "lalbagh",
        destination: "bengaluru",
        name: "Lalbagh Botanical Garden",
        category: "nature",
        rating: 4.6,
        description:
            "Large botanical garden featuring diverse plants and landscaped areas.",
        latitude: 12.9507,
        longitude: 77.5848,
        image:
            "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=900&q=80"
    },


    /* ================= MUNNAR ================= */

    {
        id: "tea-gardens-munnar",
        destination: "munnar",
        name: "Munnar Tea Gardens",
        category: "nature",
        rating: 4.8,
        description:
            "Beautiful tea-growing landscapes surrounded by hills.",
        latitude: 10.0889,
        longitude: 77.0595,
        image:
            "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80"
    },


    /* ================= SHILLONG ================= */

    {
        id: "elephant-falls",
        destination: "shillong",
        name: "Elephant Falls",
        category: "nature",
        rating: 4.5,
        description:
            "Popular waterfall surrounded by greenery near Shillong.",
        latitude: 25.5377,
        longitude: 91.8603,
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80"
    }

];




/* =========================================
   STAY DATA
   Development / fallback dataset
========================================= */

const stays = [

    /* =====================================
       JAIPUR
    ====================================== */

    {
        id: "jaipur-grand",
        destination: "jaipur",
        name: "Grand Jaipur Hotel",
        type: "hotel",
        rating: 4.5,
        price: 2499,
        location: "Jaipur City",
        description:
            "Comfortable hotel with modern rooms and convenient city access.",
        image:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "jaipur-palace",
        destination: "jaipur",
        name: "Royal Palace Resort",
        type: "resort",
        rating: 4.7,
        price: 3899,
        location: "Amer Road",
        description:
            "A relaxing resort inspired by Rajasthan's royal architecture.",
        image:
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "jaipur-villa",
        destination: "jaipur",
        name: "Pink City Villa",
        type: "villa",
        rating: 4.4,
        price: 3199,
        location: "Near Hawa Mahal",
        description:
            "Private villa suitable for families and small groups.",
        image:
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80"
    },


    /* =====================================
       PURI
    ====================================== */

    {
        id: "puri-sea-view",
        destination: "puri",
        name: "Sea View Puri Hotel",
        type: "hotel",
        rating: 4.4,
        price: 2199,
        location: "Puri Beach Road",
        description:
            "Comfortable accommodation close to the beach.",
        image:
            "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "puri-beach-resort",
        destination: "puri",
        name: "Puri Beach Resort",
        type: "resort",
        rating: 4.6,
        price: 3599,
        location: "Sea Beach",
        description:
            "Resort stay with easy access to the coastline.",
        image:
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "puri-guest-house",
        destination: "puri",
        name: "Coastal Guest House",
        type: "guesthouse",
        rating: 4.1,
        price: 1299,
        location: "Swargadwar",
        description:
            "Budget-friendly accommodation for travellers.",
        image:
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80"
    },


    /* =====================================
       GOA
    ====================================== */

    {
        id: "goa-beach-hotel",
        destination: "goa",
        name: "Goa Beach Hotel",
        type: "hotel",
        rating: 4.5,
        price: 2999,
        location: "Calangute",
        description:
            "Modern hotel near popular beaches and restaurants.",
        image:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80"
    },

    {
        id: "goa-palm-resort",
        destination: "goa",
        name: "Palm Grove Resort",
        type: "resort",
        rating: 4.7,
        price: 4499,
        location: "North Goa",
        description:
            "Relaxing resort surrounded by tropical greenery.",
        image:
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=900&q=80"
    },


    /* =====================================
       UDAIPUR
    ====================================== */

    {
        id: "udaipur-lake-hotel",
        destination: "udaipur",
        name: "Lake View Heritage Hotel",
        type: "hotel",
        rating: 4.6,
        price: 3299,
        location: "Lake Pichola",
        description:
            "Heritage-style accommodation near the lake.",
        image:
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=900&q=80"
    },


    /* =====================================
       MUMBAI
    ====================================== */

    {
        id: "mumbai-city-hotel",
        destination: "mumbai",
        name: "Mumbai City Hotel",
        type: "hotel",
        rating: 4.3,
        price: 4299,
        location: "South Mumbai",
        description:
            "Convenient city accommodation close to major attractions.",
        image:
            "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80"
    },


    /* =====================================
       AGRA
    ====================================== */

    {
        id: "agra-heritage",
        destination: "agra",
        name: "Taj Heritage Stay",
        type: "hotel",
        rating: 4.5,
        price: 2399,
        location: "Taj Ganj",
        description:
            "Comfortable stay near the Taj Mahal area.",
        image:
            "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80"
    },


    /* =====================================
       VARANASI
    ====================================== */

    {
        id: "varanasi-ganga-view",
        destination: "varanasi",
        name: "Ganga View Hotel",
        type: "hotel",
        rating: 4.4,
        price: 1999,
        location: "Near Ghat",
        description:
            "Convenient accommodation near the Ganges.",
        image:
            "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=900&q=80"
    },


    /* =====================================
       BENGALURU
    ====================================== */

    {
        id: "bengaluru-city-stay",
        destination: "bengaluru",
        name: "Bengaluru City Stay",
        type: "hotel",
        rating: 4.3,
        price: 2799,
        location: "Central Bengaluru",
        description:
            "Modern accommodation for business and leisure travellers.",
        image:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80"
    },


    /* =====================================
       MUNNAR
    ====================================== */

    {
        id: "munnar-hills-resort",
        destination: "munnar",
        name: "Munnar Hills Resort",
        type: "resort",
        rating: 4.8,
        price: 3799,
        location: "Tea Garden Area",
        description:
            "Peaceful mountain resort surrounded by greenery.",
        image:
            "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80"
    },


    /* =====================================
       SHILLONG
    ====================================== */

    {
        id: "shillong-hill-stay",
        destination: "shillong",
        name: "Shillong Hill Stay",
        type: "guesthouse",
        rating: 4.2,
        price: 1699,
        location: "Shillong",
        description:
            "Budget-friendly stay in the hill city.",
        image:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
    }

];