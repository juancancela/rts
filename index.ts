import CommonsModuleFactory from './src/module/commons/utils/factories/CommonsModuleFactory';
import ExecutionContext from './src/module/commons/utils/constants/ExecutionContext';
import EvertokModuleFactory from './src/module/evertok/utils/factories/EvertokModuleFactory';
const commons = CommonsModuleFactory.create(ExecutionContext.REMOTE);
const evertok = EvertokModuleFactory.create(ExecutionContext.REMOTE);

export { commons, evertok };
