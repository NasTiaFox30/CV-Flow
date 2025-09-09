import { useState } from 'react';

export default function SkillBar({ name, level }) {
    return (
        <div className="grid grid-cols-2 items-center py-1">
            <p>{name}</p>
            <div className="bg-white h-2 rounded-full border-2 border-double border-black" style={{ width: `${level}%` }}></div>
        </div>
    );
}