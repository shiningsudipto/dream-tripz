import { poppins } from "./layout";

export default function Home() {
  return (
    <main className="">
      <p>Testing Mulish font</p>
      <p className={`${poppins.className} text-xl font-medium`}>
        Testing Poppins font -1
      </p>
    </main>
  );
}
