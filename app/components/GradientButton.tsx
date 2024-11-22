import React from 'react';
import Link from 'next/link';

interface GradientButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  href?: string;
}

const GradientButton = ({
  text,
  type = "button",
  onClick,
  href,
}: GradientButtonProps) => {

  if (href) {
    return (
      <Link
        href={href}
        className="bg-gradient-to-r from-blue to-teal text-white font-bold rounded-md px-6 py-3 shadow-md hover:brightness-75 transition-all duration-300 ease-in-out"
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-gradient-to-r from-blue to-teal text-white font-bold rounded-md px-6 py-3 shadow-md hover:brightness-75 transition-all duration-300 ease-in-out"
    >
      {text}
    </button>
  )
}

export default GradientButton;












// export default GradientButton;

// import React from 'react';
// import Link from 'next/link';

// interface GradientButtonProps {
//   text: string; // Explicitly typed as string
//   type?: "button" | "submit" | "reset"; // Optional, defaults to "button"
//   onClick?: () => void; // Optional
//   loading?: boolean; // Optional
//   href?: string; // Optional
// }

// const GradientButton = ({
//   text,
//   type = "button",
//   onClick,
//   loading = false,
//   href,
// }: GradientButtonProps) => {
//   // Render as a Link if href is provided
//   if (href) {
//     return (
//       <Link href={href}>
//         <a
//           className={`inline-block bg-gradient-to-r from-blue to-teal text-white font-bold rounded-md px-6 py-3 shadow-md transition-all duration-300 ease-in-out ${
//             loading ? "opacity-50 cursor-not-allowed" : "hover:brightness-75"
//           }`}
//           aria-disabled={loading}
//         >
//           {loading ? (
//             <div className="flex items-center justify-center">
//               <span className="loader mr-2"></span> Loading...
//             </div>
//           ) : (
//             text
//           )}
//         </a>
//       </Link>
//     );
//   }

//   // Render as a button otherwise
//   return (
//     <button
//       className={`bg-gradient-to-r from-blue to-teal text-white font-bold rounded-md px-6 py-3 shadow-md transition-all duration-300 ease-in-out ${
//         loading ? "opacity-50 cursor-not-allowed" : "hover:brightness-75"
//       }`}
//       type={type}
//       onClick={onClick}
//       disabled={loading}
//     >
//       {loading ? (
//         <div className="flex items-center justify-center">
//           <span className="loader mr-2"></span> Loading...
//         </div>
//       ) : (
//         text
//       )}
//     </button>
//   );
// };

// export default GradientButton;
