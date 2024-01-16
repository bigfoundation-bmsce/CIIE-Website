import "../../utils/launchPad.css"
import "../../utils/launchPad1.css"
import "../../utils/global.css"
import {FAQ, LaunchPadFooter, LaunchPadSection1, LaunchPadSection2, LaunchPadSection3, LaunchPadSection4, LaunchPadSection5, LaunchPadSection6} from "../../Components"

const LaunchPad = () => {
  return (
    <div>
      {/* <div className="preloader">
        <div className="lds-ellipsis">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div> */}
      <div className="off_canvars_overlay"></div>
      <LaunchPadSection1/>
      <LaunchPadSection2/>
      <LaunchPadSection3/>
      <LaunchPadSection4/>
      <LaunchPadSection5/>
      <LaunchPadSection6/>
      <FAQ/>
      <LaunchPadFooter/>
    </div>
  );
};

export default LaunchPad;
