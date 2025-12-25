function SimpleForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      <h1>Simple Form</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter name" />
        <input type="email" name="email" placeholder="Enter email" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default SimpleForm;
