const Slotmachine = (props) => {
  let a = props.x;
  let b = props.y;
  let c = props.z;
  //   if (a === b && b === c) {
  //     return "You get" + a + b + c + "You Won 👍";
  //   } else {
  //     return "You get" + a + b + c + "You lose 👎";
  //   }

  return a === b && b === c
    ? 'You get' + a + b + c + 'You Won 👍'
    : 'You get' + a + b + c + 'You lose 👎';
};

export default Slotmachine;
