import React, { useState } from 'react'
import Section1 from './components/Section1/Section1'

const App = () => {
  const [song, setsong] = useState("")
  const users = [
    {
      image : 'https://i.pinimg.com/736x/3e/89/c5/3e89c5ecb57bf32ef85b95c3e764cf93.jpg',
      lyrics: 'Kaaga re kaaga re mori itni araj tose, Chun chun khaiyo maans, Kaaga re kaaga re mori itni araj tose, Chun chun khaiyo maans. Arajiya re khaaiyo na tu naina moreKhaiyon na tu naina mohePiya ke milan ki aasKhaiyon na tu naina moreKhaiyon na tu naina mohePiya ke milan ki aas',
      song: "https://open.spotify.com/embed/track/6Z394Nd4gW6Ts9hmu3NUjx?utm_source=generator&si=3b205380b3e24301"
    },
    {
      image : 'https://i.pinimg.com/736x/ba/3d/02/ba3d02679fdcc6f1df8fb0264978522b.jpg',
      lyrics: 'Jab kahin pe kuch nahi tha, wahi tha, wahi tha Jab kahin pe kuch nahi tha, wahi tha, wahi tha Woh jo mujh me samaya, woh jo tujh me samaya Maula wahi wahi maaya Woh jo mujh me samaya, woh jo tujh me samaya Maula wahi wahi maaya',
      song:"https://open.spotify.com/embed/track/7F8RNvTQlvbeBLeenycvN6?utm_source=generator&si=1f5fe796d9a04d89" 
    },
    {
      image: 'https://i.pinimg.com/736x/63/3d/96/633d9694b92b9d23a3049615302f1cc9.jpg',
      lyrics: 'Tum logon ki iss duniya mein Har kadam pe, insaan galat hai Tum sahi kehte ho, Naadan hoon main Ye bhi sahi, ki insaan galat hai. Marzi se jeene ki bhi main Kya tum sabko arzi doon, Matlab ki tum sabka mujhpe, Mujhse bhi zyada haq hai, Saadda haq, aithe rakh',
      song:"https://open.spotify.com/embed/track/7k3jpyYPnVnbO0p7iejWxL?utm_source=generator&si=bdb8316efdf44aed" 
    },
    {
      image: 'https://i.pinimg.com/736x/ce/43/29/ce43297d5046ff4d34b5793480f7089c.jpg',
      lyrics: 'Aaj se tera bandh Bahar hai jaana Yeh sunkar rani Muskaayi boli woh gaana Sone ki deewarein Mujhe khushi na yeh de paaye Aye…aazadi de de Mujhe mere khuda, Le le tu daulat aur kar de riha',
      song:"https://open.spotify.com/embed/track/7gUhBUzFbGRYGgtDubhTSG?utm_source=generator&si=1e3b652abd3441ef"
    }
  ]
  return (
    <div>
      <Section1 users = {users} setsong={setsong}/>
      {song && (
      <div className="fixed bottom-2 left-16 rounded-xl overflow-hidden z-20">
        <iframe
          src={song}
          width="450"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media"
        />
      </div>
    )}
    </div>
  )
}


export default App
