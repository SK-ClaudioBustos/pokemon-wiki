
export const Error = ({ error }: { error: Error }) => {
    return (
        <div className="container-center" style={{display: "flex", flexDirection: "column", background: "#808080", color: "#fff"}}>
            <h2>{`ERROR ${error.name}`}</h2>
            <p>{error.message}</p>
        </div>
    );
}