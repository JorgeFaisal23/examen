import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

export default function Login() {
  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Inicio de sesión exitoso");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-yellow-200">
      <button
        onClick={loginWithGoogle}
        className="bg-yellow-500 text-white font-bold px-6 py-3 rounded shadow-lg"
      >
        Iniciar sesión con Google
      </button>
    </div>
  );
}