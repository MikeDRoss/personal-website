//TODO: change all file formats to .jpg and compress images
//TODO: programatically populate map with folder naming conventions
//TODO: look into srcsets to provide smaller images for mobile

const countryImageMap: any = 
{
     USA: 
     {
        "name" : "United States",
        "imageData" : [
        {
            "original": process.env.PUBLIC_URL + "/travel.jpg",
            "thumbnail": process.env.PUBLIC_URL + "/travel.jpg"
        },
        {
            "original": process.env.PUBLIC_URL + "/hobbies.jpg",
            "thumbnail": process.env.PUBLIC_URL + "/hobbies.jpg"
        }
        ]
    },
    THA: 
    {
        "name" : "Thailand",
        "imageData" : [
        {
            "original": process.env.PUBLIC_URL + "/img/thailand/thailand_0.png",
            "thumbnail": process.env.PUBLIC_URL + "/img/thailand/thailand_0.png"
        },
        {
            "original": process.env.PUBLIC_URL + "/img/thailand/thailand_1.png",
            "thumbnail": process.env.PUBLIC_URL + "/img/thailand/thailand_1.png"
        },
        {
            "original": process.env.PUBLIC_URL + "/img/thailand/thailand_2.png",
            "thumbnail": process.env.PUBLIC_URL + "/img/thailand/thailand_2.png"
        },
        {
            "original": process.env.PUBLIC_URL + "/img/thailand/thailand_3.png",
            "thumbnail": process.env.PUBLIC_URL + "/img/thailand/thailand_3.png"
        }
        ]
    },
    KHM:
    {
        "name" : "Cambodia",
        "imageData" : [
        {
            "original": process.env.PUBLIC_URL + "/img/cambodia/cambodia_0.png",
            "thumbnail": process.env.PUBLIC_URL + "/img/cambodia/cambodia_0.png"
        },
        {
            "original": process.env.PUBLIC_URL + "/img/cambodia/cambodia_1.png",
            "thumbnail": process.env.PUBLIC_URL + "/img/cambodia/cambodia_1.png"
        }
        ]
    },
    VNM:
    {
        "name" : "Vietnam",
        "imageData" : [
        {
            "original": process.env.PUBLIC_URL + "/img/vietnam/vietnam_0.png",
            "thumbnail": process.env.PUBLIC_URL + "/img/vietnam/vietnam_0.png"
        },
        {
            "original": process.env.PUBLIC_URL + "/img/vietnam/vietnam_1.png",
            "thumbnail": process.env.PUBLIC_URL + "/img/vietnam/vietnam_1.png"
        },
        {
            "original": process.env.PUBLIC_URL + "/img/vietnam/vietnam_2.png",
            "thumbnail": process.env.PUBLIC_URL + "/img/vietnam/vietnam_2.png"
        },
        {
            "original": process.env.PUBLIC_URL + "/img/vietnam/vietnam_3.png",
            "thumbnail": process.env.PUBLIC_URL + "/img/vietnam/vietnam_3.png"
        },
        {
            "original": process.env.PUBLIC_URL + "/img/vietnam/vietnam_4.png",
            "thumbnail": process.env.PUBLIC_URL + "/img/vietnam/vietnam_4.png"
        },
        {
            "original": process.env.PUBLIC_URL + "/img/vietnam/vietnam_5.png",
            "thumbnail": process.env.PUBLIC_URL + "/img/vietnam/vietnam_5.png"
        }
        ]
    },
    COL:
    {
        "name" : "Colombia",
        "imageData" : [
        {
            "original": process.env.PUBLIC_URL + "/img/colombia/colombia_0.jpg",
            "thumbnail": process.env.PUBLIC_URL + "/img/colombia/colombia_0.jpg"
        },
        {
            "original": process.env.PUBLIC_URL + "/img/colombia/colombia_1.jpg",
            "thumbnail": process.env.PUBLIC_URL + "/img/colombia/colombia_1.jpg"
        },
        {
            "original": process.env.PUBLIC_URL + "/img/colombia/colombia_2.jpg",
            "thumbnail": process.env.PUBLIC_URL + "/img/colombia/colombia_2.jpg"
        },
        {
            "original": process.env.PUBLIC_URL + "/img/colombia/colombia_3.jpg",
            "thumbnail": process.env.PUBLIC_URL + "/img/colombia/colombia_3.jpg"
        },
        {
            "original": process.env.PUBLIC_URL + "/img/colombia/colombia_4.jpg",
            "thumbnail": process.env.PUBLIC_URL + "/img/colombia/colombia_4.jpg"
        },
        {
            "original": process.env.PUBLIC_URL + "/img/colombia/colombia_5.jpg",
            "thumbnail": process.env.PUBLIC_URL + "/img/colombia/colombia_5.jpg"
        }
        ]
    }
};

export default countryImageMap;