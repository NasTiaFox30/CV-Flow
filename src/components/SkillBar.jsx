export default function SkillBar({ name, level }) {
    return (
        <div className="grid grid-cols-2 items-center py-1">
            <p>{name}</p>
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${level}%` }}></div>
        </div>
    );
}