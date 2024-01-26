import DestinationSearch from './components/DestinationSearch/index'

import './App.css'

const destinationsList = [
  {
    id: 1,
    name: 'Ayodhya Ram Mandir',
    imgUrl:
      'https://media.cnn.com/api/v1/images/stellar/prod/230915082701-04-india-ram-mandir-rebuild.jpg?c=original',
  },
  {
    id: 2,
    name: 'Taj Mahal',
    imgUrl:
      'https://cdn.pixabay.com/photo/2015/07/29/22/56/taj-mahal-866692_1280.jpg',
  },
  {
    id: 3,
    name: 'Sardar Vallabhbhai Patel statue',
    imgUrl:
      'https://imgk.timesnownews.com/story/1540879636-Dp3XmWvX4AA4w62.jpg?tr=w-1200,h-900',
  },
  {
    id: 4,
    name: 'Red Fort',
    imgUrl:
      'https://www.deccanodysseytrains.com/blog/wp-content/uploads/2018/05/Red_Fort-Delhi-India.jpg',
  },
  {
    id: 5,
    name: 'Goa Beach',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/BeachFun.jpg',
  },
  {
    id: 6,
    name: 'Mysore Palace',
    imgUrl:
      'https://as2.ftcdn.net/v2/jpg/03/03/88/89/1000_F_303888934_Fuq3FS0ShprSPjePYIpuwCdEnIaWBjDH.jpg',
  },
  {
    id: 7,
    name: 'Golden Temple',
    imgUrl:
      'https://www.holidify.com/images/cmsuploads/compressed/shutterstock_479585620_20191024174904_20200407155734.jpg',
  },
  {
    id: 8,
    name: 'India Gate',
    imgUrl:
      'https://mediaim.expedia.com/destination/1/2d75301e5fa5840846672492693f1fb3.jpg',
  },
  {
    id: 9,
    name: 'Varanasi',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg/800px-Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg',
  },
  {
    id: 10,
    name: 'Ooty',
    imgUrl:
      'https://ihplb.b-cdn.net/wp-content/uploads/2016/07/botanical-gardens.jpg',
  },
  {
    id: 11,
    name: 'Tirupati',
    imgUrl: 'https://etimg.etb2bimg.com/photo/95345517.cms',
  },
  {
    id: 12,
    name: 'Ramappa',
    imgUrl:
      'https://images.indianexpress.com/2021/07/RamappaTempleUNESCO_1200.jpg',
  },
]

const App = () => <DestinationSearch destinationsList={destinationsList} />

export default App
