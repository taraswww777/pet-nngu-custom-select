import ogDefaultImage from '../assets/og-default-image.png';

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-lvh">
      <h1 className="text-6xl text-red-600 p-10">pet-nngu-custom-select</h1>
      <img src={ogDefaultImage} className="ogDefaultImage" alt="ogDefaultImage" />
    </div>
  );
}
