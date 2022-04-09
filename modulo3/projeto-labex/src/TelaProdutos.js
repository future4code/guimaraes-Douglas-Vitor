import { useProducts } from './hooks/useProducts';
import { useRequestData } from './hooks/useRequestData';

export const TelaProdutos = () => {

    // const produtos = useProducts();
    const produtos = useRequestData("https://produtos.com", []);
    // const user = useRequestData("https://user.com", {});

    return (
        <div>
            {/* <p>{user.nome}</p> */}
            {produtos.map((p,i) => <p key={i}>{p}</p>)}
        </div>

    )
}