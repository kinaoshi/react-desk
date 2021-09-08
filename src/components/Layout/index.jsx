

export const Layout = (props) => {
	return <div className="flex flex-col items-center mx-auto px-2 min-h-screen max-w-2xl">{props.children}</div>;
};

// min-height: 100vh;
//   padding: 0 0.5rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   height: 100vh;
//   max-width: 600px;
//   margin: 0 auto;