const Navbar = ({ name }) => {
	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container">
				<span className="navbar-brand mb-0 h1">Hello, {name}. Selamat Datang di Aplikasi Kalkulator</span>
			</div>
		</nav>
	);
};

export default Navbar;