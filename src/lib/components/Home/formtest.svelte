<!-- src/lib/FormComponent.svelte -->
<script>
  // export let form;
</script>

<div class="wrapper">
  <fieldset>
    <legend>Send Emails</legend>
    <form method="POST" class="container w-96">
      <div class="input">
        <label for="to">To:</label>
        <input name="to" type="email" id="to" />
      </div>
      <div class="input">
        <label for="subject">Subject:</label>
        <input name="subject" type="text" id="subject" />
      </div>
      <div class="input">
        <label for="body">Body:</label>
        <textarea name="body" id="body" rows="6"></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
   
  </fieldset>
</div>
