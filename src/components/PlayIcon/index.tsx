type PlayIconProps = {
  size?: "small" | "big";
};

const PlayIcon = ({ size = "small" }: PlayIconProps) => {
  if (size === "small") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22ZM10 7L16 12L10 17V7Z"
          fill="white"
        />
      </svg>
    );
  }

  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 73.3332C58.38 73.3332 73.3333 58.3798 73.3333 39.9998C73.3333 21.6198 58.38 6.6665 40 6.6665C21.62 6.6665 6.66666 21.6198 6.66666 39.9998C6.66666 58.3798 21.62 73.3332 40 73.3332ZM33.3333 23.3332L53.3333 39.9998L33.3333 56.6665V23.3332Z"
        fill="white"
      />
    </svg>
  );
};

export default PlayIcon;
