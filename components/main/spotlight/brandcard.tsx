import React from 'react';

export default function BrandCard({ image, name, description, }) {

    return (
        <div className="brand-card bg-slate-100/[.80]">
            <img src={image} alt={name} className="brand-card__image" style={{ width: '50%', height: 'auto', display: 'block', margin: '0 auto' }} />
            <h2 className="brand-card__title pl-2"><strong>{name}</strong></h2>
            <p className="brand-card__description p-5">{description}</p>
            <div className="brand-card__links">
            </div>
        </div>
    );
}
