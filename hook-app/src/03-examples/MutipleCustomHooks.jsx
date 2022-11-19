import { useCounter } from "../hook/useCounter";
import { useFetch } from "../hook/useFetch"


export const MutipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);

    
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {author, quote} = !!data && data[0]; // !!data Si data tiene valor entonces && data[0] toma la data en posición 0. Con la doble negación (!!) negamos para pasar el undefined a true

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                (isLoading)
                    ? (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    ) : (
                        <blockquote className="blockquote text-end">
                            <p className="mb-1">{quote}</p>
                            <footer className="blockquote-footer"> {author} </footer>
                        </blockquote>
                    )

            }

            <button 
                className="btn btn-primary" 
                disabled={isLoading}
                onClick={() => increment()}>
                Next Quote
            </button>


        </>
    )
}
