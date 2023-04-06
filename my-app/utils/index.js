import axios from "axios"

export async function subgraphQuery(query) {
    try{
        const SUBGRAPH_URL = "https://api.thegraph.com/subgraphs/name/colonelxy/randomwinnergame"
        const response = await axios.post(SUBGRAPH_URL, {
            query,
        })

        if (response.data.errors) {
            console.error(response.data.errors)
            throw new Error(`Error making subgraph query ${response.data.errors}`)
        }

        return response.data.data

    } catch (e) {
        console.error(e)
        throw new Error(`Could not query the subgraph ${e.message}`)
    }
}