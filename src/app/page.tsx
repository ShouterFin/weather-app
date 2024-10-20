import Image from "next/image"
import Link from "next/link" // Importataan Link-komponentti, jolla voidaan luoda navigointilinkkejä jotka eivät lataa kaikkea sisältöä uudelleen
import ProductCard from "./components/ProductCard/ProductCard"
import weatherimg from "../images/weather-app.png" // Tuodaan kuva käyttöön
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <div className="py-5">
        <p className="text-2xl text-center">Weather App</p>
        <Suspense fallback={<div>Loading...</div>}>
          <Image src={weatherimg} alt={"Weather App"}></Image>
        </Suspense>
        < ProductCard />
      </div>
    </main>
  );
}
