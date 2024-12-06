import "@styles/LazyImage.css";
import { PokemonData } from "@types";
import { useInView } from 'react-intersection-observer';

export const LazyImage = ({ pokemon }: { pokemon: PokemonData }) => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div className="lazy-image" ref={ref} style={{ minHeight: '110px' }}>
            {inView
                ? (<img
                    src={`${pokemon.imageUrl}`}
                    alt={`${pokemon.name} image`}
                />)
                : (
                    <div className="placeholder">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                            <path
                                d="M12 6.864v1.333m0 7.606v1.333M17.136 12h-1.333m-7.606 0H6.864m8.768 3.632l-.943-.943M9.311 9.311l-.943-.943m0 7.264l.943-.943m5.378-5.378l.943-.943"
                                className="path-svg" />
                        </svg>
                    </div>
                )
            }
        </div>
    );
}