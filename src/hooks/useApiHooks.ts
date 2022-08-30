import React from "react";

const useApiHooks = ({ path }: any) => {
  const [test, setTest] = React.useState<any>(null);
  React.useEffect(() => {
    setTest("asdf");
  }, []);
  return [test, setTest];
};
export default useApiHooks;
