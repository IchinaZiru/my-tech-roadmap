type CardProps = {
    name: string
    role: string
    activate?: boolean
    age : number
}

export default function UseCard({name, role, activate, age}: CardProps) {
    return (
        <div>
            <h3>名前 = {name}</h3>
            <p>役割 = {role}</p>
            <p>activate = {activate ? 'true' : 'false'}</p>
            <p>年齢 = {age}</p>
        </div>
    )
}
