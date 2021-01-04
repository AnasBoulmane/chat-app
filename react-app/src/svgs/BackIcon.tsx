/**
 * Back SVG Icon
 * @param props React.SVGAttributes<HTMLOrSVGElement>
 */
export const BackIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = ({ width, height, ...props }) => (
  <span {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width || 24} height={height || 24}>
      <path fill="currentColor" d="M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z" />
    </svg>
  </span>
);
