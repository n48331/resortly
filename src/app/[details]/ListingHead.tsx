import Heading from "../components/Heading"
import Image from "next/image";

interface ListingHeadProps {
    id: number | undefined;
    title: string | undefined;
    imageSrc: string;
    location: string | undefined;
}

const ListingHead = ({id,title,imageSrc,location}:ListingHeadProps) =>{
    return(
        <>
        <Heading
           title={`${title}`}
            subtitle={location}
        />
        <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
            <Image
                alt={'title'}
                src={'/images/image1.jpg'}
                fill
                className="object-cover w-full"
            />
         
        </div>
    </>
    )
}

export default ListingHead;