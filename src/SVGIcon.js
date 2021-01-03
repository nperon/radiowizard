import React from "react";

const getViewBox = name => {
  switch (name) {
    case "magnifying-glass":
      return "0 0 20 20";
    case "globe":
      return "0 0 20 20";
    default:
      return "0 0 32 32";
  }
};

const getPath = name => {
  switch (name) {
    case "magnifying-glass":
      return <path d="M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z"/>;
    case "globe":
      return <path d="M10 0.4c-5.295 0-9.601 4.307-9.601 9.6s4.306 9.6 9.601 9.6c5.293 0 9.6-4.307 9.6-9.6s-4.307-9.6-9.6-9.6zM18.188 10c0 1.873-0.636 3.6-1.696 4.98-0.3-0.234-0.619-0.867-0.319-1.523 0.303-0.66 0.382-2.188 0.312-2.783-0.066-0.594-0.375-2.025-1.214-2.039-0.838-0.012-1.413-0.289-1.911-1.283-1.033-2.068 1.939-2.465 0.906-3.609-0.289-0.322-1.783 1.322-2.002-0.869-0.014-0.157 0.135-0.392 0.336-0.636 3.244 1.090 5.588 4.157 5.588 7.762zM8.875 1.893c-0.196 0.382-0.713 0.537-1.027 0.824-0.684 0.619-0.978 0.533-1.346 1.127-0.371 0.594-1.567 1.449-1.567 1.879s0.604 0.936 0.906 0.838c0.302-0.1 1.099-0.094 1.567 0.070 0.469 0.166 3.914 0.332 2.816 3.244-0.348 0.926-1.873 0.77-2.279 2.303-0.061 0.225-0.272 1.186-0.285 1.5-0.025 0.486 0.344 2.318-0.125 2.318-0.471 0-1.738-1.639-1.738-1.936s-0.328-1.338-0.328-2.23c0-0.891-1.518-0.877-1.518-2.062 0-1.068 0.823-1.6 0.638-2.113-0.181-0.51-1.627-0.527-2.23-0.59 1.053-2.731 3.53-4.758 6.516-5.172zM7.424 17.77c0.492-0.26 0.542-0.596 0.988-0.613 0.51-0.023 0.925-0.199 1.5-0.326 0.51-0.111 1.423-0.629 2.226-0.695 0.678-0.055 2.015 0.035 2.375 0.689-1.295 0.861-2.848 1.363-4.514 1.363-0.899 0-1.765-0.149-2.575-0.418z"></path>;
    default:
      return <path />;
  }
};

const SVGIcon = ({
  name,
  style = {},
  viewBox = "",
  className = "",
  height = "100%"
}) => (
  <svg
    style={style}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox || getViewBox(name)}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name)}
  </svg>
);

export default SVGIcon;