import "./progress-bar.css";

export const ProgressBar = ({
  className,
  progress = 1,
}: {
  className?: string;
  progress?: number;
}) => {
  return (
    <div className={className}>
      <div className="outer">
        <div className={`progress`} style={{ width: `${progress}%` }}>
          <div className="triangle"></div>
        </div>
      </div>
    </div>
  );
};
