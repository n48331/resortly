import { useRouter } from "next/navigation";
import Image from "next/image"; 
 interface cardProps {
    data:any
 }

const Card = ({data}:cardProps) => {
    const router = useRouter();
    return (
        <>
            <div
                onClick={() => router.push(`/${data.id}`)}
                className="col-span-1 cursor-pointer group"
            >
                <div className="flex flex-col gap-2 w-full">
                    <div className="aspect-square w-full relative overflow-hidden rounded-xl">
                        <Image
                            alt="Listing"
                            src={'/images/image1.jpg'}
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
                        {data.name}
                    </div>

                    <div className="font-light text-neutral-500">
                        {data.location}
                    </div>

                    <div className="flex flex-row items-center gap-1">
                        <div className="font-semibold text-[15px]">₹ {data.price}</div>

                        {<div className="font-light">/ night</div>}
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
        </>
    )
}

export default Card;