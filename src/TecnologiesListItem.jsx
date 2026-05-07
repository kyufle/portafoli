export default function TecnologiesListItem({ title, icon: IconComponent }) {
    return (
        <div className="tech-item">
            {IconComponent ? <IconComponent size={24} /> : <span>Icono no encontrado</span>}
            <p>{title}</p>
        </div>
    );
}