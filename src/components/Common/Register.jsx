import Parent from "../learning/Parent";

const Register = () => {

  const condition = true;
  const userName = "manish";
  return (
    <>
      <p>Register Component</p>
      {condition ? <>{userName}</> : <>Username is not available</>}
      <Parent></Parent>
    </>
  );
};

export default Register;
