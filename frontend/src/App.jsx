import AppRoutes from "./app.routes";
import { AuthProvider } from "./features/auth/context/auth.context";
import { InterviewProvider } from "./features/interviewReport/context/interview.context";

function App() {
  return (
    <AuthProvider>
      <InterviewProvider>
        <AppRoutes />
      </InterviewProvider>
    </AuthProvider>
  ) 
}

export default App;
