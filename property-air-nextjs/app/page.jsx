import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";

const HomePage = () => {
  //We are able to read it MONGO
  //console.log(process.env.MONGODB_URI)
  return (
        <>
          <Hero />
          <InfoBoxes />
          <HomeProperties />
        </>
    );
}
 
export default HomePage
