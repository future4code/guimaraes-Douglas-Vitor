import { useRequestData } from './hooks/useRequestData';

export const HarryPotterCharacters = () => {

    const [hPCharacters, isLoading, error] = useRequestData('http://hp-api.herokuapp.com/api/characters',[]);

    return (
        <>
            <h3>Personagens do Harry Potter</h3>
            {error ? "Houve um erro" : isLoading ? "Carregando..." : hPCharacters.map((character,i) => (
                <div key={i}>
                    <p>{character.name}</p>
                    <p>{character.dateOfBirth}</p>
                    <p>Bruxo: {JSON.stringify(character.wizard)}</p>
                    <p>{character.wizard ? "É um(a) bruxo(a)" : "Não é bruxo(a)"}</p>
                </div>
            ))}
        </>
    )
}