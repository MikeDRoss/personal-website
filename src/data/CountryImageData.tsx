const countryImageMap: any = 
{
     USA: 
        {
            "country" : "United States",
            "imageData" : [
            {
                "original": process.env.PUBLIC_URL + "/travel.png",
                "thumbnail": process.env.PUBLIC_URL + "/travel.png"
            },
            {
                "original": process.env.PUBLIC_URL + "/hobbies.png",
                "thumbnail": process.env.PUBLIC_URL + "/hobbies.png"
            }
            ]
        }
};

export default countryImageMap;