import { useState, useMemo, useCallback } from "react";
import ViewContener from "./viewContener";
import ViewText from "./viewText";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "kareem" });


  const name = useMemo(() => {
    // console.log("useMemo");
    return user;
  }, [user]);


  const countHandler = () => {
    setCount((prev) => prev + 1);
  };


  const ageHandler = useCallback(() => {
    setUser((prev) => {
      if (prev.age) {
        return prev;
      } else {
        return { ...prev, age: 30 };
      }
    });
  }, []);

  return (
    <div>
      <ViewContener num={count} increase={countHandler} />
      <ViewText text={name} addAge={ageHandler} />
    </div>
  );
}

export default App;
