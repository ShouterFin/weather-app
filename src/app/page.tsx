import Image from "next/image"
// import Link from "next/link" // Importataan Link-komponentti, jolla voidaan luoda navigointilinkkejä jotka eivät lataa kaikkea sisältöä uudelleen
import ProductCard from "./components/ProductCard/ProductCard"
import { Suspense } from "react";
import Carousel from "./components/Carousel/Carousel";

const imageStyle = {
  borderRadius: "1rem",
  width: "100%",
  height: "auto",
}

export default function Home() {
  return (
    <main>
      <div className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Image
            src="/images/weather-app.png"
            style={imageStyle}
            width={1920}
            height={1080}
            alt={"Weather App"}
            />
          </Suspense>
        < Carousel />
        < ProductCard />
      </div>
    </main>
  );
}
