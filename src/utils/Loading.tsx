import "./styles/Loading.css";

interface LoadingProps {
    descripcion?: string
}
export const Loading = ({ descripcion = "Cargando" }: LoadingProps) => {
    return (
        <div className='loading-container'>
            <span className='loading-description'><b>{descripcion}</b></span>
            <div className="circular-loading">
                <div className='loading-point'></div>
                <div className='loading-point'></div>
            </div>
        </div>
    )
}