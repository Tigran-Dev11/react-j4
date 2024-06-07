import { useState, useEffect } from 'react';

function useCustomHook(initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    console.log('Current value:', value);
  }, [value]);

  return [value, setValue];
}

export default useCustomHook;