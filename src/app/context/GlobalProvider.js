import { AuthProvider } from "./AuthContext";

export function GlobalProvider({children}) {
    return (
        <>
        <AuthProvider>
            
        </AuthProvider>
        </>
    )
}