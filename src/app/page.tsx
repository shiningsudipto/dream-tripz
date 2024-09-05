import { poppins } from "./layout";

export default function Home() {
  return (
    <main className="">
      <p>Testing Mulish font</p>
      <p className={`${poppins.className} text-xl font-medium`}>
        Testing Poppins font
      </p>
    </main>
  );
}
