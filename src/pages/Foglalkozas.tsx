import { useNavigate, useParams } from '@solidjs/router';

const Foglalkozas = () => {
  const authorized = localStorage.getItem('session');
  const navigate = useNavigate();
  if (!authorized) {
    navigate("/", { replace: true });
  }
  
  const params = useParams();

  return (
    <>
      foglalkozaskód {params.id}
    </>
  )
}

export default Foglalkozas;