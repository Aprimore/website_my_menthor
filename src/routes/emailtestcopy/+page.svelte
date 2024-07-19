<script>
	export let form;
</script>

<div class="wrapper">
	<fieldset>
		<legend>Send Emails</legend>
		<form method="POST" class="container w-96">
			<div class="input">
				<label for="to">To:</label>
				<input name="to" type="email" id="to" value="gabrielchristomarques@gmail.com" />
			</div>
			<div class="input">
				<label for="subject">Subject:</label>
				<input name="subject" type="text" id="subject" value="test email" />
			</div>
			<div class="input">
				<label for="body">Body:</label>
				<textarea name="body" id="body" rows="6">loremloremloremloremloremlorem</textarea>
			</div>
			<button type="submit">Send</button>
		</form>
		<p class="success">{form?.success || ''}</p>
		<p class="error">{form?.error || ''}</p>
	</fieldset>
</div>

<style>
	.wrapper {
		max-width: 800px;
		margin: 2em auto;
	}
	fieldset {
		padding: 2em;
		box-shadow:
			0 10px 15px -3px #0000001a,
			0 4px 6px -4px #0000001a;
	}
	legend {
		font-weight: bold;
		font-size: 2em;
		padding: 0 0.25em;
		color: #333;
	}
	.container {
		max-width: 400px;
	}
	.input {
		display: grid;
		margin-bottom: 1.5em;
	}
	label {
		font-weight: 600;
		margin-bottom: 0.25em;
		color: #555;
	}
	input {
		padding: 5px;
	}
	button {
		cursor: pointer;
		padding: 0.5em 1em;
		border-radius: 4px;
		border: 1px solid rgb(5, 151, 64);
		background-color: rgb(5, 151, 64);
		color: white;
	}
	.success {
		color: #0a5;
	}
	.error {
		color: #a00;
	}
</style>
