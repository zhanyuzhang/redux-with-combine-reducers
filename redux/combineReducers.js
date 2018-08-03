/**
 * @param {reducers} Object 原生对象，而且要求键值必须是Function类型的，格式如下：
 * {
 *   ke1: fn1,
 *   key2: fn2,
 *   key3: fn3
 * }
 * 需要测试：能否合并，能否嵌套合并？？？
 */
export default function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);
  let finalReducerKeys = [];
  // 过滤掉value不是Function类型的键名，然后将结果放到fianlReducerKeys里面
  reducerKeys.forEach((key, i) => {
    if(typeof reducers[key] === 'function') {
      finalReducerKeys.push(key);
    }
  });

  // 返回一个新的、经过组合的reducer函数
  return function(state = {}, action) {
    let hasChanged = false;
    const nextState = {};
    // 遍历finalReducerKeys，并调用对应的reducer。
    finalReducerKeys.forEach((key, i) => {
      const stateForKey = state[key];
      const nextStateForKey = reducers[key](stateForKey, action);
      nextState[key] = nextStateForKey;
      // 如果前后状态不一样，则hasChanged设为true
      if(stateForKey !== nextStateForKey) {
        hasChanged = true;
      }
    });
    // 如果有变化，则返回新的state，否则返回旧的
    return hasChanged ? nextState : state;
  }
}