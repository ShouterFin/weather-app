import Image from "next/image"
// import Link from "next/link" // Importataan Link-komponentti, jolla voidaan luoda navigointilinkkejä jotka eivät lataa kaikkea sisältöä uudelleen
import ProductCard from "./components/ProductCard/ProductCard"
import { Suspense } from "react";
import Carousel from "./components/Carousel/Carousel";

export default function Home() {
  return (
    <main>
      <div className="py-5">
        <Suspense fallback={<div>Loading...</div>}>
          <Image src="/images/weather-app.png" width={1920} height={1080} alt={"Weather App"}></Image>
        </Suspense>
        < Carousel />
        < ProductCard />
      </div>
    </main>
  );
}
