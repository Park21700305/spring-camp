interface FontSize {
    header0: string;
    header1: string;
    subtitle1: string;
    body1: string;
    body2: string;
    button1: string;
  }
  
  interface FontWeight {
    header0: number;
    header1: number;
    subtitle1: number;
    subtitle1_reg: number;
    body1: number;
    body1_reg: number;
    body2: number;
    body2_reg: number;
    button1: number;
    button1_reg: number;
  }
  
  interface Colors {
    main: string;
    lightGrey: string;
    background: string;
    background2: string;
    black: string;
    white: string;
    blue: string;
    darkBlue: string;
    green: string;
    hover: string;
  }
  
  interface Theme {
    fontSizes: FontSize;
    fontWeights: FontWeight;
    letterSpacing: string;
    colors: Colors;
  }
  
  const fontSize: FontSize = {
    header0: "32px",
    header1: "24px",
    subtitle1: "18px",
    body1: "16px",
    body2: "14px",
    button1: "16px",
  };
  
  const fontWeight: FontWeight = {
    header0: 700,
    header1: 600,
    subtitle1: 600,
    subtitle1_reg: 400,
    body1: 400,
    body1_reg: 300,
    body2: 400,
    body2_reg: 300,
    button1: 600,
    button1_reg: 400,
  };
  
  const colors: Colors = {
    main: "#14181F",
    lightGrey: "#5F5F5F",
    background: "#333333",
    background2: "#1E1E1E",
    black: "#000000",
    white: "#FFFFFF",
    blue: "#0079E0",
    darkBlue: "#0069D9",
    green: "#55FFA6",
    hover: "#4D4D4D",
  };
  
  export const theme: Theme = {
    fontSizes: fontSize,
    fontWeights: fontWeight,
    letterSpacing: "0px",
    colors: colors,
  };
  