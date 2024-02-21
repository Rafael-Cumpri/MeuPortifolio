import react from "react";

export default function CardPerson({ pessoa }) {
    return (
        <div>
            <div>
                <Image src={pessoa.img}/>
            </div>
        </div>
    )
}