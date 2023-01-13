import creditServerListenUnit from "../unit/creditServerListenUnit.js";
import creditClientUnit from "../unit/creditClientUnit.js";

const creditController = {}

creditController.create = () => {
  return creditClientUnit.create()
}

export default creditController