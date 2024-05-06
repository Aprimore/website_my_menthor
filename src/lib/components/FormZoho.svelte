<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const script = document.createElement('script');
		script.src =
			'https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=afb68f5d6f6feff8eda30c313ce130aab5feeda7f2a2f9072512ee643b67a9ac75f33bff2bf601a0c1712258c5322263gidd51585345a7b92504021c17b1205f717f7e505556b0508675b1630ec402a9d3cgid9829421248f90bc1e90808fc9ce4183c85288aa7e60f58126a0db8ddf4bfb619gid2e1601d689bef4b2d668d12ba329debaa2da782b239f53b388313ae5dcb3d109&tw=dd1d369a4adc897d26f1ab45f565f52382e53be84b11c8393abfe8d7302bbd48';
		script.id = 'wf_anal';
		document.head.appendChild(script);
	});

	function handleSubmit(event) {
		event.preventDefault();
		const form = event.target;
		form.submit();
	}

	function validateEmail5699482000001517009() {
		var form = document.forms['WebToLeads5699482000001517009'];
		var emailFld = form.querySelectorAll('[ftype=email]');
		var i;
		for (i = 0; i < emailFld.length; i++) {
			var emailVal = emailFld[i].value;
			if (emailVal.replace(/^\s+|\s+$/g, '').length != 0) {
				var atpos = emailVal.indexOf('@');
				var dotpos = emailVal.lastIndexOf('.');
				if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
					alert('Please enter a valid email address. ');
					emailFld[i].focus();
					return false;
				}
			}
		}
		return true;
	}

	function checkMandatory5699482000001517009() {
		var mndFileds = new Array('Last Name', 'Email', 'Phone', 'LEADCF8');
		var fldLangVal = new Array(
			'Full\x20name',
			'Email',
			'Phone',
			'Area\x20of\x20\u200B\u200Binterest'
		);
		for (i = 0; i < mndFileds.length; i++) {
			var fieldObj = document.forms['WebToLeads5699482000001517009'][mndFileds[i]];
			if (fieldObj) {
				if (fieldObj.value.replace(/^\s+|\s+$/g, '').length == 0) {
					if (fieldObj.type == 'file') {
						alert('Please select a file to upload.');
						fieldObj.focus();
						return false;
					}
					alert(fldLangVal[i] + ' cannot be empty.');
					fieldObj.focus();
					return false;
				} else if (fieldObj.nodeName == 'SELECT') {
					if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
						alert(fldLangVal[i] + ' cannot be none.');
						fieldObj.focus();
						return false;
					}
				} else if (fieldObj.type == 'checkbox') {
					if (fieldObj.checked == false) {
						alert('Please accept  ' + fldLangVal[i]);
						fieldObj.focus();
						return false;
					}
				}
				try {
					if (fieldObj.name == 'Last Name') {
						name = fieldObj.value;
					}
				} catch (e) {}
			}
		}
		if (!validateEmail5699482000001517009()) {
			return false;
		}

		var urlparams = new URLSearchParams(window.location.search);
		if (urlparams.has('service') && urlparams.get('service') === 'smarturl') {
			var webform = document.getElementById('webform5699482000001517009');
			var service = urlparams.get('service');
			var smarturlfield = document.createElement('input');
			smarturlfield.setAttribute('type', 'hidden');
			smarturlfield.setAttribute('value', service);
			smarturlfield.setAttribute('name', 'service');
			webform.appendChild(smarturlfield);
		}
		document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
	}

	function tooltipShow5699482000001517009(el) {
		var tooltip = el.nextElementSibling;
		var tooltipDisplay = tooltip.style.display;
		if (tooltipDisplay == 'none') {
			var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
			for (i = 0; i < allTooltip.length; i++) {
				allTooltip[i].style.display = 'none';
			}
			tooltip.style.display = 'block';
		} else {
			tooltip.style.display = 'none';
		}
	}
</script>

<svelte:head>
	<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
	<!-- <META HTTP-EQUIV="content-type" CONTENT="text/html;charset=UTF-8" /> -->
</svelte:head>

<div
	id="crmWebToEntityForm"
	class="zcwf_lblLeft crmWebToEntityForm"
	style="background-color: white;color: black;max-width: 600px;"
>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<form
		on:submit={handleSubmit}
		id="webform5699482000001517009"
		action="https://crm.zoho.com/crm/WebToLeadForm"
		name="WebToLeads5699482000001517009"
		method="POST"
		onSubmit="javascript:document.charset='UTF-8'; return checkMandatory5699482000001517009()"
		accept-charset="UTF-8"
	>
		<input
			type="text"
			style="display:none;"
			name="xnQsjsdp"
			value="0afeca1a83d2be29cad9dc2d8a37e8f3d35be7978017274f40bbc07d1f169340"
		/>
		<input type="hidden" name="zc_gad" id="zc_gad" value="" />
		<input
			type="text"
			style="display:none;"
			name="xmIwtLD"
			value="5a87345b8b9b1b951b64a0c913eb4b4cb6cafd7e1f4b8519f9a87df2f28179339608b7c95a65f83b6f01fd5ba9569924"
		/>
		<input type="text" style="display:none;" name="actionType" value="TGVhZHM=" />
		<input type="text" style="display:none;" name="returnURL" value="null" />
		<!-- Do not remove this code. -->

		<div class="zcwf_row">
			<div class="zcwf_col_lab" style="font-size:12px; font-family: Arial;">
				<label for="LEADCF8">Area of ​​interest<span style="color:red;">*</span></label>
			</div>
			<div class="zcwf_col_fld">
				<select class="zcwf_col_fld_slt" id="LEADCF8" name="LEADCF8">
					<option value="-None-">-None-</option>
					<option selected value="Request&#x20;a&#x20;Demo">Request a Demo</option>
					<option value="Interested&#x20;in&#x20;Partnership">Interested in Partnership</option>
					<option value="Request&#x20;a&#x20;Callback">Request a Callback</option>
				</select>
				<div class="zcwf_col_help"></div>
			</div>
		</div>
		<div class="zcwf_row">
			<div class="zcwf_col_lab" style="font-size:12px; font-family: Arial;">
				<label for="Last_Name">Full name<span style="color:red;">*</span></label>
			</div>
			<div class="zcwf_col_fld">
				<input type="text" id="Last_Name" name="Last Name" maxlength="80" />
				<div class="zcwf_col_help">
					<span
						title="Type your full name"
						style="cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #c0c6cc; color: #c1c1c1; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%;"
						onclick="tooltipShow5699482000001517009(this)">?</span
					>
					<div class="zcwf_tooltip_over" style="display: none;">
						<span class="zcwf_tooltip_ctn">Type your full name</span>
					</div>
				</div>
			</div>
		</div>
		<div class="zcwf_row">
			<div class="zcwf_col_lab" style="font-size:12px; font-family: Arial;">
				<label for="Email">Email<span style="color:red;">*</span></label>
			</div>
			<div class="zcwf_col_fld">
				<input
					type="text"
					ftype="email"
					autocomplete="off"
					id="Email"
					name="Email"
					crmlabel=""
					maxlength="100"
				/>
				<div class="zcwf_col_help"></div>
			</div>
		</div>
		<div class="zcwf_row">
			<div class="zcwf_col_lab" style="font-size:12px; font-family: Arial;">
				<label for="Country">Country</label>
			</div>
			<div class="zcwf_col_fld">
				<input type="text" id="Country" name="Country" maxlength="100" />
				<div class="zcwf_col_help"></div>
			</div>
		</div>
		<div class="zcwf_row">
			<div class="zcwf_col_lab" style="font-size:12px; font-family: Arial;">
				<label for="Phone">Phone<span style="color:red;">*</span></label>
			</div>
			<div class="zcwf_col_fld">
				<input type="text" id="Phone" name="Phone" maxlength="30" />
				<div class="zcwf_col_help"></div>
			</div>
		</div>
		<div class="zcwf_row">
			<div class="zcwf_col_lab" style="font-size:12px; font-family: Arial;">
				<label for="Company">Company</label>
			</div>
			<div class="zcwf_col_fld">
				<input type="text" id="Company" name="Company" maxlength="200" />
				<div class="zcwf_col_help"></div>
			</div>
		</div>
		<div class="zcwf_row">
			<div class="zcwf_col_lab" style="font-size:12px; font-family: Arial;">
				<label for="LEADCF3">Position</label>
			</div>
			<div class="zcwf_col_fld">
				<input type="text" id="LEADCF3" name="LEADCF3" maxlength="255" />
				<div class="zcwf_col_help"></div>
			</div>
		</div>
		<div class="zcwf_row">
			<div class="zcwf_col_lab" style="font-size:12px; font-family: Arial;">
				<label for="LEADCF5">Message</label>
			</div>
			<div class="zcwf_col_fld">
				<textarea id="LEADCF5" name="LEADCF5"></textarea>
				<div class="zcwf_col_help"></div>
			</div>
		</div>
		<div class="zcwf_row">
			<div class="zcwf_col_lab"></div>
			<div class="zcwf_col_fld">
				<input
					type="submit"
					id="formsubmit"
					class="formsubmit zcwf_button"
					value="Send"
					title="Send"
				/><input type="reset" class="zcwf_button" name="reset" value="Clear" title="Clear" />
			</div>
		</div>
	</form>
</div>

<style>
	#crmWebToEntityForm.zcwf_lblLeft {
		width: 100%;
		padding: 25px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	#crmWebToEntityForm.zcwf_lblLeft * {
		box-sizing: border-box;
	}

	#crmWebToEntityForm {
		text-align: left;
	}

	#crmWebToEntityForm * {
		direction: ltr;
	}

	.zcwf_lblLeft .zcwf_title {
		word-wrap: break-word;
		padding: 0px 6px 10px;
		font-weight: bold;
	}

	.zcwf_lblLeft.cpT_primaryBtn:hover {
		background: linear-gradient(#02acff 0, #006be4 100%) no-repeat padding-box !important;
		box-shadow: 0 -2px 0 0 #0159b9 inset !important;
		border: 0 !important;
		color: #fff !important;
		outline: 0 !important;
	}

	.zcwf_lblLeft .zcwf_col_fld input[type='text'],
	input[type='password'],
	.zcwf_lblLeft .zcwf_col_fld textarea {
		width: 60%;
		border: 1px solid #c0c6cc !important;
		resize: vertical;
		border-radius: 2px;
		float: left;
	}

	.zcwf_lblLeft .zcwf_col_lab {
		width: 30%;
		word-break: break-word;
		padding: 0px 6px 0px;
		margin-right: 10px;
		margin-top: 5px;
		float: left;
		min-height: 1px;
	}

	.zcwf_lblLeft .zcwf_col_fld {
		float: left;
		width: 68%;
		padding: 0px 6px 0px;
		position: relative;
		margin-top: 5px;
	}

	.zcwf_lblLeft .zcwf_privacy {
		padding: 6px;
	}

	.zcwf_lblLeft .wfrm_fld_dpNn {
		display: none;
	}

	.dIB {
		display: inline-block;
	}

	.zcwf_lblLeft .zcwf_col_fld_slt {
		width: 60%;
		border: 1px solid #ccc;
		background: #fff;
		border-radius: 4px;
		font-size: 12px;
		float: left;
		resize: vertical;
		padding: 2px 5px;
	}

	.zcwf_lblLeft .zcwf_row:after,
	.zcwf_lblLeft .zcwf_col_fld:after {
		content: '';
		display: table;
		clear: both;
	}

	.zcwf_lblLeft .zcwf_col_help {
		float: left;
		margin-left: 7px;
		font-size: 12px;
		max-width: 35%;
		word-break: break-word;
	}

	.zcwf_lblLeft .zcwf_help_icon {
		cursor: pointer;
		width: 16px;
		height: 16px;
		display: inline-block;
		background: #fff;
		border: 1px solid #c0c6cc;
		color: #c1c1c1;
		text-align: center;
		font-size: 11px;
		line-height: 16px;
		font-weight: bold;
		border-radius: 50%;
	}

	.zcwf_lblLeft .zcwf_row {
		margin: 15px 0px;
	}

	.zcwf_lblLeft .formsubmit {
		margin-right: 5px;
		cursor: pointer;
		color: var(--baseColor);
		font-size: 12px;
	}

	.zcwf_lblLeft .zcwf_privacy_txt {
		width: 90%;
		color: rgb(0, 0, 0);
		font-size: 12px;
		font-family: Arial;
		display: inline-block;
		vertical-align: top;
		color: var(--baseColor);
		padding-top: 2px;
		margin-left: 6px;
	}

	.zcwf_lblLeft .zcwf_button {
		font-size: 12px;
		color: var(--baseColor);
		border: 1px solid #c0c6cc;
		padding: 3px 9px;
		border-radius: 4px;
		cursor: pointer;
		max-width: 120px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.zcwf_lblLeft .zcwf_tooltip_over {
		position: relative;
	}

	.zcwf_lblLeft .zcwf_tooltip_ctn {
		position: absolute;
		background: #dedede;
		padding: 3px 6px;
		top: 3px;
		border-radius: 4px;
		word-break: break-word;
		min-width: 100px;
		max-width: 150px;
		color: var(--baseColor);
		z-index: 100;
	}

	.zcwf_lblLeft .zcwf_ckbox {
		float: left;
	}

	.zcwf_lblLeft .zcwf_file {
		width: 55%;
		box-sizing: border-box;
		float: left;
	}

	.clearB:after {
		content: '';
		display: block;
		clear: both;
	}

	@media all and (max-width: 600px) {
		.zcwf_lblLeft .zcwf_col_lab,
		.zcwf_lblLeft .zcwf_col_fld {
			width: auto;
			float: none !important;
		}

		.zcwf_lblLeft .zcwf_col_help {
			width: 40%;
		}
	}
</style>
