import { GoogleTagManager } from "./GoogleTagManager";
import { GoogleAnalytics } from "./GoogleAnalytics";
import { MetaPixel } from "./MetaPixel";
import { MicrosoftClarity } from "./MicrosoftClarity";

export function Analytics() {
  return (
    <>
      <GoogleTagManager />
      <GoogleAnalytics />
      <MetaPixel />
      <MicrosoftClarity />
    </>
  );
}
