/**
 * X SVG Icon
 * @param props React.SVGAttributes<HTMLOrSVGElement>
 */
export const XIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = ({ width, height, ...props }) => (
  <span {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width || 24} height={height || 24}>
      <path
        fill="currentColor"
        d="M17.25 7.8L16.2 6.75l-4.2 4.2-4.2-4.2L6.75 7.8l4.2 4.2-4.2 4.2 1.05 1.05 4.2-4.2 4.2 4.2 1.05-1.05-4.2-4.2 4.2-4.2z"
      />
    </svg>
  </span>
);
