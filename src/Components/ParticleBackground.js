import Particles from "react-particles-js";
import particleConfig from "../config/particle-config";

const ParticleBackground = () => {
  return (
    <div>
      <Particles params={particleConfig}></Particles>
    </div>
  );
};

export default ParticleBackground;
