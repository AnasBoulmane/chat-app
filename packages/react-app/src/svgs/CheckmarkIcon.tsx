/**
 * Checkmark SVG Icon
 * @param props React.SVGAttributes<HTMLOrSVGElement>
 */
export const CheckmarkIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = ({ width, height, ...props }) => (
  <span {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width || 24} height={height || 24}>
      <path fill="currentColor" d="M9 17.2l-4-4-1.4 1.3L9 19.9 20.4 8.5 19 7.1 9 17.2z" />
    </svg>
  </span>
);
