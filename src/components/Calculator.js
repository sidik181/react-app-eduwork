/* eslint-disable default-case */
import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nilai1: null,
			nilai2: null,
			operator: null,
			hasil: null
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		const nilai1 = parseInt(this.refs.nilai1.value);
		const nilai2 = parseInt(this.refs.nilai2.value);
		const operator = this.refs.operator.value;

		let hasil;
		switch (operator) {
			case '+':
				hasil = nilai1 + nilai2;
				break;
			case '-':
				hasil = nilai1 - nilai2;
				break;
			case '*':
				hasil = nilai1 * nilai2;
				break;
			case '/':
				hasil = nilai1 / nilai2;
				break;
		}
		this.setState({ nilai1, nilai2, operator, hasil });

		this.refs.nilai1.value = null;
		this.refs.nilai2.value = null;
	}

	renderHasil() {
		const { hasil } = this.state;
		if (this.state.hasil) {
			return (
				<div>
					<br />
					<span className="alert alert-success">
						{hasil}
					</span>
				</div>
			)
		}
	}

	render() {
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<label className="form-label mt-5">Masukkan Angka:</label>
					<input type="number" ref="nilai1" className="form-control"></input>
					<input type="number" ref="nilai2" className="form-control"></input>
					<label>Operator:</label>
					<select ref="operator" className="form-select form-select-lg mb-3">
						<option value="+">+</option>
						<option value="-">-</option>
						<option value="*">*</option>
						<option value="/">/</option>
					</select><br />
					<button className="btn btn-primary">Hasil</button>
				</form >
				{this.renderHasil()}
			</div >
		);
	};
};

export default App;