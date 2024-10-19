import Image from "next/image"
import Link from "next/link" // Importataan Link-komponentti, jolla voidaan luoda navigointilinkkejä jotka eivät lataa kaikkea sisältöä uudelleen
import ProductCard from "./components/ProductCard/ProductCard"

export default function Home() {
  return (
    <main>
      <div>
        <h1>Weather App</h1>
        <Link href="/users">Users</Link>
        < ProductCard />
      </div>
    </main>
  );
}
