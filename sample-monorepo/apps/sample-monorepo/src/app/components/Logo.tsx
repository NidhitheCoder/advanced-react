interface LogoProps {
  size?: string;
}

const Logo = ({ size = '40px' }: LogoProps) => {
  return (
    <div
      style={{ fontSize: size }}
      className="flex flex-row font font-bold px-2 w-auto"
    >
      <p className="text-green-500">P</p>
      <p className="text-red-500">o</p>
      <p className="text-blue-500">S</p>
      <p className="text-orange-500">t</p>
      <p className="text-purple-500">i</p>
      <p className="text-rose-500">n</p>
      <p className="text-sky-500">Z</p>
      <p className="text-yellow-500">Z</p>
    </div>
  );
};

export default Logo;
