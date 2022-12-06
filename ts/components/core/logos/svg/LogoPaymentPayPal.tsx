import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGLogoProps } from "../LogoPayment";

const LogoPaymentPayPal = ({ size }: SVGLogoProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M19.22 7.336c.26-1.634 0-2.746-.894-3.752C17.341 2.476 15.564 2 13.291 2H6.689a.952.952 0 0 0-.614.225.932.932 0 0 0-.319.564L3.007 20.023a.554.554 0 0 0 .323.596.572.572 0 0 0 .237.052h4.075l-.281 1.764a.484.484 0 0 0 .279.52.5.5 0 0 0 .206.046h3.435a.832.832 0 0 0 .532-.197.815.815 0 0 0 .278-.49l.035-.172.646-4.057.042-.229a.816.816 0 0 1 .28-.491.833.833 0 0 1 .536-.195h.513c3.328 0 5.934-1.336 6.695-5.203.318-1.616.154-2.963-.687-3.912a3.25 3.25 0 0 0-.94-.717"
      fill="#009CDE"
    />
    <Path
      d="M19.22 7.336c.26-1.634 0-2.746-.894-3.752C17.341 2.476 15.564 2 13.291 2H6.689a.952.952 0 0 0-.614.225.932.932 0 0 0-.319.564L3.007 20.023a.554.554 0 0 0 .323.596.572.572 0 0 0 .237.052h4.075l1.024-6.418-.031.201a.927.927 0 0 1 .315-.563.946.946 0 0 1 .61-.225h1.937c3.805 0 6.783-1.529 7.653-5.95.025-.13.047-.257.067-.381"
      fill="#012169"
    />
    <Path
      d="M9.765 7.358a.812.812 0 0 1 .463-.61.826.826 0 0 1 .356-.08h5.175c.571-.004 1.142.037 1.706.123a7.014 7.014 0 0 1 .847.186l.196.06c.246.08.485.18.715.299.259-1.634 0-2.746-.895-3.752C17.344 2.476 15.567 2 13.293 2H6.689a.952.952 0 0 0-.614.225.932.932 0 0 0-.319.564L3.007 20.023a.554.554 0 0 0 .323.596.572.572 0 0 0 .237.052h4.075l1.024-6.418 1.1-6.895Z"
      fill="#003087"
    />
  </Svg>
);

export default LogoPaymentPayPal;