import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-s-M.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()
  const didAnimate = useRef(false);

  useEffect(() => {

	if (didAnimate.current) { return; }
	// otherwise, record that we're running it now and continue...
	didAnimate.current = true;

    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 0.7,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 5,
      })
	  .to(outlineLogoRef.current, {
		duration: 2,
        opacity:0
      })



    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 0.9,
        delay: 5,
        duration: 5,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 30)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="
M77.145134,17.735725 
	C95.059387,13.611338 105.748161,21.974180 108.267189,41.434380 
	C110.567184,59.202431 109.927277,76.947998 108.508827,94.728943 
	C107.703377,104.825798 107.295143,114.954338 106.648552,126.093010 
	C110.110107,118.260406 113.014236,111.163383 116.335335,104.267151 
	C129.364792,77.211533 144.499893,51.348652 160.864182,26.187122 
	C164.069138,21.259241 168.203781,18.632900 174.250702,19.697063 
	C178.550888,20.453825 180.464981,23.480013 179.012482,27.485714 
	C168.809998,55.622250 163.574173,84.940781 158.387192,114.265831 
	C155.459625,130.817093 153.675095,147.514404 152.446228,164.270569 
	C152.052429,169.640198 152.815781,174.883896 154.469055,180.021149 
	C155.851654,184.317383 154.806992,185.479340 150.301254,184.916733 
	C142.453232,183.936798 136.712509,178.135529 135.647400,169.577499 
	C133.713882,154.042007 135.666733,138.667603 138.250336,123.386261 
	C141.578766,103.699417 146.655060,84.388000 151.588120,63.871384 
	C147.277634,69.663177 144.580826,75.159752 141.794586,80.571869 
	C128.055374,107.259636 115.943718,134.662018 105.875526,162.954224 
	C104.283600,167.427643 101.078026,168.605133 96.820656,166.406403 
	C91.784653,163.805557 90.344910,159.112183 89.611298,154.011826 
	C87.867790,141.890289 88.895386,129.757584 89.282516,117.607483 
	C89.937996,97.035110 91.999886,76.507629 90.668938,55.599709 
	C87.496849,62.998264 84.266731,70.372566 81.162964,77.799683 
	C69.283722,106.225899 58.100643,134.950394 44.802082,162.767685 
	C41.993748,168.641998 38.651424,174.219208 34.513958,179.272491 
	C33.035339,181.078384 31.383450,182.766602 29.229429,183.788025 
	C27.236933,184.732803 25.399902,185.357635 23.288855,183.509064 
	C21.071617,181.567551 22.328072,179.902588 23.111620,178.177963 
	C31.447681,159.829529 39.894070,141.531021 48.180664,123.160385 
	C60.370960,96.135597 72.462418,69.066193 84.573257,42.005623 
	C85.524788,39.879532 86.439049,37.717522 87.128319,35.496990 
	C89.000282,29.466351 87.070885,27.217100 80.807777,28.526749 
	C70.556213,30.670406 66.022667,38.650208 62.608002,47.412426 
	C60.156059,53.704227 59.822441,60.379318 59.973011,67.089569 
	C60.068722,71.355133 58.718693,72.106590 54.871368,70.184654 
	C47.349636,66.427170 43.245323,55.132755 46.472172,45.131962 
	C51.246414,30.335419 62.612831,22.462254 77.145134,17.735725 
M42.317871,156.905502 
	C43.406193,154.656143 44.596821,152.449982 45.567509,150.150955 
	C60.269878,115.328979 74.938515,80.492760 89.639175,45.670059 
	C90.321579,44.053593 90.630058,42.128830 92.816292,41.081432 
	C93.036980,41.973984 93.297493,42.708927 93.394020,43.464813 
	C95.626579,60.947723 93.156166,78.373985 92.669037,95.819923 
	C92.171783,113.629074 90.826744,131.419540 91.430107,149.249069 
	C91.564705,153.226334 92.116867,157.264816 94.381683,160.718231 
	C95.381111,162.242142 96.787544,163.650894 98.857224,163.449539 
	C100.873062,163.253418 101.278015,161.495132 101.864967,159.903107 
	C107.108177,145.681702 112.706970,131.598572 118.876190,117.754486 
	C128.844620,95.384720 138.886642,73.041321 152.784775,52.720360 
	C153.758331,51.296906 154.343307,49.323158 156.506577,49.053665 
	C157.808960,50.287022 157.005417,51.543056 156.707764,52.784298 
	C149.185349,84.153854 140.017883,115.196518 137.725204,147.609451 
	C137.161163,155.583633 136.649734,163.595551 138.508972,171.473083 
	C140.082108,178.138382 144.182251,180.979477 149.969620,179.953644 
	C146.291534,153.108322 152.314987,127.087852 156.604614,100.951904 
	C160.938187,74.548042 166.803802,48.483513 175.400681,23.186626 
	C170.116333,20.637489 167.230026,21.603586 163.839645,26.645193 
	C153.423965,42.133675 143.791672,58.096439 134.585693,74.332481 
	C122.316025,95.971809 111.273438,118.137177 104.207779,142.099472 
	C103.973068,142.895447 103.595314,143.667740 102.262558,143.474243 
	C101.404961,142.680038 101.628731,141.495209 101.686462,140.374054 
	C102.088417,132.568420 102.310684,124.747597 102.951080,116.961304 
	C104.724876,95.394592 106.327034,73.819130 105.620758,52.163940 
	C105.415588,45.873470 104.681694,39.571640 102.943062,33.448193 
	C99.669189,21.917643 92.548996,17.410194 80.733154,19.704060 
	C69.652306,21.855234 60.662422,27.580378 53.661449,36.372810 
	C50.157433,40.773457 47.849693,45.816128 47.911438,51.517174 
	C47.976528,57.527233 48.993549,63.307880 55.428368,67.252777 
	C55.560078,65.229530 55.688675,63.956928 55.718552,62.682011 
	C55.924126,53.908604 57.690636,45.483147 61.714848,37.657684 
	C65.701103,29.906036 71.866196,25.021025 80.786407,24.124859 
	C88.173706,23.382700 91.541794,27.081696 89.907318,34.332813 
	C89.398827,36.588673 88.580475,38.811058 87.629730,40.925449 
	C70.692223,78.593590 53.713245,116.243095 36.741051,153.895645 
	C33.010574,162.171646 29.271837,170.443939 25.536905,178.717957 
	C25.986940,178.977524 26.436975,179.237106 26.887011,179.496689 
	C34.298691,173.936066 37.865669,165.554596 42.317871,156.905502 
z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
