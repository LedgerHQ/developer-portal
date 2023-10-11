import { FC, HTMLAttributes } from 'react'
import { Link } from "react-scroll";
import { cn } from '../../lib/utils';

interface ButtonChildrenProps {
  label: string;
  svgIcon?: "arrow-right" | "arrow-external";
  jsxIcon?: JSX.Element;
  disabled?: boolean;
  color?: "white" | "gray" | "black";
}

function ButtonChildren(props: ButtonChildrenProps) {
  const {
    label,
    svgIcon = null,
    jsxIcon = null,
    disabled = false,
    color = "white",
  } = props;

  const textStyle = () => {
    if (color === "white") return "text-white";
    if (color === "black") return "text-black";
    if (color === "gray") return "text-gray-600";
    return "";
  };

  return (
    <>
      <span
        className={`normal-case bodyTextSemiBold ${textStyle()} ${
          disabled ? "" : "transition-left"
        }`}
      >
        {label}
      </span>
      {svgIcon && (
        <img
          src={`/icons/${svgIcon}-${color}.svg`}
          className={`${disabled ? "brightness-50" : "transition-right"}`}
          alt="button icon"
        />
      )}
      {jsxIcon && (
        <div className={`${disabled ? "brightness-50" : "transition-right"}`}>
          {jsxIcon}
        </div>
      )}
    </>
  );
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, ButtonChildrenProps {
  label: string;
  type?: "primary" | "secondary" | "withWhiteBorder" | "gray" | "white";
  href?: string;
  onClick?: () => void;
  link?: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  type = "primary",
  label, 
  href,
  onClick,
  link,
  className,
  svgIcon,
  jsxIcon,
  disabled = false,
}) => {
  const typeStyles = () => {
    if (type === "primary") return "!bg-primary text-white";
    if (type === "secondary") return "!bg-black text-white";
    if (type === "withWhiteBorder") return "border border-white";
    if (type === "gray") return "!bg-gray-400 text-black";
    if (type === "white") return "!bg-white text-black";
    return "gray";
  };

  const color = () => {
    if (disabled) return "black";
    if (type === "primary" || type === "secondary" || type === "withWhiteBorder") return "white";
    if (type === "gray" || type === "white") return "black";
    return "black";
  };

  const buttonClasses = cn(
    `group w-max px-6 py-4 rounded-full flex items-center gap-4 ${typeStyles()}`,
    className
  );

  if (href) {
    return (
      <a
        className={cn(`${buttonClasses} cursor-pointer`)}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <ButtonChildren
          label={label}
          svgIcon={svgIcon}
          jsxIcon={jsxIcon}
          color={color()}
        />
      </a>
    );
  }

  if (link) {
    return (
      <Link
        to={link}
        smooth
        className={cn(`${buttonClasses} cursor-pointer`)}
      >
        <ButtonChildren
          label={label}
          svgIcon={svgIcon}
          jsxIcon={jsxIcon}
          color={color()}
        />
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
    >
      <ButtonChildren
        label={label}
        svgIcon={svgIcon}
        jsxIcon={jsxIcon}
        disabled={disabled}
        color={color()}
      />
    </button>
  );
}

export default Button