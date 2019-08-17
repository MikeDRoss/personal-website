export type AboutCellDataType = {
    title: string,
    subtitle: string,
    image: string,
    link: string
}


const aboutCellData: Array<AboutCellDataType> = [
    {
      title: 'Hobbies',
      subtitle: 'What I do in my free time',
      image: '/hobbies.png',
      link: process.env.PUBLIC_URL
    }, {
      title: 'Travel',
      subtitle: 'Lets see where ive been',
      image: '/travel.png',
      link: 'travel'
    }
]


export default aboutCellData;