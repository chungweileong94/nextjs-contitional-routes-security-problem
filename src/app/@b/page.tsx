import { getRandom } from "../data";

export default async function BPage() {
  // Without the check below, the page content will be leaked if user access the page with `RSC=1` header.
  // const aOrB = await getRandom();
  // if (aOrB === "A") return null;
  return <div>PAGY B</div>;
}
