import "./styles/Loading.css";

interface LoadingProps {
    descripcion?: string
    color?: string
}
export const Loading = ({ descripcion = "Cargando", color = "#fff" }: LoadingProps) => {
    return (
        <div className='loading-container'>
            <span style={{ color: color }} className='loading-description'><b>{descripcion}</b></span>
            <div className="circular-loading">
                <div style={{ background: color }} className='loading-point'></div>
                <div style={{ background: color }} className='loading-point'></div>
            </div>
        </div>
    )
}