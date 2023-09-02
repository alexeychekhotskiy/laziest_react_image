import { useState } from "react";
import cls from "./LazyImage.module.css";

interface LazyImageProps {
    placeholder: string;
    img: string;
    alt?: string;
    effect?: string;
}

export const LazyImage: React.FC<LazyImageProps> = (props) => {
    const { placeholder, img, alt } = props;

    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div
            className={`${cls.placeholder} ${isLoaded ? cls.finished : ""}`}
            style={{ backgroundImage: `url(${placeholder})` }}
        >
            <img
                onLoad={() => setIsLoaded(true)}
                src={img}
                alt={alt}
                loading="lazy"
            />
        </div>
    );
};
