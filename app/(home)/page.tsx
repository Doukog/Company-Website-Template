import Consult from "@/components/home/consult"
import Area from "@/components/home/area"
import Serve from "@/components/home/serve"
import Visa from "@/components/home/visa"
export default function Home() {
  return (
    <>
      <div>
        <Visa />
        <Serve />
        <Area />
        <Consult />
      </div>
    </>
  );
}
