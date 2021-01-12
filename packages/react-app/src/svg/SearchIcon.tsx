export interface SearchIconProps extends React.SVGAttributes<HTMLOrSVGElement> {
  primary?: boolean;
}

/**
 * Search SVG Icon
 * @param props React.SVGAttributes<HTMLOrSVGElement>
 */
export const SearchIcon: React.FC<SearchIconProps> = ({ width, height, primary, ...props }) => (
  <span {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width || 24} height={height || 24}>
      <path
        fill="currentColor"
        d={
          primary
            ? "M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"
            : "M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"
        }
      />
    </svg>
  </span>
);
