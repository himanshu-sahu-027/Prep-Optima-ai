import AppRoutes from "./app.routes";
import { AuthProvider } from "./features/auth/context/auth.context";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  ) 
}

export default App;
