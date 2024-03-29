import Navbar from '../Components/Navbar'; 
import PartOne from '../Components/PartOne';
import QSM from '../Components/QSM';
import NV from '../Components/NV';
import Reservez from '../Components/Reservez';

function Home() {
  return (
    <div className="home">
      <Navbar /> 
      <PartOne/>
      <QSM/>
      <NV/>
      <Reservez/>
    </div>
  );
}

export default Home;
