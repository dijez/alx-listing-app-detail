import { PROPERTYLISTINGSAMPLE } from "@/constants"
import { useRouter } from "next/router"
import PropertyDetail from "@/components/property/PropertyDetail"
import ReviewSection from "@/components/property/ReviewSection";
import BookingSection from "@/components/property/BookingSection";

export default function PropertyPage() {
    const router = useRouter();
    const {id} = router.query;

    if(!id)
        return <p>
            Loading.....
        </p>

    // const property = PROPERTYLISTINGSAMPLE.find(
    //     (item) => item.name === id
    // )
    
    const property = PROPERTYLISTINGSAMPLE.find(
    (item) => item?.id?.toString() === id
  );
    


    if(!property) 
        return
    <p>
        Propert Not Found
    </p>

    return(
        <div>
            <PropertyDetail  property={property} />
            <ReviewSection reviews={[]} />
            <BookingSection price={0} />
        </div>
    )
}