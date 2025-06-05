"use strict";
exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./src/pages/index.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/index.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



// Sandbox Logo Component (inline to avoid import issues)
const SandboxLogo = ({
  size = 24,
  color = 'currentColor'
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  x: "3",
  y: "8",
  width: "18",
  height: "12",
  rx: "2",
  stroke: color,
  strokeWidth: "1.5",
  fill: "none"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: "7",
  cy: "14",
  r: "1",
  fill: color,
  opacity: "0.6"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: "12",
  cy: "16",
  r: "1",
  fill: color,
  opacity: "0.8"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: "17",
  cy: "13",
  r: "1",
  fill: color,
  opacity: "0.6"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: "9",
  cy: "17",
  r: "0.5",
  fill: color,
  opacity: "0.4"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: "15",
  cy: "15",
  r: "0.5",
  fill: color,
  opacity: "0.4"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M12 3L16 5V9C16 11.5 14 13.5 12 14C10 13.5 8 11.5 8 9V5L12 3Z",
  stroke: color,
  strokeWidth: "1.5",
  fill: "none",
  opacity: "0.7"
}));

// Theme colors based on your specifications
const themes = {
  light: {
    // Primary colors
    primary: '#7C3AED',
    primaryContainer: '#C3AEE6',
    onPrimary: '#FFFFFF',
    onPrimaryContainer: '#1B0C33',
    // Secondary colors
    secondary: '#3AED7C',
    secondaryContainer: '#AEE6C3',
    onSecondary: '#FFFFFF',
    onSecondaryContainer: '#0C331B',
    // Tertiary colors
    tertiary: '#ED7C3A',
    tertiaryContainer: '#E6C3AE',
    onTertiary: '#FFFFFF',
    onTertiaryContainer: '#331B0C',
    // Surface colors
    background: '#fcfbfc',
    onBackground: '#323133',
    surface: '#fcfbfc',
    onSurface: '#323133',
    surfaceVariant: '#dfdae6',
    onSurfaceVariant: '#5c5666',
    outline: '#8a8299',
    shadow: '#d6d5d6',
    // Neomorphic shadows
    lightShadow: '#ffffff',
    darkShadow: '#d6d5d6',
    primaryDarkShadow: '#6931c9',
    primaryLightShadow: '#8f43ff'
  },
  dark: {
    // Primary colors
    primary: '#97E6B4',
    primaryContainer: '#186635',
    onPrimary: '#124C28',
    onPrimaryContainer: '#AEE6C3',
    // Secondary colors
    secondary: '#B497E6',
    secondaryContainer: '#351866',
    onSecondary: '#28124C',
    onSecondaryContainer: '#C3AEE6',
    // Tertiary colors
    tertiary: '#E6B497',
    tertiaryContainer: '#663518',
    onTertiary: '#4C2812',
    onTertiaryContainer: '#E6C3AE',
    // Surface colors
    background: '#313332',
    onBackground: '#e3e6e4',
    surface: '#313332',
    onSurface: '#e3e6e4',
    surfaceVariant: '#56665c',
    onSurfaceVariant: '#d6e6dc',
    outline: '#a1b3a8',
    shadow: '#2a2b2b',
    // Neomorphic shadows
    lightShadow: '#383b3a',
    darkShadow: '#2a2b2b',
    primaryDarkShadow: '#80c499',
    primaryLightShadow: '#aeffcf'
  }
};
const IndexPage = () => {
  const {
    0: isDarkMode,
    1: setIsDarkMode
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: isGlitching,
    1: setIsGlitching
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: isCardHovered,
    1: setIsCardHovered
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // Load theme preference from localStorage on mount
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Default to system preference
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Save theme preference and apply CSS variables
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    const theme = isDarkMode ? themes.dark : themes.light;

    // Apply CSS custom properties to root
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--color-${key}`, value);
    });

    // Also apply background to body to prevent white strips
    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.onBackground;
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
  }, [isDarkMode]);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: containerStyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: keyframeStyles
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Unica+One&family=Open+Sans:wght@300;400;500;600&display=swap",
    rel: "stylesheet"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    style: themeToggleStyles,
    onClick: toggleTheme,
    "aria-label": `Switch to ${isDarkMode ? 'light' : 'dark'} mode`
  }, isDarkMode ? '☀️' : '🌙'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    style: mainStyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: contentWrapperStyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    style: welcomeSectionStyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    style: {
      ...welcomeTextStyles,
      ...(isGlitching ? hackersGlitchStyles : {})
    },
    onMouseEnter: () => setIsGlitching(true),
    onMouseLeave: () => setIsGlitching(false)
  }, "\\\\ ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: brandNameStyles
  }, "reflux"), " \\\\"), isGlitching && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: glitchOverlay1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: glitchOverlay2
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: glitchOverlay3
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    style: solutionsSectionStyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    style: sectionTitleStyles
  }, "Our Solutions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: solutionsGridStyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: isCardHovered ? solutionCardHoverStyles : solutionCardStyles,
    onMouseEnter: () => setIsCardHovered(true),
    onMouseLeave: () => setIsCardHovered(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1rem'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SandboxLogo, {
    size: 32,
    color: "var(--color-primary)"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    style: solutionTitleStyles
  }, "simple-sandbox"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    style: solutionDescriptionStyles
  }, "Interactive malware analysis sandbox for secure threat investigation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    style: solutionButtonStyles,
    onClick: () => window.open('/simple-sandbox', '_blank')
  }, ">")))))));
};

// CSS Keyframes - Updated with Hackers-style glitch
const keyframeStyles = `
  @keyframes hackersGlitch {
    0%, 100% { 
      transform: translate(0);
      filter: hue-rotate(0deg);
    }
    10% { 
      transform: translate(-2px, 0);
      filter: hue-rotate(90deg) saturate(3);
    }
    20% { 
      transform: translate(2px, 0);
      filter: hue-rotate(180deg) saturate(2);
    }
    30% { 
      transform: translate(-1px, 0);
      filter: hue-rotate(270deg) saturate(4);
    }
    40% { 
      transform: translate(1px, 0);
      filter: hue-rotate(360deg) saturate(1);
    }
    50% { 
      transform: translate(-3px, 0);
      filter: hue-rotate(45deg) saturate(5) brightness(2);
    }
    60% { 
      transform: translate(3px, 0);
      filter: hue-rotate(135deg) saturate(3) brightness(0.5);
    }
    70% { 
      transform: translate(-1px, 0);
      filter: hue-rotate(225deg) saturate(4) brightness(1.5);
    }
    80% { 
      transform: translate(1px, 0);
      filter: hue-rotate(315deg) saturate(2) brightness(0.8);
    }
    90% { 
      transform: translate(0);
      filter: hue-rotate(0deg) saturate(6) brightness(3);
    }
  }

  @keyframes scanlines {
    0% { top: -100%; }
    100% { top: 100%; }
  }

  @keyframes rgbShift {
    0% { transform: translate(0); }
    33% { transform: translate(-1px, 0); }
    66% { transform: translate(1px, 0); }
    100% { transform: translate(0); }
  }
  
  @keyframes gradientShift {
    0% { background-position: 0% 50% }
    50% { background-position: 100% 50% }
    100% { background-position: 0% 50% }
  }
`;

// Hackers-style glitch effect
const hackersGlitchStyles = {
  animation: 'hackersGlitch 0.6s ease-in-out',
  position: 'relative',
  textShadow: `
    2px 0 #ff00ff,
    -2px 0 #00ffff,
    0 2px #ffff00,
    0 -2px #ff0000
  `
};

// Glitch overlay elements for scanlines and RGB shift
const glitchOverlay1 = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(255, 0, 255, 0.1) 2px,
    rgba(255, 0, 255, 0.1) 4px
  )`,
  animation: 'scanlines 0.1s linear infinite',
  pointerEvents: 'none',
  zIndex: 1
};
const glitchOverlay2 = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `repeating-linear-gradient(
    90deg,
    transparent,
    transparent 1px,
    rgba(0, 255, 255, 0.05) 1px,
    rgba(0, 255, 255, 0.05) 2px
  )`,
  animation: 'rgbShift 0.1s linear infinite',
  pointerEvents: 'none',
  zIndex: 2
};
const glitchOverlay3 = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `linear-gradient(
    45deg,
    rgba(255, 255, 0, 0.1) 0%,
    transparent 25%,
    rgba(255, 0, 255, 0.1) 50%,
    transparent 75%,
    rgba(0, 255, 255, 0.1) 100%
  )`,
  animation: 'hackersGlitch 0.3s ease-in-out',
  pointerEvents: 'none',
  zIndex: 3
};

// Main Styles
const containerStyles = {
  height: '100vh',
  width: '100vw',
  backgroundColor: 'var(--color-background)',
  color: 'var(--color-onBackground)',
  fontFamily: '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  transition: 'background-color 0.3s ease, color 0.3s ease',
  margin: 0,
  padding: 0,
  position: 'relative',
  overflow: 'hidden',
  background: `linear-gradient(45deg, 
    var(--color-background) 0%, 
    var(--color-surface) 50%, 
    var(--color-background) 100%)`,
  backgroundSize: '400% 400%',
  animation: 'gradientShift 8s ease infinite'
};
const themeToggleStyles = {
  background: 'var(--color-surface)',
  border: 'none',
  color: 'var(--color-onSurface)',
  padding: '0.5rem',
  borderRadius: '50%',
  cursor: 'pointer',
  fontSize: '1.2rem',
  fontFamily: '"Open Sans", sans-serif',
  width: '3rem',
  height: '3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `
    4px 4px 8px var(--color-darkShadow),
    -4px -4px 8px var(--color-lightShadow)
  `,
  transition: 'all 0.2s ease',
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  zIndex: 1000
};
const mainStyles = {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  zIndex: 100
};
const contentWrapperStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4rem',
  width: '100%',
  maxWidth: '1200px',
  padding: '0 2rem'
};
const welcomeSectionStyles = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  textAlign: 'center'
};
const welcomeTextStyles = {
  fontSize: '3.5rem',
  fontWeight: '400',
  fontFamily: '"Unica One", cursive',
  margin: 0,
  color: 'var(--color-onBackground)',
  lineHeight: '1.2',
  letterSpacing: '0.02em'
};
const brandNameStyles = {
  color: 'var(--color-primary)',
  fontWeight: '400',
  fontFamily: '"Unica One", cursive'
};

// Solutions Section Styles
const solutionsSectionStyles = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem'
};
const sectionTitleStyles = {
  fontSize: '2.2rem',
  fontWeight: '400',
  fontFamily: '"Unica One", cursive',
  color: 'var(--color-onBackground)',
  textAlign: 'center',
  margin: 0,
  letterSpacing: '0.01em'
};
const solutionsGridStyles = {
  display: 'flex',
  justifyContent: 'center'
};
const solutionCardStyles = {
  background: 'var(--color-surface)',
  padding: '2rem',
  borderRadius: '16px',
  boxShadow: `
    inset 8px 8px 16px var(--color-darkShadow),
    inset -8px -8px 16px var(--color-lightShadow)
  `,
  textAlign: 'center',
  maxWidth: '350px',
  width: '100%',
  transition: 'all 0.3s ease',
  cursor: 'pointer'
};
const solutionCardHoverStyles = {
  background: 'var(--color-surface)',
  padding: '2rem',
  borderRadius: '16px',
  boxShadow: `
    8px 8px 16px var(--color-darkShadow),
    -8px -8px 16px var(--color-lightShadow)
  `,
  textAlign: 'center',
  maxWidth: '350px',
  width: '100%',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  transform: 'translateY(-2px)'
};
const solutionTitleStyles = {
  fontSize: '1.6rem',
  fontWeight: '400',
  fontFamily: '"Unica One", cursive',
  color: 'var(--color-primary)',
  marginTop: 0,
  marginBottom: '1rem',
  letterSpacing: '0.01em'
};
const solutionDescriptionStyles = {
  fontSize: '1rem',
  fontFamily: '"Open Sans", sans-serif',
  fontWeight: '400',
  color: 'var(--color-onSurface)',
  lineHeight: '1.6',
  marginBottom: '1.5rem'
};
const solutionButtonStyles = {
  background: 'var(--color-primary)',
  color: 'var(--color-onPrimary)',
  border: 'none',
  padding: '0.75rem 1.5rem',
  borderRadius: '12px',
  cursor: 'pointer',
  fontSize: '1rem',
  fontFamily: '"Open Sans", sans-serif',
  fontWeight: '500',
  transition: 'all 0.2s ease'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "\\\\ reflux \\\\");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map