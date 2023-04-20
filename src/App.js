import React from 'react'
import Cards from './components/Cards'

const App = () => {
  let image1 = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/6646002/1.jpg?6207'
  let image2 = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/21/306344/1.jpg?0094'
  let image3 = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/465763/1.jpg?8910'
  let image4 = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/62/324807/1.jpg?2445'
  let image5 = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/5970061/1.jpg?9544'
  let image6 = 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/75/014127/1.jpg?2583'
  let image7 = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/072185/1.jpg?8709'
  let image8 = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/35/194511/1.jpg?8873'
  let image9 = 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/52/4841902/1.jpg?2431'
  let image10 = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/75/3289831/1.jpg?8035'
  let image11 = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/38/763689/1.jpg?1305'
  let image12 = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/58/726906/1.jpg?2905'
  let image13 = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/4938302/1.jpg?2208'
  let image14 = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/2101122/1.jpg?5470'
  let image15 = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/77/673875/1.jpg?1181'


  let title1 = 'Iphone 14 Pro-Max'
  let title2 = 'Double-Door Refridgerator'
  let title3 = 'Good washing Machine for Your Family'
  let title4 = 'HP Laptop, 512 ssd, corei7, 10th Gen, 16GB RAM'
  let title5 = 'HP Laptop, 252 ssd, corei7, 8th Gen, 8GB RAM'
  let title6 = 'Black Handbag for Ladies'
  let title7 = '2HP Hisense Air Conditioner'
  let title8 = 'Reacharable Standing Fan'
  let title9 = 'LG Sound Bar and Hoofer'
  let title10 = 'Weyon Home Thearter'
  let title11 = 'LG Home Thearter and Hoofer'
  let title12 = 'LG Home Thearter 10000-watt'
  let title13 = 'Multi-color Chandelier'
  let title14 = 'Home Decoration Chandelier'
  let title15 = 'Good washing Machine 8kg and dryer'

  let price1 = 'N1,040,000'
  let price2 = 'N200000'
  let price3 = 'N230,000'
  let price4 = 'N450,000'
  let price5 = 'N350,000'
  let price6 = 'N35,000'
  let price7 = 'N250,000'
  let price8 = 'N60,000'
  let price9 = 'N75,000'
  let price10 = 'N150,000'
  let price11 = 'N195,000'
  let price12 = 'N45,000'
  let price13 = 'N45,000'
  let price14 = 'N40,000'
  let price15 = 'N210,000'


  return (
    <div className='d-flex mb-1 mx-5 px-5 jsutify-content-between flex-wrap'>
      <Cards image={image1} title={title1} price={price1}/>
      <Cards image={image2} title={title2} price={price2}/>
      <Cards image={image3} title={title3} price={price3}/>
      <Cards image={image4} title={title4} price={price4}/>
      <Cards image={image5} title={title5} price={price5}/>
      <Cards image={image6} title={title6} price={price6}/>
      <Cards image={image7} title={title7} price={price7}/>
      <Cards image={image8} title={title8} price={price8}/>
      <Cards image={image9} title={title9} price={price9}/>
      <Cards image={image10} title={title10} price={price10}/>
      <Cards image={image11} title={title11} price={price11}/>
      <Cards image={image12} title={title12} price={price12}/>
      <Cards image={image13} title={title13} price={price13}/>
      <Cards image={image14} title={title14} price={price14}/>
      <Cards image={image15} title={title15} price={price15}/>
    </div>
  )
}

export default App
