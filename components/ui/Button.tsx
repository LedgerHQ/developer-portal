import { FC, HTMLAttributes } from 'react'
import { Link } from "react-scroll";
import { combination } from '../../lib/utils';

interface ButtonChildrenProps {
  label: string;
  svgIcon?: "arrow-right" | "arrow-external";
  jsxIcon?: JSX.Element;
  disabled?: boolean;
  textColor?: "white" | "gray" | "black";
  textClassName?: string;
}

function ButtonChildren(props: ButtonChildrenProps) {
  const {
    label,
    svgIcon = null,
    jsxIcon = null,
    disabled = false,
    textColor = "white",
    textClassName = "",
  } = props;

  const textStyle = () => {
    if (textColor === "white") return "text-white";
    if (textColor === "black") return "text-black";
    if (textColor === "gray") return "text-gray-600";
    return "";
  };

  return (
    <div className="w-max flex gap-4 items-center">
      <span
        className={combination(`normal-case text-p font-semibold ${textStyle()} ${
          disabled ? "" : "transition-left"
        }`, textClassName)}
      >
        {label}
      </span>
      {svgIcon && (
        <img
          src={`/icons/${svgIcon}-${textColor}.svg`}
          className={`${disabled ? "brightness-50" : "transition-right"}`}
          alt="button icon"
        />
      )}
      {jsxIcon && (
        <div className={`${disabled ? "brightness-50" : "transition-right"}`}>
          {jsxIcon}
        </div>
      )}
    </div>
  );
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, ButtonChildrenProps {
  label: string;
  type?: "primary" | "secondary" | "withWhiteBorder" | "gray" | "white";
  href?: string;
  onClick?: () => void;
  link?: string;
  disabled?: boolean;
  textClassName?: string;
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
  textClassName = "",
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

  const buttonClasses = combination(
    `group w-max px-6 py-4 rounded-full flex items-center gap-4 ${typeStyles()}`,
    className
  );

  if (href) {
    return (
      <a
        className={combination(`${buttonClasses} cursor-pointer`)}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <ButtonChildren
          label={label}
          svgIcon={svgIcon}
          jsxIcon={jsxIcon}
          textColor={color()}
          textClassName={textClassName}
        />
      </a>
    );
  }

  if (link) {
    return (
      <Link
        to={link}
        smooth
        className={combination(`${buttonClasses} cursor-pointer`)}
        offset={-80}
      >
        <ButtonChildren
          label={label}
          svgIcon={svgIcon}
          jsxIcon={jsxIcon}
          textColor={color()}
          textClassName={textClassName}
        />
      </Link>
    );
  }

  if (onClick) {
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
          textColor={color()}
          textClassName={textClassName}
        />
      </button>
    );
  }

  return (
    <div
      className={buttonClasses}
    >
      <ButtonChildren
        label={label}
        svgIcon={svgIcon}
        jsxIcon={jsxIcon}
        disabled={disabled}
        textColor={color()}
        textClassName={textClassName}
      />
    </div>
  );
}

export default Button