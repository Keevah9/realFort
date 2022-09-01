import React, { useRef, useState, useEffect }  from 'react';

export const News=({sub,trust,join})=>{
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/newsletter', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();
    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);
      return;
    }
    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage('Success! Thank you for joining us.');
  };
useEffect(()=>{
    const timeout = setTimeout(()=>{
      setMessage('')
    },3000)
    return () => clearTimeout(timeout);
},[message])
    return (
      <>
        <h2 className="text-center mx-auto font-bold  pb-4 mt-8 text-white">
          {sub}
        </h2>
        <form
          onSubmit={subscribe}
          className="text-center h-full mt-12mx-auto "
        >
          <label htmlFor="email-input" className="pr-4 ">
            {"Email Address:"}
          </label>
          <input
            id="email-input"
            name="email"
            placeholder="you@awesome.com"
            ref={inputEl}
            required
            type="email"
          />

          <div>
            <p className="pt-4 ">{message ? message : `${trust}`}</p>
          </div>
          <button
            type="submit"
            className="my-4 mb-8  bg-black text-white px-4 rounded-lg py-2 block mx-auto capitalize hover:bg-yellow-400 hover:text-black "
          >
            {join}
          </button>
        </form>
      </>
    );
  }

function Newsletter() {
  return (
    <div id='news'>

      <News join="Join Us" trust="" />
    </div>
  );
}
export default Newsletter