interface BodyProps {
  children: React.ReactNode;
}

export const Body: React.FC<BodyProps> = ({ children }) => {
  return (
    <div className="overflow-x-hidden">
      <div className="border-t">
        <div className="bg-background">
          <div className="w-full px-4 py-6 lg:px-8">{children}</div>
        </div>
      </div>
    </div>
  );
};
