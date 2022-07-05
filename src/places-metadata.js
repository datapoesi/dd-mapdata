
const METADATA = {
    // from: https://www.ica.se/butiker/
	// how: copy the json file from the network tab -> filter the array for ShortProfileName === "maxi" -> filter the array for the coordinates -> (coordinate / 10**5)
    icamaxi: {
        value: "icamaxi",
        name: "ICA Maxi",
        count: 87,
        averageCoord: [15.39884632183908,58.598537586206895],
        description: "ICA is the leading grocery retailer in Sweden, with around 1300 stores and a market share of around 36%. Shown on the map are NOT all of these 1300 ICA stores, but rather their largest type of store, the 'ICA Maxi Stormarknad'. These are hypermarkets with a wide range of groceries, as well as non-food items such as housewares, entertainment, and garden supplies.",
    },

    // from: https://www.ikea.com/se/sv/stores/
	// how: copy the json file from the network tab -> filter the features array for the geometry.coordinates
    ikea: {
        value: "ikea",
        name: "IKEA",
        count: 22,
        averageCoord: [15.86243378181818,59.24982607727274],
        description: "IKEA designs and sells furniture, kitchen appliances, and home accessories. It's the world's largest furniture retailer with around 450 locations globally.",
    },

    // from: https://sv.wikipedia.org/wiki/Lista_%C3%B6ver_Sveriges_%C3%A4ldsta_f%C3%B6retag
    oldestcompanies: {
        value: "oldestcompanies",
        name: "Oldest companies (still active)",
        count: 40,
        averageCoord: [15.297745408707323,58.54811563967479],
        description: "Take 'active' with a grain of salt. It just means that they are still active in one way or another. Some of these companies have since being founded been absorbed by other companies and become subsidiaries. Others have changed name, location, and even business operations. Whether that still makes them the same company is for the <a href='https://youtu.be/LAh8HryVaeY' target='_blank'>philosophers</a> to decide.",
    },
    
    // from: https://www.domstol.se/hitta-domstol/allmanna-domstolar/tingsratter/
    districtcourts: {
        value: "districtcourts",
        name: "District courts",
        count: 48,
        averageCoord: [16.067704114652773,59.43269646787718],
        description: "In Sweden, there are three types of general courts: the district courts, the courts of appeal, and the supreme court. The district court (Swedish: tingsrätt) is the first instance you'd come in contact with in a criminal case, a civil law dispute, or non-contentious matters. Proceedings in this court are generally open to the public. The second, and next instance after district courts, are the courts of appeal (Swedish: hovrätt), which deal with appeals against decisions of the district courts. The third and final instance, in a civil or criminal case, is the Supreme Court (Swedish: Högsta domstolen).",
    },

    // from: https://www.kronansapotek.se/store-finder/
	// how: search for "sverige" -> find the json query -> add "&page=1" as a parameter to the query -> copy the json objects of all the pages -> filter for coordinates
    kronans: {
        value: "kronans",
        name: "Pharmacy (Kronans)",
        count: 314,
        averageCoord: [15.466329582802544,59.12684053503183],
        description: "'Kronans Apotek' is a Swedish pharmacy company, and the third largest pharmacy chain in the country. It was founded in 1907 with history going back to the early 18th century.",
    },

    // from: https://www.kriminalvarden.se/fangelse-frivard-och-hakte/fangelse/vara-anstalter/
    prisons: {
        value: "prisons",
        name: "Prisons",
        count: 45,
        averageCoord: [16.046506022222225,59.19030015555556],
        description: "While every prison serves the same basic purpose, the prisons in Sweden have different classifications of security – from 1 to 3, where 1 is the highest classification and 3 is the lowest.",
    },

    // from: https://www.max.se/hitta-max/restauranger/
	// how: each individual restaurant has its own page with its own metadata, including coordinates -> extract these coordinates with scraping or by copying the 'MAX.restaurant' object
    max: {
        value: "max",
        name: "MAX hamburgers",
        count: 134,
        averageCoord: [15.899692751492545,59.223979081343295],
        description: "MAX Burgers AB is the oldest chain of hamburger fast food restaurants in Sweden. These days they're nationwide, but before the 1990s most of their locations and popularity was in northern Sweden.",
    },

    // from: https://polisen.se/api/policestations
	// note: there are three stations without coordinates ([0,0]); remove them.
    policestations: {
        value: "policestations",
        name: "Police stations",
        count: 274,
        averageCoord: [15.355998115328468,59.289423144525585],
        description: "&#60;no description needed&#62;",
    },

    // from: https://github.com/wri/global-power-plant-database
	// how: download and filter the csv file for the coordinates columns
    powerplants: {
        value: "powerplants",
        name: "Power plants",
        count: 168,
        averageCoord: [16.20785595238095,61.71807321428572],
        description: "Most energy production in Sweden comes from hydro power and nuclear power. The energy sources for power plants in Sweden are hydro at 142 power plants, wind at 10, biomass at 8, nuclear at 3, gas at 3, oil at 1, and coal at 1.",
    },

    // from: https://bee.se/kundservice/laddkarta/
	// how: simply copy and filter the json object
    chargingstations: {
        value: "chargingstations",
        name: "EV charging stations",
        count: 446,
        averageCoord: [15.343572544843065,59.03586594618839],
        description: "An EV charging station is a machine that supplies electric energy for the recharging of electric vehicles. The displayed data is not of all charging stations in Sweden, but just those of one of the leading EV charging operators, a company called 'Bee'.",
    },

    // from: hitta.se
	// API query used: "https://api.hitta.se/search/v7/map/complex/weblist/flat/within/54.40452:10.12076,69.58352:24.78872?query=ingrid%20bergman&page.size=250&plc.single=undefined&shape.typecodes=l%C3%A4n&shape.typecodes=kommun&shape.typecodes=stadsdel&shape.typecodes=postort&shape.typecodes=landskap&shape.typecodes=%C3%B6&shape.typecodes=omr%C3%A5de&shape.typecodes=vatten&type=prv&prv.page.size=250&prv.page.number=1"
    ingridbergman: {
        value: "ingridbergman",
        name: "Ingrid Bergman",
        count: 203,
        averageCoord: [16.132403971606216,59.5009873049529],
        description: "Individuals, living in Sweden, whose first or middle name is INGRID and whose last name is BERGMAN.",
    },

    // from: openstreetmap.org
	// query tool used: overpass-turbo.eu
	// coordinates from node ID by requesting: https://api.openstreetmap.org/api/0.6/node/{NODE ID HERE}
    hospitals: {
        value: "hospitals",
        name: "Hospitals",
        count: 175,
        averageCoord: [15.72708045371428,59.34572754114289],
        description: "&#60;no description needed&#62;",
    },

    // from: openstreetmap.org
	// query tool used: overpass-turbo.eu
	// coordinates from node ID by requesting: https://api.openstreetmap.org/api/0.6/node/{NODE ID HERE} 
    firestations: {
        value: "firestations",
        name: "Fire stations",
        count: 488,
        averageCoord: [15.295312813729504,59.174471618032825],
        description: "&#60;no description needed&#62;",
    },

    // from: systembolaget.se/butiker-ombud/
	// how: by copying the API JSON response
    systembolaget: {
        value: "systembolaget",
        name: "Systembolaget",
        count: 447,
        averageCoord: [15.542727814026993,59.17940289878541],
        description: "Systembolaget is a government-owned chain of liquor stores in Sweden. It is the only retail store allowed to sell alcoholic beverages that contain more than 3.5% alcohol by volume.",
    },

    // from: lexbase.se
    trialsubjects: {
        value: "trialsubjects",
        name: "Subjects of criminal trial",
        count: 96,
        averageCoord: [14.90825185453094,58.29532085264662],
        description: "Individuals who have been the subject of criminal trials during the last five years. Shown on the map are only those whose last name is SVENSSON and whose first or middle name is SVEN. For privacy reasons, I chose to have the coordinates represent locality and not exact address.",
    },
}

export default METADATA
