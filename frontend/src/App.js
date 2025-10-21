import React from "react";

const App = () => {
  const navigationItems = [
    { label: "Home", active: true },
    { label: "All doctors", active: false },
    { label: "About", active: false },
    { label: "Contact", active: false },
  ];

  const doctorAvatars = [
    { src: "/ellipse-17.png", alt: "Doctor 1" },
    { src: "/ellipse-15.png", alt: "Doctor 2" },
    { src: "/ellipse-16.png", alt: "Doctor 3" },
  ];

  return (
    <div className="bg-[#3D9792] overflow-hidden w-full min-w-[1512px] min-h-[982px] relative">

      <div className="absolute top-[-5px] left-[-464px] w-[2074px] h-[1109px]">
        <img
          className="absolute top-[5px] left-[464px] w-[1512px] h-[982px] aspect-[1.87] bg-black"
          alt="Background"
        
        />

        <img
          className="absolute top-[5px] left-[464px] w-[1108px] h-[982px]"
          alt="Overlay Rectangle"
          src="/rectangle-2.png"
        />

        <div className="absolute top-[5px] left-[464px] w-[1546px] h-[1100px] mix-blend-overlay bg-[linear-gradient(90deg,rgba(55,151,146,1)_0%,rgba(24,24,24,1)_100%)]" />
      </div>

      <header className="absolute top-[55px] left-[71px] w-[1376px] h-[108px]">
        <nav
          className="absolute top-[3px] left-0 w-[1370px] h-[75px] bg-white rounded-[19px]"
          aria-label="Main navigation"
        >
          <img
            className="absolute top-[23px] left-[108px] w-[139px] h-[30px]"
            alt="Medislot"
            src="/medislot.png"
          />

          <img
            className="absolute top-0 left-8 w-[76px] h-[82px]"
            alt="Group"
            src="/group-1.png"
          />

          <div className="absolute top-[25px] left-[462px] font-semibold text-black text-2xl tracking-[0] leading-[normal] font-['Montserrat-SemiBold']">
            {navigationItems.map((item, index) => (
              <React.Fragment key={item.label}>
                {item.label}
                {index < navigationItems.length - 1 &&
                  "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
              </React.Fragment>
            ))}
          </div>

          <img
            className="absolute top-[55px] left-[450px] w-[100px] h-1"
            alt="Line"
            src="/line-1.png"
          />

          <button
            className="absolute top-4 left-[1043px] w-[308px] h-[50px] bg-[#217380] rounded-[19px]"
            aria-label="Create Account"
          >
            <span className="absolute top-[12px] left-[71px] font-semibold text-white text-2xl tracking-[0] leading-[normal] font-['Montserrat-SemiBold']">
              Create Account
            </span>
          </button>
        </nav>
      </header>

      <main>
        <h1 className="absolute top-[364px] left-[84px] w-[924px] font-extrabold text-white text-[76px] tracking-[0] leading-[normal] font-['Montserrat-ExtraBold']">
          Book Appointment With Trusted Doctors
        </h1>

        <div className="absolute top-[608px] left-[105px] flex items-center gap-0">
          {doctorAvatars.map((avatar, index) => (
            <img
              key={index}
              className="w-[74px] h-[74px] aspect-[1] object-cover"
              style={{ marginLeft: index > 0 ? "-5px" : "0" }}
              alt={avatar.alt}
              src={avatar.src}
            />
          ))}
        </div>

        <p className="absolute top-[625px] left-[342px] w-[531px] font-bold text-white text-base tracking-[0] leading-[normal] font-['Montserrat-Bold']">
          Simply browse through our extensive list of trusted doctors schedule
          your appointment hassle-free
        </p>

        <button
          className="absolute top-[740px] left-[105px] w-[532px] h-[75px] bg-white rounded-[19px] shadow-[12px_12px_4px_#00000040]"
          aria-label="Book Appointment"
        >
          <img
            className="absolute w-[3.51%] top-[calc(50%_+_272px)] left-[35.15%] h-[22px] aspect-[2.81]"
            alt="Vector"
            src="/vector.svg"
          />

          <span className="absolute top-[756px] left-48 bg-gradient-radial from-[#86d0dc] via-[#027081] to-[#027081] bg-clip-text text-transparent font-bold text-[34px] tracking-[0] leading-[normal] font-['Inter-Bold']">
            Book Appointment
          </span>
        </button>
      </main>
    </div>
  );
};

export default App;
