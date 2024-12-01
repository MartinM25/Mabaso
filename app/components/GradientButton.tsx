import React from 'react';
import Link from 'next/link';

interface GradientButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  loading?: boolean;
}

const GradientButton = ({
  text,
  type = "button",
  onClick,
  href,
  loading = false,
  disabled = false,
}: GradientButtonProps) => {

 const buttonClass = `bg-gradient-to-r from-blue to-teal text-white font-bold rounded-md px-6 py-3 shadow-md transition-all duration-300 ease-in-out ${
    loading || disabled ? "opacity-50 cursor-not-allowed" : "hover:brightness-75"
  }`;

  const content = loading ? (
    <div className="flex items-center justify-center">
      <span className="loader mr-2"></span> Sending...
    </div>
  ) : (
    text
  );

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
      className={buttonClass}
      disabled={loading || disabled}
    >
      {content}
    </button>
  );
}

export default GradientButton;
