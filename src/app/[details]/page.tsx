"use client"
import { usePathname, useSearchParams } from 'next/navigation'
import Container from "../components/Container";
import ListingHead from "./ListingHead";
import ListingInfo from "./ListingInfo";
import ListingReservation from "./ListingReservation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { differenceInCalendarDays, eachDayOfInterval } from "date-fns";
import { Range } from "react-date-range";
import { toast } from "react-hot-toast";
import Navbar from "../components/common/Navbar/Navbar";
import resortData from "../components/common/data/resortData";



const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
};


const Details = () => {
    const [listing, setlisting] = useState({});
    const [reservations, setreservations] = useState([{startDate:0,endDate:0}]);
    useEffect(() =>{
        setlisting({resortData})
    },[resortData])
    const router = usePathname()
    const currentPageID = router.split('/')[1] as string
    const data = resortData.find(resort => resort.id === parseInt(currentPageID));
    console.log(data);
    
    const disabledDates = useMemo(() => {
        let dates: Date[] = [];

        reservations.forEach((reservation) => {
            const range = eachDayOfInterval({
                start: new Date(reservation.startDate),
                end: new Date(reservation.endDate),
            });

            dates = [...dates, ...range];
        });

        return dates;
    }, [reservations]);

    const [isLoading, setIsLoading] = useState(false);
    const [totalPrice, setTotalPrice] = useState(data?.price);
    const [dateRange, setDateRange] = useState<Range>(initialDateRange);
    const onCreateReservation = useCallback(() => {
        setIsLoading(true);

                toast.success("Reservation added successfully");
                setDateRange(initialDateRange);
        
                setIsLoading(false);
    }, [
        reservations,
        listing,
        dateRange,
        totalPrice,
    ]);
    useEffect(() => {
        if (dateRange.startDate && dateRange.endDate) {
            const dayCount = differenceInCalendarDays(
                dateRange.endDate,
                dateRange.startDate
            );

            if (dayCount && data?.price) {
                setTotalPrice(dayCount * data?.price);
            } else {
                setTotalPrice(data?.price);
            }
        }
    }, [dateRange, data?.price]);


    return (
        <>
   
            <Navbar/>
        <Container>
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6">
                    <ListingHead
                       id={data?.id}
                       title={data?.name}
                       location={data?.location}
                       imageSrc='/images/image1.jpg'
                    />
                    <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
                        <ListingInfo
                           description={'listing.description'}
                           guestCount={8}
                           roomCount={2}
                           bathroomCount={2}
                           location={`${data?.location}`}
                        />
                        <div className="order-first mb-10 md:order-last md:col-span-3">
                            <ListingReservation
                                price={Number(data?.price)}
                                totalPrice={Number(data?.price)}
                                onChangeDate={(value) => setDateRange(value)}
                                dateRange={dateRange}
                                onSubmit={onCreateReservation}
                                disabled={isLoading}
                                disabledDates={disabledDates}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        </>
    );
}
export default Details