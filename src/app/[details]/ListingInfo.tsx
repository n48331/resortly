"use client";

import { IconType } from "react-icons";
import dynamic from "next/dynamic";



import ListingCategory from "./ListingCategory";


interface ListingInfoProps {
    description: string;
    guestCount: number;
    roomCount: number;
    bathroomCount: number;
    location: string;
    category?: {
        icon: IconType;
        label: string;
        description: string;
    };
}

const Map = dynamic(() => import("../components/LocationMap"), {
    ssr: false,
});

const ListingInfo: React.FC<ListingInfoProps> = ({
    description,
    guestCount,
    roomCount,
    bathroomCount,
    location,
    category,
}) => {


    const locationCoordinates = [11.339680292589417, 76.05624464822917]

    return (
        <div className="col-span-4 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <div className="text-xl font-semibold flex flex-row items-center gap-2">
                    <div>Hosted by Nabeel</div>
                  
                </div>

                <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
                    <div>{guestCount} guests</div>
                    <div>{roomCount} rooms</div>
                    <div>{bathroomCount} bathrooms</div>
                </div>
            </div>
            <hr />

            {category && (
                <ListingCategory
                    icon={category.icon}
                    label={category.label}
                    description={category.description}
                />
            )}
            <hr />

            <div className="text-lg font-light text-neutral-500">
                {description}
            </div>
            <hr />

            <Map center={locationCoordinates} />
        </div>
    );
};

export default ListingInfo;
