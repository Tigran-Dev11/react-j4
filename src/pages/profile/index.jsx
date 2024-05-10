import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../../libs/redux/counter-slice/counter-slice";
import { counterSelector } from "../../libs/redux/counter-slice/counter-selector";
import { useEffect } from "react";
const Profile = () => {
  const { number, numbers } = useSelector(counterSelector);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  const addNumber = () => {
    if (!numbers?.length) {
      dispatch(counterActions.addNumberInArray(1));
    } else {
      const lastElement = numbers[numbers.length - 1];
      dispatch(counterActions.addNumberInArray(lastElement + 2));
    }
  };

  useEffect(() => {
    console.log(numbers);
  }, [numbers]);

  return (
    <div>
      <p>number - {number}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
       <br />
      <button onClick={addNumber}>add number in array</button>
    </div>
  );
};

export default Profile;
