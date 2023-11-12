"use client";

import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

import Image from "next/image";
import Button from "../components/common/Buttons/Buttons";
import { useState } from "react";
// interface ListingCardProps {
//     data: Listing;
//     reservation?: Reservation;
//     disabled?: boolean;
//     actionLabel?: string;
//     actionId?: string;
//     onAction?: (id: string) => void;
//     // currentUser?: User | null;
// }

const ListingCard: React.FC = ({
    // data,
    // reservation,
    // disabled,
    // actionLabel,
    // actionId = "",
    // onAction,
    // currentUser,
}) => {
    const router = useRouter();
    const [reservation, setreservation] = useState({totalPrice:0,startDate:0,endDate:0});
    const data = {price:600,category:''}
    const location = {label:'wayanad',region:'kalpatta'};
    const price = useMemo(() => {
        if (reservation) {
            return reservation.totalPrice;
        }
        return data.price;
    }, [reservation, data]);

    const reservationDate = useMemo(() => {
        if (!reservation) {
            return null;
        }

        const startDate = new Date(reservation.startDate);
        const endDate = new Date(reservation.endDate);
        return `${format(startDate, "PP")} - ${format(endDate, "PP")}`;
    }, [reservation]);

    // const handleCancel = useCallback(
    //     (e: React.MouseEvent<HTMLButtonElement>) => {
    //         e.stopPropagation();

    //         if (disabled) {
    //             return;
    //         }

    //         onAction?.(actionId);
    //     },
    //     [actionId, onAction, disabled]
    // );

    return (
        <div
            onClick={() => router.push(`/listings/${1}`)}
            className="col-span-1 cursor-pointer group"
        >
            <div className="flex flex-col gap-2 w-full">
                <div className="aspect-square w-full relative overflow-hidden rounded-xl">
                    <Image
                        alt="Listing"
                        src='images/image1.jpg'
                        fill
                        className="object-cover h-full w-full group-hover:scale-110 transition"
                    />
                    {/* <div className="absolute top-3 right-3">
                        <HeartButton
                            listingId={data.id}
                            currentUser={currentUser}
                        />
                    </div> */}
                </div>

                <div className="font-semibold text-md">
                    {location?.label}, {location?.region}
                </div>

                <div className="font-light text-neutral-500">
                    {reservationDate || data.category}
                </div>

                <div className="flex flex-row items-center gap-1">
                    <div className="font-semibold text-[15px]">₹ {price}</div>

                    {!reservation && <div className="font-light">/ night</div>}
                </div>

                {/* {actionLabel && onAction && (
                    <Button
                        label={actionLabel}
                        disabled={disabled}
                        small
                        onClick={handleCancel} 
                    />
                )} */}
            </div>
        </div>
    );
};

export default ListingCard;
