import Bio from "./pages/Bio.svelte"
import NotFound from "./pages/NotFound.svelte"
import Projects from "./pages/Projects.svelte"
export const routes = {
    // Exact path
    '/': Bio,

    // Using named parameters, with last being optional
    '/projects': Projects,

    // Catch-all
    // This is optional, but if present it must be the last
    '*': NotFound,
}