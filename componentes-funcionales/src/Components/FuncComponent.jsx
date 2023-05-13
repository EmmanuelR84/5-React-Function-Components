//La diferencia entre ClassComponent y FuncComponent es que en FuncComponent utilizamos menos codigo y es mas legible

// Para trabajar con los Hooks(funciones) debemos importarlos
import { useState } from "react";

function FuncComponent() {
  const [value, setValue] = useState(0);

  return <div>Componente Funcional
    <p>
      <button onClick={() => setValue(value - 1)}>-</button>
      {value}
      <button onClick={ () => setValue(value + 1) }>+</button>
    </p>
  </div>
}

export default FuncComponent;