import resortData from "../common/data/resortData"
import Card from "./Card"

const Cards = () => {

    return <>
    {resortData.map((item, index)=>(
       <Card data={item} key={index}/>
    ))}
    </>
}
export default Cards;