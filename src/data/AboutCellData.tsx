export type AboutCellDataType = {
    title: string,
    subtitle: string,
    image: string
}


const aboutCellData: Array<AboutCellDataType> = [
    {
      title: 'Hobbies',
      subtitle: 'What I do in my free time',
      image: '/hobbies.png'
    }, {
      title: 'Travel',
      subtitle: 'Lets see where ive been',
      image: '/travel.png'
    }
]


export default aboutCellData;