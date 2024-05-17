import React from "react";
import "./Sidebar.css"; // Importing CSS file for styling
import logo from "./components/Group.png"; // Importing the logo image
import icon from "./components/notifications.png"; // Importing the icon image
import john from "./components/Ellipse 1.png";
import vector from "./components/Vector.png";
import msgicon from "./components/msgicon.png";
import reports from "./components/reports.png";
import imageSrc from "./components/wallet.png";
import sent from "./components/send.png";
import setting from "./components/setting.png";

const Sidebar = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "96px",
            height: "30.31px",
            position: "absolute",
            top: "33px",
            left: "64px",
            gap: "0px",
            opacity: "1", // Setting opacity to 1 for the logo to be visible
          }}
        />

        {/* Other sidebar content goes here */}
      </div>
      <div className="navbar">
        <img
          src={icon}
          alt="Icon"
          style={{
            width: "24px",
            height: "24px",
            position: "absolute",
            top: "22px",
            left: "985px",
            gap: "0px",
            opacity: "1", // Setting opacity to 1 for the icon to be visible
          }}
        />
        {/* Other navbar content goes here */}
        <div className="divider" />
        <div className="divider2" />
        <img
          src={john}
          alt=""
          className="custom-image"
          style={{
            width: "32px",
            height: "32px",
            position: "absolute",
            top: "18px",
            left: "1264px",
            gap: "0px",
            opacity: "1", // Setting opacity to 1 for the image to be visible
            backgroundColor: "#C4C4C4", // Setting background color
            borderRadius: "50%",
          }}
        />
        <div
          className="custom-text"
          style={{
            width: "67px",
            height: "32px",
            position: "absolute",
            top: "18.27px",
            left: "1310.59px",
            gap: "0px",
            opacity: "1", // Setting opacity to 1 for the text to be visible
            fontFamily: "Inter",
            fontSize: "12px",
            fontWeight: "500",
            lineHeight: "16px",
            letterSpacing: "0.2px",
            textAlign: "left",
            //styleName: 'Small/S2',
          }}
        >
          John Smith
          <br />
          <span style={{ fontWeight: "400" }}>(Admin)</span>
        </div>
      </div>

      <div
        className="custom-text"
        style={{
          width: "43px",
          height: "18px",
          position: "fixed",
          top: "132px",
          left: "70px",
          gap: "0px",
          opacity: "1", // Setting opacity to 1 for the text to be visible
          fontFamily: "Poppins",
          fontSize: "14px",
          fontWeight: "500",
          lineHeight: "18px",
          letterSpacing: "0.1px",
          textAlign: "left",
          color: "#FFFFFF",
          // Add more styles as needed
        }}
      >
        Home
      </div>
      {/* Layout */}
      <div
        style={{
          width: "372.52px",
          height: "58px",
          top: "92px",
          left: "247px",
          padding: "0px 267.52px 18px 0px",
          gap: "0px",
          opacity: "1", // Setting opacity to 0 for now
          position: "fixed",
          // Add more styles as needed
        }}
      >
        {/* Frame */}
        <div
          style={{
            width: "105px",
            height: "40px",
            gap: "16px",
            opacity: "1", // Setting opacity to 0 for now
            position: "fixed",
            // Add more styles as needed
          }}
        >
          {/* Text */}
          <div
            style={{
              width: "105px",
              height: "40px",
              gap: "0px",
              opacity: "1", // Setting opacity to 0 for now
              fontFamily: "Poppins",
              fontSize: "32px",
              fontWeight: "600",
              lineHeight: "40px",
              textAlign: "left",
              color: "#32324D", // Setting background color
              position: "fixed",
              // Add more styles as needed
            }}
          >
            Wallet
          </div>
          {/* Button */}
          <button
            style={{
              width: "70px",
              height: "32px",
              gap: "8px",
              left: "186.125px",
              borderRadius: "4px",
              border: "1px",
              padding: "8px, 16px, 8px, 16px",
              position: "absolute",
              opacity: "1", // Setting opacity to 0 for now
              fontFamily: "SF Pro Text",
              fontSize: "12px",
              fontWeight: "700",
              lineHeight: "16px",
              textAlign: "right",
              color: "#32324D", // Setting background color
              // Add more styles as needed
            }}
          >
            Edit
          </button>
        </div>
      </div>

      <img
        src={vector} // Corrected image source
        alt=""
        className="custom-image2"
        style={{
          width: "15px",
          height: "15px",
          position: "fixed",
          top: "132px",
          left: "27px",
          gap: "0px",
          opacity: "1", // Setting opacity to 1 for the image to be visible
        }}
      />

      {/* Rectangle */}
      <div
        className="rectangle"
        style={{
          width: "382px",
          height: "752px",
          position: "fixed",
          top: "150px",
          left: "247px",
          gap: "0px",
          borderRadius: "4px 0px 0px 0px",
          opacity: "1", // Setting opacity to 1 for the rectangle to be visible
          background: "#FFFFFF", // Setting background color
          boxShadow: "0px 0px 8px 0px #0000000F", // Adding box shadow
        }}
      />
      {/* Second Rectangle */}
      <div
        className="rectangle"
        style={{
          width: "764px",
          height: "721px",
          position: "fixed",
          top: "150px",
          left: "645px",
          gap: "0px",
          borderRadius: "4px 0px 0px 0px",
          opacity: "1", // Setting opacity to 1 for the rectangle to be visible
          background: "#FFFFFF", // Setting background color
          boxShadow: "0px 0px 8px 0px #0000000F", // Adding box shadow
        }}
      />

      {/* White rounded rectangle */}
      <div
        className="rounded-rectangle"
        style={{
          width: "204px",
          height: "46px",
          position: "fixed",
          top: "180px",
          left: "12px",
          gap: "0px",
          borderRadius: "8px 8px 8px 8px",
          opacity: "1", // Setting opacity to 1 for the rectangle to be visible
          background: "#F8F8F8", // Setting background color
          // Add more styles as needed
        }}
      />
      {/*msg icon expenses*/}
      <img
        src={msgicon} // Corrected image source
        alt=""
        className="custom-image3"
        style={{
          width: "24px",
          height: "24px",
          position: "fixed",
          top: "191px",
          left: "27px",
          gap: "0px",
          opacity: "1", // Setting opacity to 1 for the image to be visible
        }}
      />
      {/* Text element - Expenses */}
      <div
        className="custom-text"
        style={{
          width: "89px",
          height: "18px",
          position: "fixed",
          top: "193px",
          left: "70px",
          gap: "0px",
          opacity: "1", // Setting opacity to 1 for the text to be visible
          fontFamily: "Poppins",
          fontSize: "14px",
          fontWeight: "600",
          lineHeight: "18px",
          letterSpacing: "0.1px",
          textAlign: "left",
          color: "#3D5CFF", // Setting background color
          // Add more styles as needed
        }}
      >
        Expenses
      </div>
      <img
        src={reports}
        alt=""
        className="custom-image2"
        style={{
          width: "17px",
          height: "20px",
          position: "fixed",
          top: "255px",
          left: "29px",
          gap: "0px",
          opacity: "1", // Setting opacity to 1 for the image to be visible
          color: "#F1F1F1", // Setting background color
          // Add more styles as needed
        }}
      />
      {/* Text element - Reports */}
      <div
        style={{
          width: "55px",
          height: "18px",
          position: "fixed",
          top: "255px",
          left: "70px",
          gap: "0px",
          opacity: "1", // Setting opacity to 1 for the text to be visible
          fontFamily: "Poppins",
          fontSize: "14px",
          fontWeight: "500",
          lineHeight: "18px",
          letterSpacing: "0.1px",
          textAlign: "left",
          color: "#FFFFFF", // Setting background color
          // Add more styles as needed
        }}
      >
        Reports
      </div>
      {/* Text element - Wallet */}
      <div
        style={{
          width: "46px",
          height: "18px",
          position: "fixed",
          top: "319px",
          left: "69.99px",
          gap: "0px",
          opacity: "1", // Setting opacity to 1 for the text to be visible
          fontFamily: "Poppins",
          fontSize: "14px",
          fontWeight: "500",
          lineHeight: "18px",
          letterSpacing: "0.1px",
          textAlign: "left",
          color: "#FFFFFF", // Setting background color
          // Add more styles as needed
        }}
      >
        Wallet
      </div>
      {/* Image element */}
      <img
        src={imageSrc} // Replace 'imageSrc' with the correct source for your image
        alt=""
        style={{
          width: "24px",
          height: "15.57px",
          position: "fixed",
          top: "319px",
          left: "27px",
          gap: "0px",
          opacity: "1", // Set opacity to 0 for now
          color: "#F1F1F1",
          // Add more styles as needed
        }}
      />
      {/* Image element */}
      <img
        src={sent} // Replace 'imageSrc' with the correct source for your image
        alt=""
        style={{
          width: "17.19px",
          height: "14.73px",
          position: "fixed",
          top: "378.73px",
          left: "27.87px",
          gap: "0px",
          opacity: "1", // Set opacity to 0 for now
          color: "#F1F1F1", // Setting background color
          // Add more styles as needed
        }}
      />
      {/* Text element */}
      <div
        style={{
          width: "118px",
          height: "18px",
          position: "fixed",
          top: "378.73px",
          left: "69.99px",
          gap: "0px",
          opacity: "1", // Setting opacity to 0 for now
          fontFamily: "Poppins",
          fontSize: "14px",
          fontWeight: "500",
          lineHeight: "18px",
          letterSpacing: "0.1px",
          textAlign: "left",
          color: "#FFFFFF", // Setting background color
          // Add more styles as needed
        }}
      >
        Money Requests
      </div>
      {/* Text element */}
      <div
        style={{
          width: "59px",
          height: "20px",
          position: "fixed",
          top: "439px",
          left: "69.99px",
          gap: "0px",
          opacity: "1", // Setting opacity to 0 for now
          fontFamily: "Poppins",
          fontSize: "14px",
          fontWeight: "500",
          lineHeight: "19.5px",
          letterSpacing: "0.1px",
          textAlign: "left",
          color: "#FFFFFF", // Setting background color
          // Add more styles as needed
        }}
      >
        Settings
      </div>
      <img
        src={setting} // Replace 'imageSrc' with the correct source for your image
        alt=""
        style={{
          width: "20px",
          height: "20px",
          position: "fixed",
          top: "439px",
          left: "26px",
          gap: "0px",
          opacity: "1", // Set opacity to 0 for now
          color: "#F1F1F1", // Setting background color
          // Add more styles as needed
        }}
      />
    </div>
  );
};

export default Sidebar;
