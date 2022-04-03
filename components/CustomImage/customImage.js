import Image from "next/image";

const CustomImage = ({ src, alt }) => {
  return (
    <Image src={src} alt={alt} width="100%" height="100%" layout="responsive" />
  );
};

export default CustomImage;
